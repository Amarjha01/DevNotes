// components/backend/Express.jsx
import React from 'react';
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: 'What is a Load Balancer?',
    description: 'A Load Balancer distributes incoming traffic across multiple servers to ensure no single server gets overwhelmed.',
    category: 'Load Balancers',
    difficulty: 'Beginner',
    icon: '🌐',
    code: `// Load balancing concept
Client --> Load Balancer --> Server A
                          --> Server B
                          --> Server C`,
    tips: [
      'Improves availability and fault tolerance',
      'Can be hardware or software-based',
      'Sits between clients and backend servers'
    ]
  },
  {
    title: 'Types of Load Balancers',
    description: 'Common types include Layer 4 (Transport level) and Layer 7 (Application level) load balancers.',
    category: 'Load Balancers',
    difficulty: 'Beginner',
    icon: '🌐',
    code: `// Layer 4: based on IP/port (TCP/UDP)
// Layer 7: based on URL, headers, cookies`,
    tips: [
      'Layer 4 is faster and lower-level',
      'Layer 7 offers smart routing (e.g., by path)',
      'Use L7 for microservices and APIs'
    ]
  },
  {
    title: 'Load Balancing Algorithms',
    description: 'Algorithms define how requests are distributed: Round Robin, Least Connections, IP Hashing, etc.',
    category: 'Load Balancers',
    difficulty: 'Beginner',
    icon: '🌐',
    code: `// Round Robin example (simplified)
const servers = ['A', 'B', 'C'];
let i = 0;

function getNextServer() {
  const server = servers[i];
  i = (i + 1) % servers.length;
  return server;
}`,
    tips: [
      'Round Robin is default in many setups',
      'Least Connections balances based on load',
      'IP Hashing is useful for sticky sessions'
    ]
  },
  {
    title: 'Health Checks',
    description: 'Load balancers perform health checks to remove unhealthy servers from the rotation.',
    category: 'Load Balancers',
    difficulty: 'Beginner',
    icon: '🌐',
    code: `// Example: Health check endpoint
app.get('/health', (req, res) => res.status(200).send('OK'));`,
    tips: [
      'Helps route traffic only to healthy servers',
      'Used to auto-recover from crashes',
      'Combine with auto-scaling for robustness'
    ]
  },
  {
    title: 'Sticky Sessions',
    description: 'Sticky sessions ensure a user’s request always goes to the same server by using cookies or IP hashing.',
    category: 'Load Balancers',
    difficulty: 'Beginner',
    icon: '🌐',
    code: `// Sticky session concept
User A --> Server 1
User A (next req) --> Server 1 again`,
    tips: [
      'Used when server holds session state',
      'Can break fault tolerance if not managed well',
      'Prefer stateless design for scalability'
    ]
  },
  {
    title: 'Question: Why use a load balancer?',
    description: 'Load balancers enhance scalability, availability, and reliability by evenly distributing traffic and avoiding overload.',
    category: 'Load Balancers',
    difficulty: 'Beginner',
    icon: '🌐',
    code: `// Without load balancer
Client --> Server A (overloaded)

// With load balancer
Client --> Load Balancer --> A/B/C`,
    tips: [
      'Distributes load, preventing single point of failure',
      'Supports blue-green deployment and scaling',
      'Essential for modern web infrastructure'
    ]
  }
];





const LoadBalancer = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🚀 Load Balancer</h1>
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

export default LoadBalancer;
