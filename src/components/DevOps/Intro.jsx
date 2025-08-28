import React, { useRef } from 'react';
import Chat from '../Chat'; // Uses your original Chat component and style
import { GoChevronDown } from "react-icons/go";
import CodeBlock from '../../components/common/CodeBlock'; 

// Full DevOps concepts covered in notes
const notes = [
  {
    title: 'What is DevOps?',
    description: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the system development life cycle while delivering features, fixes, and updates frequently.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '⚙️',
    code: `# DevOps is not a tool, but a culture and practice
# Example: A CI/CD pipeline setup (YAML for GitHub Actions)
name: CI/CD Pipeline

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Run Tests
        run: npm test
      - name: Deploy
        run: echo "Deploying application..."`,
    tips: [
      'Focuses on collaboration between Dev & Ops',
      'Automation of CI/CD pipelines',
      'Involves tools like Docker, Kubernetes, Jenkins, etc.'
    ]
  },
  {
    title: 'DevOps Lifecycle',
    description: 'The DevOps lifecycle consists of continuous development, integration, testing, deployment, monitoring, and feedback.',
    category: 'Lifecycle',
    difficulty: 'Beginner',
    icon: '🔄',
    code: `# DevOps Lifecycle Stages
Plan -> Code -> Build -> Test -> Release -> Deploy -> Operate -> Monitor`,
    tips: [
      'Each stage is continuous and iterative',
      'Feedback loops help improve product quality',
      'Automation reduces manual errors'
    ]
  },
  {
    title: 'Key DevOps Tools',
    description: 'Popular DevOps tools include Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, and Prometheus.',
    category: 'Tools',
    difficulty: 'Beginner',
    icon: '🛠️',
    code: `# Example: Dockerfile for a Node.js app
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]`,
    tips: [
      'Use Git for version control',
      'CI/CD tools like Jenkins automate testing & deployment',
      'Kubernetes manages containerized applications at scale'
    ]
  }
];

const Intro = () => {
  const chatRef = useRef(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative space-y-8 pb-20">
      <h1 className="text-3xl font-bold text-white mb-4">⚙️ DevOps Introduction</h1>
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
              <CodeBlock code={note.code} language="yaml" />
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

      {/* Chat Section - unchanged */}
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

export default Intro;
