// digestScheduler.js
// Schedules and compiles weekly digests for users


import cron from 'node-cron';
import { sendDigestEmail } from './emailService.js';
import { getDigestDataForUser, getOptedInUsers } from './digestUtils.js';

// Runs every Sunday at 10:00 AM

cron.schedule('0 10 * * 0', async () => {
  const users = await getOptedInUsers();
  for (const user of users) {
    const digestData = await getDigestDataForUser(user);
    await sendDigestEmail({
      to: user.email,
      subject: 'Your Weekly DevNotes Digest',
      html: digestData.html,
    });
  }
  console.log('Weekly digests sent.');
});


// For manual triggering in development
export async function debugSendAllDigests() {
  const users = await getOptedInUsers();
  for (const user of users) {
    const digestData = await getDigestDataForUser(user);
    await sendDigestEmail({
      to: user.email,
      subject: 'Your Weekly DevNotes Digest',
      html: digestData.html,
    });
  }
  console.log('Manual: Weekly digests sent.');
}
