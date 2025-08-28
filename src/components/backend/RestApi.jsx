import React from "react";
import Chat from "../Chat";
import { useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: "What is REST API?",
    description:
      "A REST API (Representational State Transfer) is an architectural style for building web services. It uses HTTP methods like GET, POST, PUT, and DELETE to manage resources in a stateless way.",
    category: "Introduction",
    difficulty: "Beginner",
    icon: "🌐",
    code: `GET /api/users          // Fetch all users
POST /api/users         // Create a new user
PUT /api/users/:id      // Update a user
DELETE /api/users/:id   // Remove a user`,
    tips: [
      "✅ REST APIs use HTTP methods to perform CRUD operations.",
      "✅ Always respond with meaningful status codes like 200, 201, 400, 404.",
      "✅ Keep endpoints resource-based (nouns), not action-based (verbs).",
    ],
  },
  {
    title: "RESTful Response Format",
    description:
      "REST APIs typically return JSON responses. A good format includes whether the request was successful, the data returned, and a helpful message.",
    category: "Data Formatting",
    difficulty: "Beginner",
    icon: "📦",
    code: `{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe"
  },
  "message": "User fetched successfully"
}`,
    tips: [
      "✅ Structure your responses with predictable keys like data, success, and message.",
      "✅ Avoid exposing sensitive information in the API response.",
    ],
  },
  {
    title: "HTTP Methods Explained",
    description:
      "Each HTTP method has a specific use case when working with REST APIs. They map directly to CRUD operations: Create, Read, Update, and Delete.",
    category: "HTTP Methods",
    difficulty: "Beginner",
    icon: "🔁",
    code: `// GET: Read data
app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Milan" }]);
});

// POST: Create new data
app.post("/users", (req, res) => {
  res.status(201).json({ message: "User created" });
});

// PUT: Update existing data
app.put("/users/:id", (req, res) => {
  res.json({ message: "User updated" });
});

// DELETE: Remove data
app.delete("/users/:id", (req, res) => {
  res.json({ message: "User deleted" });
});`,
    tips: [
      "🔹 GET – Retrieve data from the server without making changes.",
      "🔹 POST – Send new data to the server to create a new resource.",
      "🔹 PUT – Replace existing data entirely with new content.",
      "🔹 DELETE – Remove data from the server permanently.",
    ],
  },
];

const RestApi = () => {
  // Ref for chat container
  const chatRef = useRef(null);

  // Scroll to chat section function
  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🌐 REST API Basics</h1>
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

export default RestApi;
