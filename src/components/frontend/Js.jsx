import React, { useState } from 'react';

const Js = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

 const notes = [

  {
    title: 'What is JavaScript?',
    description: 'JavaScript is a lightweight, interpreted scripting language used to make web pages interactive.',
    category: 'Basics',
    difficulty: 'Beginner',
    icon: '🟨',
    tips: [
      'Runs in the browser or server (Node.js)',
      'Used for DOM manipulation, events, AJAX, etc.',
      'Client-side language with dynamic capabilities'
    ]
  },

  {
    title: 'JavaScript Variables',
    description: 'Variables store data. Use var (old), let (block-scoped), and const (block-scoped and immutable).',
    category: 'Basics',
    difficulty: 'Beginner',
    icon: '📦',
    code: `let age = 25;
const name = "Amar";
var score = 90;`,
    tips: [
      'Prefer let and const in modern JS',
      'Const does not mean the value is immutable if it’s an object',
      'Avoid var unless needed for legacy support'
    ]
  },

  {
    title: 'Data Types in JavaScript',
    description: 'JavaScript has primitive and reference data types.',
    category: 'Basics',
    difficulty: 'Beginner',
    icon: '🔠',
    code: `let str = "Hello"; // String
let num = 10;       // Number
let bool = true;    // Boolean
let obj = { key: "value" }; // Object
let arr = [1, 2, 3]; // Array
let und;            // Undefined
let nul = null;     // Null`,
    tips: [
      'typeof null is "object" (quirk)',
      'Arrays are objects',
      'Use typeof to check types'
    ]
  },

  {
    title: 'Operators in JavaScript',
    description: 'JS supports arithmetic, assignment, comparison, and logical operators.',
    category: 'Basics',
    difficulty: 'Beginner',
    icon: '➕',
    code: `let a = 10;
let b = 5;
let sum = a + b;
let isEqual = a === b;
let and = true && false;`,
    tips: [
      'Use === for strict comparison',
      'Avoid == unless you know the type coercion rules',
      'Logical operators return the actual value, not just true/false'
    ]
  },

  {
    title: 'Functions in JavaScript',
    description: 'Functions are reusable blocks of code defined using function keyword or arrow syntax.',
    category: 'Functions',
    difficulty: 'Beginner',
    icon: '🔁',
    code: `function greet(name) {
  return "Hello " + name;
}

const add = (a, b) => a + b;`,
    tips: [
      'Arrow functions do not bind their own `this`',
      'Functions can be passed as arguments (first-class)',
      'Use `return` to get output from a function'
    ]
  },

  {
    title: 'Control Statements (if/else/switch)',
    description: 'Used to make decisions based on conditions.',
    category: 'Control Flow',
    difficulty: 'Beginner',
    icon: '🔀',
    code: `if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

switch (day) {
  case "Mon":
    console.log("Start of week");
    break;
}`,
    tips: [
      'Use `===` in conditions',
      'Always use break in switch cases',
      'Prefer if-else for range-based checks'
    ]
  },

  {
    title: 'Loops (for, while, do...while)',
    description: 'Used to repeat blocks of code multiple times.',
    category: 'Control Flow',
    difficulty: 'Beginner',
    icon: '🔁',
    code: `for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (i < 5) {
  i++;
}

do {
  i++;
} while (i < 5);`,
    tips: [
      'Use `for` when count is known',
      'Use `while` for condition-based loops',
      'Avoid infinite loops by updating conditions'
    ]
  },

  {
    title: 'Arrays in JavaScript',
    description: 'Arrays are used to store ordered collections of items.',
    category: 'Data Structures',
    difficulty: 'Beginner',
    icon: '📚',
    code: `let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits[0]);`,
    tips: [
      'Use `push`, `pop`, `shift`, `unshift` for manipulation',
      'Array indices start from 0',
      'Use `.length` to get size'
    ]
  },

  {
    title: 'Objects in JavaScript',
    description: 'Objects store data in key-value pairs.',
    category: 'Data Structures',
    difficulty: 'Beginner',
    icon: '🧱',
    code: `let user = {
  name: "Amar",
  age: 25,
  greet() {
    return "Hi";
  }
};`,
    tips: [
      'Access with dot or bracket notation',
      'Functions inside objects are methods',
      'Use `Object.keys()` and `Object.values()` for iteration'
    ]
  },

  {
    title: 'DOM Manipulation',
    description: 'DOM methods allow you to change the content and structure of HTML elements dynamically.',
    category: 'DOM',
    difficulty: 'Intermediate',
    icon: '🧩',
    code: `document.getElementById("title").innerText = "Hello World";
document.querySelector(".btn").style.color = "red";`,
    tips: [
      'Use querySelector for CSS-style selection',
      'Always check if element exists before manipulating',
      'Use `addEventListener` for interactivity'
    ]
  }

  // You can continue this array up to 30 or more topics
];


  const categories = ['All', ...new Set(notes.map(note => note.category))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredNotes = notes.filter(note => {
    const categoryMatch = selectedCategory === 'All' || note.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || note.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            JavaScript Learning Hub
          </h1>
          <p className="text-purple-200 text-lg">
            Master JavaScript with interactive notes and code examples
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <label className="text-white font-medium">Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="text-black">
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-white font-medium">Difficulty:</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty} className="text-black">
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredNotes.map((note, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{note.icon}</span>
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">
                      {note.title}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-200 text-sm">
                        {note.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(note.difficulty)}`}>
                        {note.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-200 mb-4 leading-relaxed">
                {note.description}
              </p>

              {/* Code Block */}
              {note.code && (
                <div className="mb-4">
                  <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-sm border border-white/10">
                    <code className="text-green-300 font-mono">
                      {note.code}
                    </code>
                  </pre>
                </div>
              )}

              {/* Tips */}
              {note.tips && (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="text-purple-300 font-medium mb-2 flex items-center gap-2">
                    💡 Pro Tips
                  </h3>
                  <ul className="space-y-1">
                    {note.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-purple-200">
          <p>Keep learning and happy coding! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Js;