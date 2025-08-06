// components/backend/Express.jsx
import React from 'react';

const notes = [
  {
    title: 'What is a Stack?',
    description: 'A Stack is a linear data structure that follows the Last In First Out (LIFO) principle.',
    category: 'Stack',
    difficulty: 'Beginner',
    icon: '📚',
    code: `// Simple stack using array
const stack = [];
stack.push(1); // push
stack.push(2);
console.log(stack.pop()); // pop => 2`,
    tips: [
      'Last element inserted is the first to be removed',
      'Use push and pop with arrays in JS',
      'Used in undo operations, parsing, etc.'
    ]
  },
  {
    title: 'Implement Stack Class',
    description: 'Create a stack class with push, pop, top, and isEmpty methods.',
    category: 'Stack',
    difficulty: 'Beginner',
    icon: '📚',
    code: `class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  top() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}`,
    tips: [
      'Backed by an array',
      'Last element is always on the top',
      'Track size with .length'
    ]
  },
  {
    title: 'Valid Parentheses',
    description: 'Use stack to check if a string has balanced parentheses.',
    category: 'Stack',
    difficulty: 'Beginner',
    icon: '📚',
    code: `function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}`,
    tips: [
      'Push opening brackets',
      'Pop and match with closing brackets',
      'Stack should be empty at the end'
    ]
  },
  {
    title: 'Reverse a String using Stack',
    description: 'Reverse characters of a string using stack push/pop operations.',
    category: 'Stack',
    difficulty: 'Beginner',
    icon: '📚',
    code: `function reverseString(str) {
  const stack = str.split('');
  let reversed = '';
  while (stack.length) {
    reversed += stack.pop();
  }
  return reversed;
}`,
    tips: [
      'Stack reverses order automatically',
      'Can also use array.reverse(), but this shows logic',
      'Great for interview questions'
    ]
  },
  {
    title: 'Evaluate Postfix Expression',
    description: 'Evaluate postfix (Reverse Polish Notation) expressions using stack.',
    category: 'Stack',
    difficulty: 'Beginner',
    icon: '📚',
    code: `function evaluatePostfix(exp) {
  const stack = [];
  for (let token of exp) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      let b = stack.pop(), a = stack.pop();
      if (token === '+') stack.push(a + b);
      if (token === '-') stack.push(a - b);
      if (token === '*') stack.push(a * b);
      if (token === '/') stack.push(a / b);
    }
  }
  return stack[0];
}
// Example: ["2", "3", "+", "4", "*"] => ((2+3)*4) = 20`,
    tips: [
      'Operands go into stack',
      'Pop two values for each operator',
      'Evaluate and push result back'
    ]
  },
  {
    title: 'Next Greater Element',
    description: 'Find the next greater element for each element in an array using a stack.',
    category: 'Stack',
    difficulty: 'Beginner',
    icon: '📚',
    code: `function nextGreater(nums) {
  const stack = [];
  const res = Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      res[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return res;
}
// Input: [4, 5, 2, 10] => Output: [5, 10, 10, -1]`,
    tips: [
      'Use stack to track indices',
      'Pop while top element is smaller',
      'Classic use case of monotonic stack'
    ]
  }
];


const Stack = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🚀 Stack Basics</h1>
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
              <pre className="bg-[#1e1e2f] text-sm text-emerald-500 rounded-md p-4 overflow-x-auto whitespace-pre-wrap">
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

export default Stack;
