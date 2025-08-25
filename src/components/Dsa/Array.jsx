// components/backend/Express.jsx
import React from 'react';
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: 'What is an Array?',
    description: 'An array is a linear data structure used to store multiple values in a single variable, accessible via index.',
    category: 'Array',
    difficulty: 'Beginner',
    icon: '📦',
    code: `const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // 'apple'`,
    tips: [
      'Indexing starts from 0',
      'All elements are stored in contiguous memory',
      'Good for storing related data items'
    ]
  },
  {
    title: 'Traversing an Array',
    description: 'You can loop through an array to access or modify each element.',
    category: 'Array',
    difficulty: 'Beginner',
    icon: '📦',
    code: `const nums = [10, 20, 30];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}`,
    tips: [
      'Use loops like for, while, or forEach',
      'Avoid going out of bounds (i < arr.length)',
      'Great for data processing tasks'
    ]
  },
  {
    title: 'Insert Element in Array',
    description: 'You can add elements using push (end), unshift (start), or splice (anywhere).',
    category: 'Array',
    difficulty: 'Beginner',
    icon: '📦',
    code: `const arr = [1, 2, 4];
arr.splice(2, 0, 3); // Insert 3 at index 2
console.log(arr); // [1, 2, 3, 4]`,
    tips: [
      'push adds to end, unshift to start',
      'splice can insert/remove elements at any position',
      'Modifies original array'
    ]
  },
  {
    title: 'Delete Element from Array',
    description: 'You can remove elements using pop, shift, or splice.',
    category: 'Array',
    difficulty: 'Beginner',
    icon: '📦',
    code: `const arr = [1, 2, 3, 4];
arr.splice(2, 1); // Remove element at index 2
console.log(arr); // [1, 2, 4]`,
    tips: [
      'pop removes last, shift removes first',
      'splice can remove from any position',
      'Deleting does not shift elements unless you use splice'
    ]
  },
  {
    title: 'Search in Array',
    description: 'Check if an element exists in an array using loop, includes, or indexOf.',
    category: 'Array',
    difficulty: 'Beginner',
    icon: '📦',
    code: `const arr = [1, 3, 5, 7];
console.log(arr.includes(3));  // true
console.log(arr.indexOf(5));   // 2`,
    tips: [
      'indexOf returns -1 if not found',
      'includes is cleaner for boolean check',
      'Loop if you want to perform custom conditions'
    ]
  },
  {
    title: 'Find Maximum in Array',
    description: 'Find the largest number by comparing all elements.',
    category: 'Array',
    difficulty: 'Beginner',
    icon: '📦',
    code: `const arr = [12, 3, 45, 2];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log(max);`,
    tips: [
      'Initialize max with the first element',
      'Can also use Math.max(...arr)',
      'Works in O(n) time'
    ]
  }
];


const Array = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🚀 Array Basics</h1>
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
    </div>
  );
};

export default Array;
