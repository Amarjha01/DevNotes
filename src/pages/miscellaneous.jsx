
import React, { useState } from 'react';

const Miscellaneous = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const notes = [
    {
      title: 'Git and Version Control',
      description: 'Git is a distributed version control system for tracking changes in source code during development.',
      category: 'Version Control',
      difficulty: 'Beginner',
      icon: '🔀',
      code: `git init
git add .
git commit -m "Initial commit"
git push origin main`,
      tips: [
        'Use meaningful commit messages',
        'Branch often for features or fixes',
        'Pull frequently to avoid conflicts',
      ],
    },
    {
      title: 'Testing (Unit/Integration)',
      description: 'Testing ensures code reliability using tools like Jest for unit tests and Cypress for end-to-end tests.',
      category: 'Testing',
      difficulty: 'Intermediate',
      icon: '🧪',
      code: `import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button />);
  expect(screen.getByText('Click')).toBeInTheDocument();
});`,
      tips: [
        'Use describe blocks to group related tests',
        'Mock API calls to avoid network dependencies',
        'Run tests in CI for continuous validation',
      ],
    },
    {
      title: 'Web Accessibility (a11y)',
      description: 'Accessibility ensures websites are usable by everyone, including those with disabilities, using ARIA and semantic HTML.',
      category: 'Accessibility',
      difficulty: 'Intermediate',
      icon: '♿',
      code: `<button aria-label="Close modal">X</button>
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>`,
      tips: [
        'Test with screen readers like NVDA or VoiceOver',
        'Ensure keyboard navigation for all interactive elements',
        'Use semantic HTML (e.g., <nav>, <main>)',
      ],
    },
    {
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
    },
    {
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
          <h1 className="text-4xl font-bold text-white mb-2">Miscellaneous Learning Hub</h1>
          <p className="text-purple-200 text-lg">
            Master essential web development tools and concepts
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
          <p>Keep learning and happy coding! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
