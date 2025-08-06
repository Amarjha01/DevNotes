// components/backend/Express.jsx
import React from 'react';

const notes = [
  {
    title: 'What is a Queue?',
    description: 'A Queue is a linear data structure that follows the First In First Out (FIFO) principle.',
    category: 'Queue',
    difficulty: 'Beginner',
    icon: '🚶',
    code: `// Simple queue using array
const queue = [];
queue.push(1); // enqueue
queue.push(2);
console.log(queue.shift()); // dequeue => 1`,
    tips: [
      'Insertion at the rear (push)',
      'Deletion from the front (shift)',
      'Used in scheduling, BFS, etc.'
    ]
  },
  {
    title: 'Implement Queue Class',
    description: 'Create a queue class with enqueue, dequeue, front, and isEmpty methods.',
    category: 'Queue',
    difficulty: 'Beginner',
    icon: '🚶',
    code: `class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}`,
    tips: [
      'Use array methods: push + shift',
      'Can use linked list for O(1) dequeue',
      'Useful in many real-world processes'
    ]
  },
  {
    title: 'Reverse a Queue',
    description: 'Reverse the order of elements in a queue using recursion or stack.',
    category: 'Queue',
    difficulty: 'Beginner',
    icon: '🚶',
    code: `function reverseQueue(queue) {
  if (queue.length === 0) return;
  const front = queue.shift();
  reverseQueue(queue);
  queue.push(front);
}
// Example: let q = [1, 2, 3]; reverseQueue(q);`,
    tips: [
      'Recursive approach is elegant',
      'Can also use a stack to reverse',
      'Don’t mutate the queue outside function'
    ]
  },
  {
    title: 'Queue using Two Stacks',
    description: 'Simulate queue behavior using two stacks (for enqueue and dequeue).',
    category: 'Queue',
    difficulty: 'Beginner',
    icon: '🚶',
    code: `class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}`,
    tips: [
      'Dequeue from stack2',
      'Transfer elements only when needed',
      'Amortized O(1) for operations'
    ]
  },
  {
    title: 'Circular Queue',
    description: 'A circular queue uses a fixed-size array and wraps around to reuse space.',
    category: 'Queue',
    difficulty: 'Beginner',
    icon: '🚶',
    code: `class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    if ((this.rear + 1) % this.size === this.front) return 'Full';
    if (this.front === -1) this.front = 0;
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
  }

  dequeue() {
    if (this.front === -1) return 'Empty';
    const temp = this.queue[this.front];
    if (this.front === this.rear) this.front = this.rear = -1;
    else this.front = (this.front + 1) % this.size;
    return temp;
  }
}`,
    tips: [
      'Efficient use of space',
      'Check full and empty conditions carefully',
      'Used in round-robin scheduling'
    ]
  },
  {
    title: 'Queue in BFS (Breadth First Search)',
    description: 'Queue is used in BFS to process nodes level by level.',
    category: 'Queue',
    difficulty: 'Beginner',
    icon: '🚶',
    code: `function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      for (let neighbor of graph[node]) {
        queue.push(neighbor);
      }
    }
  }
}
// graph: adjacency list`,
    tips: [
      'Core of BFS algorithm',
      'Processes nodes level-wise',
      'Avoid revisiting using Set'
    ]
  }
];




const Queue = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🚀 Queue Basics</h1>
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

export default Queue;
