// components/backend/Express.jsx
import React from 'react';
import CodeBlock from '../../components/common/CodeBlock';

const notes = [
  {
    title: 'What is an API?',
    description: 'An API (Application Programming Interface) allows two systems to communicate with each other using a set of defined rules.',
    category: 'API Design',
    difficulty: 'Beginner',
    icon: '🔗',
    code: `// Example of a simple REST API endpoint
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from API' });
});`,
    tips: [
      'APIs connect frontend and backend',
      'Use HTTP methods like GET, POST, PUT, DELETE',
      'REST and GraphQL are common styles'
    ]
  },
  {
    title: 'RESTful API Design Principles',
    description: 'REST APIs follow principles like statelessness, resource-based URLs, and proper use of HTTP methods.',
    category: 'API Design',
    difficulty: 'Beginner',
    icon: '🔗',
    code: `// RESTful routes example
GET    /users         // Get all users
GET    /users/:id     // Get a single user
POST   /users         // Create a user
PUT    /users/:id     // Update a user
DELETE /users/:id     // Delete a user`,
    tips: [
      'Use nouns, not verbs, in URLs',
      'Follow proper HTTP methods',
      'Use plural naming for resources (e.g., /users)'
    ]
  },
  {
    title: 'API Versioning',
    description: 'Versioning your API helps avoid breaking existing clients when updates are made.',
    category: 'API Design',
    difficulty: 'Beginner',
    icon: '🔗',
    code: `// Version in URL
GET /api/v1/users

// Or use custom headers
GET /users
Headers: Accept: application/vnd.myapp.v1+json`,
    tips: [
      'Include version in URL or headers',
      'Helpful when refactoring or changing contract',
      'Keeps old clients working'
    ]
  },
  {
    title: 'Handling API Errors',
    description: 'APIs should return clear and structured error messages with appropriate status codes.',
    category: 'API Design',
    difficulty: 'Beginner',
    icon: '🔗',
    code: `app.get('/user/:id', (req, res) => {
  const user = getUser(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});`,
    tips: [
      'Use status codes like 400, 404, 500',
      'Always return meaningful error messages',
    ]
  },
  {
    title: 'Idempotency in API Design',
    description: 'Idempotent APIs return the same result no matter how many times the request is repeated.',
    category: 'API Design',
    difficulty: 'Beginner',
    icon: '🔗',
    code: `// Example of idempotent operation
app.put('/user/:id', (req, res) => {
  // Update user details
  res.status(200).send('Updated');
});`,
    tips: [
      'GET, PUT, DELETE should be idempotent',
      'POST is typically not idempotent',
      'Prevents side effects on repeated calls'
    ]
  },
  {
    title: 'Question: How do you secure an API?',
    description: 'Use authentication tokens like JWT, enforce HTTPS, and implement rate limiting and input validation.',
    category: 'API Design',
    difficulty: 'Beginner',
    icon: '🔗',
    code: `// Example: Using JWT auth middleware
app.use((req, res, next) => {
  const token = req.headers.authorization;
  if (!token || !isValid(token)) return res.status(401).send('Unauthorized');
  next();
});`,
    tips: [
      'Use HTTPS for secure transmission',
      'Authenticate users with JWT or OAuth',
      'Apply rate limiting and input sanitization'
    ]
  }
];




const ApiDesign = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🚀 API DESIGN</h1>
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
              <CodeBlock code={note.code} language="javascript" />
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

export default ApiDesign;
