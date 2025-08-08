// components/backend/Express.jsx
import React from 'react';

const notes = [
  {
    title: 'What is Caching?',
    description: 'Caching is the process of storing frequently accessed data in a temporary storage layer to improve speed and reduce load on the server or database.',
    category: 'Caching',
    difficulty: 'Beginner',
    icon: '⚡',
    code: `// In-memory cache example
const cache = {};
function getData(key) {
  if (cache[key]) return cache[key];
  const data = fetchDataFromDB(key);
  cache[key] = data;
  return data;
}`,
    tips: [
      'Reduces latency and database load',
      'Can be in-memory, browser, or CDN-based',
      'Common in API responses, DB queries, etc.'
    ]
  },
  {
    title: 'Types of Caching',
    description: 'There are several caching types: browser cache, server-side cache (in-memory), CDN cache, and database query cache.',
    category: 'Caching',
    difficulty: 'Beginner',
    icon: '⚡',
    code: `// Types explained in comments
// 1. Browser Cache (static assets)
// 2. Server Cache (e.g., Redis, Memory)
// 3. CDN Cache (e.g., Cloudflare)
// 4. DB Cache (e.g., MySQL query cache)`,
    tips: [
      'Browser caches static files (HTML, CSS)',
      'Redis is widely used for server-side cache',
      'CDNs cache assets close to users'
    ]
  },
  {
    title: 'Cache Invalidation',
    description: 'Cache invalidation ensures outdated or stale data is removed or updated in the cache.',
    category: 'Caching',
    difficulty: 'Beginner',
    icon: '⚡',
    code: `function updateCache(key, newData) {
  cache[key] = newData; // update
}
function deleteCache(key) {
  delete cache[key]; // invalidate
}`,
    tips: [
      'Essential to maintain consistency',
      'Use TTLs to auto-expire stale data',
      'Invalidate after updates or deletes'
    ]
  },
  {
    title: 'LRU Cache (Least Recently Used)',
    description: 'An LRU cache evicts the least recently accessed item when the cache is full.',
    category: 'Caching',
    difficulty: 'Beginner',
    icon: '⚡',
    code: `class LRUCache {
  constructor(limit = 3) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  set(key, val) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.limit) this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, val);
  }
}`,
    tips: [
      'Eviction policy improves cache effectiveness',
      'JS `Map` preserves insertion order',
      'Good for limited-memory environments'
    ]
  },
  {
    title: 'CDN Caching',
    description: 'CDNs cache static assets like images, CSS, JS close to the user to reduce latency and improve performance.',
    category: 'Caching',
    difficulty: 'Beginner',
    icon: '⚡',
    code: `// Example: Set cache headers
res.setHeader("Cache-Control", "public, max-age=86400"); // 1 day

// Use services like Cloudflare or Akamai`,
    tips: [
      'Reduces latency by edge caching',
      'Avoids repeated server hits for static content',
      'Control cache via headers (Cache-Control, ETag)'
    ]
  },
  {
    title: 'Question: How do you cache API responses?',
    description: 'Use in-memory storage like Redis or an object to store responses and serve from there for repeated requests.',
    category: 'Caching',
    difficulty: 'Beginner',
    icon: '⚡',
    code: `const cache = {};

app.get('/data', async (req, res) => {
  const key = 'some_key';
  if (cache[key]) return res.send(cache[key]);

  const data = await fetchExpensiveData();
  cache[key] = data;
  res.send(data);
});`,
    tips: [
      'Cache expensive computations or DB reads',
      'Set expiration if data changes often',
      'Avoid caching sensitive or user-specific data'
    ]
  }
];



const Caching = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🚀Caching</h1>
      {notes.map((note, index) => (
        <div key={index} className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white p-6 rounded-2xl shadow-md border border-gray-700/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{note.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{note.category} · {note.difficulty}</p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{note.description}</p>

          {note.code && (
            <div className="mb-4">
              <div className="text-sm font-medium text-purple-400 mb-1">Example Code:</div>
              <pre className="bg-[#1e1e2f] text-sm text-emerald-500 rounded-md p-4 overflow-x-auto whitespace-pre-wrap">
                <code>{note.code}</code>
              </pre>
            </div>
          )}

          {note.tips?.length > 0 && (
            <div className="mt-2">
              <div className="text-sm font-medium text-pink-400 mb-1">Tips:</div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                {note.tips.map((tip, i) => (
                  <li key={i}>👉 {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Caching;
