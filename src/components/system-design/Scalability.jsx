// components/backend/Express.jsx
import React from 'react';

const notes = [
  {
    title: 'What is Scalability?',
    description: 'Scalability is the ability of a system to handle increasing load by adding resources like servers, CPUs, or storage.',
    category: 'Scalability',
    difficulty: 'Beginner',
    icon: '📈',
    code: `// Conceptual only
If Load ↑ => System still performs well with added resources`,
    tips: [
      'Ensures consistent performance as user base grows',
      'Can be vertical or horizontal',
      'A key goal in system design'
    ]
  },
  {
    title: 'Vertical vs Horizontal Scaling',
    description: 'Vertical scaling adds more power (CPU, RAM) to a single machine, while horizontal scaling adds more machines.',
    category: 'Scalability',
    difficulty: 'Beginner',
    icon: '📈',
    code: `// Vertical scaling
Upgrade server from 8GB RAM → 32GB RAM

// Horizontal scaling
Add Server 1, Server 2, Server 3...`,
    tips: [
      'Vertical is simpler but has hardware limits',
      'Horizontal allows distributed load',
      'Most web apps use horizontal scaling'
    ]
  },
  {
    title: 'Stateless vs Stateful Services',
    description: 'Stateless services can easily scale horizontally because they do not store user-specific data between requests.',
    category: 'Scalability',
    difficulty: 'Beginner',
    icon: '📈',
    code: `// Stateless example
app.get('/ping', (req, res) => res.send('pong'));`,
    tips: [
      'Stateless services are easier to replicate',
      'State should be stored in external systems (DB, Redis)',
      'Session-based systems are harder to scale'
    ]
  },
  {
    title: 'Auto-Scaling',
    description: 'Auto-scaling automatically adds or removes instances based on CPU, memory, or traffic thresholds.',
    category: 'Scalability',
    difficulty: 'Beginner',
    icon: '📈',
    code: `// AWS Auto-scaling group setup (conceptual)
// Rule: Add new instance if CPU > 80%`,
    tips: [
      'Optimizes cost and performance',
      'Used in cloud platforms like AWS, GCP, Azure',
      'Requires proper monitoring and health checks'
    ]
  },
  {
    title: 'Database Scaling',
    description: 'Databases can be scaled by sharding (horizontal) or read replicas (read scaling).',
    category: 'Scalability',
    difficulty: 'Beginner',
    icon: '📈',
    code: `// Read replica (PostgreSQL example)
Primary DB → Replica 1
          → Replica 2`,
    tips: [
      'Read replicas reduce load on primary',
      'Sharding helps with huge datasets',
      'Choose scaling method based on read/write pattern'
    ]
  },
  {
    title: 'Question: How do you scale a web app?',
    description: 'By decoupling layers, using load balancers, stateless services, caching, and horizontally scalable databases.',
    category: 'Scalability',
    difficulty: 'Beginner',
    icon: '📈',
    code: `// Example architecture
Client → Load Balancer → App Servers (stateless) → DB (replica/shard)`,
    tips: [
      'Use CDN for static content',
      'Move heavy jobs to async queues',
      'Monitor bottlenecks and auto-scale where needed'
    ]
  }
];






const Scalability = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🚀 Scalability</h1>
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

export default Scalability;
