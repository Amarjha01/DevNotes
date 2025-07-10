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
  },
   {
    title: 'CSS Units',
    description: 'CSS units define the size of elements. Common units include absolute and relative units.',
    category: 'Basics',
    difficulty: 'Beginner',
    icon: '📏',
    code: `/* Absolute units */
div { width: 100px; height: 50mm; }

/* Relative units */
.container {
  width: 80%;
  font-size: 1.2em;
  padding: 2rem;
}`,
    tips: [
      'px, cm, mm are absolute',
      '% and em depend on parent elements',
      'rem is relative to root element'
    ],
    example: 'Use rem for scalable layouts and em for nested flexibility.'
  },
  {
    title: 'CSS Colors',
    description: 'CSS supports colors via names, HEX codes, RGB, RGBA, HSL, and HSLA.',
    category: 'Basics',
    difficulty: 'Beginner',
    icon: '🎨',
    code: `/* Named color */
color: red;

/* Hex */
color: #ff5733;

/* RGB */
color: rgb(255, 0, 0);

/* RGBA */
color: rgba(0, 0, 0, 0.5);`,
    tips: [
      'RGBA adds transparency',
      'Use HEX for compatibility',
      'Use HSL for hue-based manipulation'
    ]
  },
  {
    title: 'Text Styling in CSS',
    description: 'Style and align text using font, size, spacing, weight, and decoration.',
    category: 'Typography',
    difficulty: 'Beginner',
    icon: '✍️',
    code: `.title {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  letter-spacing: 2px;
  word-spacing: 5px;
}`,
    tips: [
      'Use system fonts or import Google Fonts',
      'Combine spacing properties for better readability',
      'Avoid overusing fonts on one page'
    ]
  },
  {
    title: 'Backgrounds in CSS',
    description: 'Style element backgrounds with color, images, gradients, and multiple layers.',
    category: 'Styling',
    difficulty: 'Intermediate',
    icon: '🌄',
    code: `.box {
  background-color: #eee;
  background-image: url('bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}`,
    tips: [
      'Use gradients with `background-image: linear-gradient(...)`',
      'Use background-size: cover for full coverage',
      'Use multiple backgrounds with comma-separated values'
    ]
  },
  {
    title: 'Borders & Outlines',
    description: 'Borders add edges around elements. Outlines are like borders but don’t affect layout.',
    category: 'Styling',
    difficulty: 'Beginner',
    icon: '🖍️',
    code: `.box {
  border: 2px solid black;
  border-radius: 10px;
  outline: 2px dashed red;
}`,
    tips: [
      'Use border-radius for rounded corners',
      'Outlines do not take space',
      'Border can be styled: dashed, dotted, double, etc.'
    ]
  },
  {
    title: 'CSS Shadows',
    description: 'Add depth and emphasis using text-shadow and box-shadow.',
    category: 'Styling',
    difficulty: 'Intermediate',
    icon: '🌫️',
    code: `.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.title {
  text-shadow: 1px 1px 3px #888;
}`,
    tips: [
      'Use subtle shadows for professional look',
      'Multiple shadows can be comma-separated',
      'Avoid overuse to maintain performance'
    ]
  },
  {
    title: 'CSS Transitions',
    description: 'Transitions animate changes in CSS properties over time.',
    category: 'Animation',
    difficulty: 'Intermediate',
    icon: '⏳',
    code: `.btn {
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: blue;
}`,
    tips: [
      'Transition works only on animatable properties',
      'Add delay and timing functions for smooth effects',
      'Combine multiple properties: `transition: all 0.3s ease;`'
    ]
  },
  {
    title: 'CSS Animations',
    description: 'Create complex animations using @keyframes and animation properties.',
    category: 'Animation',
    difficulty: 'Advanced',
    icon: '🎞️',
    code: `@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}

.box {
  animation: slide 1s ease-in-out infinite;
}`,
    tips: [
      'Use `animation-name` and `animation-duration`',
      'Use infinite loop or alternate directions',
      'Combine with transform for powerful effects'
    ]
  },
  {
    title: 'Pseudo-classes',
    description: 'Pseudo-classes define the special states of elements (hover, focus, nth-child, etc).',
    category: 'Selectors',
    difficulty: 'Intermediate',
    icon: '👁️',
    code: `a:hover {
  color: red;
}

input:focus {
  border: 2px solid blue;
}

li:nth-child(odd) {
  background: #f0f0f0;
}`,
    tips: [
      'Use hover/focus for interactivity',
      'nth-child helps in styling lists or grids',
      'Combine with classes for dynamic behavior'
    ]
  },
  {
    title: 'CSS Variables (Custom Properties)',
    description: 'CSS variables allow you to reuse values throughout your stylesheet.',
    category: 'Advanced',
    difficulty: 'Advanced',
    icon: '🧬',
    code: `:root {
  --primary-color: #007bff;
  --padding: 10px;
}

.btn {
  background: var(--primary-color);
  padding: var(--padding);
}`,
    tips: [
      'Define global variables in `:root`',
      'Use `var(--name)` to access values',
      'Can be overridden within specific selectors'
    ]
  },

  {
    title: 'Custom Fonts with @font-face',
    description: 'The @font-face rule allows you to define and use custom fonts in your website.',
    category: 'Typography',
    difficulty: 'Intermediate',
    icon: '🔤',
    code: `@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2');
}

body {
  font-family: 'MyFont', sans-serif;
}`,
    tips: [
      'Always include fallback fonts',
      'Use WOFF2 format for performance',
      'Avoid using too many custom fonts for faster load time'
    ]
  },

  {
    title: 'Dark Mode using prefers-color-scheme',
    description: 'You can automatically apply dark or light themes using this media query.',
    category: 'Responsive',
    difficulty: 'Intermediate',
    icon: '🌙',
    code: `@media (prefers-color-scheme: dark) {
  body {
    background-color: #111;
    color: #eee;
  }
}`,
    tips: [
      'Use with CSS variables for easy theming',
      'Supports system-level theme preference',
      'Combine with toggle switches for user control'
    ]
  },

  {
    title: 'Print Media Queries',
    description: 'Apply styles when the webpage is printed using @media print.',
    category: 'Responsive',
    difficulty: 'Intermediate',
    icon: '🖨️',
    code: `@media print {
  nav, footer {
    display: none;
  }

  body {
    font-size: 12pt;
  }
}`,
    tips: [
      'Hide non-essential UI components',
      'Use pt instead of px for print-specific font sizes',
      'Ensure printable content is readable and simple'
    ]
  },

  {
    title: 'Utility-First CSS (Concept)',
    description: 'This approach uses small utility classes (e.g., .mt-4, .text-center) for faster, scalable styling.',
    category: 'Methodology',
    difficulty: 'Intermediate',
    icon: '🧩',
    example: `<div class="p-4 text-center bg-gray-100">
  Utility-based design
</div>`,
    tips: [
      'Common in Tailwind CSS',
      'Reduces custom CSS writing',
      'Promotes consistency across the UI'
    ]
  },

  {
    title: 'Sticky Position',
    description: 'Combines relative and fixed positioning, sticking an element within its parent container.',
    category: 'Layout',
    difficulty: 'Intermediate',
    icon: '📌',
    code: `.header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}`,
    tips: [
      'Requires top, left, right, or bottom to activate',
      'Parent container must have height',
      'Commonly used for sticky headers'
    ]
  },

  {
    title: ':is() and :where() Selectors',
    description: 'These pseudo-classes simplify complex selectors and help manage specificity.',
    category: 'Selectors',
    difficulty: 'Advanced',
    icon: '🧠',
    code: `:is(h1, h2, h3) {
  margin-bottom: 1rem;
}

:where(section, article) {
  padding: 20px;
}`,
    tips: [
      ':is() keeps specificity of the most specific selector inside',
      ':where() has zero specificity',
      'Improves code readability and maintainability'
    ]
  },

  {
    title: 'Container Queries',
    description: 'Apply styles based on the size of the parent container instead of the viewport.',
    category: 'Responsive',
    difficulty: 'Advanced',
    icon: '📦',
    code: `.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}`,
    tips: [
      'Useful for component-based design',
      'Requires container-type on the parent',
      'Still gaining full browser support'
    ]
  },

  {
    title: 'aspect-ratio Property',
    description: 'Maintains consistent width-to-height ratio for elements.',
    category: 'Layout',
    difficulty: 'Intermediate',
    icon: '🖼️',
    code: `.video {
  aspect-ratio: 16 / 9;
  width: 100%;
}`,
    tips: [
      'No need for padding hacks anymore',
      'Common in responsive image and video containers',
      'Works well with width: 100%'
    ]
  },

  {
    title: 'accent-color Property',
    description: 'Allows styling native form controls like checkboxes and radio buttons.',
    category: 'Forms',
    difficulty: 'Intermediate',
    icon: '🎯',
    code: `input[type="checkbox"],
input[type="radio"] {
  accent-color: #4CAF50;
}`,
    tips: [
      'Supports checkboxes, radio buttons, range sliders',
      'Improves UI consistency with brand colors',
      'Very simple and powerful for form theming'
    ]
  },

  {
    title: 'scroll-behavior and Scrollbar Styling',
    description: 'Enhances user experience with smooth scrolling and custom scrollbar design.',
    category: 'UX/UI',
    difficulty: 'Advanced',
    icon: '🧭',
    code: `html {
  scroll-behavior: smooth;
}

/* Custom scrollbar (WebKit-based browsers) */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}`,
    tips: [
      'Use smooth scroll for anchor link transitions',
      'Scrollbar styling may not work in Firefox/Edge',
      'Always test across browsers for consistency'
    ]
  },

   {
    title: 'CSS Counters',
    description: 'CSS counters allow you to create automatically incremented numbers, useful in lists or headings.',
    category: 'Advanced',
    difficulty: 'Advanced',
    icon: '🔢',
    code: `ol {
  counter-reset: section;
}

li::before {
  counter-increment: section;
  content: counters(section, ".") ". ";
}`,
    tips: [
      'Counters are great for custom numbered lists',
      'Use counter-reset and counter-increment together',
      'You can nest counters using `counters()`'
    ]
  },

  {
    title: 'Object-fit and Object-position',
    description: 'Controls how media elements like images or videos fit within their containers.',
    category: 'Layout',
    difficulty: 'Intermediate',
    icon: '🖼️',
    code: `img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
}`,
    tips: [
      'Use `cover` to fill the container without distortion',
      'Use `contain` to fit without cropping',
      '`object-position` works like `background-position`'
    ]
  },

  {
    title: 'Display: inline, block, inline-block',
    description: 'Understanding the difference between display types helps control element flow and layout.',
    category: 'Basics',
    difficulty: 'Beginner',
    icon: '📏',
    code: `div { display: block; }
span { display: inline; }
.button { display: inline-block; }`,
    tips: [
      '`inline` elements don’t support height/width',
      '`block` takes full width by default',
      '`inline-block` lets you style like block inside inline flow'
    ]
  },

  {
    title: 'CSS Blend Modes',
    description: 'Blend modes allow you to mix layers (like images and backgrounds) similar to Photoshop.',
    category: 'Visual Effects',
    difficulty: 'Advanced',
    icon: '🎨',
    code: `.overlay {
  background: rgba(0, 0, 0, 0.5);
  mix-blend-mode: multiply;
}`,
    tips: [
      'Useful for image overlays and hover effects',
      'Common blend modes: multiply, screen, overlay',
      'Can affect text visibility—test accordingly'
    ]
  },

  {
    title: 'CSS Masking',
    description: 'Masking allows you to use images and gradients to control the visibility of an element.',
    category: 'Visual Effects',
    difficulty: 'Advanced',
    icon: '🎭',
    code: `.masked {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
}`,
    tips: [
      'Masks hide parts of the element',
      'Supports gradients and SVGs as masks',
      'Works in most modern browsers with -webkit prefix'
    ]
  },

  {
    title: 'Scroll Snap',
    description: 'Creates scrollable containers that snap to child elements smoothly.',
    category: 'UX/UI',
    difficulty: 'Advanced',
    icon: '📜',
    code: `.scroll-container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
}

.section {
  scroll-snap-align: center;
  min-width: 100vw;
}`,
    tips: [
      'Useful for carousels and horizontal sections',
      'Works with both x and y axis',
      'Combines well with smooth scrolling'
    ]
  },

  {
    title: 'CSS Motion Preferences',
    description: 'Respect user preference for reduced motion using prefers-reduced-motion.',
    category: 'Accessibility',
    difficulty: 'Intermediate',
    icon: '🦽',
    code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}`,
    tips: [
      'Improves accessibility for motion-sensitive users',
      'Disable heavy animations when necessary',
      'Always test with animations turned off'
    ]
  },

  {
    title: 'CSS Performance Tips',
    description: 'Write performant CSS to ensure your site loads and renders efficiently.',
    category: 'Performance',
    difficulty: 'Advanced',
    icon: '⚡',
    tips: [
      'Avoid deeply nested selectors',
      'Use class selectors over universal or tag selectors',
      'Minimize use of !important and large shadow/blur effects',
      'Combine CSS files and use minification'
    ]
  },

  {
    title: 'CSS-only Modal',
    description: 'Create a popup modal without using JavaScript using :target pseudo-class.',
    category: 'UX/UI',
    difficulty: 'Advanced',
    icon: '🪟',
    code: `/* HTML */
