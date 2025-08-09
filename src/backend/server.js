// server.js
// Entry point for backend API (Express server)


import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import digestRoutes from './email/digestRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// API route for digest preferences
app.use('/api', digestRoutes);

// Health check
app.get('/', (req, res) => res.send('DevNotes backend running'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Start the digest scheduler
import('./email/digestScheduler.js');