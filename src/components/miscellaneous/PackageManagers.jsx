
import React from 'react';
import CodeBlock from '../../components/common/CodeBlock'; 

const PackageManagers = () => {
  const note = {
    title: 'Package Managers (npm/yarn)',
    description: 'Package managers like npm and Yarn manage project dependencies and scripts for JavaScript projects.',
    category: 'Tools',
    difficulty: 'Beginner',
    icon: '📦',
    code: `npm install react --save
npm start
npm run build`,
    tips: [
      'Use --save-dev for development dependencies',
      'Check package.json for version conflicts',
      'Use Yarn for faster installs in some cases',
    ],
  };

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
          <h1 className="text-4xl font-bold text-white mb-2">{note.title}</h1>
          <p className="text-purple-200 text-lg">{note.category}</p>
        </div>
        <div className="bg-[#24193b] p-6 rounded-lg shadow-md hover:bg-white/15 transition-all border border-white/20">
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
              <CodeBlock code={note.code} language="bash" />
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
        <div className="text-center mt-12 text-purple-200">
          <p>Keep learning and happy coding! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default PackageManagers;
