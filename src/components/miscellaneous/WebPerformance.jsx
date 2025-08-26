
import React from 'react';
import CodeBlock from '../../components/common/CodeBlock'; 

const WebPerformance = () => {
  const note = {
    title: 'Web Performance Basics',
    description: 'Optimize web performance with techniques like lazy loading, code splitting, and image optimization.',
    category: 'Performance',
    difficulty: 'Advanced',
    icon: '⚡',
    code: `const LazyComponent = React.lazy(() => import('./Component'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`,
    tips: [
      'Use Lighthouse to audit performance',
      'Minify CSS and JavaScript for faster load times',
      'Optimize images with WebP format',
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
              <CodeBlock code={note.code} language="javascript" />
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

export default WebPerformance;
