
// digestUtils.js
// Utilities for compiling digest content and fetching user preferences



import { getAllOptedInUsers } from './digestDB.js';
import fetch from 'node-fetch';

export async function getOptedInUsers() {
  return await getAllOptedInUsers();
}


// Example: Fetch relevant articles from NewsAPI based on user interests
export async function getDigestDataForUser(user) {
  // Map DevNotes interests to NewsAPI topics or keywords
  const interestToKeyword = {
    'Frontend': 'frontend web development',
    'DSA': 'data structures algorithms',
    'Backend': 'backend nodejs',
    'Machine Learning': 'machine learning',
    'DevOps': 'devops',
    'Miscellaneous': 'web development',
  };
  const keywords = (user.interests || []).map(i => interestToKeyword[i]).filter(Boolean);
  let articles = [];
  if (keywords.length > 0) {
    // Use NewsAPI (https://newsapi.org/) as an example
    // You need to set NEWSAPI_KEY in your .env
    const apiKey = process.env.NEWSAPI_KEY;
    for (const keyword of keywords) {
      const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keyword)}&language=en&pageSize=3&apiKey=${apiKey}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.articles) {
          articles = articles.concat(data.articles.map(a => ({ title: a.title, url: a.url })));
        }
      } catch {}
    }
  }
  // Remove duplicates
  articles = articles.filter((a, i, arr) => arr.findIndex(b => b.url === a.url) === i);

  const html = `
    <h2>Hello from DevNotes!</h2>
    <p>Here's your weekly digest based on your interests: <b>${(user.interests || []).join(', ')}</b></p>
    <h3>Relevant Articles</h3>
    <ul>${articles.length > 0 ? articles.map(a => `<li><a href="${a.url}">${a.title}</a></li>`).join('') : '<li>No new articles found this week.</li>'}</ul>
    <p>Visit <a href="https://devnotes.com">DevNotes</a> to keep learning!</p>
  `;
  return { html };
}
