// components/frontend/Tailwindcss.jsx
import React from 'react';
import Chat from '../Chat';

const TailwindCss = () => {
  const notes = [
    {
      title: 'What is Tailwind CSS?',
      description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides low-level utility classes to build complex designs without leaving your HTML.'
    },
    {
      title: 'Installation',
      description: 'You can install Tailwind via npm and configure it in your project.',
      code: `npm install -D tailwindcss
npx tailwindcss init`
    },
    {
      title: 'Basic Configuration',
      description: 'Tailwind uses a config file `tailwind.config.js` where you can customize theme, extend utilities, etc.',
      code: `module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}`
    },
    {
      title: 'Utility Classes',
      description: 'Tailwind provides utilities for margin, padding, color, flexbox, grid, typography, etc.',
      code: `<div className="bg-blue-500 text-white p-4 rounded">Hello Tailwind</div>`
    },
    {
      title: 'Responsive Design',
      description: 'Tailwind supports responsive design with breakpoints like `sm`, `md`, `lg`, and `xl`.',
      code: `<div className="text-sm md:text-lg">Responsive Text</div>`
    },
    {
      title: 'Dark Mode',
      description: 'Enable dark mode in your Tailwind config using `class` or `media` strategy.',
      code: `module.exports = {
  darkMode: 'class',
  // ...
}`
    },
    {
      title: 'Custom Themes',
      description: 'You can extend Tailwinds default theme with your own colors, fonts, and spacing.'
    },
    {
      title: 'Animations & Transitions',
      description: 'Tailwind includes utilities for transitions, keyframes, and animation delays.',
      code: `<button className="transition duration-300 hover:scale-105">Hover Me</button>`
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">Tailwind CSS Notes</h1>
      {notes.map((note, idx) => (
        <div key={idx} className="bg-[#24193b] p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-300 mb-2">{note.title}</h2>
          <p className="mb-2 text-gray-200">{note.description}</p>
          {note.code && (
            <pre className="bg-black/40 p-3 text-sm rounded overflow-x-auto text-green-300">
              <code>{note.code}</code>
            </pre>
          )}
        </div>
      ))}
      <Chat/>
    </div>
  );
};

export default TailwindCss;
