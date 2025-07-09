// components/frontend/Html.jsx
import React, { useState, useEffect } from 'react';

const Html = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
      title: 'What is HTML?',
      description: 'HTML (HyperText Markup Language) is the standard language for creating web pages and web applications.',
      category: 'Basics',
      difficulty: 'Beginner',
      icon: '🌐',
      tips: [
        'HTML provides the structure and content of web pages',
        'It uses markup tags to define different elements',
        'HTML is the foundation of all web development'
      ]
    },
    {
      title: 'Basic Structure of HTML Document',
      description: 'Every HTML document follows a standard structure with DOCTYPE, html, head, and body tags.',
      category: 'Structure',
      difficulty: 'Beginner',
      icon: '🏗️',
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`,
      tips: [
        'DOCTYPE declares the document type',
        'The html element is the root element',
        'Head contains metadata, body contains visible content'
      ]
    },
    {
      title: 'Common HTML Tags',
      description: 'Essential HTML tags for structuring content and creating meaningful markup.',
      category: 'Tags',
      difficulty: 'Beginner',
      icon: '🏷️',
      examples: [
        { tag: '<h1> to <h6>', description: 'Heading tags for different levels' },
        { tag: '<p>', description: 'Paragraph text' },
        { tag: '<a>', description: 'Links and navigation' },
        { tag: '<img>', description: 'Images and media' },
        { tag: '<div>', description: 'Generic container' },
        { tag: '<span>', description: 'Inline container' }
      ]
    },
    {
      title: 'HTML Forms',
      description: 'Forms are used to collect user input. The <form> element wraps input, select, textarea, and button elements.',
      category: 'Forms',
      difficulty: 'Intermediate',
      icon: '📝',
      code: `<form action="/submit" method="post">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <button type="submit">Submit</button>
</form>`,
      tips: [
        'Always use labels for accessibility',
        'Include proper input validation',
        'Use semantic form elements'
      ]
    },
    {
      title: 'Semantic Elements',
      description: 'Semantic elements clearly describe their meaning to both browsers and developers.',
      category: 'Semantics',
      difficulty: 'Intermediate',
      icon: '🎯',
      code: `<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <section>
      <h2>Article Title</h2>
      <p>Article content...</p>
    </section>
  </article>
</main>

<footer>
  <p>&copy; 2024 My Website</p>
</footer>`,
      tips: [
        'Improves accessibility and SEO',
        'Makes code more readable',
        'Helps screen readers understand content'
      ]
    },
    {
      title: 'Multimedia Elements',
      description: 'HTML supports embedding audio and video content using specialized tags.',
      category: 'Media',
      difficulty: 'Intermediate',
      icon: '🎵',
      code: `<!-- Video -->
<video controls width="400" height="300">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`,
      tips: [
        'Always provide multiple format options',
        'Include fallback content for older browsers',
        'Use proper controls and accessibility attributes'
      ]
    },
    {
      title: 'HTML Tables',
      description: 'Tables are used to display tabular data in rows and columns.',
      category: 'Tables',
      difficulty: 'Intermediate',
      icon: '📊',
      code: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>London</td>
    </tr>
  </tbody>
</table>`,
      tips: [
        'Use thead, tbody, and tfoot for structure',
        'Add scope attributes for accessibility',
        'Consider responsive table design'
      ]
    },
    {
      title: 'HTML Lists',
      description: 'HTML provides ordered and unordered lists to organize content.',
      category: 'Lists',
      difficulty: 'Beginner',
      icon: '📝',
      code: `<!-- Unordered List -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
      tips: [
        'Use unordered lists for related items',
        'Use ordered lists for sequential items',
        'Consider nested lists for hierarchical content'
      ]
    },
    {
      title: 'HTML Attributes',
      description: 'Attributes provide additional information about elements and modify their behavior.',
      category: 'Attributes',
      difficulty: 'Beginner',
      icon: '🔧',
      examples: [
        { attr: 'href', description: 'URL for links', example: '<a href="https://example.com">Link</a>' },
        { attr: 'src', description: 'Source for images/media', example: '<img src="image.jpg" alt="Description">' },
        { attr: 'alt', description: 'Alternative text for accessibility', example: '<img src="photo.jpg" alt="A beautiful sunset">' },
        { attr: 'class', description: 'CSS class names', example: '<div class="container">Content</div>' },
        { attr: 'id', description: 'Unique identifier', example: '<div id="main-content">Content</div>' }
      ],
      tips: [
        'Use meaningful attribute values',
        'Quote all attribute values',
        'Consider accessibility when using attributes'
      ]
    }
  ];

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/10';
      case 'Advanced': return 'text-red-400 bg-red-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="text-6xl">🌐</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            HTML Mastery
          </h1>
        </div>
        <p className=" text-2xl lg:text-lg text-gray-300 max-w-2xl mx-auto">
          Master the building blocks of the web with comprehensive HTML concepts, examples, and best practices.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search HTML concepts..."
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
        
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>{filteredNotes.length} concept{filteredNotes.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
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
                  <div className="text-5xl lg:text-3xl">{note.icon}</div>
                  <div>
                    <h2 className="text-4xl lg:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {note.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl lg:text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">
                        {note.category}
                      </span>
                      {note.difficulty && (
                        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(note.difficulty)}`}>
                          {note.difficulty}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {(note.code || note.examples) && (
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
              <p className="text-gray-300 leading-relaxed text-3xl lg:text-xl">{note.description}</p>

              {/* Code Block */}
              {note.code && (
                <div className={`transition-all duration-300 ${
                  expandedCards.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="relative">
                    <pre className="bg-black/40 border border-gray-700 rounded-lg p-4 text-sm overflow-x-auto">
                      <code className="text-green-300">{note.code}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(note.code)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                      title="Copy code"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Examples */}
              {note.examples && (
                <div className={`transition-all duration-300 ${
                  expandedCards.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="space-y-3">
                    {note.examples.map((example, i) => (
                      <div key={i} className="bg-black/20 border border-gray-700 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <code className="text-orange-300 font-mono text-sm">{example.tag || example.attr}</code>
                          <span className="text-gray-400 text-sm">-</span>
                          <span className="text-gray-300 text-sm">{example.description}</span>
                        </div>
                        {example.example && (
                          <code className="text-green-300 text-xs block mt-1">{example.example}</code>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tips */}
              {note.tips && (
                <div className="mt-4">
                  <h3 className=" text-3xl  lg:text-sm font-semibold text-purple-400 mb-2">💡 Pro Tips:</h3>
                  <ul className="space-y-1">
                    {note.tips.map((tip, i) => (
                      <li key={i} className="text-2xl  lg:text-sm text-gray-400 flex items-start gap-2">
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

      {/* No Results */}
      {filteredNotes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl text-gray-400 mb-2">No concepts found</h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      )}

      {/* CSS Animations */}
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

export default Html;