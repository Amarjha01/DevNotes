import React from 'react';


const MongoDB = () => {
  const notes = [
    {
      title: 'What is MongoDB?',
      description:
        'MongoDB is a NoSQL, document-based database. Unlike SQL, it doesn’t store data in rows and tables. Instead, it uses flexible documents written in BSON (Binary JSON).',
      category: 'Basics',
      difficulty: 'Beginner',
      icon: '📘',
      code: `// MongoDB stores data as flexible documents
{
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  isVerified: true
}`,
      tips: [
        'Each document is part of a collection.',
        'Fields can be nested or missing across documents.',
      ],
    },
    {
      title: 'Install MongoDB or Use Atlas',
      description:
        'MongoDB can be installed locally, or used via MongoDB Atlas (a free cloud option).',
      category: 'Setup',
      difficulty: 'Beginner',
      icon: '⚙️',
      code: `// Install locally (Ubuntu example)
sudo apt update
sudo apt install mongodb

// OR use Atlas (cloud): https://cloud.mongodb.com`,
      tips: [
        'MongoDB Atlas is free and great for beginners.',
        'Use Compass or MongoDB shell to test your DB.',
      ],
    },
    {
      title: 'Why Use Mongoose?',
      description:
        'Mongoose is an ODM (Object Document Mapper) for Node.js. It helps define schemas, models, and simplifies CRUD operations.',
      category: 'Mongoose',
      difficulty: 'Beginner',
      icon: '📦',
      code: `// Install Mongoose
npm install mongoose

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDB');`,
      tips: [
        'Mongoose gives structure to MongoDB’s flexibility.',
        'You get auto-validations, middlewares, and helper functions.',
      ],
    },
    {
      title: 'Define a Mongoose Schema',
      description:
        'Schemas define the shape of your documents. This helps enforce structure while keeping MongoDB flexible.',
      category: 'Schema',
      difficulty: 'Beginner',
      icon: '🧩',
      code: `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: { type: String, unique: true },
  joined: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);`,
      tips: [
        'Use `required`, `unique`, and `default` for safety.',
        'Helps prevent invalid or missing data in your app.',
      ],
    },
    {
      title: 'Create and Save Documents',
      description:
        'You can use the `.create()` method or `new Model()` + `.save()` to add data to MongoDB.',
      category: 'CRUD',
      difficulty: 'Beginner',
      icon: '➕',
      code: `// Method 1
await User.create({ name: "John", age: 30 });

// Method 2
const user = new User({ name: "John", age: 30 });
await user.save();`,
      tips: [
        'Always use `async/await` inside try/catch.',
        'Don’t forget to connect mongoose before saving.',
      ],
    },
    {
      title: 'Read Data with Queries',
      description:
        'Use `.find()`, `.findOne()`, and `.findById()` to fetch data from MongoDB collections.',
      category: 'CRUD',
      difficulty: 'Beginner',
      icon: '🔍',
      code: `const allUsers = await User.find(); // all users
const john = await User.findOne({ name: "John" });`,
      tips: [
        'Use filters like `{ age: { $gt: 18 } }`.',
        'Use `.lean()` to improve performance if needed.',
      ],
    },
    {
      title: 'Update Documents',
      description:
        'Update fields using `.updateOne()` or `.findByIdAndUpdate()`. Use `$set` to change specific values.',
      category: 'CRUD',
      difficulty: 'Beginner',
      icon: '✏️',
      code: `await User.updateOne({ name: "John" }, { $set: { age: 31 } });`,
      tips: [
        'You can also use `.findByIdAndUpdate()`.',
        'Use `{ new: true }` to return updated document.',
      ],
    },
    {
      title: 'Delete Documents',
      description:
        'You can remove documents using `.deleteOne()` or `.deleteMany()` based on your conditions.',
      category: 'CRUD',
      difficulty: 'Beginner',
      icon: '🗑️',
      code: `await User.deleteOne({ name: "John" });`,
      tips: [
        'Use `.deleteMany()` to remove bulk entries.',
        'ALWAYS verify the filter before deleting.',
      ],
    },
    {
      title: 'Embedded vs Referenced Data',
      description:
        'You can embed (nest) documents inside others, or reference them using IDs.',
      category: 'Schema',
      difficulty: 'Beginner',
      icon: '🔗',
      code: `// Embedded
{
  name: "Alice",
  address: { city: "Delhi", zip: 12345 }
}

// Referenced
{
  name: "Alice",
  addressId: ObjectId("...")
}`,
      tips: [
        'Embed if the data is always accessed together.',
        'Reference if it’s reused or gets large.',
      ],
    },
    {
      title: 'MongoDB Compass GUI',
      description:
        'Compass lets you view your data, run queries, and check performance — without writing any code.',
      category: 'Tooling',
      difficulty: 'Beginner',
      icon: '🧭',
      code: `// Just connect with your Mongo URI and explore collections.`,
      tips: [
        'You can use filters, sort data, and run queries.',
        'Check indexes and schema statistics visually.',
      ],
    },
    {
      title: 'Using Environment Variables',
      description:
        'Store sensitive data like DB URIs in `.env` files instead of hardcoding them.',
      category: 'Security',
      difficulty: 'Beginner',
      icon: '🔐',
      code: `// .env file
MONGO_URI=mongodb://localhost:27017/myDB

// Load it in your code
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);`,
      tips: [
        'Never push `.env` to GitHub.',
        'Use `dotenv` package to load env variables.',
      ],
    },
    {
      title: 'Handle DB Errors Gracefully',
      description:
        'Wrap all DB operations inside try/catch blocks to avoid crashes and show user-friendly messages.',
      category: 'Safety',
      difficulty: 'Beginner',
      icon: '🛡️',
      code: `try {
  const users = await User.find();
} catch (err) {
  console.error("DB Error:", err.message);
}`,
      tips: [
        'Helps you handle connection failures or invalid queries.',
        'Use middleware to catch errors globally in Express.',
      ],
    },
    {
      title: 'MongoDB Atlas (Cloud)',
      description:
        'Atlas is a free cloud-hosted MongoDB service. You can connect to it securely using connection URIs.',
      category: 'Deployment',
      difficulty: 'Beginner',
      icon: '🌐',
      code: `// Sample Atlas connection string
mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDB?retryWrites=true&w=majority`,
      tips: [
        'Whitelist your IP on Atlas dashboard.',
        'Store connection URI in `.env` file.',
      ],
    },
  ];

  return (
    <div className="space-y-8 px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-4">📘 MongoDB Beginner Notes</h1>
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
