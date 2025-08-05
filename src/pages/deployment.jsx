
import React, { useState } from 'react';

const Deployment = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const notes = [
    {
      title: 'Heroku Deployment',
      description: 'Heroku is a platform-as-a-service (PaaS) that simplifies deploying, managing, and scaling web applications.',
      category: 'Cloud Platforms',
      difficulty: 'Intermediate',
      icon: '☁️',
      code: `heroku create my-app
git push heroku main
heroku open`,
      tips: [
        'Use a Procfile to define app processes',
        'Set environment variables with heroku config:set',
        'Monitor logs with heroku logs --tail',
      ],
    },
    {
      title: 'Docker Basics',
      description: 'Docker containerizes applications, ensuring consistent environments across development and production.',
      category: 'Containerization',
      difficulty: 'Intermediate',
      icon: '🐳',
      code: `FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`,
      tips: [
        'Use multi-stage builds to reduce image size',
        'Expose only necessary ports',
        'Use .dockerignore to exclude unnecessary files',
      ],
    },
    {
      title: 'CI/CD Pipelines',
      description: 'Continuous Integration/Continuous Deployment automates testing and deployment using tools like GitHub Actions.',
      category: 'Automation',
      difficulty: 'Advanced',
      icon: '⚙️',
      code: `name: CI/CD Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test`,
      tips: [
        'Cache dependencies for faster builds',
        'Run tests before deployment',
        'Use secrets for sensitive data',
      ],
    },
    {
      title: 'Static Site Hosting (Netlify/Vercel)',
      description: 'Netlify and Vercel provide easy deployment for static sites with automatic scaling and domain management.',
      category: 'Cloud Platforms',
      difficulty: 'Beginner',
      icon: '🌐',
      code: `netlify deploy --prod
vercel --prod`,
      tips: [
        'Enable auto-deploys from Git',
        'Use environment variables for secrets',
        'Optimize assets before deployment',
      ],
    },
    {
      title: 'Cloud Hosting (AWS/GCP)',
      description: 'Cloud platforms like AWS and GCP offer scalable hosting for dynamic applications.',
      category: 'Cloud Platforms',
      difficulty: 'Advanced',
      icon: '☁️',
      code: `aws elasticbeanstalk create-application-version --application-name my-app
eb deploy`,
      tips: [
        'Use IAM roles for secure access',
        'Monitor costs with AWS Budgets',
        'Use Auto Scaling for traffic spikes',
      ],
    },
  ];

  const categories = ['All', ...new Set(notes.map((note) => note.category))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredNotes = notes.filter((note) => {
    const categoryMatch = selectedCategory === 'All' || note.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || note.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Deployment Learning Hub</h1>
          <p className="text-purple-200 text-lg">
            Learn to deploy web applications with modern platforms
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <label className="text-white font-medium">Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-purple-500/20 backdrop-blur-sm text-white border border-purple-300/40 rounded-lg px-3 py-2"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-white font-medium">Difficulty:</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-purple-500/20 backdrop-blur-sm text-white border border-purple-300/40 rounded-lg px-3 py-2"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredNotes.map((note, idx) => (
            <div
              key={idx}
              className="bg-[#24193b] p-6 rounded-lg shadow-md hover:bg-white/15 transition-all border border-white/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{note.icon}</span>
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">{note.title}</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-200 text-sm">{note.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(note.difficulty)}`}>
                        {note.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 mb-4 leading-relaxed">{note.description}</p>
              {note.code && (
                <div className="mb-4">
                  <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-sm border border-white/10">
                    <code className="text-green-300 font-mono">{note.code}</code>
                  </pre>
                </div>
              )}
              {note.tips && (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="text-purple-300 font-medium mb-2 flex items-center gap-2">
                    💡 Pro Tips
                  </h3>
                  <ul className="space-y-1">
                    {note.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-purple-200">
          <p>Keep learning and happy deploying! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Deployment;
