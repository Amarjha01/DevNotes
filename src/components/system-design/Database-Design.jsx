// components/backend/Express.jsx
import React from 'react';
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: 'What is Database Design?',
    description: 'Database design is the process of structuring a database schema that defines how data is stored, organized, and accessed.',
    category: 'Database Design',
    difficulty: 'Beginner',
    icon: '🗃️',
    code: `// Example: Simple user table schema
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);`,
    tips: [
      'Start by identifying entities and relationships',
      'Design for efficiency, accuracy, and consistency',
      'Schema impacts scalability and performance'
    ]
  },
  {
    title: 'Normalization in Databases',
    description: 'Normalization organizes data to reduce redundancy and improve integrity by breaking it into multiple related tables.',
    category: 'Database Design',
    difficulty: 'Beginner',
    icon: '🗃️',
    code: `// Users and Orders tables example
-- 1NF, 2NF, 3NF principles
CREATE TABLE orders (
  order_id INT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`,
    tips: [
      'Reduces duplication',
      'Makes updates and deletes safer',
      'Use only to a reasonable depth (avoid over-normalizing)'
    ]
  },
  {
    title: 'Primary and Foreign Keys',
    description: 'Primary keys uniquely identify rows in a table. Foreign keys create relationships between tables.',
    category: 'Database Design',
    difficulty: 'Beginner',
    icon: '🗃️',
    code: `CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE posts (
  id INT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`,
    tips: [
      'Primary key = unique + not null',
      'Foreign key enforces referential integrity',
      'Use indexes on foreign keys for performance'
    ]
  },
  {
    title: 'Indexes in Databases',
    description: 'Indexes improve the speed of data retrieval but can slow down inserts and updates.',
    category: 'Database Design',
    difficulty: 'Beginner',
    icon: '🗃️',
    code: `CREATE INDEX idx_email ON users(email);`,
    tips: [
      'Used on frequently queried columns',
      'Speeds up SELECT but affects INSERT/UPDATE',
      'Avoid too many indexes on write-heavy tables'
    ]
  },
  {
    title: 'SQL vs NoSQL Databases',
    description: 'SQL databases use structured tables and schemas. NoSQL databases use flexible structures like documents or key-value pairs.',
    category: 'Database Design',
    difficulty: 'Beginner',
    icon: '🗃️',
    code: `// SQL Example
SELECT * FROM users;

// NoSQL (MongoDB) Example
db.users.find({ name: "John" });`,
    tips: [
      'SQL is good for structured, relational data',
      'NoSQL scales better for unstructured data',
      'Choose based on use case (ACID vs scalability)'
    ]
  },
  {
    title: 'Question: How do you design a table for user login?',
    description: 'Create a user table with secure fields for email, password hash, timestamps, etc.',
    category: 'Database Design',
    difficulty: 'Beginner',
    icon: '🗃️',
    code: `CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  password_hash TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);`,
    tips: [
      'Never store plain text passwords',
      'Use bcrypt or Argon2 to hash passwords',
      'Track user creation and update times'
    ]
  }
];





const DatabaseDesign = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🚀Database Design</h1>
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
              <CodeBlock code={note.code} language="sql" />
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

export default DatabaseDesign;
