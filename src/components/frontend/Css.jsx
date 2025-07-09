// components/frontend/Css.jsx
import React, { useState, useEffect } from 'react';

const Css = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
  }, []);

  const toggleCard = (index) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

   const notes = [
    {
      title: 'What is CSS?',
      description: 'CSS (Cascading Style Sheets) is used to style and layout web pages, controlling the visual presentation of HTML elements.',
      category: 'Basics',
      difficulty: 'Beginner',
      icon: '🎨',
      tips: [
        'CSS separates content from presentation',
        'Cascading means styles can be overridden',
        'CSS makes websites visually appealing and user-friendly'
      ],
      example: 'CSS transforms plain HTML into beautiful, styled websites.'
    },
    {
      title: 'Types of CSS',
      description: 'CSS can be applied in three ways: Inline, Internal (within <style> tags), and External (linked using a .css file).',
      category: 'Basics',
      difficulty: 'Beginner',
      icon: '📝',
      code: `/* 1. Inline CSS */
<p style="color: red; font-size: 16px;">Red text</p>

/* 2. Internal CSS */
<style>
  p { color: blue; }
</style>

/* 3. External CSS (styles.css) */
p {
  color: green;
  font-size: 18px;
}`,
      tips: [
        'External CSS is most maintainable',
        'Inline CSS has highest specificity',
        'Use internal CSS for single-page styles'
      ]
    },
    {
      title: 'CSS Selectors',
      description: 'Selectors target HTML elements to apply styles. Master different selector types for precise styling control.',
      category: 'Selectors',
      difficulty: 'Beginner',
      icon: '🎯',
      code: `/* Element selector */
p { color: red; }

/* ID selector */
#title { 
  font-size: 24px; 
  font-weight: bold;
}

/* Class selector */
.container { 
  padding: 20px;
  margin: 10px;
}

/* Attribute selector */
input[type="text"] {
  border: 1px solid #ccc;
}

/* Pseudo-class selector */
a:hover {
  color: blue;
  text-decoration: underline;
}

/* Descendant selector */
.container p {
  line-height: 1.6;
}`,
      tips: [
        'Use classes for reusable styles',
        'IDs are unique and have high specificity',
        'Combine selectors for more precise targeting'
      ]
    },
    {
      title: 'Box Model',
      description: 'Every HTML element is a box composed of margin, border, padding, and content. Understanding the box model is crucial for layout control.',
      category: 'Layout',
      difficulty: 'Intermediate',
      icon: '📦',
      code: `/* Complete box model example */
.box {
  /* Content area */
  width: 200px;
  height: 100px;
  
  /* Padding (inside the border) */
  padding: 20px;
  
  /* Border */
  border: 2px solid #333;
  
  /* Margin (outside the border) */
  margin: 10px;
  
  /* Box-sizing property */
  box-sizing: border-box; /* includes padding and border in width/height */
}

/* Visual representation */
.box-model-demo {
  background: #f0f0f0;
  border: 5px solid #333;
  padding: 15px;
  margin: 20px;
}`,
      tips: [
        'Use box-sizing: border-box for easier calculations',
        'Margin collapse can affect vertical spacing',
        'Use developer tools to visualize the box model'
      ]
    },
    {
      title: 'Positioning in CSS',
      description: 'The position property defines how elements are positioned on the page. Master different positioning methods for precise layout control.',
      category: 'Layout',
      difficulty: 'Intermediate',
      icon: '📍',
      code: `/* Static positioning (default) */
.static {
  position: static;
}

/* Relative positioning */
.relative {
  position: relative;
  top: 10px;
  left: 20px;
}

/* Absolute positioning */
.absolute {
  position: absolute;
  top: 50px;
  right: 0;
}

/* Fixed positioning */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

/* Sticky positioning */
.sticky {
  position: sticky;
  top: 0;
  background: white;
}`,
      tips: [
        'Relative positioning creates a new stacking context',
        'Absolute positioning removes element from normal flow',
        'Fixed positioning is relative to the viewport'
      ]
    },
    {
      title: 'Flexbox',
      description: 'A powerful one-dimensional layout method that enables efficient alignment and distribution of space among items in a container.',
      category: 'Layout',
      difficulty: 'Intermediate',
      icon: '🔧',
      code: `/* Flex container */
.container {
  display: flex;
  
  /* Main axis alignment */
  justify-content: center; /* flex-start, flex-end, space-between, space-around */
  
  /* Cross axis alignment */
  align-items: center; /* flex-start, flex-end, stretch, baseline */
  
  /* Direction */
  flex-direction: row; /* row, row-reverse, column, column-reverse */
  
  /* Wrap */
  flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
  
  /* Gap between items */
  gap: 20px;
}

/* Flex items */
.item {
  flex: 1; /* flex-grow, flex-shrink, flex-basis */
  min-width: 200px;
}

/* Specific flex properties */
.flex-item-1 {
  flex-grow: 1;
}

.flex-item-2 {
  flex-grow: 2;
  align-self: flex-end;
}`,
      tips: [
        'Use flexbox for one-dimensional layouts',
        'flex: 1 makes items grow equally',
        'align-self overrides align-items for specific items'
      ]
    },
    {
      title: 'Grid Layout',
      description: 'CSS Grid Layout is a two-dimensional system for web layout, allowing you to create complex layouts with rows and columns.',
      category: 'Layout',
      difficulty: 'Advanced',
      icon: '🎛️',
      code: `/* Grid container */
.container {
  display: grid;
  
  /* Define columns */
  grid-template-columns: 1fr 2fr 1fr; /* or repeat(3, 1fr) */
  
  /* Define rows */
  grid-template-rows: 100px auto 50px;
  
  /* Gap between items */
  gap: 20px;
  
  /* Grid areas */
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

/* Grid items */
.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

/* Alternative positioning */
.item {
  grid-column: 1 / 3; /* span from column 1 to 3 */
  grid-row: 2 / 4; /* span from row 2 to 4 */
}`,
      tips: [
        'Use grid for two-dimensional layouts',
        'fr unit represents fractional units',
        'Grid areas make complex layouts easier to manage'
      ]
    },
    {
      title: 'Media Queries',
      description: 'Media queries enable responsive design by applying CSS based on device characteristics like screen size, orientation, and resolution.',
      category: 'Responsive',
      difficulty: 'Intermediate',
      icon: '📱',
      code: `/* Mobile-first approach */
/* Base styles for mobile */
.container {
  padding: 10px;
  font-size: 16px;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 20px;
    font-size: 18px;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Orientation-based styles */
@media (orientation: landscape) {
  .hero {
    height: 50vh;
  }
}

/* High-resolution displays */
@media (min-resolution: 2dppx) {
  .logo {
    background-image: url('logo-2x.png');
  }
}`,
      tips: [
        'Use mobile-first design approach',
        'Test breakpoints on actual devices',
        'Consider both min-width and max-width queries'
      ]
    },
    {
      title: 'Z-index and Stacking Context',
      description: 'Z-index controls the vertical stacking order of elements. Understanding stacking contexts is crucial for proper layering.',
      category: 'Layout',
      difficulty: 'Advanced',
      icon: '🏗️',
      code: `/* Basic z-index */
.modal {
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
}

.modal-content {
  position: relative;
  z-index: 1001;
  background: white;
}

/* Stacking context creation */
.stacking-context {
  position: relative;
  z-index: 1;
  /* This creates a new stacking context */
}

/* Common stacking order */
.background {
  z-index: -1;
}

.content {
  z-index: 1;
}

.navigation {
  z-index: 100;
}

.modal {
  z-index: 1000;
}

.tooltip {
  z-index: 9999;
}`,
      tips: [
        'Z-index only works on positioned elements',
        'Higher z-index values stack on top',
        'Stacking contexts can isolate z-index values'
      ]
    }
  ];

  const categories = ['All', ...new Set(notes.map(note => note.category))];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/10';
      case 'Advanced': return 'text-red-400 bg-red-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  return (
    <div className="space-y-8 text-base lg:text-lg">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="text-6xl">🎨</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CSS Mastery
          </h1>
        </div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Transform your web designs with powerful CSS techniques, from basic styling to advanced layout systems.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search CSS concepts..."
            className="w-full px-4 py-3 pl-12 bg-[#2a1640] border border-purple-800/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>{filteredNotes.length} concept{filteredNotes.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-1">
        {filteredNotes.map((note, index) => (
          <div 
            key={index}
            className={`group bg-gradient-to-br from-[#2a1640] to-[#1a0f2e] border border-purple-800/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${
              animateCards ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Card Header */}
            <div className="p-6 border-b border-purple-800/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{note.icon}</div>
                  <div>
                    <h2 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {note.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                        {note.category}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(note.difficulty)}`}>
                        {note.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                {note.code && (
                  <button
                    onClick={() => toggleCard(index)}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <svg 
                      className={`w-5 h-5 transform transition-transform duration-200 ${
                        expandedCards.has(index) ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">{note.description}</p>
              {note.example && (
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                  <p className="text-blue-300 text-sm">
                    <span className="font-semibold">Example:</span> {note.example}
                  </p>
                </div>
              )}
              {note.code && (
                <div className={`transition-all duration-300 ${
                  expandedCards.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-400">CSS Code:</span>
                      <button
                        onClick={() => copyToClipboard(note.code)}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </button>
                    </div>
                    <pre className="bg-black/50 border border-gray-700 rounded-lg p-4 text-sm overflow-x-auto">
                      <code className="text-green-300 whitespace-pre-wrap">{note.code}</code>
                    </pre>
                  </div>
                </div>
              )}
              {note.tips && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-purple-400 mb-2">💡 Pro Tips:</h3>
                  <ul className="space-y-1">
                    {note.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl text-gray-400 mb-2">No CSS concepts found</h3>
          <p className="text-gray-500">Try adjusting your search terms or category filter</p>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Css;
