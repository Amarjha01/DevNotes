import React, { useState } from "react";

const Js = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const notes = [
    {
      title: "What is JavaScript?",
      description:
        "JavaScript is a lightweight, interpreted scripting language used to make web pages interactive.",
      category: "Basics",
      difficulty: "Beginner",
      icon: "🟨",
      tips: [
        "Runs in the browser or server (Node.js)",
        "Used for DOM manipulation, events, AJAX, etc.",
        "Client-side language with dynamic capabilities",
      ],
    },

    {
      title: "JavaScript Variables",
      description:
        "Variables store data. Use var (old), let (block-scoped), and const (block-scoped and immutable).",
      category: "Basics",
      difficulty: "Beginner",
      icon: "📦",
      code: `let age = 25;
const name = "Amar";
var score = 90;`,
      tips: [
        "Prefer let and const in modern JS",
        "Const does not mean the value is immutable if it’s an object",
        "Avoid var unless needed for legacy support",
      ],
    },

    {
      title: "Data Types in JavaScript",
      description: "JavaScript has primitive and reference data types.",
      category: "Basics",
      difficulty: "Beginner",
      icon: "🔠",
      code: `let str = "Hello"; // String
let num = 10;       // Number
let bool = true;    // Boolean
let obj = { key: "value" }; // Object
let arr = [1, 2, 3]; // Array
let und;            // Undefined
let nul = null;     // Null`,
      tips: [
        'typeof null is "object" (quirk)',
        "Arrays are objects",
        "Use typeof to check types",
      ],
    },

    {
      title: "Operators in JavaScript",
      description:
        "JS supports arithmetic, assignment, comparison, and logical operators.",
      category: "Basics",
      difficulty: "Beginner",
      icon: "➕",
      code: `let a = 10;
let b = 5;
let sum = a + b;
let isEqual = a === b;
let and = true && false;`,
      tips: [
        "Use === for strict comparison",
        "Avoid == unless you know the type coercion rules",
        "Logical operators return the actual value, not just true/false",
      ],
    },

    {
      title: "Functions in JavaScript",
      description:
        "Functions are reusable blocks of code defined using function keyword or arrow syntax.",
      category: "Functions",
      difficulty: "Beginner",
      icon: "🔁",
      code: `function greet(name) {
  return "Hello " + name;
}

const add = (a, b) => a + b;`,
      tips: [
        "Arrow functions do not bind their own `this`",
        "Functions can be passed as arguments (first-class)",
        "Use `return` to get output from a function",
      ],
    },

    {
      title: "Control Statements (if/else/switch)",
      description: "Used to make decisions based on conditions.",
      category: "Control Flow",
      difficulty: "Beginner",
      icon: "🔀",
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
        "Use `===` in conditions",
        "Always use break in switch cases",
        "Prefer if-else for range-based checks",
      ],
    },

    {
      title: "Loops (for, while, do...while)",
      description: "Used to repeat blocks of code multiple times.",
      category: "Control Flow",
      difficulty: "Beginner",
      icon: "🔁",
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
        "Use `for` when count is known",
        "Use `while` for condition-based loops",
        "Avoid infinite loops by updating conditions",
      ],
    },

    {
      title: "Arrays in JavaScript",
      description: "Arrays are used to store ordered collections of items.",
      category: "Data Structures",
      difficulty: "Beginner",
      icon: "📚",
      code: `let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits[0]);`,
      tips: [
        "Use `push`, `pop`, `shift`, `unshift` for manipulation",
        "Array indices start from 0",
        "Use `.length` to get size",
      ],
    },

    {
      title: "Objects in JavaScript",
      description: "Objects store data in key-value pairs.",
      category: "Data Structures",
      difficulty: "Beginner",
      icon: "🧱",
      code: `let user = {
  name: "Amar",
  age: 25,
  greet() {
    return "Hi";
  }
};`,
      tips: [
        "Access with dot or bracket notation",
        "Functions inside objects are methods",
        "Use `Object.keys()` and `Object.values()` for iteration",
      ],
    },

    {
      title: "DOM Manipulation",
      description:
        "DOM methods allow you to change the content and structure of HTML elements dynamically.",
      category: "DOM",
      difficulty: "Intermediate",
      icon: "🧩",
      code: `document.getElementById("title").innerText = "Hello World";
document.querySelector(".btn").style.color = "red";`,
      tips: [
        "Use querySelector for CSS-style selection",
        "Always check if element exists before manipulating",
        "Use `addEventListener` for interactivity",
      ],
    },
   
    {
  title: "Global Execution Context",
  description: `The Global Execution Context (GEC) is automatically created when the JavaScript engine starts running your script.

It has two main phases:

Memory Creation Phase:
- Variables declared with \`var\` are hoisted and initialized with \`undefined\`.
- Function declarations are hoisted with their entire definitions.
- Variables declared with \`let\` and \`const\` are hoisted but remain uninitialized (in the Temporal Dead Zone).

Code Execution Phase:
- Code is executed line by line.
- Variables receive their actual assigned values.
- Function calls create new Function Execution Contexts that are pushed onto the call stack.
`,
  category: "Execution Context",
  difficulty: "Advanced",
  icon: "🧠",
  code: `console.log(a);         // undefined (due to hoisting)
foo();                  // Outputs: "Hello from foo"

var a = 10;

function foo() {
  console.log("Hello from foo");
}

console.log(a);         // 10`,
  tips: [
    "The Global Execution Context is the base of the call stack.",
    "Function calls create their own Execution Contexts.",
    "Hoisting only applies to declarations, not initializations.",
  ]
},{
  title: "This keyword",
  description: `The \`this\` keyword behaves differently based on where and how a function is invoked.

In the Global Execution Context (GEC), \`this\` refers to the global object (e.g., \`window\` in browsers), regardless of strict or non-strict mode.

In Function Execution Context:
- Non-strict mode: \`this\` still points to the global object.
- Strict mode: \`this\` becomes \`undefined\`.`,
  category: "Javascript Core",
  difficulty: "Advanced",
  icon: "👤",
  code: `console.log(this); // window (in GEC)

'use strict';
console.log(this); // undefined (still GEC, but in strict mode)

function show() {
  console.log(this); // window or undefined depending on mode
}

show();`,
  tips: [
    `Inside Object Methods:
When a function is called as a method of an object, \`this\` refers to that object, regardless of where it's declared.`,

    `Arrow Functions:
Arrow functions do not have their own \`this\`. They inherit \`this\` from the surrounding lexical scope.`,

    `Global vs Function Scope:
\`this\` in the GEC refers to the global object, but in strict mode inside a function, it becomes \`undefined\`.`
  ]
},
{
  title: "Hoisting",
  description: `Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the Memory Creation Phase in the Global Execution Context (GEC).

Variables declared with \`var\` are hoisted and initialized as \`undefined\`, while \`let\` and \`const\` are hoisted but left uninitialized (Temporal Dead Zone).

Function declarations are fully hoisted with their definitions, making them callable before they're defined.`,
  category: "Javascript Core",
  difficulty: "Advanced",
  icon: "🎈",
  code: `console.log(a); // undefined
foo(); // "Hello"

var a = 5;

function foo() {
  console.log("Hello");
}

console.log(b); // ReferenceError
let b = 10;`,
  tips: [
    "Function declarations are hoisted entirely, but function expressions are not.",
    "Avoid relying on hoisting for clean, predictable code.",
    "`let` and `const` are hoisted but not initialized, leading to a Temporal Dead Zone.",
  ]
},
{
  title: "Temporal Dead Zone",
  description: `The Temporal Dead Zone (TDZ) is the period between the hoisting of a \`let\`, \`const\`, or \`class\` declaration and its initialization.

Although these variables are hoisted during the Memory Creation Phase of the Global Execution Context (GEC), they remain uninitialized until execution reaches the line where they're defined.

Accessing them during this zone results in a \`ReferenceError\`.`,
  category: "Scope",
  difficulty: "Advanced",
  icon: "🚫",
  code: `console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;`,
  tips: [
    "TDZ applies only to `let`, `const`, and `class` — not to `var`.",
    "Avoid accessing variables before their declaration to prevent runtime errors.",
    "Understand TDZ to debug `ReferenceError` issues with block-scoped variables."
  ]
},{
  title: "Function Currying",
  description: `Function currying is the technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

It promotes function reusability and composition, making code more modular and readable.

Currying is commonly used in functional programming patterns and libraries like Lodash.`,
  category: "Functions",
  difficulty: "Intermediate",
  icon: "🔁",
  code: `const add = a => b => b ? add(a + b) : a;

console.log(add(4)(5)(8)()); // 17

// To stop the chaining and return the result, call with ()`,
  tips: [
    "Currying breaks a function into smaller, reusable parts.",
    "Useful in functional programming for composing multiple small functions.",
    "Ending the chain with () is a common trick to trigger final execution."
  ]
},{
  title: "Map, Reduce, and Filter",
  description: `These are high-order array methods in JavaScript used for transforming, filtering, and reducing data in arrays.

- \`map()\`: Transforms each element in the array and returns a new array of the same length.
- \`filter()\`: Returns a new array containing elements that pass a specific condition.
- \`reduce()\`: Reduces the array to a single value by applying a function iteratively.`,
  category: "Array Methods",
  difficulty: "Beginner",
  icon: "🔂",
  code: `// map()
const nums = [1, 2, 3, 4, 5];
const squared = nums.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// filter()
const filtered = nums.filter(num => num !== 2);
console.log(filtered); // [1, 3, 4, 5]

// reduce()
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15`,
  tips: [
    "`map()` is ideal for transforming arrays without mutating the original.",
    "`filter()` helps extract subsets of data based on conditions.",
    "`reduce()` is powerful for aggregating values like sums, averages, or objects."
  ]
},{
  title: "Prototype & Prototypal Inheritance",
  description: `In JavaScript, every object has an internal [[Prototype]] property, which refers to another object.

- You can inspect it in the browser using \`__proto__\`.
- Prototypal Inheritance allows one object to inherit properties and methods from another via the prototype chain.`,
  category: "Objects",
  difficulty: "Advanced",
  icon: "🔗",
  code: `const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = {
  bark() {
    console.log("Woof!");
  }
};

dog.__proto__ = animal;

dog.walk(); // Animal walks`,
  tips: [
    "Every object in JavaScript has a prototype behind the scenes.",
    "Use Object.create(obj) to create a new object with a specified prototype.",
    "Avoid modifying __proto__ directly in production; prefer Object.setPrototypeOf or class syntax."
  ]
},{
  title: "Closures",
  description: `A closure is formed when an inner function retains access to variables from its outer function's scope even after the outer function has finished execution.

- Closures allow data encapsulation and persistent private variables.
- They are created every time a function is declared inside another function.`,
  category: "Functions",
  difficulty: "Advanced",
  icon: "🔒",
  code: `function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2`,
  tips: [
    "Closures are created when an inner function is returned or used inside an outer function.",
    "Use closures to maintain state between function calls (like counters).",
    "Each closure preserves its own lexical environment."
  ]
},{
  title: "setTimeout + Closures",
  description: `JavaScript is single-threaded, but it handles asynchronous tasks using the event loop, just like how we manage tasks in real life.

- setTimeout does not block execution; it schedules the callback for later.
- Meanwhile, other tasks continue running synchronously.
- This behavior is handled by the Event Loop and Task Queue.`,
  category: "Asynchronous JS",
  difficulty: "Intermediate",
  icon: "⏳",
  code: `function fn() {
  setTimeout(() => {
    console.log("Tom");
  }, 3000);
  console.log("Jimmy");
}

fn(); // Output: Jimmy (immediately), then Tom (after 3 seconds)`,
  tips: [
    "setTimeout uses the callback queue, not the main thread.",
    "JavaScript continues executing other code while setTimeout waits.",
    "Closures allow the callback to retain access to outer variables."
  ]
},{
  title: "Trust Issues with setTimeout()",
  description: `setTimeout() does not guarantee exact timing.
Even if you set a delay (e.g., 5 seconds), the callback only executes after the call stack is clear.
If synchronous code blocks the thread, setTimeout will be delayed.`,
  category: "Asynchronous JS",
  difficulty: "Intermediate",
  icon: "⏱️",
  code: `console.log("starting");

setTimeout(() => {
  console.log("Hello");
}, 5000);

console.log("ending");

// Simulate heavy blocking task
for (let i = 0; i < 1e9; i++) {} // Takes time and blocks the thread`,
  tips: [
    "setTimeout delay is *minimum time*, not exact time.",
    "Blocking synchronous code delays async callbacks.",
    "Always avoid heavy tasks on the main thread in JS."
  ]
}









    // You can continue this array up to 30 or more topics
  ];

  const categories = ["All", ...new Set(notes.map((note) => note.category))];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredNotes = notes.filter((note) => {
    const categoryMatch =
      selectedCategory === "All" || note.category === selectedCategory;
    const difficultyMatch =
      selectedDifficulty === "All" || note.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
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
                className="bg-purple-500/20 backdrop-blur-sm text-white border border-purple-300/40 hover:border-purple-300/60 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-purple-200 transition-all duration-200"
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="bg-purple-900 text-purple-100 hover:bg-purple-800 transition-all duration-200"
                  >
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
                className="bg-purple-500/20 backdrop-blur-sm text-white border border-purple-300/40 hover:border-purple-300/60 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-purple-200 transition-all duration-200"
              >
                {difficulties.map((difficulty) => (
                  <option
                    key={difficulty}
                    value={difficulty}
                    className="bg-purple-900 text-purple-100 hover:bg-purple-800 transition-all duration-200"
                  >
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
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
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
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                          note.difficulty
                        )}`}
                      >
                        {note.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-200 mb-4 leading-relaxed whitespace-pre-line">
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
                      <li
                        key={tipIdx}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
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
