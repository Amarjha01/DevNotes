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
    videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
    refrenceUrl:"https://developer.mozilla.org/en-US/",
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
    videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
    refrenceUrl:"https://developer.mozilla.org/en-US/",
    title: 'HTML Structure',
    description: 'Defines the basic layout of an HTML document using <!DOCTYPE>, <html>, <head>, and <body> tags.',
    category: 'Basics',
    difficulty: 'Beginner',
    icon: '🏗️',
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`,
    tips: [
      'Always start with <!DOCTYPE html> to specify HTML5',
      'The <head> tag contains metadata, links, and scripts',
      'The <body> contains visible content'
    ]
  },
  {
    videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
    refrenceUrl:"https://developer.mozilla.org/en-US/",
    title: 'Headings',
    description: 'HTML provides six levels of headings from <h1> to <h6>, where <h1> is the most important.',
    category: 'Tags',
    difficulty: 'Beginner',
    icon: '🔠',
    code: `<h1>Main Heading</h1>
<h2>Subheading</h2>`,
    tips: [
      'Use <h1> for the main title of the page',
      'Avoid skipping heading levels',
      'Headings help with SEO and accessibility'
    ]
  },
  {
    videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
    refrenceUrl:"https://developer.mozilla.org/en-US/",
    title: 'Paragraphs and Line Breaks',
    description: 'Use <p> for paragraphs and <br> to insert a line break. <hr> adds a horizontal line.',
    category: 'Tags',
    difficulty: 'Beginner',
    icon: '📄',
    code: `<p>This is a paragraph.</p>
<p>Line one<br>Line two</p>
<hr>`,
    tips: [
      'Use <p> to separate blocks of text',
      '<br> is for inline line breaks, not layout',
      '<hr> is used to divide content'
    ]
  },
  {
    videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
    refrenceUrl:"https://developer.mozilla.org/en-US/",
    title: 'Text Formatting Tags',
    description: 'Tags for styling and emphasizing text: bold, italic, underline, and more.',
    category: 'Tags',
    difficulty: 'Beginner',
    icon: '📝',
    code: `<b>Bold</b> <strong>Strong</strong> <i>Italic</i> <em>Emphasis</em>
<u>Underline</u> <sup>Superscript</sup> <sub>Subscript</sub>
<mark>Marked</mark> <del>Deleted</del> <ins>Inserted</ins>`,
    tips: [
      '<strong> and <em> have semantic importance',
      '<b> and <i> are purely stylistic',
      '<mark>, <del>, <ins> are useful for annotations'
    ]
  },
  {
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
    title: 'HTML Comments',
  description: 'Used to insert notes or explanations in the code which are not rendered by the browser.',
  category: 'Content & Layout',
  difficulty: 'Beginner',
  icon: '💬',
  code: '<!-- This is a comment -->',
  tips: [
    'Useful for documenting code',
    'Helps other developers understand your markup',
    'Can be used to temporarily disable code'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'HTML Lists',
  description: 'Used to display items in a list format. Includes ordered, unordered, and description lists.',
  category: 'Content & Layout',
  difficulty: 'Beginner',
  icon: '📝',
  code: `<!-- Unordered List -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First</li>
  <li>Second</li>
