# DevNotes Weekly Digest Feature: Author Guide

## Overview
This project includes a personalized weekly email digest feature. Users can opt in, select their interests, and receive a weekly email with curated content based on their preferences, fetched from NewsAPI.

---

## Setup Instructions

### 1. Environment Variables
Add the following to your `.env` file:

```
NEWSAPI_KEY=your_actual_api_key
MONGODB_URI=your_mongodb_connection_string
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
```

- Obtain a NewsAPI key from https://newsapi.org/.
- Ensure MongoDB and SMTP credentials are valid.

### 2. Install Dependencies

```
npm install
```

### 3. Start the Backend and Frontend

```
npm run dev
```

---

## How the Digest Works
- Users opt in and select their interests via the UI.
- Preferences are stored in MongoDB.
- A scheduled backend job (using node-cron) runs weekly.
- For each opted-in user, the backend fetches relevant articles from NewsAPI based on their preferences.
- The digest email is sent via SMTP, containing personalized content.

---

## Customizing Digest Content
- Edit `src/backend/email/digestUtils.js` to change how articles are fetched or how the email is composed.
- You can add more sources or logic to further personalize the digest.

---

## Troubleshooting
- Ensure all environment variables are set and valid.
- Restart the backend after changing `.env`.
- Check logs for errors related to NewsAPI, MongoDB, or SMTP.

---

## Contributing
- Document any changes to the digest logic in this README.
- Keep dependencies up to date.

---

For questions, contact the project maintainer.
