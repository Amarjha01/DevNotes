import React, { useRef } from 'react';
import Chat from '../Chat';
import { GoChevronDown } from "react-icons/go";
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: 'What is Deployment?',
    description: 'Deployment is the process of releasing new software versions to production. Strategies like Blue-Green and Canary ensure minimal downtime and risk.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🛠️',
    code: `# Deployment Strategies:
# Blue-Green: Maintain two identical environments, switch traffic to new version
# Canary: Gradually release new version to a subset of users for testing`,
    tips: [
      'Blue-Green reduces downtime',
      'Canary helps catch issues before full rollout',
      'Automation is key for safe deployments'
    ]
  },
  {
    title: 'Blue-Green Deployment',
    description: 'Blue-Green deployment uses two identical production environments. Traffic is switched from blue to green when the new version is ready.',
    category: 'Strategy',
    difficulty: 'Beginner',
    icon: '🔵🟢',
    code: `# Example:
# Current live environment: Blue
# Deploy new version to Green
# Switch router to Green environment
# Monitor before decommissioning Blue`,
    tips: [
      'Easy rollback by switching back to the old environment',
      'Minimal downtime during switch',
      'Requires double resources for environments'
    ]
  },
  {
    title: 'Canary Deployment',
    description: 'Canary deployment gradually rolls out the new version to a small subset of users before full release, allowing monitoring and quick rollback if needed.',
    category: 'Strategy',
    difficulty: 'Beginner',
    icon: '🦊',
    code: `# Example:
# Release new version to 5% of users
# Monitor metrics (errors, latency)
# Gradually increase percentage until 100%`,
    tips: [
      'Reduces risk of widespread issues',
      'Monitor metrics carefully during rollout',
      'Requires traffic routing and feature flags'
    ]
  }
];

const Deployment = () => {
  const chatRef = useRef(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative space-y-8 pb-20">
      <h1 className="text-3xl font-bold text-white mb-4">🛠️ Deployment - Blue-Green & Canary</h1>
      {notes.map((note, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-teal-700 via-cyan-600 to-cyan-400 text-white p-6 rounded-2xl shadow-md border border-gray-700/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{note.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-100 mt-1">
                  {note.category} · {note.difficulty}
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-100 mb-4">{note.description}</p>

          {note.code && (
            <div className="mb-4">
              <div className="text-sm font-medium text-purple-200 mb-1">Example Code:</div>
                 <CodeBlock code={note.code} language="yaml" />
            </div>
          )}

          {note.tips?.length > 0 && (
            <div className="mt-2">
              <div className="text-sm font-medium text-pink-200 mb-1">Tips:</div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-100">
                {note.tips.map((tip, i) => (
                  <li key={i}>👉 {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {/* Chat Section */}
      <div ref={chatRef}>
        <Chat />
      </div>

      {/* Floating Button */}
      <button
        onClick={scrollToChat}
        aria-label="Go to AI Assistant"
        title="Go to AI Assistant"
        className="fixed top-6 right-6 z-50 text-2xl font-extrabold bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <GoChevronDown />
      </button>
    </div>
  );
};

export default Deployment;
