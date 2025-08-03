import React from 'react';

const notes = [
  {
    title: 'Introduction to MongoDB',
    description: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It’s great for modern applications that deal with large volumes of unstructured or semi-structured data.',
    category: 'Basics',
    difficulty: 'Beginner',
    icon: '📘',
    code: `// Sample MongoDB document
{
  name: "Alice",
  age: 25,
  city: "Delhi"
}`,
    tips: [
      'Use MongoDB for data that doesn’t fit well into tables.',
      'Great for real-time analytics, social apps, etc.'
    ]
  },
  {
    title: 'Connecting MongoDB with Node.js',
    description: 'You can connect MongoDB to a Node.js app using the official MongoDB driver or Mongoose (a popular ODM).',
    category: 'Integration',
    difficulty: 'Easy',
    icon: '🔌',
    code: `// Using mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDB')
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error(err));`,
    tips: [
      'Always handle connection errors with try/catch.',
      'Use `.env` to store your DB URI securely.'
    ]
  },
  {
    title: 'CRUD Operations in MongoDB',
    description: 'You can perform Create, Read, Update, and Delete operations using Mongoose models.',
    category: 'Operations',
    difficulty: 'Easy',
    icon: '🛠️',
    code: `// Create a schema
const userSchema = new mongoose.Schema({ name: String, age: Number });
const User = mongoose.model('User', userSchema);

// Create
await User.create({ name: "John", age: 30 });

// Read
const users = await User.find();

// Update
await User.updateOne({ name: "John" }, { age: 31 });

// Delete
await User.deleteOne({ name: "John" });`,
    tips: [
      'Use async/await with try/catch for DB operations.',
      'Validate your schema fields to prevent bad data.'
    ]
  },
  {
    title: 'Using MongoDB Compass',
    description: 'MongoDB Compass is a GUI tool to visualize your collections, query data, and analyze schema.',
    category: 'Tooling',
    difficulty: 'Easy',
    icon: '🧭',
    code: `// No code needed – just download Compass and connect using your Mongo URI.`,
    tips: [
      'Ideal for debugging and testing queries visually.',
      'Check indexes and performance insights in Compass.'
    ]
  }
];

const MongoDB = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">📘 MongoDB Notes</h1>
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
              <pre className="bg-[#1e1e2f] text-sm text-emerald-400 rounded-md p-4 overflow-x-auto whitespace-pre-wrap">
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

export default MongoDB;
