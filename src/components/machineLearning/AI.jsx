import React, { useState } from 'react';
import Chat from '../Chat';
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: 'What is Artificial Intelligence?',
    description:
      'Artificial Intelligence (AI) refers to computer systems designed to perform tasks typically requiring human intelligence, such as learning, problem-solving, and decision-making. The goal of AI is to simulate human intelligence processes in machines. AI serves as a tool to automate tasks that are repetitive or involve processing large amounts of data.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🤖',
    code: `# AI includes multiple fields like:
- Machine Learning
- Natural Language Processing
- Computer Vision
- Robotics
- Expert Systems`,
    tips: [
      'AI mimics human intelligence',
      'Includes ML, NLP, Vision, Robotics, and more',
      'AI systems can adapt and make decisions',
    ],
  },
  {
    title: 'Key Components of AI',
    description: 'AI is an umbrella term that encompasses various subfields and technologies.',
    category: 'Overview',
    difficulty: 'Beginner',
    icon: '🧠',
    code: `# Subfields of AI:
- Machine Learning (ML)
- Deep Learning (DL)
- Natural Language Processing (NLP)
- Expert Systems
- Robotics
- Computer Vision`,
    tips: [
      'ML is a subfield of AI',
      'NLP helps computers understand language',
      'Computer Vision enables understanding images/videos',
    ],
  },
  {
    title: 'Why Learn AI?',
    description:
      'AI is revolutionizing industries with applications in automation, healthcare, finance, and entertainment.',
    category: 'Application',
    difficulty: 'Beginner',
    icon: '🌍',
    code: `# AI is used in:
- Self-driving cars
- Voice assistants (e.g., Siri, Alexa)
- Personalized recommendations
- Fraud detection systems`,
    tips: [
      'AI is present in daily tech',
      'Drives automation and personalization',
      'Enhances productivity across industries',
    ],
  },
  {
    title: 'Machine Learning Basics',
    description: 'Machine Learning (ML) is a subset of AI focused on building systems that learn from data.',
    category: 'Machine Learning',
    difficulty: 'Intermediate',
    icon: '📊',
    code: `# ML algorithms:
- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning`,
    tips: [
      'Supervised ML uses labeled data',
      'Unsupervised ML finds hidden patterns',
      'Reinforcement Learning learns via rewards',
    ],
  },
  {
    title: 'Deep Learning Overview',
    description:
      'Deep Learning is a specialized ML technique using neural networks with many layers to model complex patterns in data.',
    category: 'Machine Learning',
    difficulty: 'Advanced',
    icon: '🧠',
    code: `# Deep Learning features:
- Uses neural networks with many layers
- Excels in image and speech recognition`,
    tips: [
      'Needs large datasets and compute power',
      'Often uses GPUs for training',
      'Frameworks: TensorFlow, PyTorch',
    ],
  },
];

const categories = ['All', ...Array.from(new Set(notes.map(note => note.category)))];

const AI = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNotes = notes.filter(note => {
    return selectedCategory === 'All' || note.category === selectedCategory;
  });

  return (
    <div className="space-y-8 p-6  min-h-screen text-white">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
        Artificial Intelligence - Introduction
      </h1>
      <p className="text-gray-300 mb-6 max-w-3xl">
        Get started with the core concepts of AI, its components, and real-world applications. Use the filter below to customize your learning path.
      </p>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
              selectedCategory === cat
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-purple-500/30 text-purple-200 hover:bg-purple-500/50'
            }`}
            aria-pressed={selectedCategory === cat}
            aria-label={`Filter category: ${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notes */}
      {filteredNotes.length === 0 && (
        <p className="text-gray-400 text-center">No topics match the selected filter.</p>
      )}
      {filteredNotes.map((note, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-[#3a3565] to-[#1e1b30] p-6 rounded-2xl shadow-md border border-gray-700/40"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{note.icon}</span>
            <div>
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="text-sm text-gray-400">
                {note.category} · {note.difficulty}
              </p>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{note.description}</p>
          {note.code && (
            <pre className="bg-[#1e1e2f] text-sm text-cyan-300 rounded-md p-4 overflow-x-auto whitespace-pre-wrap mb-4">
              <CodeBlock code={note.code} language="javascript" />

            </pre>
          )}
          {note.tips?.length > 0 && (
            <div>
              <div className="text-sm font-medium text-pink-300 mb-1">Tips:</div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                {note.tips.map((tip, i) => (
                  <li key={i}>👉 {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      <Chat />
    </div>
  );
};

export default AI;
