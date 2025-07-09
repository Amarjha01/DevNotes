// components/frontend/js.jsx
import React from 'react';

const Js = () => {
  const notes = [
    {
      title: 'What is JavaScript?',
      description: 'JavaScript is a high-level, interpreted programming language that enables interactive web pages. It is an essential part of web development.'
    },
    {
      title: 'Variables & Data Types',
      description: 'Variables in JavaScript can be declared using var, let, and const. Data types include String, Number, Boolean, Object, Array, null, undefined, and Symbol.',
      code: `let name = 'John';
const age = 25;
var isStudent = true;`
    },
    {
      title: 'Functions',
      description: 'Functions are blocks of reusable code. They can be declared or expressed anonymously.',
      code: `function greet(name) {
  return 'Hello ' + name;
}

const greetArrow = (name) => 'Hello ' + name;`
    },
    {
      title: 'Control Flow',
      description: 'Includes if/else, switch statements, loops like for, while, and do-while.',
      code: `if (age > 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}`
    },
    {
      title: 'Arrays and Objects',
      description: 'Used for storing collections of data. Objects store data in key-value pairs.',
      code: `const arr = [1, 2, 3];
const person = { name: 'Alice', age: 30 };`
    },
    {
      title: 'DOM Manipulation',
      description: 'JavaScript can dynamically change HTML content via the DOM (Document Object Model).',
      code: `document.getElementById('demo').innerText = 'Hello';`
    },
    {
      title: 'Events',
      description: 'JS reacts to user interactions using events like onclick, onsubmit, onchange, etc.',
      code: `button.addEventListener('click', function() {
  alert('Button clicked');
});`
    },
    {
      title: 'ES6+ Features',
      description: 'Modern JS includes features like arrow functions, template literals, destructuring, spread/rest operators, and async/await.',
      code: `const user = { name: 'Bob', age: 22 };
const { name, age } = user;`
    },
    {
      title: 'Asynchronous JS',
      description: 'Async behavior in JS is handled using callbacks, promises, and async/await.',
      code: `async function fetchData() {
  const res = await fetch('https://api.example.com');
  const data = await res.json();
}`
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">JavaScript Notes</h1>
      {notes.map((note, idx) => (
        <div key={idx} className="bg-[#24193b] p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-300 mb-2">{note.title}</h2>
          <p className="mb-2 text-gray-200">{note.description}</p>
          {note.code && (
            <pre className="bg-black/40 p-3 text-sm rounded overflow-x-auto text-green-300">
              <code>{note.code}</code>
            </pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default Js;