import React, { useRef } from 'react';
import Chat from '../Chat';
import { GoChevronDown } from "react-icons/go";

const notes = [
  {
    title: 'What is Docker?',
    description: 'Docker is a platform for developing, shipping, and running applications in lightweight containers. Containers package an application with all its dependencies to ensure it runs consistently across environments.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🐳',
    code: `# Example: Docker Commands
# Build Docker image
docker build -t my-app .

# Run Docker container
docker run -d -p 3000:3000 my-app

# List running containers
docker ps`,
    tips: [
      'Containers are isolated environments for applications',
      'Use Dockerfiles to define container configuration',
      'Docker simplifies deployment and scalability'
    ]
  },
  {
    title: 'Dockerfile Basics',
    description: 'A Dockerfile defines how a Docker image is built. It specifies the base image, application code, dependencies, and commands to run.',
    category: 'Dockerfile',
    difficulty: 'Beginner',
    icon: '📄',
    code: `# Dockerfile Example
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]`,
    tips: [
      'Keep Dockerfile simple and clean',
      'Minimize image size for faster deployment',
      'Use multi-stage builds for optimization'
    ]
  },
  {
    title: 'Docker Compose',
    description: 'Docker Compose allows you to define and run multi-container Docker applications using a single YAML file.',
    category: 'Tools',
    difficulty: 'Beginner',
    icon: '⚙️',
    code: `# docker-compose.yml Example
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  redis:
    image: "redis:alpine"`,
    tips: [
      'Compose simplifies running multi-container apps',
      'Use volume mapping for persistent data',
      'Define environment variables in YAML for configuration'
    ]
  }
];

const Docker = () => {
  const chatRef = useRef(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative space-y-8 pb-20">
      <h1 className="text-3xl font-bold text-white mb-4">🐳 Docker Containers</h1>
      {notes.map((note, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-green-700 via-teal-600 to-cyan-500 text-white p-6 rounded-2xl shadow-md border border-gray-700/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{note.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-200 mt-1">
                  {note.category} · {note.difficulty}
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-200 mb-4">{note.description}</p>

          {note.code && (
            <div className="mb-4">
              <div className="text-sm font-medium text-purple-200 mb-1">Example Code:</div>
              <pre className="bg-[#1e1e2f] text-sm text-emerald-200 rounded-md p-4 overflow-x-auto whitespace-pre-wrap">
                <code>{note.code}</code>
              </pre>
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

export default Docker;
