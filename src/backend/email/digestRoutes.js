// Add to your Express app (e.g., in app.js or routes)
// Route for users to update their digest preferences

import express from 'express';
import { saveUserDigestPreference, getUserDigestPreference } from './digestDB.js';
import authMiddleware from './authMiddleware.js';
import { debugSendAllDigests } from './digestScheduler.js';
const router = express.Router();





// Save user digest preferences


// Protect this route with authentication in production
router.post('/user/digest-preferences', authMiddleware, async (req, res) => {
  const { email, optIn, interests } = req.body;
  try {
    await saveUserDigestPreference(email, optIn, interests);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Get user digest preferences


// Protect this route with authentication in production
router.get('/user/digest-preferences', authMiddleware, async (req, res) => {
  const { email } = req.query;
  try {
    const prefs = await getUserDigestPreference(email);
    res.json(prefs);
  } catch (e) {
    res.status(500).json({ optIn: false, interests: [], error: e.message });
  }
});

// Admin/manual trigger endpoint for digest (for testing)
router.post('/admin/send-digests', async (req, res) => {
  try {
    await debugSendAllDigests();
    res.json({ success: true, message: 'Digests sent.' });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

export default router;
