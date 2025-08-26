import React from 'react';
import Chat from '../Chat';
import { useRef } from 'react';
import { GoChevronDown } from "react-icons/go";
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: 'What is JWT Authentication?',
    description: 'JWT (JSON Web Token) is a secure way to transmit information between parties as a JSON object. It is widely used for authentication in web applications.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🔐',
    code: `// JWT structure:
HEADER.PAYLOAD.SIGNATURE

// Example:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJ1c2VySWQiOjEsIm5hbWUiOiJNaWxhbiJ9
.KgZ2fUuvtQ_1U2PZ3kF3uMwE2dqQKXh1JIRU9mw2d9A`,
    tips: [
      'Stateless – server doesn’t store session',
      'Signed using secret or private key',
      'Compact and URL-safe format',
    ]
  },
  {
    title: 'JWT Authentication Flow',
    description: 'Understanding how JWT works step-by-step helps in securing routes and managing sessions.',
    category: 'Flow',
    difficulty: 'Intermediate',
    icon: '📥',
    code: `1️⃣ Client logs in with credentials  
2️⃣ Server verifies and issues token  
3️⃣ Client stores JWT (localStorage or cookie)  
4️⃣ Client sends JWT on protected routes  
5️⃣ Server verifies and allows access`,
    tips: [
      'Add JWT to Authorization header',
      'Use Bearer schema: Authorization: Bearer <token>',
      'Don’t store sensitive data in payload',
    ]
  },
  {
    title: 'Generate & Verify JWT in Node.js',
    description: 'Use the `jsonwebtoken` library to create and validate JWTs in an Express backend.',
    category: 'Backend Code',
    difficulty: 'Intermediate',
    icon: '💻',
    code: `// Install: npm install jsonwebtoken

const jwt = require('jsonwebtoken');

// Generate Token
const token = jwt.sign({ userId: 1 }, 'yourSecret', { expiresIn: '1h' });

// Verify Middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  try {
    const decoded = jwt.verify(token, 'yourSecret');
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
};`,
    tips: [
      'Use strong, unpredictable secrets',
      'Always verify token before granting access',
      'Set token expiration for security',
    ]
  },
  {
    title: 'When to Use JWT',
    description: 'JWTs are ideal for APIs and stateless authentication, but they also have limitations.',
    category: 'Best Practices',
    difficulty: 'Intermediate',
    icon: '🧠',
    code: `// Good for:
✅ Stateless API authentication  
✅ Single sign-on (SSO)  
✅ Mobile app token-based login

// Avoid if:
❌ You need to revoke tokens often  
❌ You store large user data in the token`,
    tips: [
      'Perfect for REST APIs with token auth',
      'Combine with refresh tokens for session longevity',
      'Keep tokens small for efficiency',
    ]
  }
];

const JwtAuth = () => {
  // Ref for chat container
    const chatRef = useRef(null);
  
    // Scroll to chat section function
    const scrollToChat = () => {
      chatRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🔐 JWT Authentication</h1>
      {notes.map((note, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white p-6 rounded-2xl shadow-md border border-gray-700/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{note.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-400 mt-1">
                  {note.category} · {note.difficulty}
                </p>
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
       {/* Chat container with ref */}
      <div ref={chatRef}>
        <Chat />
      </div>
       <button
        onClick={scrollToChat}
        aria-label="Go to AI Assistant"
        title="Go to AI Assistant"
        className="fixed top-6 right-6 z-50 text-2xl font-extrabold bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
       <GoChevronDown />
      </button>
    </div>
  );
};

export default JwtAuth;
