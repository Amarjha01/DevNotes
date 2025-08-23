import React, { useRef } from 'react';
import Chat from '../Chat';
import { GoChevronDown } from "react-icons/go";

const notes = [
  {
    title: 'What is CI/CD?',
    description: (
      <span>
        <span className="block text-2xl font-bold text-white mb-2">
          CI/CD means Continuous Integration and Continuous Deployment.
        </span>
        <span>
          It is a modern software development practice that <b>automates</b> the process of integrating every code change, <b>running tests</b>, and <b>delivering applications</b> into production environments. <br />
          <br />
          With CI/CD, teams can deliver features, updates, and bug fixes to users <b>quickly, reliably, and frequently</b>—helping software products improve faster and reducing manual work and errors.
        </span>
      </span>
    ),
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🚀',
    code: `# Example: GitHub Actions CI/CD workflow
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
      'Automates testing and deployment',
      'Reduces manual errors',
      'Supports faster feedback loops'
    ]
  },
  {
    title: 'CI/CD Pipeline Stages',
    description: 'Typical stages include: Build, Test, Release, Deploy, and Monitor. Each stage can be automated using tools like Jenkins, GitHub Actions, or GitLab CI.',
    category: 'Pipeline',
    difficulty: 'Beginner',
    icon: '🔄',
    code: `# CI/CD Stages Example
Build -> Test -> Release -> Deploy -> Monitor`,
    tips: [
      'Each stage can run automatically on code changes',
      'Monitoring ensures reliability in production',
      'Rollback mechanisms are important for failures'
    ]
  },
  {
    title: 'Popular CI/CD Tools',
    description: 'Common CI/CD tools: Jenkins, GitHub Actions, GitLab CI, CircleCI, TravisCI, and Azure DevOps.',
    category: 'Tools',
    difficulty: 'Beginner',
    icon: '🛠️',
    code: `# Example: Jenkins Pipeline (Declarative)
pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "Deploying application..."'
      }
    }
  }
}`,
    tips: [
      'Choose tools based on team size and project requirements',
      'Use pipeline as code for version control',
      'Automate testing to catch issues early'
    ]
  }
];

const CICD = () => {
  const chatRef = useRef(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative space-y-8 pb-20">
      <h1 className="text-3xl font-bold text-white mb-4">🚀 CI/CD Pipelines & Automation</h1>
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

      {/* Chat Section (style unchanged) */}
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

export default CICD;