<a href=\"#modal\">Open Modal</a>
<div id=\"modal\" class=\"modal\">This is a modal</div>

/* CSS */
.modal {
  display: none;
}
#modal:target {
  display: block;
}`,
    tips: [
      'Use :target for toggling visibility',
      'Works for simple use-cases only',
      'JavaScript is better for full control'
    ]
  },

  {
    title: 'CSS Specificity and Cascade',
    description: 'Understanding specificity helps in managing conflicts between multiple rules.',
    category: 'Core Concepts',
    difficulty: 'Intermediate',
    icon: '📚',
    tips: [
      'Inline styles > IDs > Classes > Elements',
      'Avoid excessive use of !important',
      'Use `:where()` to reduce specificity',
      'Keep styles modular and organized'
    ],
    example: `/* Higher specificity overrides lower */
p {
  color: red;
}

p.note {
  color: blue;
}

#note {
  color: green;
}`
  },

    {
    title: 'Backdrop Filter',
    description: 'Applies a graphical effect like blur or brightness to the area behind an element.',
    category: 'Visual Effects',
    difficulty: 'Advanced',
    icon: '🧊',
    code: `.frosted-glass {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
}`,
    tips: [
      'Use with semi-transparent backgrounds',
      'Works best on modals or overlays',
      'Needs browser support and proper stacking'
    ]
  },

  {
    title: 'The clamp() Function',
    description: 'Sets a responsive value that clamps between a min and max range.',
    category: 'Responsive',
    difficulty: 'Intermediate',
    icon: '📐',
    code: `h1 {
  font-size: clamp(1rem, 4vw, 2.5rem);
}`,
    tips: [
      'Great for fluid typography',
      'Avoids media queries for size limits',
      'Syntax: clamp(min, preferred, max)'
    ]
  },

  {
    title: 'Logical Properties',
    description: 'Logical properties replace direction-based CSS (left/right) with writing-mode-aware alternatives.',
    category: 'Layout',
    difficulty: 'Advanced',
    icon: '🧭',
    code: `.card {
  padding-inline: 1rem;
  margin-block-start: 2rem;
}`,
    tips: [
      'Improves support for right-to-left (RTL) languages',
      'padding-inline replaces padding-left/right',
      'margin-block replaces margin-top/bottom'
    ]
  },

  {
    title: 'Grid: Named Areas',
    description: 'Use `grid-template-areas` to create readable and maintainable grid layouts.',
    category: 'Grid',
    difficulty: 'Advanced',
    icon: '🗺️',
    code: `.grid-container {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`,
    tips: [
      'Improves layout readability',
      'Use meaningful area names',
      'Match class names with grid-area values'
    ]
  },

  {
    title: 'content-visibility',
    description: 'Improves performance by skipping rendering of off-screen elements until needed.',
    category: 'Performance',
    difficulty: 'Advanced',
    icon: '🚀',
    code: `.card {
  content-visibility: auto;
}`,
    tips: [
      'Reduces layout and paint time',
      'Use for long pages or lists',
      'Combine with `contain-intrinsic-size` for height'
    ]
  },

  {
    title: 'transition-timing-function',
    description: 'Controls the speed curve of a transition.',
    category: 'Animation',
    difficulty: 'Intermediate',
    icon: '⏱️',
    code: `.box {
  transition: all 0.5s ease-in-out;
}`,
    tips: [
      'Common values: linear, ease, ease-in, ease-out, ease-in-out',
      'Use `cubic-bezier()` for custom curves',
      'Try smoother transitions for UI feedback'
    ]
  },

  {
    title: 'CSS View Transitions (SPA Animations)',
    description: 'New API to create transitions between page or route changes (SPA-style).',
    category: 'Animation',
    difficulty: 'Advanced',
    icon: '🌀',
    code: `/* Example (JS trigger) */
document.startViewTransition(() => {
  // DOM changes
});`,
    tips: [
      'Still experimental – check browser support',
      'Useful for SPAs or content swapping',
      'Requires JavaScript and CSS pairing'
    ]
  },

  {
    title: 'CSS Houdini (Intro)',
    description: 'Houdini exposes CSS internals to developers, enabling custom styling behavior.',
    category: 'Advanced',
    difficulty: 'Pro',
    icon: '🪄',
    tips: [
      'Enables custom CSS properties with JS',
      'Paint worklets let you draw backgrounds in JS',
      'Use only if targeting modern browsers'
    ],
    example: `CSS.registerProperty({
  name: '--magic',
  syntax: '<color>',
  inherits: false,
  initialValue: 'blue'
});`
  },

  {
    title: 'Multi-Column Layout',
    description: 'Split content into multiple columns like a newspaper layout.',
    category: 'Layout',
    difficulty: 'Intermediate',
    icon: '📰',
    code: `.article {
  column-count: 2;
  column-gap: 40px;
}`,
    tips: [
      'Use `column-break` to control breaks',
      'Add column rules for dividers',
      'Great for blogs or reading-heavy layouts'
    ]
  },

  {
    title: 'Custom Scroll Snapping Carousel',
    description: 'Build scrollable carousels using CSS scroll snap.',
    category: 'UX/UI',
    difficulty: 'Advanced',
    icon: '🎠',
    code: `.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.card {
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 80%;
  margin-right: 1rem;
}`,
    tips: [
      'Combine with JavaScript for buttons/arrows',
      'Use `scroll-padding` for offsets',
      'Test behavior on touch and desktop devices'
    ]
  },
   {
    title: 'will-change Property',
    description: 'Hints the browser about properties that will change, helping performance optimization.',
    category: 'Performance',
    difficulty: 'Advanced',
    icon: '🚧',
    code: `.card:hover {
  will-change: transform, opacity;
}`,
    tips: [
      'Use only when needed, overuse can hurt performance',
      'Best for animations or interactions',
      'Helps browser pre-optimize rendering'
    ]
  },

  {
    title: 'aspect-ratio for Responsive Cards',
    description: 'Ensures elements like cards maintain a fixed width-to-height ratio across screen sizes.',
    category: 'Layout',
    difficulty: 'Intermediate',
    icon: '📐',
    code: `.card {
  aspect-ratio: 4 / 3;
  width: 100%;
}`,
    tips: [
      'Useful for galleries, videos, placeholders',
      'Replaces padding-hack technique',
      'Use with `object-fit` for images'
    ]
  },

  {
    title: 'Form Validation Styling',
    description: 'Style form fields based on their validation state using pseudo-classes.',
    category: 'Forms',
    difficulty: 'Intermediate',
    icon: '✅',
    code: `input:valid {
  border-color: green;
}
input:invalid {
  border-color: red;
}
input:required {
  background-color: #f9f9f9;
}`,
    tips: [
      'Improves user experience',
      'Use `:required`, `:valid`, and `:invalid`',
      'Can be combined with tooltips or messages'
    ]
  },

  {
    title: 'The :has() Selector',
    description: 'Selects elements that contain specific children — like a parent selector.',
    category: 'Selectors',
    difficulty: 'Advanced',
    icon: '🔍',
    code: `/* Highlight cards that have images */
.card:has(img) {
  border: 2px solid #4CAF50;
}`,
    tips: [
      'Acts like a parent selector (finally!)',
      'Great for styling based on DOM structure',
      'Currently supported in Chromium browsers'
    ]
  },

  {
    title: 'CSS-only Dropdown Menu',
    description: 'Create a dropdown menu using only CSS and the `:hover` pseudo-class.',
    category: 'UI Components',
    difficulty: 'Intermediate',
    icon: '📂',
    code: `.dropdown:hover .menu {
  display: block;
}
.menu {
  display: none;
  position: absolute;
}`,
    tips: [
      'Keep it simple — no JS required',
      'Add transitions for smoother UX',
      'Avoid for complex interactive menus'
    ]
  },

  {
    title: 'CSS Keyframe Animations',
    description: 'Keyframes define intermediate steps in an animation sequence.',
    category: 'Animation',
    difficulty: 'Intermediate',
    icon: '🎞️',
    code: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  animation: fadeIn 1s ease-in-out;
}`,
    tips: [
      'Name animations clearly',
      'Combine with `animation-delay`, `iteration-count`',
      'Optimize for performance on mobile'
    ]
  },

  {
    title: 'CSS Shorthand Properties',
    description: 'Shorthand properties let you write concise and readable CSS.',
    category: 'Optimization',
    difficulty: 'Beginner',
    icon: '✍️',
    code: `/* Instead of writing individually */
margin: 10px 15px 20px 5px; /* top right bottom left */

font: italic bold 16px/1.5 "Open Sans", sans-serif;`,
    tips: [
      'Reduces code size',
      'Order matters in shorthand!',
      'Not all shorthands are intuitive — test often'
    ]
  },

  {
    title: '@layer and CSS Layers',
    description: 'Organize and control cascade layers using the `@layer` rule.',
    category: 'Cascade',
    difficulty: 'Advanced',
    icon: '📚',
    code: `@layer reset, base, components, utilities;

@layer base {
  body {
    font-family: system-ui;
  }
}

@layer utilities {
  .text-center {
    text-align: center;
  }
}`,
    tips: [
      'New feature — works like CSS cascade firewall',
      'Useful with large frameworks like Tailwind',
      'Define order with @layer for consistent overrides'
    ]
  },

  {
    title: 'Cross-browser Scrollbar Styling',
    description: 'Style scrollbars in a consistent way across Chrome, Edge, and Firefox.',
    category: 'UI/UX',
    difficulty: 'Advanced',
    icon: '🖱️',
    code: `/* WebKit */
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
}`,
    tips: [
      'Ensure readability and accessibility',
      'Always test across browsers',
      'Don’t hide scrollbars completely'
    ]
  },

  {
    title: 'Styling SVG with CSS',
    description: 'SVG elements like <circle> or <path> can be styled using CSS selectors.',
    category: 'Graphics',
    difficulty: 'Intermediate',
    icon: '🔺',
    code: `svg circle {
  fill: red;
  stroke: black;
  stroke-width: 2;
}`,
    tips: [
      'Use classes inside <svg> for better control',
      'Works best with inline SVG, not img tag',
      'Combine with animations for cool effects'
    ]
  },
   {
    title: 'Advanced Gradients',
    description: 'CSS supports powerful gradients: linear, radial, and conic for stunning visuals.',
    category: 'Visual Effects',
    difficulty: 'Intermediate',
    icon: '🌈',
    code: `.box {
  background: linear-gradient(135deg, #f06, #4a90e2);
}

.radial {
  background: radial-gradient(circle, #fff, #ccc);
}

.conic {
  background: conic-gradient(from 90deg, red, yellow, green);
}`,
    tips: [
      'Use for buttons, backgrounds, borders',
      'Conic gradients work like pie charts',
      'Use multiple backgrounds with gradients'
    ]
  },

  {
    title: 'CSS Math Functions',
    description: 'CSS provides math functions like `calc()`, `min()`, `max()`, and `clamp()` for dynamic styling.',
    category: 'Responsive',
    difficulty: 'Advanced',
    icon: '➗',
    code: `.card {
  width: calc(100% - 40px);
  font-size: clamp(1rem, 2vw, 2rem);
  margin-top: max(10px, 2vh);
}`,
    tips: [
      'Avoids media queries in many cases',
      'Works well with fluid design systems',
      'Combine functions for flexibility'
    ]
  },

  {
    title: 'scroll-timeline and @keyframes',
    description: 'Experimental feature to control animations based on scroll progress.',
    category: 'Animation',
    difficulty: 'Pro',
    icon: '🧮',
    code: `@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.scroll-animation {
  animation: fade linear;
  animation-timeline: scroll();
}`,
    tips: [
      'Needs experimental flag or polyfill',
      'Useful for parallax or scroll effects',
      'Combine with sticky elements'
    ]
  },

  {
    title: 'The resize Property',
    description: 'Allows elements (like <textarea>) to be resizable by the user.',
    category: 'UX/UI',
    difficulty: 'Beginner',
    icon: '🔲',
    code: `textarea {
  resize: vertical;
  min-height: 100px;
}

.card {
  resize: both;
  overflow: auto;
}`,
    tips: [
      'Use with overflow for best behavior',
      'Can be set to none to disable',
      'Use with draggable/resizable panels'
    ]
  },

  {
    title: 'CSS Nesting',
    description: 'Nesting allows writing nested selectors inside one block, improving readability.',
    category: 'Syntax',
    difficulty: 'Intermediate',
    icon: '🌿',
    code: `/* Requires nesting support or PostCSS */
.card {
  padding: 1rem;

  &:hover {
    background: #eee;
  }

  h2 {
    font-size: 1.5rem;
  }
}`,
    tips: [
      'Currently supported in modern browsers (2023+)',
      'Use with preprocessors like Sass, PostCSS for safety',
      'Avoid deeply nested code — hard to debug'
    ]
  },

  {
    title: 'Container Queries',
    description: 'Let you style components based on their parent container size, not viewport.',
    category: 'Responsive',
    difficulty: 'Advanced',
    icon: '📦',
    code: `.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-content {
    font-size: 1.5rem;
  }
}`,
    tips: [
      'Game-changer for reusable components',
      'Combine with grid/flex for adaptive UI',
      'Use `container-name` to scope multiple containers'
    ]
  },

  {
    title: 'accent-color Property',
    description: 'Customizes the color of native UI controls like checkboxes, radio buttons, and sliders.',
    category: 'Forms',
    difficulty: 'Intermediate',
    icon: '🎯',
    code: `input[type="checkbox"] {
  accent-color: #4caf50;
}`,
    tips: [
      'Improves brand consistency',
      'Works with checkboxes, radios, progress bars',
      'Fallback gracefully for older browsers'
    ]
  },

  {
    title: ':is() and :where() Selectors',
    description: 'Simplify complex selectors by grouping multiple targets.',
    category: 'Selectors',
    difficulty: 'Intermediate',
    icon: '📌',
    code: `/* Instead of repeating styles */
:is(h1, h2, h3) {
  font-family: 'Inter', sans-serif;
}

:where(section p) {
  margin-bottom: 1em;
}`,
    tips: [
      '`:is()` has specificity of the most specific selector',
      '`:where()` has zero specificity — great for overrides',
      'Makes your CSS more DRY'
    ]
  },

  {
    title: 'CSS Logical Border Radius',
    description: 'Use logical border radius properties for better internationalization and direction handling.',
    category: 'Layout',
    difficulty: 'Intermediate',
    icon: '🏁',
    code: `.box {
  border-start-start-radius: 10px;
  border-end-end-radius: 10px;
}`,
    tips: [
      'Works with writing modes (RTL/LTR)',
      'Better than hardcoded left/right values',
      'Still limited browser support — fallback if needed'
    ]
  },

  {
    title: 'CSS Color Spaces & Gamut',
    description: 'Modern CSS supports color spaces like Display-P3 for richer, more accurate colors.',
    category: 'Colors',
    difficulty: 'Advanced',
    icon: '🖍️',
    code: `.banner {
  background-color: color(display-p3 1 0.5 0.25);
}`,
    tips: [
      'Requires compatible displays and browsers',
      'Use when you want more vivid, wide-gamut colors',
      'Stick to standard `rgb()` or `hsl()` for compatibility'
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
