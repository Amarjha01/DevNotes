// components/backend/Express.jsx
import React, { useRef } from "react";
import Chat from "../Chat";
import { GoChevronDown } from "react-icons/go";
import CodeBlock from "../common/CodeBlock"; // ⬅️ import new component

const notes = [
  {
    title: "What is Express.js?",
    description:
      "Express.js is a fast, unopinionated, minimalist web framework for Node.js that simplifies building server-side applications.",
    category: "Introduction",
    difficulty: "Beginner",
    icon: "🚀",
    code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.listen(3000, () => console.log('Server running on port 3000'));`,
    tips: [
      "Helps structure APIs with less code",
      "Built on top of Node.js HTTP module",
      "Middleware system simplifies request handling",
    ],
  },
  {
    title: "Express Middleware",
    description:
      "Middleware functions are functions that have access to the request object (req), the response object (res), and the next function.",
    category: "Middleware",
    difficulty: "Beginner",
    icon: "🧱",
    code: `app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next();
});`,
    tips: [
      "Used for logging, body parsing, auth, etc.",
      "Order matters: top-down execution",
      "Call \`next()\` to continue to the next middleware",
    ],
  },
  {
    title: "Routing in Express",
    description:
      "Routing defines how your application responds to client requests to a particular endpoint, which is a URI and a specific HTTP method.",
    category: "Routing",
    difficulty: "Beginner",
    icon: "🗺️",
    code: `app.get('/', (req, res) => res.send('GET Request'));
app.post('/', (req, res) => res.send('POST Request'));
app.put('/', (req, res) => res.send('PUT Request'));
app.delete('/', (req, res) => res.send('DELETE Request'));`,
    tips: [
      "Separate routes using Router()",
      "Use RESTful naming conventions",
      "Can respond with HTML, JSON, files, etc.",
    ],
  },
  {
    title: "Error Handling in Express",
    description:
      "Define error-handling middleware with four arguments. Useful for catching and displaying server-side errors.",
    category: "Error Handling",
    difficulty: "Beginner",
    icon: "❌",
    code: `app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`,
    tips: [
      "Define at the bottom of your routes",
      "Helps prevent app crashes",
      "Use logging tools like Morgan for debugging",
    ],
  },
];

const Express = () => {
  const chatRef = useRef(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative space-y-8 pb-20">
      <h1 className="text-3xl font-bold text-white mb-4">
        🚀 Express.js Basics
      </h1>
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
              <div className="text-sm font-medium text-purple-400 mb-1">
                Example Code:
              </div>
              <CodeBlock code={note.code} language="javascript" /> {/* ⬅️ new */}
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

export default Express;
