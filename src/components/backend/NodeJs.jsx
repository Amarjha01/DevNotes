// pages/backend/Nodejs.jsx
import React from 'react';
import Chat from '../Chat';
import { useRef } from 'react';
import { GoChevronDown } from "react-icons/go";

const notes = [
  {
    title: 'What is Node.js?',
    description: 'Node.js is a runtime environment that lets you run JavaScript code on the server-side, outside of a browser.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🟢',
    code: `console.log('Node.js runs JavaScript on the server!');`,
    tips: [
      'Built on Chrome’s V8 engine',
      'Enables full-stack JS development',
      'Uses non-blocking, event-driven architecture'
    ]
  },
  {
    title: 'What is a Server?',
    description: 'A server is a system or program that responds to requests from clients, such as browsers or mobile apps.',
    category: 'Server Basics',
    difficulty: 'Beginner',
    icon: '🖥️',
    code: `// A simple idea of server
Client <---> Server <---> Database`,
    tips: [
      'Can be physical hardware or software',
      'Responds to HTTP requests',
      'Node.js helps create server apps easily'
    ]
  },
  {
    title: 'Types of Servers & Their Uses',
    description: 'Servers come in many forms: Web servers, Database servers, File servers, etc. Each serves specific purposes.',
    category: 'Server Types',
    difficulty: 'Beginner',
    icon: '📡',
    code: `Web Server    => Handles HTTP requests  
DB Server     => Manages database queries  
File Server   => Serves files like images, PDFs`,
    tips: [
      'Web server is most common in web dev',
      'Node.js is used to build custom web servers',
      'Each server type is optimized for its job'
    ]
  },
  {
    title: 'Creating HTTP Server in Node.js',
    description: 'Node.js allows creating raw HTTP servers using the built-in `http` module.',
    category: 'HTTP Server',
    difficulty: 'Beginner',
    icon: '🔗',
    code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js server!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`,
    tips: [
      'Use `http.createServer` to start',
      'Must listen on a port (e.g., 3000)',
      'Response must include header and end'
    ]
  }
];

const Nodejs = () => {
   // Ref for chat container
      const chatRef = useRef(null);
    
      // Scroll to chat section function
      const scrollToChat = () => {
        chatRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🟢 Node.js Basics</h1>
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
              <pre className="bg-[#1e1e2f] text-sm text-green-300 rounded-md p-4 overflow-x-auto whitespace-pre-wrap">
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
      

    {/* Chat container with ref */}
      <div ref={chatRef}>
        <Chat />
      </div>
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

export default Nodejs;