</ol>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>`,
  tips: [
    'Use unordered lists for unordered content',
    'Use ordered lists when order matters',
    'Description lists are great for definitions'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Hyperlinks',
  description: 'The <a> tag defines hyperlinks, which are used to link from one page to another.',
  category: 'Content & Layout',
  difficulty: 'Beginner',
  icon: '🔗',
  code: '<a href="https://example.com" target="_blank" rel="noopener">Visit Example</a>',
  tips: [
    "Use target='_blank' to open in a new tab",
    "Add rel='noopener' for security",
    'Use download attribute to allow file downloads'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Images',
  description: 'The <img> tag is used to embed images in a webpage.',
  category: 'Content & Layout',
  difficulty: 'Beginner',
  icon: '🖼️',
  code: '<img src="image.jpg" alt="An image" width="300" height="200">',
  tips: [
    'Always include alt for accessibility',
    'Specify width and height for performance',
    'Use responsive styles for mobile-friendliness'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Div and Span',
  description: '<div> is a block-level container, <span> is an inline container.',
  category: 'Content & Layout',
  difficulty: 'Beginner',
  icon: '📦',
  code: '<div class="container"><span>Text</span></div>',
  tips: [
    'Use <div> for layout sections',
    '<span> is used for styling inline text',
    'Both can be styled using CSS'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'HTML Entities',
  description: 'Entities are used to display reserved characters or invisible characters.',
  category: 'Content & Layout',
  difficulty: 'Intermediate',
  icon: '🔣',
  code: '&nbsp; &lt; &gt; &amp; &quot;',
  tips: [
    '&nbsp; creates a non-breaking space',
    '&lt; and &gt; are used for < and > symbols',
    '&amp; is used for & symbol'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Audio Element',
  description: 'The <audio> tag is used to embed sound content in documents.',
  category: 'Multimedia & Embeds',
  difficulty: 'Intermediate',
  icon: '🔊',
  code: `<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`,
  tips: [
    'Use multiple source formats for compatibility',
    'Include fallback text for unsupported browsers',
    "Use 'controls' attribute to show play/pause buttons"
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Video Element',
  description: 'The <video> tag is used to embed video content.',
  category: 'Multimedia & Embeds',
  difficulty: 'Intermediate',
  icon: '🎬',
  code: `<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`,
  tips: [
    'Specify width and height to avoid layout shifts',
    'Provide multiple source types for browser support',
    'Always include fallback message'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Iframe Embeds',
  description: 'The <iframe> tag is used to embed another HTML page or third-party content (like YouTube).',
  category: 'Multimedia & Embeds',
  difficulty: 'Intermediate',
  icon: '🖥️',
  code: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>`,
  tips: [
    'Use for embedding videos, maps, etc.',
    'Always include width and height',
    'Avoid iframes where SEO is critical'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Object and Embed Tags',
  description: 'The <object> and <embed> tags are used to embed external resources such as PDFs or flash files.',
  category: 'Multimedia & Embeds',
  difficulty: 'Intermediate',
  icon: '📄',
  code: `<object data="file.pdf" type="application/pdf" width="600" height="400">
  PDF not supported.
</object>

<embed src="file.pdf" width="600" height="400" type="application/pdf">`,
  tips: [
    'Use <object> for better fallback content control',
    '<embed> is simpler but less flexible',
    'Used for legacy multimedia like Flash or Java Applets'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'HTML Tables',
  description: 'Used to display data in rows and columns using <table>, <tr>, <th>, and <td> tags.',
  category: 'Tables and Forms',
  difficulty: 'Intermediate',
  icon: '📊',
  code: `<table border="1">
  <caption>User Info</caption>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>30</td>
  </tr>
</table>`,
  tips: [
    'Use <caption> for table title',
    'Use <th> for headers and <td> for data cells',
    'Use colspan and rowspan to merge cells'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Form Element',
  description: 'The <form> tag is used to collect user input and submit it to a server.',
  category: 'Tables and Forms',
  difficulty: 'Intermediate',
  icon: '📝',
  code: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Submit</button>
</form>`,
  tips: [
    "Always include 'action' and 'method' attributes",
    "Use 'required' for client-side validation",
    'Wrap inputs with labels for accessibility'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Input Types',
  description: 'Various input types allow capturing different types of user data like text, password, email, file, etc.',
  category: 'Tables and Forms',
  difficulty: 'Intermediate',
  icon: '⌨️',
  code: `<input type="text">
<input type="password">
<input type="email">
<input type="radio">
<input type="checkbox">
<input type="submit">
<input type="reset">
<input type="file">
<input type="hidden">`,
  tips: [
    'Use specific types for better UX and validation',
    'Hidden inputs store extra data not shown to the user',
    "Group radio buttons using 'name' attribute"
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Form Controls',
  description: 'Other elements used within forms: <label>, <textarea>, <select>, <option>, <fieldset>, <legend>.',
  category: 'Tables and Forms',
  difficulty: 'Intermediate',
  icon: '🧾',
  code: `<fieldset>
  <legend>Personal Info</legend>
  <label for="bio">Bio:</label>
  <textarea id="bio"></textarea>
  <label for="gender">Gender:</label>
  <select id="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
</fieldset>`,
  tips: [
    '<fieldset> groups related inputs together',
    '<legend> gives a caption to the group',
    '<textarea> is for multi-line input'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Input Attributes',
  description: 'Attributes like name, value, placeholder, readonly, disabled, required help manage input behavior.',
  category: 'Tables and Forms',
  difficulty: 'Intermediate',
  icon: '⚙️',
  code: `<input type="text" name="username" placeholder="Enter name" required readonly>`,
  tips: [
    "'name' is submitted with form data",
    "'placeholder' gives a hint to the user",
    "'readonly' and 'disabled' restrict input"
  ]
},
// ................................................................................................................................................................
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Semantic HTML Elements',
  description: 'Semantic tags clearly describe their meaning in a human- and machine-readable way.',
  category: 'Semantic HTML',
  difficulty: 'Intermediate',
  icon: '🎯',
  code: `<header>
  <h1>Website Title</h1>
</header>

<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>

<main>
  <section>
    <article>
      <h2>Article Title</h2>
      <p>Article content...</p>
    </article>
  </section>
</main>

<footer>
  <p>&copy; 2024 My Website</p>
</footer>`,
  tips: [
    'Helps search engines and assistive tech understand your layout',
    'Improves accessibility and SEO',
    'Makes your code cleaner and easier to read'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Why Use Semantic HTML?',
  description: 'Semantic HTML makes your website more accessible, maintainable, and SEO-friendly.',
  category: 'Semantic HTML',
  difficulty: 'Intermediate',
  icon: '📚',
  tips: [
    'Improves code readability and maintainability',
    'Helps screen readers and browsers better interpret your content',
    'Assists in better SEO ranking'
  ]
},
// ---------------------------------------------------------------------------------------------------------------------------------------------------
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Anchor Navigation with ID',
  description: 'Using anchor links to navigate to specific sections on the same page using ID selectors.',
  category: 'Linking and Navigation',
  difficulty: 'Beginner',
  icon: '🔗',
  code: `<!-- Navigation -->
<a href="#contact">Go to Contact</a>

<!-- Target Section -->
<section id="contact">
  <h2>Contact Us</h2>
</section>`,
  tips: [
    'ID should be unique on the page',
    'Use for smooth scrolling to sections',
    'Enhances user experience for single-page websites'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Page Routing with Anchor Links',
  description: 'Anchor tags can be used to navigate to different pages of your site.',
  category: 'Linking and Navigation',
  difficulty: 'Beginner',
  icon: '📄',
  code: `<a href="/about.html">About Page</a>`,
  tips: [
    'Use relative paths for internal links',
    'Use absolute URLs for external links',
    'Ensure target pages exist to avoid 404 errors'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Navigation Bars using <nav>',
  description: 'Use the <nav> element to define navigation menus or links to major sections.',
  category: 'Linking and Navigation',
  difficulty: 'Beginner',
  icon: '🧭',
  code: `<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`,
  tips: [
    'Helps browsers and assistive technologies identify navigation links',
    'Improves structure and accessibility',
    'Should contain only primary navigation links'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: '<head> Section Overview',
  description: 'The <head> element contains metadata and links to external resources like CSS and JS.',
  category: 'Metadata and Head Tag',
  difficulty: 'Beginner',
  icon: '🧠',
  code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML from scratch">
  <meta name="keywords" content="HTML, web development">
  <title>My Web Page</title>
  <link rel="stylesheet" href="styles.css">
</head>`,
  tips: [
    'Use <meta> tags for SEO and responsiveness',
    '<link> connects to CSS and other resources',
    '<title> sets the browser tab name'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Meta Charset & Viewport',
  description: 'These <meta> tags are important for defining character encoding and making the site mobile-friendly.',
  category: 'Metadata and Head Tag',
  difficulty: 'Beginner',
  icon: '📐',
  code: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
  tips: [
    'UTF-8 supports all characters and languages',
    'Viewport tag ensures proper scaling on mobile devices',
    'Always include both for modern websites'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Meta Description & Keywords',
  description: 'Help search engines understand your page content.',
  category: 'Metadata and Head Tag',
  difficulty: 'Beginner',
  icon: '🔍',
  code: `<meta name="description" content="This is a portfolio website">
<meta name="keywords" content="portfolio, developer, projects">`,
  tips: [
    'Keep description under 160 characters',
    'Use relevant keywords for better search ranking',
    'Not all search engines use keywords, but it doesn’t hurt'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: '<link> Tag for External Resources',
  description: 'The <link> tag connects external files like CSS stylesheets and icons.',
  category: 'Metadata and Head Tag',
  difficulty: 'Beginner',
  icon: '🔗',
  code: `<link rel="stylesheet" href="styles.css">
<link rel="icon" href="favicon.ico" type="image/x-icon">`,
  tips: [
    'rel defines the relationship between your HTML and the linked file',
    'href is the URL or file path to the resource',
    'Used in the <head> for performance and structure'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: '<script> Tag for JavaScript',
  description: 'Used to load JavaScript either internally or from an external file.',
  category: 'Metadata and Head Tag',
  difficulty: 'Beginner',
  icon: '📜',
  code: `<script src="app.js"></script>`,
  tips: [
    'Place <script> tags before </body> to avoid blocking page rendering',
    'Use "defer" to delay script execution until after HTML is parsed',
    'Can also use inline JS with <script> tags directly'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Favicon Link',
  description: 'Favicons are the small icons shown in the browser tab next to the title.',
  category: 'Metadata and Head Tag',
  difficulty: 'Beginner',
  icon: '🧩',
  code: `<link rel="icon" type="image/x-icon" href="/favicon.ico">`,
  tips: [
    'Usually placed in the <head> section',
    'Use .ico, .png, or .svg formats',
    'Improves brand identity and user experience'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Inline CSS',
  description: 'CSS can be written directly within an HTML element using the "style" attribute.',
  category: 'HTML & CSS Integration',
  difficulty: 'Beginner',
  icon: '🎨',
  code: `<p style="color: blue; font-size: 18px;">This is styled text.</p>`,
  tips: [
    'Best used for quick styling or testing',
    'Avoid in production to maintain clean separation of concerns',
    'Use for dynamic styles (e.g., with JavaScript)'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Internal CSS',
  description: 'CSS rules can be written inside a <style> tag within the <head> section of an HTML document.',
  category: 'HTML & CSS Integration',
  difficulty: 'Beginner',
  icon: '🧾',
  code: `<head>
  <style>
    body {
      background-color: #f0f0f0;
      color: #333;
    }
  </style>
</head>`,
  tips: [
    'Good for small projects or single-page websites',
    'Keeps styles within the HTML file',
    'Avoid for large or multi-page projects'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'External CSS',
  description: 'A separate CSS file linked using the <link> tag, ideal for larger and maintainable projects.',
  category: 'HTML & CSS Integration',
  difficulty: 'Beginner',
  icon: '📦',
  code: `<head>
  <link rel="stylesheet" href="styles.css">
</head>`,
  tips: [
    'Improves maintainability and reusability',
    'Browser caches external files for faster load',
    'Recommended for all production-grade websites'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Alt Text in Images',
  description: 'The "alt" attribute provides alternative text for images, which helps screen readers and users when images fail to load.',
  category: 'Accessibility',
  difficulty: 'Beginner',
  icon: '🖼️',
  code: `<img src="dog.jpg" alt="A brown dog playing in the park">`,
  tips: [
    'Describe the image meaningfully for visually impaired users',
    'Use empty alt="" for purely decorative images',
    'Helps with SEO as well'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'ARIA Labels',
  description: 'ARIA (Accessible Rich Internet Applications) attributes enhance accessibility by describing roles and states of elements.',
  category: 'Accessibility',
  difficulty: 'Intermediate',
  icon: '🔖',
  code: `<button aria-label="Close menu">✖</button>`,
  tips: [
    'Use aria-label to provide descriptive text for screen readers',
    'Don’t overuse ARIA — prefer native HTML elements when possible',
    'Test with screen readers for best results'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Tabindex Attribute',
  description: 'The "tabindex" attribute controls the order in which elements receive keyboard focus.',
  category: 'Accessibility',
  difficulty: 'Intermediate',
  icon: '⌨️',
  code: `<div tabindex="0">Focusable element</div>`,
  tips: [
    'Use tabindex="0" to include an element in the natural tab order',
    'Use tabindex="-1" to make focusable via script but not tab',
    'Avoid positive tabindex values when possible'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Role Attribute',
  description: 'The "role" attribute defines what an element is or does for assistive technologies.',
  category: 'Accessibility',
  difficulty: 'Intermediate',
  icon: '🧠',
  code: `<div role="button">Click me</div>`,
  tips: [
    'Use roles when native semantics are missing',
    'Examples: role="dialog", role="navigation", role="alert"',
    'Always pair roles with appropriate ARIA attributes when needed'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Screen Reader Optimization',
  description: 'Optimizing content for screen readers improves accessibility for users who rely on assistive tech.',
  category: 'Accessibility',
  difficulty: 'Intermediate',
  icon: '🎧',
  tips: [
    'Use headings and landmarks properly (e.g., <main>, <nav>, <header>)',
    'Provide descriptive link and button text',
    'Use semantic HTML over ARIA when possible'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Custom Data Attributes (data-*)',
  description: 'Used to store extra data on HTML elements without affecting their appearance or functionality.',
  category: 'Advanced HTML Concepts',
  difficulty: 'Intermediate',
  icon: '📌',
  code: `<div data-user-id="12345">User Info</div>`,
  tips: [
    'Access via JavaScript using dataset (e.g., element.dataset.userId)',
    'Useful for storing config or meta-data',
    'Keep data values lightweight and relevant'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Input Validation Attributes',
  description: 'HTML provides attributes like pattern, min, max, maxlength to validate input before submission.',
  category: 'Advanced HTML Concepts',
  difficulty: 'Intermediate',
  icon: '✅',
  code: `<input type="text" pattern="[A-Za-z]+" maxlength="10" required>`,
  tips: [
    'pattern uses regular expressions for custom rules',
    'Use min and max for number and date inputs',
    'Client-side validation can enhance UX but never replace server-side validation'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Autofocus and Autocomplete',
  description: 'These attributes improve form usability by focusing on or remembering input values.',
  category: 'Advanced HTML Concepts',
  difficulty: 'Intermediate',
  icon: '🧠',
  code: `<input type="email" autofocus autocomplete="on">`,
  tips: [
    'autofocus sets the cursor on the field when page loads',
    'autocomplete helps with faster form filling',
    'Use descriptive name attributes to support autocomplete'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Web Storage API Overview',
  description: 'HTML5 introduces localStorage and sessionStorage to store key/value pairs in the browser.',
  category: 'Advanced HTML Concepts',
  difficulty: 'Advanced',
  icon: '💾',
  code: `// Save data
localStorage.setItem("username", "Amar");

// Retrieve data
const user = localStorage.getItem("username");`,
  tips: [
    'localStorage persists until cleared manually',
    'sessionStorage clears when the page session ends',
    'Great for lightweight client-side storage'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'HTML APIs Introduction',
  description: 'HTML5 exposes APIs that extend web functionality including drag-and-drop, geolocation, workers, etc.',
  category: 'Advanced HTML Concepts',
  difficulty: 'Advanced',
  icon: '🧰',
  tips: [
    'APIs are used with JavaScript to enable advanced features',
    'Geolocation API retrieves user’s location with permission',
    'Web Workers run JS in background threads'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Drag and Drop API',
  description: 'Allows elements to be dragged and dropped using events like dragstart, dragover, and drop.',
  category: 'Advanced HTML Concepts',
  difficulty: 'Advanced',
  icon: '🖱️',
  code: `<div draggable="true" ondragstart="drag(event)">Drag me</div>`,
  tips: [
    'Set draggable="true" on the element',
    'Use dragover and drop handlers on target',
    'Used in file uploads, UIs, and games'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Geolocation API',
  description: 'Allows access to the geographical location of the user (with permission).',
  category: 'Advanced HTML Concepts',
  difficulty: 'Advanced',
  icon: '📍',
  code: `navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});`,
  tips: [
    'Requires user permission',
    'Use HTTPS or it may not work in modern browsers',
    'Can be used in maps, weather, and location-based apps'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Web Workers',
  description: 'Web Workers run scripts in the background, separate from the main thread.',
  category: 'Advanced HTML Concepts',
  difficulty: 'Advanced',
  icon: '🧵',
  code: `const worker = new Worker('worker.js');
worker.postMessage('start');`,
  tips: [
    'Avoids UI blocking during heavy computations',
    'Communication is via postMessage()',
    'Ideal for tasks like image processing or complex math'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'WebSockets Overview',
  description: 'Used to establish real-time, two-way communication between client and server.',
  category: 'Advanced HTML Concepts',
  difficulty: 'Advanced',
  icon: '🔌',
  code: `const socket = new WebSocket('wss://example.com/socket');
socket.onmessage = (event) => console.log(event.data);`,
  tips: [
    'Use for live chat, multiplayer games, or dashboards',
    'Begins with ws:// or wss:// (secure)',
    'Requires a backend WebSocket server'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'SEO-Friendly Meta Tags',
  description: 'Meta tags help search engines understand and index your web pages effectively.',
  category: 'SEO & Performance',
  difficulty: 'Intermediate',
  icon: '🔍',
  code: `<meta name="description" content="This is a web development blog.">
<meta name="keywords" content="HTML, CSS, JavaScript, SEO">`,
  tips: [
    'Keep descriptions under 160 characters',
    'Use relevant keywords naturally',
    'Improve visibility in search engine results'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Meta Robots Tag',
  description: 'Controls how search engine crawlers index your pages.',
  category: 'SEO & Performance',
  difficulty: 'Intermediate',
  icon: '🤖',
  code: `<meta name="robots" content="index, follow">`,
  tips: [
    'Use "noindex" to prevent page from appearing in search results',
    'Use "nofollow" to prevent crawlers from following links on the page',
    'Good for staging or sensitive pages'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Canonical Tags',
  description: 'Avoids duplicate content issues by specifying the preferred URL version.',
  category: 'SEO & Performance',
  difficulty: 'Advanced',
  icon: '🔗',
  code: `<link rel="canonical" href="https://example.com/page">`,
  tips: [
    'Tells search engines which version of a page is authoritative',
    'Use on pages with similar or duplicate content',
    'Improves SEO and avoids penalties'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Open Graph Tags',
  description: 'These tags enhance link previews when your pages are shared on social media platforms.',
  category: 'SEO & Performance',
  difficulty: 'Intermediate',
  icon: '📱',
  code: `<meta property="og:title" content="My Website">
<meta property="og:description" content="Best HTML tutorials">
<meta property="og:image" content="https://example.com/image.png">
<meta property="og:url" content="https://example.com">`,
  tips: [
    'Used by Facebook, LinkedIn, and others',
    'Helps control how your page appears when shared',
    'Add images and titles for better engagement'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Lazy Loading Images',
  description: 'Improves page load speed by delaying the loading of images until they are visible in the viewport.',
  category: 'SEO & Performance',
  difficulty: 'Intermediate',
  icon: '🕒',
  code: `<img src="image.jpg" loading="lazy" alt="Delayed loading image">`,
  tips: [
    'Use "loading=lazy" for non-critical images',
    'Improves performance and user experience',
    'Reduces initial page size and bandwidth usage'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: '404 Error Page Design',
  description: 'A custom 404 page improves user experience when someone visits a broken or non-existent link.',
  category: 'Error Pages and Extras',
  difficulty: 'Intermediate',
  icon: '🛑',
  code: `<html>
  <head>
    <title>404 - Page Not Found</title>
  </head>
  <body>
    <h1>Oops! Page not found.</h1>
    <p>The page you're looking for doesn’t exist.</p>
    <a href="/">Go to Home</a>
  </body>
</html>`,
  tips: [
    'Provide a user-friendly message',
    'Add a link to the homepage or useful pages',
    'Can be styled to match your site’s branding'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'HTML Boilerplate Template',
  description: 'A basic HTML template to start any project with good practices included.',
  category: 'Error Pages and Extras',
  difficulty: 'Beginner',
  icon: '📄',
  code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Website description" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`,
  tips: [
    'Always start with DOCTYPE declaration',
    'Set viewport for mobile responsiveness',
    'Include meta and link tags properly'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Responsive Meta Tag',
  description: 'Ensures that the webpage scales correctly on different screen sizes.',
  category: 'Error Pages and Extras',
  difficulty: 'Beginner',
  icon: '📱',
  code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
  tips: [
    'Mandatory for mobile-friendly websites',
    'Prevents desktop-sized layout on mobile',
    'Combine with responsive CSS for best results'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'Viewport and Mobile Scaling',
  description: 'Controls how your webpage appears on different devices.',
  category: 'Error Pages and Extras',
  difficulty: 'Beginner',
  icon: '📐',
  code: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
  tips: [
    'Ensures text and layout adapt to screen size',
    'Supports responsive and fluid design',
    'Essential for good user experience on mobile'
  ]
},
{
  videoUrl:"https://videocdn.cdnpk.net/videos/5f1b989b-da1a-53ae-8acb-ef5daf9147ad/horizontal/previews/clear/small.mp4?token=exp=1752154205~hmac=44cad901c5a2f9a8847fc0fd3319894aeb0e996a5459c0dc5693c9f259cb1e31",
  refrenceUrl:"https://developer.mozilla.org/en-US/",
  title: 'HTML Validator Tools',
  description: 'Tools that help validate your HTML to ensure it follows the correct syntax and standards.',
  category: 'Error Pages and Extras',
  difficulty: 'Beginner',
  icon: '🧪',
  tips: [
    'Use tools like W3C HTML Validator (validator.w3.org)',
    'Fix errors and warnings for better cross-browser support',
    'Helps avoid accessibility and rendering issues'
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