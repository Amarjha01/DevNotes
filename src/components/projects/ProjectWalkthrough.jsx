import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPlay, 
  FaCheck, 
  FaCode, 
  FaCopy, 
  FaDownload, 
  FaExternalLinkAlt,
  FaArrowRight,
  FaArrowLeft,
  FaLightbulb,
  FaExclamationTriangle,
  FaInfoCircle
} from 'react-icons/fa';

const ProjectWalkthrough = ({ projectId, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [copiedCode, setCopiedCode] = useState(null);

  const walkthroughs = {
    'portfolio-website': {
      title: 'Portfolio Website Walkthrough',
      description: 'Build your personal portfolio step by step',
      totalSteps: 8,
      steps: [
        {
          title: 'Project Setup',
          description: 'Create the basic file structure for your portfolio',
          type: 'setup',
          content: {
            explanation: 'First, let\'s create the basic file structure. You\'ll need three main files: HTML for structure, CSS for styling, and JavaScript for interactivity.',
            code: `portfolio-website/
├── index.html
├── styles.css
├── script.js
└── images/
    └── (your photos and project images)`,
            language: 'text',
            tips: [
              'Create a new folder called "portfolio-website"',
              'Use a code editor like VS Code for better experience',
              'Keep your images organized in a separate folder'
            ]
          }
        },
        {
          title: 'HTML Structure',
          description: 'Create the semantic HTML foundation',
          type: 'code',
          content: {
            explanation: 'Let\'s create the basic HTML structure with semantic elements. This provides a solid foundation and good SEO.',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <h1 class="nav-logo">Your Name</h1>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#home" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#projects" class="nav-link">Projects</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-container">
            <h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
            <p class="hero-subtitle">Frontend Developer & UI/UX Enthusiast</p>
            <a href="#contact" class="cta-button">Get In Touch</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>I'm a passionate web developer with a love for creating beautiful and functional websites.</p>
                </div>
                <div class="skills">
                    <h3>Skills</h3>
                    <div class="skill-list">
                        <span class="skill-item">HTML</span>
                        <span class="skill-item">CSS</span>
                        <span class="skill-item">JavaScript</span>
                        <span class="skill-item">React</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">My Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>Project 1</h3>
                    <p>Description of your first project.</p>
                    <a href="#" class="project-link">View Project</a>
                </div>
                <!-- Add more project cards -->
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Contact Me</h2>
            <form class="contact-form">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`,
            language: 'html',
            tips: [
              'Use semantic HTML5 elements like <nav>, <section>, <header>',
              'Add proper meta tags for responsive design',
              'Include alt attributes for images (when you add them)'
            ]
          }
        },
        {
          title: 'CSS Reset & Variables',
          description: 'Set up CSS foundation with custom properties',
          type: 'code',
          content: {
            explanation: 'Let\'s start with a CSS reset and define custom properties (CSS variables) for consistent theming.',
            code: `/* CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* CSS Variables */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    --text-color: #333;
    --light-text: #666;
    --bg-color: #ffffff;
    --section-bg: #f8f9fa;
    --card-bg: #ffffff;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
    --transition: all 0.3s ease;
}

/* Base Styles */
html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}`,
            language: 'css',
            tips: [
              'CSS custom properties make it easy to maintain consistent colors',
              'The * selector resets all default margins and padding',
              'scroll-behavior: smooth enables smooth scrolling for anchor links'
            ]
          }
        },
        {
          title: 'Navigation Styling',
          description: 'Create a responsive navigation bar',
          type: 'code',
          content: {
            explanation: 'Let\'s style the navigation bar with a modern look and make it responsive.',
            code: `/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
    z-index: 1000;
    transition: var(--transition);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    transition: var(--transition);
}

.nav-link:hover::after {
    width: 100%;
}

/* Mobile Navigation */
@media (max-width: 768px) {
    .nav-menu {
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--bg-color);
        box-shadow: var(--shadow);
        padding: 1rem 0;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
    }
    
    .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
}`,
            language: 'css',
            tips: [
              'position: fixed keeps the nav bar at the top when scrolling',
              'backdrop-filter creates a modern glass effect',
              'The ::after pseudo-element creates the hover underline effect'
            ]
          }
        },
        {
          title: 'Hero Section Styling',
          description: 'Create an eye-catching hero section',
          type: 'code',
          content: {
            explanation: 'The hero section is the first thing visitors see. Let\'s make it impressive with gradients and animations.',
            code: `/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color));
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.1)" points="0,1000 1000,1000 1000,0"/></svg>');
    background-size: cover;
}

.hero-container {
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: 0 2rem;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
}

.highlight {
    background: linear-gradient(45deg, #ffd700, #ff6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
    from {
        text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
    }
    to {
        text-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
    }
}

.hero-subtitle {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-bottom: 2rem;
    opacity: 0.9;
    font-weight: 300;
}

.cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none;
    border-radius: var(--border-radius);
    border: 2px solid rgba(255, 255, 255, 0.3);
    font-weight: 600;
    transition: var(--transition);
    backdrop-filter: blur(10px);
}

.cta-button:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}`,
            language: 'css',
            tips: [
              'clamp() function makes text responsive across all screen sizes',
              'The glow animation adds a subtle eye-catching effect',
              'backdrop-filter creates modern glass-morphism effects'
            ]
          }
        },
        {
          title: 'About & Projects Sections',
          description: 'Style the content sections with cards and layouts',
          type: 'code',
          content: {
            explanation: 'Let\'s style the about and projects sections with modern card layouts and responsive grids.',
            code: `/* About Section */
.about {
    padding: 5rem 0;
    background: var(--section-bg);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
}

.about-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--light-text);
}

.skills h3 {
    margin-bottom: 1.5rem;
    color: var(--text-color);
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-item {
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: var(--transition);
}

.skill-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

/* Projects Section */
.projects {
    padding: 5rem 0;
    background: var(--bg-color);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.project-card h3 {
    margin-bottom: 1rem;
    color: var(--text-color);
}

.project-card p {
    color: var(--light-text);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.project-link {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    text-decoration: none;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: var(--transition);
}

.project-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
    .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
}`,
            language: 'css',
            tips: [
              'CSS Grid with auto-fit creates responsive layouts automatically',
              'The hover effects add interactivity and polish',
              'Use consistent spacing and shadows for a cohesive design'
            ]
          }
        },
        {
          title: 'Contact Form & Footer',
          description: 'Complete the styling with contact form and responsive design',
          type: 'code',
          content: {
            explanation: 'Let\'s finish with a beautiful contact form and ensure everything is responsive.',
            code: `/* Contact Section */
.contact {
    padding: 5rem 0;
    background: linear-gradient(135deg, var(--section-bg), rgba(102, 126, 234, 0.05));
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-family: inherit;
    transition: var(--transition);
    background: var(--card-bg);
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.contact-form textarea {
    min-height: 120px;
    resize: vertical;
}

.contact-form button {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.contact-form button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

/* Utility Classes */
.text-center {
    text-align: center;
}

.mb-2 {
    margin-bottom: 1rem;
}

.mb-3 {
    margin-bottom: 1.5rem;
}

/* Dark Mode (Bonus) */
@media (prefers-color-scheme: dark) {
    :root {
        --text-color: #ffffff;
        --light-text: #cccccc;
        --bg-color: #1a1a1a;
        --section-bg: #2a2a2a;
        --card-bg: #333333;
    }
}

/* Additional Responsive Design */
@media (max-width: 480px) {
    .hero-container {
        padding: 0 1rem;
    }
    
    .nav-container {
        padding: 1rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .project-card,
    .about-content {
        padding: 1.5rem;
    }
}`,
            language: 'css',
            tips: [
              'Focus states improve accessibility for keyboard users',
              'The dark mode media query respects user preferences',
              'Mobile-first responsive design ensures great experience on all devices'
            ]
          }
        },
        {
          title: 'JavaScript Functionality',
          description: 'Add smooth scrolling and interactive features',
          type: 'code',
          content: {
            explanation: 'Let\'s add JavaScript to enhance user experience with smooth scrolling, form handling, and animations.',
            code: `// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const button = this.querySelector('button');
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! I\\'ll get back to you soon.');
        this.reset();
        button.textContent = 'Send Message';
        button.disabled = false;
    }, 1000);
});

// Scroll animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
});

// Mobile menu toggle (if you add a hamburger menu)
function createMobileMenu() {
    const nav = document.querySelector('.nav-container');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '☰';
    menuButton.style.display = 'none';
    
    nav.appendChild(menuButton);
    
    menuButton.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    });
    
    // Show/hide mobile menu button based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
        } else {
            menuButton.style.display = 'none';
            document.querySelector('.nav-menu').classList.remove('active');
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Initialize mobile menu
createMobileMenu();`,
            language: 'javascript',
            tips: [
              'Intersection Observer is more performant than scroll event listeners',
              'Form validation improves user experience and data quality',
              'The typing animation adds personality to your portfolio'
            ]
          }
        }
      ]
    },
    'todo-list-app': {
      title: 'To-Do List App Walkthrough',
      description: 'Build an interactive task management application',
      totalSteps: 6,
      steps: [
        {
          title: 'Project Setup',
          description: 'Create the basic structure for your to-do app',
          type: 'setup',
          content: {
            explanation: 'Let\'s set up the basic file structure for our to-do list application.',
            code: `todo-app/
├── index.html
├── styles.css
├── script.js
└── README.md`,
            language: 'text',
            tips: [
              'Keep all files in the same directory for simplicity',
              'We\'ll use vanilla JavaScript to focus on core concepts',
              'Local storage will persist data between sessions'
            ]
          }
        },
        {
          title: 'HTML Structure',
          description: 'Create the user interface layout',
          type: 'code',
          content: {
            explanation: 'Let\'s create a clean and accessible HTML structure for our to-do app.',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header class="app-header">
            <h1>📝 My To-Do List</h1>
            <p class="app-subtitle">Stay organized and productive</p>
        </header>

        <main class="app-main">
            <!-- Add New Task Form -->
            <form class="add-task-form" id="addTaskForm">
                <div class="input-group">
                    <input 
                        type="text" 
                        id="taskInput" 
                        placeholder="What needs to be done?" 
                        required
                        autocomplete="off"
                    >
                    <button type="submit" class="add-btn">Add Task</button>
                </div>
            </form>

            <!-- Filter Buttons -->
            <div class="filter-tabs">
                <button class="filter-btn active" data-filter="all">
                    All <span class="count" id="allCount">0</span>
                </button>
                <button class="filter-btn" data-filter="active">
                    Active <span class="count" id="activeCount">0</span>
                </button>
                <button class="filter-btn" data-filter="completed">
                    Completed <span class="count" id="completedCount">0</span>
                </button>
            </div>

            <!-- Tasks List -->
            <div class="tasks-container">
                <ul class="tasks-list" id="tasksList">
                    <!-- Tasks will be dynamically added here -->
                </ul>
                
                <!-- Empty State -->
                <div class="empty-state" id="emptyState">
                    <div class="empty-icon">📋</div>
                    <h3>No tasks yet</h3>
                    <p>Add your first task above to get started!</p>
                </div>
            </div>

            <!-- Actions -->
            <div class="actions">
                <button class="action-btn" id="clearCompleted">
                    Clear Completed
                </button>
                <button class="action-btn danger" id="clearAll">
                    Clear All
                </button>
            </div>
        </main>

        <footer class="app-footer">
            <p>Built with ❤️ using vanilla JavaScript</p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>`,
            language: 'html',
            tips: [
              'Use semantic HTML elements for better accessibility',
              'Form validation is built into the HTML with required attribute',
              'Data attributes help with JavaScript event handling'
            ]
          }
        },
        {
          title: 'CSS Styling Foundation',
          description: 'Set up the visual design system',
          type: 'code',
          content: {
            explanation: 'Let\'s create a modern, clean design with CSS custom properties and responsive layout.',
            code: `/* CSS Reset and Variables */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --success-color: #10b981;
    --danger-color: #ef4444;
    --warning-color: #f59e0b;
    
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --text-light: #9ca3af;
    
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --bg-card: #ffffff;
    
    --border-color: #e5e7eb;
    --border-radius: 8px;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    
    --transition: all 0.2s ease-in-out;
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

/* Base Styles */
body {
    font-family: var(--font-family);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: var(--text-primary);
    line-height: 1.6;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Header Styles */
.app-header {
    text-align: center;
    margin-bottom: 2rem;
    color: white;
}

.app-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 300;
}

/* Main Content */
.app-main {
    background: var(--bg-card);
    border-radius: 16px;
    box-shadow: var(--shadow-lg);
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}`,
            language: 'css',
            tips: [
              'CSS custom properties make theme changes easy',
              'Using system font stack ensures great performance',
              'Gradient backgrounds add visual appeal'
            ]
          }
        },
        {
          title: 'Form and Input Styling',
          description: 'Style the task input form beautifully',
          type: 'code',
          content: {
            explanation: 'Let\'s create an attractive and functional form for adding new tasks.',
            code: `/* Add Task Form */
.add-task-form {
    margin-bottom: 2rem;
}

.input-group {
    display: flex;
    gap: 0.75rem;
    align-items: stretch;
}

#taskInput {
    flex: 1;
    padding: 0.875rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-family: inherit;
    background: var(--bg-primary);
    transition: var(--transition);
    outline: none;
}

#taskInput:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

#taskInput:invalid {
    border-color: var(--danger-color);
}

.add-btn {
    padding: 0.875rem 1.5rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    white-space: nowrap;
}

.add-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

.add-btn:active {
    transform: translateY(0);
}

/* Filter Tabs */
.filter-tabs {
    display: flex;
    background: var(--bg-secondary);
    border-radius: var(--border-radius);
    padding: 0.25rem;
    margin-bottom: 1.5rem;
    gap: 0.25rem;
}

.filter-btn {
    flex: 1;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    border-radius: calc(var(--border-radius) - 2px);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.filter-btn:hover {
    color: var(--text-primary);
    background: rgba(99, 102, 241, 0.1);
}

.filter-btn.active {
    background: var(--bg-primary);
    color: var(--primary-color);
    box-shadow: var(--shadow-sm);
}

.count {
    background: var(--primary-color);
    color: white;
    font-size: 0.75rem;
    padding: 0.125rem 0.375rem;
    border-radius: 10px;
    min-width: 1.25rem;
    text-align: center;
    line-height: 1;
}

.filter-btn.active .count {
    background: var(--primary-dark);
}

/* Responsive Design */
@media (max-width: 480px) {
    .container {
        padding: 1rem 0.5rem;
    }
    
    .app-main {
        padding: 1.5rem;
        border-radius: 12px;
    }
    
    .input-group {
        flex-direction: column;
    }
    
    .filter-tabs {
        flex-direction: column;
    }
    
    .filter-btn {
        justify-content: space-between;
    }
}`,
            language: 'css',
            tips: [
              'Focus states improve accessibility',
              'Flexbox creates responsive layouts easily',
              'Mobile-first responsive design works on all devices'
            ]
          }
        },
        {
          title: 'Task List Styling',
          description: 'Style individual tasks and interactions',
          type: 'code',
          content: {
            explanation: 'Let\'s style the task list with hover effects, animations, and different states.',
            code: `/* Tasks Container */
.tasks-container {
    flex: 1;
    min-height: 200px;
}

.tasks-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

/* Individual Task Item */
.task-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    transition: var(--transition);
    animation: slideIn 0.3s ease-out;
}

.task-item:hover {
    border-color: var(--primary-color);
    box-shadow: var(--shadow-sm);
    transform: translateY(-1px);
}

.task-item.completed {
    background: var(--bg-secondary);
    opacity: 0.7;
}

.task-item.completed .task-text {
    text-decoration: line-through;
    color: var(--text-light);
}

/* Task Checkbox */
.task-checkbox {
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid var(--border-color);
    border-radius: 4px;
    background: var(--bg-primary);
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    flex-shrink: 0;
}

.task-checkbox:hover {
    border-color: var(--primary-color);
}

.task-checkbox.checked {
    background: var(--success-color);
    border-color: var(--success-color);
}

.task-checkbox.checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.875rem;
    font-weight: bold;
}

/* Task Text */
.task-text {
    flex: 1;
    font-size: 1rem;
    color: var(--text-primary);
    word-break: break-word;
    transition: var(--transition);
}

/* Task Actions */
.task-actions {
    display: flex;
    gap: 0.5rem;
    opacity: 0;
    transition: var(--transition);
}

.task-item:hover .task-actions {
    opacity: 1;
}

.task-btn {
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.875rem;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
}

.edit-btn {
    background: var(--warning-color);
    color: white;
}

.edit-btn:hover {
    background: #d97706;
    transform: scale(1.1);
}

.delete-btn {
    background: var(--danger-color);
    color: white;
}

.delete-btn:hover {
    background: #dc2626;
    transform: scale(1.1);
}

/* Empty State */
.empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--text-secondary);
}

.empty-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.5;
}

.empty-state h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.empty-state p {
    font-size: 0.875rem;
}

/* Animations */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideOut {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(20px);
    }
}

.task-item.removing {
    animation: slideOut 0.3s ease-out forwards;
}`,
            language: 'css',
            tips: [
              'CSS animations provide smooth user feedback',
              'Hover states reveal actions when needed',
              'Consistent spacing creates visual rhythm'
            ]
          }
        },
        {
          title: 'Complete JavaScript Functionality',
          description: 'Add all the interactive features with local storage',
          type: 'code',
          content: {
            explanation: 'Now let\'s implement all the JavaScript functionality including CRUD operations, filtering, and local storage.',
            code: `// Task Manager Class
class TodoApp {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.taskIdCounter = this.getNextId();
        
        this.initializeElements();
        this.bindEvents();
        this.render();
    }
    
    // Initialize DOM elements
    initializeElements() {
        this.taskInput = document.getElementById('taskInput');
        this.addTaskForm = document.getElementById('addTaskForm');
        this.tasksList = document.getElementById('tasksList');
        this.emptyState = document.getElementById('emptyState');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.clearCompleted = document.getElementById('clearCompleted');
        this.clearAll = document.getElementById('clearAll');
        
        // Count elements
        this.allCount = document.getElementById('allCount');
        this.activeCount = document.getElementById('activeCount');
        this.completedCount = document.getElementById('completedCount');
    }
    
    // Bind event listeners
    bindEvents() {
        this.addTaskForm.addEventListener('submit', (e) => this.handleAddTask(e));
        this.clearCompleted.addEventListener('click', () => this.clearCompletedTasks());
        this.clearAll.addEventListener('click', () => this.clearAllTasks());
        
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });
    }
    
    // Add new task
    handleAddTask(e) {
        e.preventDefault();
        const text = this.taskInput.value.trim();
        
        if (!text) return;
        
        const task = {
            id: this.taskIdCounter++,
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.tasks.unshift(task);
        this.taskInput.value = '';
        this.saveTasks();
        this.render();
        
        // Add success feedback
        this.showNotification('Task added successfully!', 'success');
    }
    
    // Toggle task completion
    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
            
            const message = task.completed ? 'Task completed!' : 'Task unmarked';
            this.showNotification(message, 'success');
        }
    }
    
    // Delete task
    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(t => t.id === id);
        if (taskIndex !== -1) {
            const taskElement = document.querySelector(\`[data-id="\${id}"]\`);
            
            // Add removing animation
            taskElement.classList.add('removing');
            
            setTimeout(() => {
                this.tasks.splice(taskIndex, 1);
                this.saveTasks();
                this.render();
                this.showNotification('Task deleted', 'info');
            }, 300);
        }
    }
    
    // Edit task
    editTask(id, newText) {
        const task = this.tasks.find(t => t.id === id);
        if (task && newText.trim()) {
            task.text = newText.trim();
            this.saveTasks();
            this.render();
            this.showNotification('Task updated', 'success');
        }
    }
    
    // Set filter
    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active filter button
        this.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.render();
    }
    
    // Get filtered tasks
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }
    
    // Clear completed tasks
    clearCompletedTasks() {
        const completedCount = this.tasks.filter(task => task.completed).length;
        
        if (completedCount === 0) {
            this.showNotification('No completed tasks to clear', 'info');
            return;
        }
        
        if (confirm(\`Delete \${completedCount} completed task(s)?\`)) {
            this.tasks = this.tasks.filter(task => !task.completed);
            this.saveTasks();
            this.render();
            this.showNotification(\`\${completedCount} completed tasks cleared\`, 'success');
        }
    }
    
    // Clear all tasks
    clearAllTasks() {
        if (this.tasks.length === 0) {
            this.showNotification('No tasks to clear', 'info');
            return;
        }
        
        if (confirm(\`Delete all \${this.tasks.length} task(s)?\`)) {
            this.tasks = [];
            this.saveTasks();
            this.render();
            this.showNotification('All tasks cleared', 'success');
        }
    }
    
    // Render tasks
    render() {
        const filteredTasks = this.getFilteredTasks();
        
        // Update counts
        this.updateCounts();
        
        // Show/hide empty state
        this.emptyState.style.display = this.tasks.length === 0 ? 'block' : 'none';
        this.tasksList.style.display = this.tasks.length === 0 ? 'none' : 'block';
        
        // Render tasks
        this.tasksList.innerHTML = filteredTasks.map(task => this.createTaskHTML(task)).join('');
        
        // Bind task events
        this.bindTaskEvents();
    }
    
    // Create task HTML
    createTaskHTML(task) {
        return \`
            <li class="task-item \${task.completed ? 'completed' : ''}" data-id="\${task.id}">
                <div class="task-checkbox \${task.completed ? 'checked' : ''}" onclick="app.toggleTask(\${task.id})"></div>
                <span class="task-text" ondblclick="app.startEdit(\${task.id})">\${task.text}</span>
                <div class="task-actions">
                    <button class="task-btn edit-btn" onclick="app.startEdit(\${task.id})" title="Edit task">✏️</button>
                    <button class="task-btn delete-btn" onclick="app.deleteTask(\${task.id})" title="Delete task">🗑️</button>
                </div>
            </li>
        \`;
    }
    
    // Update task counts
    updateCounts() {
        const total = this.tasks.length;
        const active = this.tasks.filter(task => !task.completed).length;
        const completed = this.tasks.filter(task => task.completed).length;
        
        this.allCount.textContent = total;
        this.activeCount.textContent = active;
        this.completedCount.textContent = completed;
    }
    
    // Start editing task
    startEdit(id) {
        const taskElement = document.querySelector(\`[data-id="\${id}"] .task-text\`);
        const currentText = taskElement.textContent;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.className = 'edit-input';
        input.style.cssText = \`
            width: 100%;
            padding: 0.5rem;
            border: 2px solid var(--primary-color);
            border-radius: 4px;
            font-size: 1rem;
            font-family: inherit;
        \`;
        
        taskElement.replaceWith(input);
        input.focus();
        input.select();
        
        const finishEdit = () => {
            const newText = input.value.trim();
            if (newText && newText !== currentText) {
                this.editTask(id, newText);
            } else {
                this.render();
            }
        };
        
        input.addEventListener('blur', finishEdit);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') finishEdit();
            if (e.key === 'Escape') this.render();
        });
    }
    
    // Bind task-specific events
    bindTaskEvents() {
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case 'a':
                        e.preventDefault();
                        this.taskInput.focus();
                        break;
                    case 'f':
                        e.preventDefault();
                        // Cycle through filters
                        const filters = ['all', 'active', 'completed'];
                        const currentIndex = filters.indexOf(this.currentFilter);
                        const nextFilter = filters[(currentIndex + 1) % filters.length];
                        this.setFilter(nextFilter);
                        break;
                }
            }
        });
    }
    
    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = \`notification \${type}\`;
        notification.textContent = message;
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            animation: slideInFromRight 0.3s ease-out;
            background: \${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        \`;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutToRight 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Local Storage methods
    saveTasks() {
        localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
        localStorage.setItem('taskIdCounter', this.taskIdCounter.toString());
    }
    
    loadTasks() {
        const saved = localStorage.getItem('todoTasks');
        return saved ? JSON.parse(saved) : [];
    }
    
    getNextId() {
        const saved = localStorage.getItem('taskIdCounter');
        return saved ? parseInt(saved) : 1;
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TodoApp();
});

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = \`
    @keyframes slideInFromRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutToRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
\`;
document.head.appendChild(style);`,
            language: 'javascript',
            tips: [
              'Class-based architecture keeps code organized',
              'Local storage persists data between browser sessions',
              'Event delegation handles dynamic content efficiently',
              'Keyboard shortcuts improve user experience'
            ]
          }
        }
      ]
    },
    'quiz-app': {
      title: 'Quiz Application Walkthrough',
      description: 'Build an interactive quiz with scoring and timer',
      totalSteps: 5,
      steps: [
        {
          title: 'Project Structure & Data',
          description: 'Set up the quiz data and file structure',
          type: 'setup',
          content: {
            explanation: 'First, let\'s create the basic structure and define our quiz questions data.',
            code: `quiz-app/
├── index.html
├── styles.css
├── script.js
└── questions.js

// Example questions.js structure:
const quizData = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language", 
            "Home Tool Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        correct: 0
    },
    // More questions...
];`,
            language: 'text',
            tips: [
              'Separate questions data for easy maintenance',
              'Structure allows for easy expansion',
              'JSON format makes data easy to work with'
            ]
          }
        },
        {
          title: 'HTML Foundation',
          description: 'Create the quiz interface structure',
          type: 'code',
          content: {
            explanation: 'Let\'s build the HTML structure for our quiz application.',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Quiz Challenge</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="quiz-container">
        <!-- Start Screen -->
        <div id="startScreen" class="screen active">
            <div class="quiz-header">
                <h1>🧠 JavaScript Quiz Challenge</h1>
                <p class="quiz-description">Test your JavaScript knowledge with 10 challenging questions!</p>
            </div>
            <div class="quiz-info">
                <div class="info-item">
                    <span class="info-label">Questions:</span>
                    <span class="info-value">10</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Time per question:</span>
                    <span class="info-value">30 seconds</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Difficulty:</span>
                    <span class="info-value">Mixed</span>
                </div>
            </div>
            <button id="startBtn" class="btn btn-primary">Start Quiz</button>
        </div>

        <!-- Quiz Screen -->
        <div id="quizScreen" class="screen">
            <div class="quiz-progress">
                <div class="progress-bar">
                    <div id="progressFill" class="progress-fill"></div>
                </div>
                <span id="questionCounter" class="question-counter">Question 1 of 10</span>
            </div>

            <div class="timer-container">
                <div id="timer" class="timer">30</div>
                <div class="timer-bar">
                    <div id="timerFill" class="timer-fill"></div>
                </div>
            </div>

            <div class="question-container">
                <h2 id="questionText" class="question-text"></h2>
                <div id="answersContainer" class="answers-container">
                    <!-- Answer buttons will be generated here -->
                </div>
            </div>

            <div class="quiz-controls">
                <button id="nextBtn" class="btn btn-secondary" disabled>Next Question</button>
                <button id="skipBtn" class="btn btn-outline">Skip</button>
            </div>
        </div>

        <!-- Results Screen -->
        <div id="resultsScreen" class="screen">
            <div class="results-container">
                <h2>Quiz Complete! 🎉</h2>
                <div class="score-display">
                    <div class="score-circle">
                        <span id="finalScore" class="score-number">0</span>
                        <span class="score-total">/ 10</span>
                    </div>
                    <div id="scoreMessage" class="score-message"></div>
                </div>

                <div class="results-breakdown">
                    <div class="result-item">
                        <span class="result-label">Correct Answers:</span>
                        <span id="correctCount" class="result-value correct">0</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Wrong Answers:</span>
                        <span id="wrongCount" class="result-value wrong">0</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Skipped:</span>
                        <span id="skippedCount" class="result-value skipped">0</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Time Taken:</span>
                        <span id="timeTaken" class="result-value">0:00</span>
                    </div>
                </div>

                <div class="results-actions">
                    <button id="restartBtn" class="btn btn-primary">Try Again</button>
                    <button id="reviewBtn" class="btn btn-secondary">Review Answers</button>
                </div>
            </div>
        </div>
    </div>

    <script src="questions.js"></script>
    <script src="script.js"></script>
</body>
</html>`,
            language: 'html',
            tips: [
              'Multiple screens create smooth user flow',
              'Progress indicators show quiz status',
              'Results screen provides detailed feedback'
            ]
          }
        },
        {
          title: 'Complete Styling',
          description: 'Add beautiful CSS styling with animations',
          type: 'code',
          content: {
            explanation: 'Let\'s create an attractive and modern design for our quiz application.',
            code: `/* Reset and Variables */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --success-color: #10b981;
    --error-color: #ef4444;
    --warning-color: #f59e0b;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --border-color: #e5e7eb;
    --border-radius: 12px;
    --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.quiz-container {
    width: 100%;
    max-width: 600px;
    background: var(--bg-primary);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    overflow: hidden;
}

/* Screen Management */
.screen {
    padding: 2rem;
    display: none;
    min-height: 500px;
}

.screen.active {
    display: block;
}

/* Start Screen */
.quiz-header {
    text-align: center;
    margin-bottom: 2rem;
}

.quiz-header h1 {
    font-size: 2.5rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.quiz-description {
    color: var(--text-secondary);
    font-size: 1.1rem;
}

.quiz-info {
    background: var(--bg-secondary);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    margin-bottom: 2rem;
}

.info-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.info-item:last-child {
    margin-bottom: 0;
}

.info-label {
    color: var(--text-secondary);
}

.info-value {
    color: var(--text-primary);
    font-weight: 600;
}

/* Buttons */
.btn {
    padding: 1rem 2rem;
    border: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    display: inline-block;
    text-align: center;
}

.btn-primary {
    background: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.btn-secondary {
    background: var(--bg-secondary);
    color: var(--text-primary);
}

.btn-outline {
    background: transparent;
    color: var(--text-secondary);
    border: 2px solid var(--border-color);
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
}

/* Quiz Progress */
.quiz-progress {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.progress-bar {
    flex: 1;
    height: 8px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
    margin-right: 1rem;
}

.progress-fill {
    height: 100%;
    background: var(--primary-color);
    border-radius: 4px;
    transition: width 0.3s ease;
    width: 0%;
}

.question-counter {
    font-weight: 600;
    color: var(--text-secondary);
    white-space: nowrap;
}

/* Timer */
.timer-container {
    text-align: center;
    margin-bottom: 2rem;
}

.timer {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.timer.warning {
    color: var(--warning-color);
    animation: pulse 1s infinite;
}

.timer.danger {
    color: var(--error-color);
    animation: pulse 0.5s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.timer-bar {
    width: 100px;
    height: 4px;
    background: var(--bg-secondary);
    border-radius: 2px;
    margin: 0 auto;
    overflow: hidden;
}

.timer-fill {
    height: 100%;
    background: var(--primary-color);
    border-radius: 2px;
    transition: width 1s linear;
    width: 100%;
}

.timer-fill.warning {
    background: var(--warning-color);
}

.timer-fill.danger {
    background: var(--error-color);
}

/* Question and Answers */
.question-text {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: 2rem;
    line-height: 1.4;
}

.answers-container {
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
}

.answer-btn {
    padding: 1rem 1.5rem;
    background: var(--bg-secondary);
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    text-align: left;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
    color: var(--text-primary);
}

.answer-btn:hover {
    border-color: var(--primary-color);
    background: rgba(99, 102, 241, 0.05);
}

.answer-btn.selected {
    border-color: var(--primary-color);
    background: var(--primary-color);
    color: white;
}

.answer-btn.correct {
    border-color: var(--success-color);
    background: var(--success-color);
    color: white;
}

.answer-btn.wrong {
    border-color: var(--error-color);
    background: var(--error-color);
    color: white;
}

.answer-btn.disabled {
    cursor: not-allowed;
    opacity: 0.7;
}

/* Quiz Controls */
.quiz-controls {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

/* Results Screen */
.results-container {
    text-align: center;
}

.results-container h2 {
    font-size: 2rem;
    color: var(--text-primary);
    margin-bottom: 2rem;
}

.score-display {
    margin-bottom: 2rem;
}

.score-circle {
    width: 150px;
    height: 150px;
    border: 8px solid var(--primary-color);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
    from { transform: scale(0); }
    to { transform: scale(1); }
}

.score-number {
    font-size: 3rem;
    font-weight: 700;
    color: var(--primary-color);
}

.score-total {
    font-size: 1.5rem;
    color: var(--text-secondary);
}

.score-message {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.results-breakdown {
    background: var(--bg-secondary);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    margin-bottom: 2rem;
}

.result-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.result-item:last-child {
    margin-bottom: 0;
}

.result-label {
    color: var(--text-secondary);
}

.result-value {
    font-weight: 600;
}

.result-value.correct {
    color: var(--success-color);
}

.result-value.wrong {
    color: var(--error-color);
}

.result-value.skipped {
    color: var(--warning-color);
}

.results-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

/* Responsive Design */
@media (max-width: 480px) {
    .quiz-container {
        margin: 0.5rem;
    }
    
    .screen {
        padding: 1.5rem;
    }
    
    .quiz-header h1 {
        font-size: 2rem;
    }
    
    .question-text {
        font-size: 1.25rem;
    }
    
    .quiz-controls {
        flex-direction: column;
    }
    
    .results-actions {
        flex-direction: column;
    }
}`,
            language: 'css',
            tips: [
              'Animations enhance user experience',
              'Color coding helps users understand states',
              'Responsive design works on all devices'
            ]
          }
        },
        {
          title: 'Quiz Data Setup',
          description: 'Create the questions database',
          type: 'code',
          content: {
            explanation: 'Let\'s create a comprehensive set of JavaScript questions for our quiz.',
            code: `// questions.js - Quiz Question Database
const quizData = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language", 
            "Home Tool Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        correct: 0,
        explanation: "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages."
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [
            "String",
            "Boolean", 
            "Float",
            "Undefined"
        ],
        correct: 2,
        explanation: "JavaScript doesn't have a specific 'Float' data type. Numbers in JavaScript can be integers or floating-point values, but they're all just 'Number' type."
    },
    {
        question: "What will 'console.log(typeof null)' output?",
        answers: [
            "null",
            "undefined", 
            "object",
            "string"
        ],
        correct: 2,
        explanation: "This is a well-known quirk in JavaScript. typeof null returns 'object', which is considered a bug in the language but remains for backward compatibility."
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        answers: [
            "append()",
            "push()", 
            "add()",
            "insert()"
        ],
        correct: 1,
        explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        answers: [
            "No difference",
            "=== is faster", 
            "== compares values, === compares values and types",
            "=== is deprecated"
        ],
        correct: 2,
        explanation: "== performs type coercion and compares values, while === compares both value and type without any type conversion."
    },
    {
        question: "Which of these is the correct way to create a function in JavaScript?",
        answers: [
            "function myFunction() {}",
            "create myFunction() {}", 
            "def myFunction() {}",
            "function: myFunction() {}"
        ],
        correct: 0,
        explanation: "The correct syntax for creating a function in JavaScript is 'function functionName() {}'."
    },
    {
        question: "What will 'console.log(1 + '2' + 3)' output?",
        answers: [
            "6",
            "123", 
            "15",
            "Error"
        ],
        correct: 1,
        explanation: "JavaScript converts 1 to a string and concatenates: '1' + '2' + '3' = '123'. The + operator performs string concatenation when one operand is a string."
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        answers: [
            "var",
            "let", 
            "const",
            "final"
        ],
        correct: 2,
        explanation: "The 'const' keyword is used to declare constants in JavaScript. Values declared with const cannot be reassigned."
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        answers: [
            "The current function",
            "The global object", 
            "The object that owns the executing code",
            "Nothing, it's deprecated"
        ],
        correct: 2,
        explanation: "'this' refers to the object that is executing the current function. Its value depends on how the function is called."
    },
    {
        question: "Which method is used to convert a string to lowercase in JavaScript?",
        answers: [
            "toLowerCase()",
            "lower()", 
            "lowerCase()",
            "convertLower()"
        ],
        correct: 0,
        explanation: "The toLowerCase() method converts all the alphabetic characters in a string to lowercase."
    }
];

// Shuffle function to randomize questions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get randomized quiz questions
function getQuizQuestions(count = 10) {
    const shuffled = shuffleArray(quizData);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}`,
            language: 'javascript',
            tips: [
              'Include explanations for educational value',
              'Shuffle questions for variety in each attempt',
              'Mix difficulty levels for better engagement'
            ]
          }
        },
        {
          title: 'Complete Quiz Logic',
          description: 'Implement the full quiz functionality',
          type: 'code',
          content: {
            explanation: 'Now let\'s implement the complete quiz logic with timer, scoring, and state management.',
            code: `// script.js - Quiz Application Logic
class QuizApp {
    constructor() {
        this.questions = getQuizQuestions(10);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.timePerQuestion = 30;
        this.timeLeft = this.timePerQuestion;
        this.timer = null;
        this.startTime = null;
        
        this.initializeElements();
        this.bindEvents();
        this.showScreen('startScreen');
    }
    
    initializeElements() {
        // Screens
        this.startScreen = document.getElementById('startScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultsScreen = document.getElementById('resultsScreen');
        
        // Quiz elements
        this.questionText = document.getElementById('questionText');
        this.answersContainer = document.getElementById('answersContainer');
        this.questionCounter = document.getElementById('questionCounter');
        this.progressFill = document.getElementById('progressFill');
        
        // Timer elements
        this.timerDisplay = document.getElementById('timer');
        this.timerFill = document.getElementById('timerFill');
        
        // Buttons
        this.startBtn = document.getElementById('startBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.skipBtn = document.getElementById('skipBtn');
        this.restartBtn = document.getElementById('restartBtn');
        this.reviewBtn = document.getElementById('reviewBtn');
        
        // Results elements
        this.finalScore = document.getElementById('finalScore');
        this.scoreMessage = document.getElementById('scoreMessage');
        this.correctCount = document.getElementById('correctCount');
        this.wrongCount = document.getElementById('wrongCount');
        this.skippedCount = document.getElementById('skippedCount');
        this.timeTaken = document.getElementById('timeTaken');
    }
    
    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.skipBtn.addEventListener('click', () => this.skipQuestion());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.reviewBtn.addEventListener('click', () => this.showReview());
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
    
    startQuiz() {
        this.startTime = Date.now();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.showScreen('quizScreen');
        this.displayQuestion();
        this.startTimer();
    }
    
    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Update question text
        this.questionText.textContent = question.question;
        
        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = \`\${progress}%\`;
        this.questionCounter.textContent = \`Question \${this.currentQuestionIndex + 1} of \${this.questions.length}\`;
        
        // Clear previous answers
        this.answersContainer.innerHTML = '';
        
        // Create answer buttons
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.addEventListener('click', () => this.selectAnswer(index));
            this.answersContainer.appendChild(button);
        });
        
        // Reset button states
        this.nextBtn.disabled = true;
        this.resetTimer();
    }
    
    selectAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestionIndex];
        const answerButtons = this.answersContainer.querySelectorAll('.answer-btn');
        
        // Disable all buttons
        answerButtons.forEach(btn => {
            btn.classList.add('disabled');
            btn.style.pointerEvents = 'none';
        });
        
        // Show correct/incorrect
        answerButtons.forEach((btn, index) => {
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                btn.classList.add('wrong');
            }
        });
        
        // Record answer
        const isCorrect = selectedIndex === question.correct;
        this.answers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: selectedIndex,
            correctAnswer: question.correct,
            isCorrect: isCorrect,
            timeUsed: this.timePerQuestion - this.timeLeft
        });
        
        if (isCorrect) {
            this.score++;
            this.showFeedback('Correct! 🎉', 'success');
        } else {
            this.showFeedback(\`Incorrect. The answer was: \${question.answers[question.correct]}\`, 'error');
        }
        
        // Stop timer and enable next button
        this.stopTimer();
        this.nextBtn.disabled = false;
        
        // Auto-advance after delay
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.nextQuestion();
            } else {
                this.finishQuiz();
            }
        }, 2000);
    }
    
    skipQuestion() {
        this.answers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: null,
            correctAnswer: this.questions[this.currentQuestionIndex].correct,
            isCorrect: false,
            timeUsed: this.timePerQuestion - this.timeLeft,
            skipped: true
        });
        
        this.showFeedback('Question skipped', 'warning');
        this.stopTimer();
        
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.nextQuestion();
            } else {
                this.finishQuiz();
            }
        }, 1000);
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
            this.startTimer();
        } else {
            this.finishQuiz();
        }
    }
    
    startTimer() {
        this.timeLeft = this.timePerQuestion;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    resetTimer() {
        this.stopTimer();
        this.timeLeft = this.timePerQuestion;
        this.updateTimerDisplay();
    }
    
    updateTimerDisplay() {
        this.timerDisplay.textContent = this.timeLeft;
        
        // Update timer bar
        const percentage = (this.timeLeft / this.timePerQuestion) * 100;
        this.timerFill.style.width = \`\${percentage}%\`;
        
        // Update timer colors based on time left
        const timerClasses = ['warning', 'danger'];
        timerClasses.forEach(cls => {
            this.timerDisplay.classList.remove(cls);
            this.timerFill.classList.remove(cls);
        });
        
        if (this.timeLeft <= 5) {
            this.timerDisplay.classList.add('danger');
            this.timerFill.classList.add('danger');
        } else if (this.timeLeft <= 10) {
            this.timerDisplay.classList.add('warning');
            this.timerFill.classList.add('warning');
        }
    }
    
    timeUp() {
        this.stopTimer();
        
        // Mark as skipped due to time
        this.answers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: null,
            correctAnswer: this.questions[this.currentQuestionIndex].correct,
            isCorrect: false,
            timeUsed: this.timePerQuestion,
            timeUp: true
        });
        
        // Show correct answer
        const question = this.questions[this.currentQuestionIndex];
        const answerButtons = this.answersContainer.querySelectorAll('.answer-btn');
        answerButtons.forEach((btn, index) => {
            btn.classList.add('disabled');
            btn.style.pointerEvents = 'none';
            if (index === question.correct) {
                btn.classList.add('correct');
            }
        });
        
        this.showFeedback('Time\\'s up! ⏰', 'warning');
        
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.nextQuestion();
            } else {
                this.finishQuiz();
            }
        }, 2000);
    }
    
    finishQuiz() {
        this.stopTimer();
        const endTime = Date.now();
        const totalTime = Math.floor((endTime - this.startTime) / 1000);
        
        this.showResults(totalTime);
        this.showScreen('resultsScreen');
    }
    
    showResults(totalTime) {
        const correctAnswers = this.answers.filter(a => a.isCorrect).length;
        const wrongAnswers = this.answers.filter(a => !a.isCorrect && !a.skipped && !a.timeUp).length;
        const skippedAnswers = this.answers.filter(a => a.skipped || a.timeUp).length;
        
        // Display score
        this.finalScore.textContent = correctAnswers;
        
        // Score message
        const percentage = (correctAnswers / this.questions.length) * 100;
        let message = '';
        if (percentage >= 90) {
            message = 'Excellent! You\\'re a JavaScript expert! 🌟';
        } else if (percentage >= 70) {
            message = 'Great job! You have solid JavaScript knowledge! 👏';
        } else if (percentage >= 50) {
            message = 'Good effort! Keep practicing to improve! 📚';
        } else {
            message = 'Don\\'t give up! Practice makes perfect! 💪';
        }
        this.scoreMessage.textContent = message;
        
        // Breakdown
        this.correctCount.textContent = correctAnswers;
        this.wrongCount.textContent = wrongAnswers;
        this.skippedCount.textContent = skippedAnswers;
        
        // Time taken
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        this.timeTaken.textContent = \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
        
        // Store results for potential review
        this.lastResults = {
            score: correctAnswers,
            total: this.questions.length,
            percentage: percentage,
            answers: this.answers,
            questions: this.questions,
            totalTime: totalTime
        };
    }
    
    showFeedback(message, type) {
        // Create feedback element
        const feedback = document.createElement('div');
        feedback.className = \`feedback feedback-\${type}\`;
        feedback.textContent = message;
        feedback.style.cssText = \`
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: \${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#f59e0b'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: 600;
            z-index: 1000;
            animation: feedbackShow 0.3s ease-out;
        \`;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'feedbackHide 0.3s ease-out forwards';
            setTimeout(() => feedback.remove(), 300);
        }, 1500);
    }
    
    restartQuiz() {
        // Reset all state
        this.questions = getQuizQuestions(10);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.stopTimer();
        
        // Show start screen
        this.showScreen('startScreen');
    }
    
    showReview() {
        // Implementation for review screen would go here
        alert('Review feature coming soon! This would show detailed answer explanations.');
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = \`
    @keyframes feedbackShow {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes feedbackHide {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
\`;
document.head.appendChild(style);

// Initialize the quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.quiz = new QuizApp();
});`,
            language: 'javascript',
            tips: [
              'Class-based architecture keeps code organized',
              'Timer management provides dynamic user experience',
              'Comprehensive state tracking enables detailed results',
              'Auto-progression keeps the quiz engaging'
            ]
          }
        }
      ]
    },
    'weather-app': {
      title: 'Weather Dashboard Walkthrough',
      description: 'Build a real-time weather application using OpenWeather API',
      totalSteps: 6,
      steps: [
        {
          title: 'Project Setup & API Registration',
          description: 'Set up project structure and get API access',
          type: 'setup',
          content: {
            explanation: 'First, let\'s create the project structure and register for a free OpenWeather API key.',
            code: `weather-app/
├── index.html
├── styles.css
├── script.js
├── config.js
└── assets/
    └── icons/
        └── (weather icons)

Steps to get API key:
1. Visit https://openweathermap.org/api
2. Sign up for a free account
3. Navigate to API keys section
4. Generate a new API key
5. Copy the key for use in config.js`,
            language: 'text',
            tips: [
              'API keys may take a few hours to activate',
              'Never commit API keys to public repositories',
              'Store sensitive data in environment variables for production'
            ]
          }
        },
        {
          title: 'HTML Structure',
          description: 'Create the weather dashboard interface',
          type: 'code',
          content: {
            explanation: 'Let\'s build a comprehensive HTML structure for our weather dashboard with search, current weather, and forecast sections.',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <header class="app-header">
            <h1 class="app-title">🌤️ Weather Dashboard</h1>
            <p class="app-subtitle">Get real-time weather information</p>
        </header>

        <main class="main-content">
            <!-- Search Section -->
            <section class="search-section">
                <div class="search-container">
                    <input type="text" id="cityInput" placeholder="Enter city name..." class="search-input">
                    <button id="searchBtn" class="search-btn">Search</button>
                    <button id="locationBtn" class="location-btn" title="Use current location">📍</button>
                </div>
            </section>

            <!-- Current Weather Section -->
            <section class="current-weather" id="currentWeather">
                <div class="weather-card main-card">
                    <div class="weather-header">
                        <div class="location-info">
                            <h2 id="currentCity" class="city-name">Select a city</h2>
                            <p id="currentDate" class="date"></p>
                        </div>
                        <div class="weather-icon-container">
                            <img id="weatherIcon" src="" alt="Weather Icon" class="weather-icon">
                        </div>
                    </div>

                    <div class="temperature-display">
                        <span id="currentTemp" class="temperature">--°</span>
                        <div class="temp-controls">
                            <button id="celsiusBtn" class="temp-unit active">°C</button>
                            <button id="fahrenheitBtn" class="temp-unit">°F</button>
                        </div>
                    </div>

                    <div class="weather-details">
                        <div class="detail-item">
                            <span class="detail-label">Humidity</span>
                            <span id="humidity" class="detail-value">--%</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Wind Speed</span>
                            <span id="windSpeed" class="detail-value">-- km/h</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 5-Day Forecast Section -->
            <section class="forecast-section">
                <h3 class="section-title">5-Day Forecast</h3>
                <div id="forecastContainer" class="forecast-container">
                    <!-- Forecast cards will be generated here -->
                </div>
            </section>
        </main>
    </div>

    <script src="config.js"></script>
    <script src="script.js"></script>
</body>
</html>`,
            language: 'html',
            tips: [
              'Semantic HTML improves accessibility and SEO',
              'Include meta viewport for responsive design',
              'Use descriptive IDs for easy JavaScript targeting'
            ]
          }
        },
        {
          title: 'CSS Styling & Design System',
          description: 'Create a modern, responsive design',
          type: 'code',
          content: {
            explanation: 'Let\'s create a beautiful, modern design system with gradients, cards, and responsive layouts.',
            code: `/* CSS Variables and Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #3b82f6;
    --secondary-color: #10b981;
    --text-primary: #1f2937;
    --text-white: #ffffff;
    --bg-card: #ffffff;
    --border-radius: 16px;
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    --transition: all 0.3s ease;
    --font-family: 'Inter', sans-serif;
}

body {
    font-family: var(--font-family);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: var(--text-primary);
}

.app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.app-header {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-white);
}

.app-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.search-section {
    background: var(--bg-card);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--shadow-lg);
    margin-bottom: 2rem;
}

.search-container {
    display: flex;
    gap: 1rem;
}

.search-input {
    flex: 1;
    padding: 1rem 1.5rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
}

.search-btn, .location-btn {
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.search-btn {
    background: var(--primary-color);
    color: var(--text-white);
}

.location-btn {
    background: var(--secondary-color);
    color: var(--text-white);
}

.weather-card {
    background: linear-gradient(135deg, var(--primary-color), #2563eb);
    color: var(--text-white);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--shadow-lg);
}

.weather-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
}

.city-name {
    font-size: 1.5rem;
    font-weight: 600;
}

.weather-icon {
    width: 80px;
    height: 80px;
}

.temperature {
    font-size: 4rem;
    font-weight: 700;
}

.weather-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}

.detail-item {
    text-align: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
}

@media (max-width: 768px) {
    .search-container {
        flex-direction: column;
    }

    .temperature {
        font-size: 3rem;
    }
}`,
            language: 'css',
            tips: [
              'CSS Grid provides flexible responsive layouts',
              'CSS custom properties make theming consistent',
              'Backdrop-filter creates modern glass effects'
            ]
          }
        },
        {
          title: 'API Configuration',
          description: 'Set up weather API integration',
          type: 'code',
          content: {
            explanation: 'Let\'s create the configuration and API service for weather data.',
            code: `// config.js - API Configuration
const CONFIG = {
    API_KEY: 'YOUR_API_KEY_HERE', // Get from openweathermap.org
    BASE_URL: 'https://api.openweathermap.org/data/2.5',
    ICON_URL: 'https://openweathermap.org/img/wn',
    DEFAULT_CITY: 'London',
    UNITS: 'metric'
};

// Weather API Service
const WeatherAPI = {
    async getCurrentWeather(cityName) {
        try {
            const url = \`\${CONFIG.BASE_URL}/weather?q=\${cityName}&appid=\${CONFIG.API_KEY}&units=\${CONFIG.UNITS}\`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(\`Weather data not found for \${cityName}\`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching weather:', error);
            throw error;
        }
    },

    async getForecast(cityName) {
        try {
            const url = \`\${CONFIG.BASE_URL}/forecast?q=\${cityName}&appid=\${CONFIG.API_KEY}&units=\${CONFIG.UNITS}\`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(\`Forecast data not found for \${cityName}\`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching forecast:', error);
            throw error;
        }
    },

    async getCurrentLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation not supported'));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                position => resolve(position.coords),
                error => reject(error)
            );
        });
    }
};

// Utility Functions
const Utils = {
    formatTemperature(temp, unit = 'C') {
        return \`\${Math.round(temp)}°\${unit}\`;
    },

    formatDate(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    getWeatherIconUrl(iconCode) {
        return \`\${CONFIG.ICON_URL}/\${iconCode}@2x.png\`;
    },

    capitalizeWords(str) {
        return str.replace(/\b\w/g, l => l.toUpperCase());
    }
};`,
            language: 'javascript',
            tips: [
              'Always validate API responses before using data',
              'Use environment variables for API keys in production',
              'Implement proper error handling for network requests'
            ]
          }
        },
        {
          title: 'Weather App Logic',
          description: 'Implement the main application functionality',
          type: 'code',
          content: {
            explanation: 'Now let\'s implement the core functionality including search, display, and user interactions.',
            code: `// script.js - Main Weather Application
class WeatherApp {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.loadDefaultWeather();
    }

    initializeElements() {
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.locationBtn = document.getElementById('locationBtn');
        this.currentCity = document.getElementById('currentCity');
        this.currentDate = document.getElementById('currentDate');
        this.weatherIcon = document.getElementById('weatherIcon');
        this.currentTemp = document.getElementById('currentTemp');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.forecastContainer = document.getElementById('forecastContainer');
    }

    bindEvents() {
        this.searchBtn.addEventListener('click', () => this.handleSearch());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });
        this.locationBtn.addEventListener('click', () => this.getCurrentLocation());
    }

    async loadDefaultWeather() {
        try {
            await this.searchWeather(CONFIG.DEFAULT_CITY);
        } catch (error) {
            console.error('Error loading default weather:', error);
        }
    }

    async handleSearch() {
        const cityName = this.cityInput.value.trim();
        if (!cityName) {
            alert('Please enter a city name');
            return;
        }

        try {
            await this.searchWeather(cityName);
            this.cityInput.value = '';
        } catch (error) {
            alert(error.message);
        }
    }

    async searchWeather(cityName) {
        try {
            this.showLoading();

            const [weatherData, forecastData] = await Promise.all([
                WeatherAPI.getCurrentWeather(cityName),
                WeatherAPI.getForecast(cityName)
            ]);

            this.displayCurrentWeather(weatherData);
            this.displayForecast(forecastData);

        } catch (error) {
            throw new Error(\`Unable to get weather data for \${cityName}\`);
        } finally {
            this.hideLoading();
        }
    }

    displayCurrentWeather(data) {
        this.currentCity.textContent = \`\${data.name}, \${data.sys.country}\`;
        this.currentDate.textContent = Utils.formatDate(data.dt);
        this.weatherIcon.src = Utils.getWeatherIconUrl(data.weather[0].icon);
        this.currentTemp.textContent = Utils.formatTemperature(data.main.temp);
        this.humidity.textContent = \`\${data.main.humidity}%\`;
        this.windSpeed.textContent = \`\${Math.round(data.wind.speed * 3.6)} km/h\`;
    }

    displayForecast(data) {
        // Get daily forecasts (every 8th item = 24 hours later)
        const dailyForecasts = [];
        for (let i = 0; i < data.list.length; i += 8) {
            if (dailyForecasts.length < 5) {
                dailyForecasts.push(data.list[i]);
            }
        }

        const forecastHtml = dailyForecasts.map(forecast => \`
            <div class="forecast-card">
                <h4>\${new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</h4>
                <img src="\${Utils.getWeatherIconUrl(forecast.weather[0].icon)}" alt="Weather">
                <p>\${Utils.formatTemperature(forecast.main.temp)}</p>
                <p>\${Utils.capitalizeWords(forecast.weather[0].description)}</p>
            </div>
        \`).join('');

        this.forecastContainer.innerHTML = forecastHtml;
    }

    async getCurrentLocation() {
        try {
            this.showLoading();
            const coords = await WeatherAPI.getCurrentLocation();

            // Get weather by coordinates
            const url = \`\${CONFIG.BASE_URL}/weather?lat=\${coords.latitude}&lon=\${coords.longitude}&appid=\${CONFIG.API_KEY}&units=\${CONFIG.UNITS}\`;
            const response = await fetch(url);
            const data = await response.json();

            this.displayCurrentWeather(data);

        } catch (error) {
            alert('Unable to get your location');
        } finally {
            this.hideLoading();
        }
    }

    showLoading() {
        // Add loading indicator
        this.searchBtn.textContent = 'Loading...';
        this.searchBtn.disabled = true;
    }

    hideLoading() {
        this.searchBtn.textContent = 'Search';
        this.searchBtn.disabled = false;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    if (CONFIG.API_KEY === 'YOUR_API_KEY_HERE') {
        alert('Please configure your OpenWeather API key in config.js');
        return;
    }

    window.weatherApp = new WeatherApp();
});`,
            language: 'javascript',
            tips: [
              'Use async/await for cleaner asynchronous code',
              'Implement proper error handling for user experience',
              'Use geolocation API for location-based features'
            ]
          }
        },
        {
          title: 'Testing & Deployment',
          description: 'Test and deploy your weather application',
          type: 'code',
          content: {
            explanation: 'Let\'s test our weather app and prepare it for deployment.',
            code: `// Testing and Deployment Guide

/* TESTING CHECKLIST */
1. ✓ Search by city name works
2. ✓ Current location detection works
3. ✓ Weather data displays correctly
4. ✓ 5-day forecast shows
5. ✓ Error handling for invalid cities
6. ✓ Responsive design on mobile/desktop

/* DEPLOYMENT STEPS */

1. Get API Key:
   - Visit openweathermap.org/api
   - Sign up for free account
   - Get API key and update config.js

2. Test Locally:
   - Use Live Server or similar local server
   - Test all features thoroughly
   - Check browser console for errors

3. Deploy Options:
   - GitHub Pages (free)
   - Netlify (free)
   - Vercel (free)

4. Production Optimizations:
   - Minify CSS/JS files
   - Optimize images
   - Add error tracking
   - Implement caching

/* ADDITIONAL FEATURES TO ADD */

// Weather alerts
async function getWeatherAlerts(lat, lon) {
    const url = \`\${CONFIG.BASE_URL}/onecall?lat=\${lat}&lon=\${lon}&appid=\${CONFIG.API_KEY}\`;
    const response = await fetch(url);
    const data = await response.json();
    return data.alerts || [];
}

// Save favorite cities
function saveFavoriteCity(cityName) {
    const favorites = JSON.parse(localStorage.getItem('favoriteCities') || '[]');
    if (!favorites.includes(cityName)) {
        favorites.push(cityName);
        localStorage.setItem('favoriteCities', JSON.stringify(favorites));
    }
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

/* COMMON ISSUES & SOLUTIONS */

// CORS issues in development:
// - Use local server (Live Server, Python http.server)
// - Don't open HTML files directly in browser

// API key not working:
// - Check if key is correctly set in config.js
// - API keys may take time to activate
// - Verify API plan limits

// City not found errors:
// - Check spelling and try different formats
// - Use country codes for ambiguous cities
// - Implement city search suggestions`,
            language: 'javascript',
            tips: [
              'Always test with different API responses and error scenarios',
              'Use browser dev tools to debug network requests',
              'Keep API keys secure and never commit them to version control',
              'Test responsive design on various screen sizes'
            ]
          }
        }
      ]
    },
    'notes-app': {
      title: 'Notes Application Walkthrough',
      description: 'Build a React notes app with categories and search',
      totalSteps: 6,
      steps: [
        {
          title: 'React Project Setup',
          description: 'Initialize React app with Vite',
          type: 'setup',
          content: {
            explanation: 'Let\'s set up a modern React project using Vite for fast development and build times.',
            code: `# Create new React project with Vite
npm create vite@latest notes-app -- --template react
cd notes-app
npm install

# Install additional dependencies
npm install uuid date-fns

# Project structure:
notes-app/
├── public/
├── src/
│   ├── components/
│   │   ├── NoteCard.jsx
│   │   ├── NoteEditor.jsx
│   │   ├── NoteList.jsx
│   │   ├── SearchBar.jsx
│   │   └── CategoryFilter.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useNotes.js
│   ├── utils/
│   │   └── notes.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── vite.config.js

# Start development server
npm run dev`,
            language: 'bash',
            tips: [
              'Vite provides faster hot module replacement than Create React App',
              'Organize components in separate files for better maintainability',
              'Use custom hooks to encapsulate logic and state management'
            ]
          }
        },
        {
          title: 'App Structure & State Management',
          description: 'Set up the main app component and state',
          type: 'code',
          content: {
            explanation: 'Let\'s create the main App component with state management for notes, categories, and search functionality.',
            code: `// src/App.jsx
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

const App = () => {
  // State management
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  // Derived state
  const categories = ['all', ...new Set(notes.map(note => note.category).filter(Boolean))];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Apply dark mode
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Note operations
  const createNote = () => {
    const newNote = {
      id: uuidv4(),
      title: 'New Note',
      content: '',
      category: '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      isPinned: false
    };
    setNotes(prev => [newNote, ...prev]);
    setSelectedNote(newNote);
    setIsEditing(true);
  };

  const updateNote = (id, updates) => {
    setNotes(prev => prev.map(note =>
      note.id === id
        ? { ...note, ...updates, updatedAt: Date.now() }
        : note
    ));

    if (selectedNote?.id === id) {
      setSelectedNote(prev => ({ ...prev, ...updates, updatedAt: Date.now() }));
    }
  };

  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(prev => prev.filter(note => note.id !== id));
      if (selectedNote?.id === id) {
        setSelectedNote(null);
        setIsEditing(false);
      }
    }
  };

  const togglePin = (id) => {
    setNotes(prev => prev.map(note =>
      note.id === id
        ? { ...note, isPinned: !note.isPinned, updatedAt: Date.now() }
        : note
    ));
  };

  const duplicateNote = (note) => {
    const duplicatedNote = {
      ...note,
      id: uuidv4(),
      title: \`\${note.title} (Copy)\`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      isPinned: false
    };
    setNotes(prev => [duplicatedNote, ...prev]);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">📝 Notes App</h1>
          <div className="header-actions">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              title="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={createNote}
              className="btn btn-primary"
            >
              ✏️ New Note
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        {/* Sidebar */}
        <aside className="sidebar">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="notes-stats">
            <p className="stats-item">
              Total Notes: <span className="stats-number">{notes.length}</span>
            </p>
            <p className="stats-item">
              Showing: <span className="stats-number">{filteredNotes.length}</span>
            </p>
          </div>
        </aside>

        {/* Content Area */}
        <div className="content-area">
          {/* Notes List */}
          <section className="notes-section">
            <NoteList
              notes={filteredNotes}
              selectedNote={selectedNote}
              onNoteSelect={setSelectedNote}
              onNoteDelete={deleteNote}
              onNotePin={togglePin}
              onNoteDuplicate={duplicateNote}
              onEditStart={() => setIsEditing(true)}
            />
          </section>

          {/* Note Editor */}
          <section className="editor-section">
            {selectedNote ? (
              <NoteEditor
                note={selectedNote}
                isEditing={isEditing}
                onNoteUpdate={updateNote}
                onEditingChange={setIsEditing}
                categories={categories.filter(cat => cat !== 'all')}
              />
            ) : (
              <div className="no-note-selected">
                <div className="empty-state">
                  <h3>📝 Welcome to Notes App</h3>
                  <p>Select a note from the list or create a new one to get started.</p>
                  <button onClick={createNote} className="btn btn-primary">
                    Create Your First Note
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;`,
            language: 'jsx',
            tips: [
              'Use custom hooks like useLocalStorage for reusable logic',
              'Separate concerns by breaking down the app into components',
              'Keep derived state calculations in the component body'
            ]
          }
        },
        {
          title: 'Custom Hooks',
          description: 'Create reusable hooks for state management',
          type: 'code',
          content: {
            explanation: 'Let\'s create custom hooks to manage local storage and notes operations cleanly.',
            code: `// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Get value from localStorage or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":, error\`);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":, error\`);
    }
  };

  return [storedValue, setValue];
};

// src/hooks/useNotes.js
import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useNotes = (initialNotes = []) => {
  const [notes, setNotes] = useState(initialNotes);

  const addNote = useCallback((noteData) => {
    const newNote = {
      id: uuidv4(),
      title: noteData.title || 'New Note',
      content: noteData.content || '',
      category: noteData.category || '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      isPinned: false,
      ...noteData
    };

    setNotes(prev => [newNote, ...prev]);
    return newNote;
  }, []);

  const updateNote = useCallback((id, updates) => {
    setNotes(prev => prev.map(note =>
      note.id === id
        ? { ...note, ...updates, updatedAt: Date.now() }
        : note
    ));
  }, []);

  const deleteNote = useCallback((id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  }, []);

  const togglePin = useCallback((id) => {
    setNotes(prev => prev.map(note =>
      note.id === id
        ? { ...note, isPinned: !note.isPinned, updatedAt: Date.now() }
        : note
    ));
  }, []);

  const duplicateNote = useCallback((noteId) => {
    setNotes(prev => {
      const originalNote = prev.find(note => note.id === noteId);
      if (!originalNote) return prev;

      const duplicatedNote = {
        ...originalNote,
        id: uuidv4(),
        title: \`\${originalNote.title} (Copy)\`,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        isPinned: false
      };

      return [duplicatedNote, ...prev];
    });
  }, []);

  const searchNotes = useCallback((searchTerm, category = 'all') => {
    return notes.filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'all' || note.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [notes]);

  const getCategories = useCallback(() => {
    return ['all', ...new Set(notes.map(note => note.category).filter(Boolean))];
  }, [notes]);

  const getNotesByCategory = useCallback((category) => {
    if (category === 'all') return notes;
    return notes.filter(note => note.category === category);
  }, [notes]);

  const getPinnedNotes = useCallback(() => {
    return notes.filter(note => note.isPinned);
  }, [notes]);

  return {
    notes,
    setNotes,
    addNote,
    updateNote,
    deleteNote,
    togglePin,
    duplicateNote,
    searchNotes,
    getCategories,
    getNotesByCategory,
    getPinnedNotes
  };
};

// src/utils/notes.js
import { format, formatDistanceToNow } from 'date-fns';

export const formatNoteDate = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = (now - date) / (1000 * 60 * 60);

  if (diffInHours < 24) {
    return formatDistanceToNow(date, { addSuffix: true });
  } else if (diffInHours < 24 * 7) {
    return format(date, 'EEEE \'at\' h:mm a');
  } else {
    return format(date, 'MMM d, yyyy \'at\' h:mm a');
  }
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const getPreviewText = (content, maxLength = 150) => {
  // Remove markdown-like formatting for preview
  const cleanContent = content
    .replace(/#+\\s/g, '') // Remove headers
    .replace(/\\*\\*(.*?)\\*\\*/g, '$1') // Remove bold
    .replace(/\\*(.*?)\\*/g, '$1') // Remove italic
    .replace(/\\[(.*?)\\]\\(.*?\\)/g, '$1') // Remove links
    .trim();

  return truncateText(cleanContent, maxLength);
};

export const sortNotes = (notes, sortBy = 'updatedAt', sortOrder = 'desc') => {
  return [...notes].sort((a, b) => {
    // Pinned notes always come first
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;

    let comparison = 0;

    switch (sortBy) {
      case 'title':
        comparison = a.title.localeCompare(b.title);
        break;
      case 'createdAt':
        comparison = a.createdAt - b.createdAt;
        break;
      case 'updatedAt':
      default:
        comparison = a.updatedAt - b.updatedAt;
        break;
    }

    return sortOrder === 'desc' ? -comparison : comparison;
  });
};

export const exportNotes = (notes, format = 'json') => {
  switch (format) {
    case 'json':
      return JSON.stringify(notes, null, 2);
    case 'csv':
      const headers = ['Title', 'Content', 'Category', 'Created', 'Updated'];
      const csvContent = [
        headers.join(','),
        ...notes.map(note => [
          \`"\${note.title.replace(/"/g, '""')}"\`,
          \`"\${note.content.replace(/"/g, '""')}"\`,
          \`"\${note.category}"\`,
          \`"\${format(new Date(note.createdAt), 'yyyy-MM-dd HH:mm:ss')}"\`,
          \`"\${format(new Date(note.updatedAt), 'yyyy-MM-dd HH:mm:ss')}"\`
        ].join(','))
      ].join('\\n');
      return csvContent;
    case 'markdown':
      return notes.map(note =>
        \`# \${note.title}\\n\\n\${note.content}\\n\\n---\\n\\n\`
      ).join('');
    default:
      return JSON.stringify(notes, null, 2);
  }
};`,
            language: 'javascript',
            tips: [
              'Custom hooks encapsulate related logic and make components cleaner',
              'Use useCallback to optimize performance for functions passed as props',
              'Utility functions help with formatting and data manipulation'
            ]
          }
        },
        {
          title: 'Note Components',
          description: 'Build the note list and editor components',
          type: 'code',
          content: {
            explanation: 'Let\'s create the components for displaying and editing notes.',
            code: `// src/components/NoteList.jsx
import React from 'react';
import NoteCard from './NoteCard';
import { sortNotes } from '../utils/notes';

const NoteList = ({
  notes,
  selectedNote,
  onNoteSelect,
  onNoteDelete,
  onNotePin,
  onNoteDuplicate,
  onEditStart
}) => {
  const sortedNotes = sortNotes(notes);

  if (notes.length === 0) {
    return (
      <div className="empty-notes">
        <div className="empty-icon">📝</div>
        <h3>No notes found</h3>
        <p>Create your first note or adjust your search filters.</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      <div className="note-list-header">
        <h2>Notes ({notes.length})</h2>
      </div>
      <div className="note-cards">
        {sortedNotes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            isSelected={selectedNote?.id === note.id}
            onSelect={() => onNoteSelect(note)}
            onDelete={() => onNoteDelete(note.id)}
            onPin={() => onNotePin(note.id)}
            onDuplicate={() => onNoteDuplicate(note)}
            onEdit={() => {
              onNoteSelect(note);
              onEditStart();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;

// src/components/NoteCard.jsx
import React, { useState } from 'react';
import { formatNoteDate, getPreviewText } from '../utils/notes';

const NoteCard = ({
  note,
  isSelected,
  onSelect,
  onDelete,
  onPin,
  onDuplicate,
  onEdit
}) => {
  const [showActions, setShowActions] = useState(false);

  const handleCardClick = (e) => {
    // Don't select if clicking on action buttons
    if (e.target.closest('.note-actions')) return;
    onSelect();
  };

  const previewText = getPreviewText(note.content);

  return (
    <div
      className={\`note-card \${isSelected ? 'selected' : ''} \${note.isPinned ? 'pinned' : ''}\`}
      onClick={handleCardClick}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Pin indicator */}
      {note.isPinned && (
        <div className="pin-indicator" title="Pinned note">
          📌
        </div>
      )}

      {/* Note content */}
      <div className="note-content">
        <h3 className="note-title">{note.title}</h3>
        {note.category && (
          <span className="note-category">{note.category}</span>
        )}
        {previewText && (
          <p className="note-preview">{previewText}</p>
        )}
        <time className="note-date">
          {formatNoteDate(note.updatedAt)}
        </time>
      </div>

      {/* Actions */}
      <div className={\`note-actions \${showActions ? 'visible' : ''}\`}>
        <button
          onClick={(e) => { e.stopPropagation(); onEdit(); }}
          className="action-btn edit-btn"
          title="Edit note"
        >
          ✏️
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onPin(); }}
          className={\`action-btn pin-btn \${note.isPinned ? 'active' : ''}\`}
          title={note.isPinned ? 'Unpin note' : 'Pin note'}
        >
          📌
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onDuplicate(); }}
          className="action-btn duplicate-btn"
          title="Duplicate note"
        >
          📄
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="action-btn delete-btn"
          title="Delete note"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default NoteCard;

// src/components/NoteEditor.jsx
import React, { useState, useEffect, useRef } from 'react';
import { formatNoteDate } from '../utils/notes';

const NoteEditor = ({
  note,
  isEditing,
  onNoteUpdate,
  onEditingChange,
  categories
}) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [category, setCategory] = useState(note.category);
  const [newCategory, setNewCategory] = useState('');
  const [showCategoryInput, setShowCategoryInput] = useState(false);

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  // Update local state when note changes
  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
  }, [note]);

  // Focus title when editing starts
  useEffect(() => {
    if (isEditing && titleRef.current) {
      titleRef.current.focus();
      titleRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    const finalCategory = showCategoryInput ? newCategory.trim() : category;

    onNoteUpdate(note.id, {
      title: title.trim() || 'Untitled',
      content: content.trim(),
      category: finalCategory
    });

    onEditingChange(false);
    setShowCategoryInput(false);
    setNewCategory('');
  };

  const handleCancel = () => {
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setShowCategoryInput(false);
    setNewCategory('');
    onEditingChange(false);
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 's') {
        e.preventDefault();
        handleSave();
      } else if (e.key === 'Escape') {
        handleCancel();
      }
    }
  };

  if (!note) return null;

  return (
    <div className="note-editor">
      {/* Editor Header */}
      <div className="editor-header">
        <div className="editor-info">
          <time className="note-date">
            Created: {formatNoteDate(note.createdAt)}
            {note.updatedAt !== note.createdAt && (
              <> • Updated: {formatNoteDate(note.updatedAt)}</>
            )}
          </time>
        </div>

        <div className="editor-actions">
          {isEditing ? (
            <>
              <button onClick={handleCancel} className="btn btn-secondary">
                Cancel
              </button>
              <button onClick={handleSave} className="btn btn-primary">
                Save (Ctrl+S)
              </button>
            </>
          ) : (
            <button onClick={() => onEditingChange(true)} className="btn btn-primary">
              ✏️ Edit
            </button>
          )}
        </div>
      </div>

      {/* Editor Content */}
      <div className="editor-content" onKeyDown={handleKeyDown}>
        {isEditing ? (
          <>
            {/* Title Input */}
            <input
              ref={titleRef}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="title-input"
              placeholder="Note title..."
            />

            {/* Category Selection */}
            <div className="category-section">
              <label htmlFor="category-select">Category:</label>
              <div className="category-controls">
                <select
                  id="category-select"
                  value={showCategoryInput ? '' : category}
                  onChange={(e) => {
                    if (e.target.value === 'new') {
                      setShowCategoryInput(true);
                    } else {
                      setCategory(e.target.value);
                      setShowCategoryInput(false);
                    }
                  }}
                  className="category-select"
                >
                  <option value="">No category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                  <option value="new">+ New category</option>
                </select>

                {showCategoryInput && (
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Enter new category..."
                    className="new-category-input"
                    autoFocus
                  />
                )}
              </div>
            </div>

            {/* Content Textarea */}
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="content-textarea"
              placeholder="Start writing your note..."
              rows={20}
            />
          </>
        ) : (
          <>
            {/* Read-only view */}
            <h1 className="note-title-display">{note.title}</h1>
            {note.category && (
              <span className="note-category-display">{note.category}</span>
            )}
            <div className="note-content-display">
              {note.content ? (
                <pre className="note-content-text">{note.content}</pre>
              ) : (
                <p className="empty-content">This note is empty. Click edit to add content.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NoteEditor;`,
            language: 'jsx',
            tips: [
              'Use controlled components for form inputs',
              'Implement keyboard shortcuts for better UX',
              'Separate read and edit modes for clear user interface'
            ]
          }
        },
        {
          title: 'Search & Filter Components',
          description: 'Add search and category filtering functionality',
          type: 'code',
          content: {
            explanation: 'Let\'s create components for searching notes and filtering by categories.',
            code: `// src/components/SearchBar.jsx
import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  // Debounced search to avoid too many updates
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      onSearchChange(localSearchTerm);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [localSearchTerm, onSearchChange]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + F to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        inputRef.current?.focus();
      }

      // Escape to clear search
      if (e.key === 'Escape' && isFocused) {
        setLocalSearchTerm('');
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFocused]);

  const clearSearch = () => {
    setLocalSearchTerm('');
    inputRef.current?.focus();
  };

  return (
    <div className="search-bar">
      <div className={\`search-input-container \${isFocused ? 'focused' : ''}\`}>
        <div className="search-icon">🔍</div>
        <input
          ref={inputRef}
          type="text"
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search notes... (Ctrl+F)"
          className="search-input"
        />
        {localSearchTerm && (
          <button
            onClick={clearSearch}
            className="clear-search-btn"
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search suggestions/tips */}
      {isFocused && !localSearchTerm && (
        <div className="search-tips">
          <p className="search-tip">💡 Tip: Search by title or content</p>
        </div>
      )}

      {/* Search results count */}
      {searchTerm && (
        <div className="search-results-info">
          <p className="search-info">Searching for: <strong>"{searchTerm}"</strong></p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

// src/components/CategoryFilter.jsx
import React, { useState } from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const getCategoryIcon = (category) => {
    const icons = {
      'all': '📁',
      'work': '💼',
      'personal': '👤',
      'ideas': '💡',
      'todo': '✅',
      'meeting': '🤝',
      'research': '🔬',
      'project': '🚀'
    };
    return icons[category.toLowerCase()] || '📄';
  };

  const getCategoryCount = (category) => {
    // This would be passed as a prop in a real implementation
    // For now, we'll return a placeholder
    return 0;
  };

  return (
    <div className="category-filter">
      <div className="category-header">
        <h3 className="category-title">Categories</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="category-toggle"
          title={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? '⌄' : '▶'}
        </button>
      </div>

      {isExpanded && (
        <div className="category-list">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={\`category-item \${selectedCategory === category ? 'active' : ''}\`}
            >
              <span className="category-icon">
                {getCategoryIcon(category)}
              </span>
              <span className="category-name">
                {category === 'all' ? 'All Notes' : category}
              </span>
              <span className="category-count">
                ({getCategoryCount(category)})
              </span>
            </button>
          ))}

          {categories.length === 1 && (
            <div className="no-categories">
              <p className="no-categories-text">
                No categories yet. Create notes with categories to see them here.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Quick actions */}
      <div className="category-actions">
        <button
          onClick={() => onCategoryChange('all')}
          className="category-action-btn"
          disabled={selectedCategory === 'all'}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;

// src/components/NotesStats.jsx (Bonus component)
import React from 'react';
import { formatNoteDate } from '../utils/notes';

const NotesStats = ({ notes }) => {
  const stats = {
    total: notes.length,
    pinned: notes.filter(note => note.isPinned).length,
    categories: new Set(notes.map(note => note.category).filter(Boolean)).size,
    totalWords: notes.reduce((sum, note) => {
      return sum + note.content.split(/\s+/).filter(word => word.length > 0).length;
    }, 0),
    recentlyUpdated: notes.filter(note => {
      const dayAgo = Date.now() - (24 * 60 * 60 * 1000);
      return note.updatedAt > dayAgo;
    }).length,
    oldestNote: notes.length > 0 ? Math.min(...notes.map(note => note.createdAt)) : null,
    newestNote: notes.length > 0 ? Math.max(...notes.map(note => note.createdAt)) : null
  };

  if (notes.length === 0) {
    return (
      <div className="notes-stats empty">
        <h3>📊 Notes Statistics</h3>
        <p>Create your first note to see statistics here.</p>
      </div>
    );
  }

  return (
    <div className="notes-stats">
      <h3>📊 Notes Statistics</h3>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">{stats.total}</span>
          <span className="stat-label">Total Notes</span>
        </div>

        <div className="stat-item">
          <span className="stat-number">{stats.pinned}</span>
          <span className="stat-label">Pinned</span>
        </div>

        <div className="stat-item">
          <span className="stat-number">{stats.categories}</span>
          <span className="stat-label">Categories</span>
        </div>

        <div className="stat-item">
          <span className="stat-number">{stats.totalWords.toLocaleString()}</span>
          <span className="stat-label">Total Words</span>
        </div>

        <div className="stat-item">
          <span className="stat-number">{stats.recentlyUpdated}</span>
          <span className="stat-label">Updated Today</span>
        </div>
      </div>

      {stats.oldestNote && (
        <div className="date-stats">
          <p className="date-stat">
            <strong>First note:</strong> {formatNoteDate(stats.oldestNote)}
          </p>
          <p className="date-stat">
            <strong>Latest note:</strong> {formatNoteDate(stats.newestNote)}
          </p>
        </div>
      )}
    </div>
  );
};

export default NotesStats;`,
            language: 'jsx',
            tips: [
              'Debounce search input to improve performance',
              'Add keyboard shortcuts for better accessibility',
              'Provide visual feedback for user interactions'
            ]
          }
        },
        {
          title: 'Styling & Responsive Design',
          description: 'Complete the app with CSS styling',
          type: 'code',
          content: {
            explanation: 'Let\'s add comprehensive CSS styling with dark mode support and responsive design.',
            code: `/* src/App.css */
/* CSS Variables */
:root {
  /* Light theme colors */
  --color-primary: #6366f1;
  --color-primary-dark: #4f46e5;
  --color-secondary: #10b981;
  --color-accent: #f59e0b;
  --color-danger: #ef4444;

  --color-text-primary: #1f2937;
  --color-text-secondary: #6b7280;
  --color-text-muted: #9ca3af;
  --color-text-white: #ffffff;

  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-bg-tertiary: #f3f4f6;
  --color-bg-card: #ffffff;
  --color-bg-hover: #f5f5f5;

  --color-border: #e5e7eb;
  --color-border-light: #f3f4f6;
  --color-border-focus: #6366f1;

  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);

  --border-radius: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;

  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --transition: all 0.2s ease-in-out;
}

/* Dark theme colors */
body.dark-mode {
  --color-text-primary: #f9fafb;
  --color-text-secondary: #d1d5db;
  --color-text-muted: #9ca3af;

  --color-bg-primary: #111827;
  --color-bg-secondary: #1f2937;
  --color-bg-tertiary: #374151;
  --color-bg-card: #1f2937;
  --color-bg-hover: #374151;

  --color-border: #374151;
  --color-border-light: #4b5563;
}

/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  line-height: 1.6;
  transition: var(--transition);
}

/* App Layout */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: var(--color-bg-card);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 2rem;
  box-shadow: var(--shadow-sm);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.theme-toggle:hover {
  background: var(--color-bg-hover);
}

/* Main Content Layout */
.app-main {
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  padding: 2rem;
}

/* Sidebar */
.sidebar {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  height: fit-content;
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 2rem;
}

/* Content Area */
.content-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  min-height: 0;
}

/* Notes Section */
.notes-section {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.note-list {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.note-list-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
}

.note-list-header h2 {
  font-size: 1.25rem;
  color: var(--color-text-primary);
}

.note-cards {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Note Card */
.note-card {
  position: relative;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 1rem;
  cursor: pointer;
  transition: var(--transition);
}

.note-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.note-card.selected {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgb(99 102 241 / 0.1);
}

.note-card.pinned {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

body.dark-mode .note-card.pinned {
  background: linear-gradient(135deg, #451a03 0%, #78350f 100%);
}

.pin-indicator {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 0.875rem;
}

.note-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--color-text-primary);
  line-height: 1.4;
}

.note-category {
  display: inline-block;
  background: var(--color-primary);
  color: var(--color-text-white);
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  margin-bottom: 0.5rem;
}

.note-preview {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.note-date {
  color: var(--color-text-muted);
  font-size: 0.75rem;
}

.note-actions {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.25rem;
  opacity: 0;
  transition: var(--transition);
}

.note-card:hover .note-actions {
  opacity: 1;
}

.action-btn {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.75rem;
  transition: var(--transition);
}

.action-btn:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-md);
}

.delete-btn:hover {
  background: var(--color-danger);
  color: var(--color-text-white);
}

/* Editor Section */
.editor-section {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
}

.note-editor {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
}

.editor-content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title-input {
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  padding: 0.5rem 0;
  outline: none;
  border-bottom: 2px solid transparent;
  transition: var(--transition);
}

.title-input:focus {
  border-bottom-color: var(--color-primary);
}

.content-textarea {
  flex: 1;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 1rem;
  font-family: var(--font-family);
  font-size: 0.875rem;
  line-height: 1.6;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  resize: none;
  outline: none;
  transition: var(--transition);
}

.content-textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgb(99 102 241 / 0.1);
}

/* Buttons */
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-text-white);
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover {
  background: var(--color-bg-hover);
}

/* Search Bar */
.search-bar {
  margin-bottom: 1.5rem;
}

.search-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 2.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-size: 0.875rem;
  transition: var(--transition);
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgb(99 102 241 / 0.1);
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.clear-search-btn {
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: 0.875rem;
}

/* Category Filter */
.category-filter {
  margin-bottom: 1.5rem;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.category-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border: none;
  background: transparent;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  transition: var(--transition);
  text-align: left;
}

.category-item:hover {
  background: var(--color-bg-hover);
  color: var(--color-text-primary);
}

.category-item.active {
  background: var(--color-primary);
  color: var(--color-text-white);
}

/* Empty States */
.empty-notes,
.no-note-selected {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: var(--color-text-muted);
}

.empty-state {
  max-width: 300px;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .app-main {
    grid-template-columns: 250px 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  .content-area {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .app-main {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .sidebar {
    position: static;
  }

  .header-content {
    padding: 0 1rem;
  }

  .app-title {
    font-size: 1.25rem;
  }
}

/* Animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.note-card {
  animation: slideIn 0.2s ease-out;
}`,
            language: 'css',
            tips: [
              'Use CSS custom properties for consistent theming',
              'Implement smooth transitions for better user experience',
              'Design mobile-first responsive layouts',
              'Use CSS Grid for complex layout arrangements'
            ]
          }
        },
        {
          title: 'Testing & Deployment',
          description: 'Test and deploy your React notes application',
          type: 'code',
          content: {
            explanation: 'Let\'s test our notes app thoroughly and prepare it for deployment.',
            code: `// Testing and Deployment Guide

/* TESTING CHECKLIST */

// 1. Component Testing
// Create __tests__ folder and add tests:

// src/__tests__/App.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Notes App', () => {
  test('renders app title', () => {
    render(<App />);
    expect(screen.getByText('📝 Notes App')).toBeInTheDocument();
  });

  test('creates new note', () => {
    render(<App />);
    const newNoteBtn = screen.getByText('✏️ New Note');
    fireEvent.click(newNoteBtn);
    expect(screen.getByText('New Note')).toBeInTheDocument();
  });

  test('search functionality works', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/search notes/i);
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });
});

// 2. Hook Testing
// src/__tests__/useLocalStorage.test.js
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../hooks/useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should return initial value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'initial'));
    expect(result.current[0]).toBe('initial');
  });

  test('should update localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'initial'));

    act(() => {
      result.current[1]('updated');
    });

    expect(result.current[0]).toBe('updated');
    expect(localStorage.getItem('test')).toBe('"updated"');
  });
});

/* MANUAL TESTING CHECKLIST */

1. ✓ Create new notes
2. ✓ Edit note titles and content
3. ✓ Delete notes with confirmation
4. ✓ Pin/unpin notes
5. ✓ Duplicate notes
6. ✓ Search by title and content
7. ✓ Filter by categories
8. ✓ Create new categories
9. ✓ Dark mode toggle
10. ✓ Keyboard shortcuts (Ctrl+S, Ctrl+F, Escape)
11. ✓ Local storage persistence
12. ✓ Responsive design on mobile/tablet/desktop
13. ✓ Empty states display correctly
14. ✓ Error handling for edge cases

/* PRODUCTION BUILD */

// 1. Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event

// 2. Add test scripts to package.json
{
  "scripts": {
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "build": "vite build",
    "preview": "vite preview"
  }
}

// 3. Build for production
npm run build

// 4. Test production build locally
npm run preview

/* DEPLOYMENT OPTIONS */

// Option 1: Netlify (Recommended)
// 1. Build your app: npm run build
// 2. Drag and drop 'dist' folder to netlify.com/drop
// 3. Or connect GitHub repo for auto-deployment

// Option 2: Vercel
// 1. Install Vercel CLI: npm i -g vercel
// 2. Run: vercel --prod
// 3. Follow prompts for deployment

// Option 3: GitHub Pages
// 1. Install gh-pages: npm install --save-dev gh-pages
// 2. Add to package.json:
{
  "homepage": "https://username.github.io/notes-app",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
// 3. Run: npm run deploy

/* PERFORMANCE OPTIMIZATIONS */

// 1. Code Splitting with React.lazy
import { lazy, Suspense } from 'react';

const NoteEditor = lazy(() => import('./components/NoteEditor'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NoteEditor />
    </Suspense>
  );
}

// 2. Optimize Re-renders with React.memo
import { memo } from 'react';

const NoteCard = memo(({ note, onSelect, onDelete }) => {
  // Component implementation
});

// 3. Virtual Scrolling for Large Lists
// Install react-window: npm install react-window
import { FixedSizeList as List } from 'react-window';

const VirtualizedNoteList = ({ notes }) => (
  <List
    height={600}
    itemCount={notes.length}
    itemSize={100}
  >
    {({ index, style }) => (
      <div style={style}>
        <NoteCard note={notes[index]} />
      </div>
    )}
  </List>
);

/* PWA SETUP (Progressive Web App) */

// 1. Add manifest.json to public folder
{
  "name": "Notes App",
  "short_name": "Notes",
  "description": "A beautiful note-taking application",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#6366f1",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

// 2. Add service worker registration
// public/sw.js
const CACHE_NAME = 'notes-app-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

/* MONITORING & ANALYTICS */

// 1. Error Tracking with Sentry
npm install @sentry/react

// src/main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production"
});

// 2. Analytics with Google Analytics
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>

/* FUTURE ENHANCEMENTS */

1. 📱 Mobile app with React Native
2. ☁️ Cloud sync with Firebase/Supabase
3. 🤝 Real-time collaboration
4. 📝 Rich text editor with markdown
5. 🏷️ Tags and advanced filtering
6. 📊 Note analytics and insights
7. 🔒 End-to-end encryption
8. 📎 File attachments
9. 🎨 Custom themes
10. 🔄 Import/export functionality`,
            language: 'javascript',
            tips: [
              'Write comprehensive tests for critical user flows',
              'Test on multiple devices and browsers',
              'Monitor app performance after deployment',
              'Gather user feedback for continuous improvement'
            ]
          }
        }
      ]
    },
    'blog-cms': {
      title: 'Blog CMS Walkthrough',
      description: 'Build a full-stack blog CMS with authentication',
      totalSteps: 5,
      steps: [
        {
          title: 'Project Setup & Architecture',
          description: 'Set up the full-stack project structure',
          type: 'setup',
          content: {
            explanation: 'Let\'s set up a complete MERN stack project with separate frontend and backend.',
            code: `# Project Structure
blog-cms/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
└── README.md

# Backend Setup
cd blog-cms
mkdir server client
cd server

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express mongoose bcryptjs jsonwebtoken cors helmet morgan multer dotenv
npm install -D nodemon

# Frontend Setup
cd ../client
npm create vite@latest . -- --template react
npm install axios react-router-dom react-quill react-hot-toast date-fns`,
            language: 'bash',
            tips: [
              'Separate frontend and backend for better organization',
              'Use environment variables for sensitive configuration',
              'Set up proper folder structure from the beginning'
            ]
          }
        },
        {
          title: 'Backend API & Database',
          description: 'Create Express server with MongoDB integration',
          type: 'code',
          content: {
            explanation: 'Let\'s build the backend API with authentication, post management, and file uploads.',
            code: `// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blog-cms')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});

// server/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  avatar: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    maxlength: 500,
    default: ''
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);

// server/models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    maxlength: 300
  },
  featuredImage: {
    type: String,
    default: ''
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  categories: [{
    type: String,
    trim: true
  }],
  tags: [{
    type: String,
    trim: true
  }],
  views: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true,
      maxlength: 1000
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Generate slug from title
postSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }
  next();
});

module.exports = mongoose.model('Post', postSchema);`,
            language: 'javascript',
            tips: [
              'Use middleware for common functionality like authentication',
              'Implement proper data validation and sanitization',
              'Create database indexes for frequently queried fields'
            ]
          }
        },
        {
          title: 'Authentication & Authorization',
          description: 'Implement JWT-based authentication system',
          type: 'code',
          content: {
            explanation: 'Let\'s create a complete authentication system with registration, login, and protected routes.',
            code: `// server/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const authController = {
  // Register new user
  async register(req, res) {
    try {
      const { username, email, password, confirmPassword } = req.body;

      // Validation
      if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }

      if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
      }

      // Check if user exists
      const existingUser = await User.findOne({
        $or: [{ email }, { username }]
      });

      if (existingUser) {
        return res.status(400).json({
          message: existingUser.email === email ? 'Email already exists' : 'Username already exists'
        });
      }

      // Create user
      const user = new User({ username, email, password });
      await user.save();

      // Generate token
      const token = generateToken(user._id);

      res.status(201).json({
        message: 'User created successfully',
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          avatar: user.avatar
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Server error during registration' });
    }
  },

  // Login user
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate token
      const token = generateToken(user._id);

      res.json({
        message: 'Login successful',
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          avatar: user.avatar
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error during login' });
    }
  },

  // Get current user
  async getMe(req, res) {
    try {
      const user = await User.findById(req.user.userId).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
          bio: user.bio
        }
      });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Update profile
  async updateProfile(req, res) {
    try {
      const { username, email, bio } = req.body;
      const userId = req.user.userId;

      // Check if username/email already exists (excluding current user)
      if (username || email) {
        const existingUser = await User.findOne({
          _id: { $ne: userId },
          $or: [
            ...(username ? [{ username }] : []),
            ...(email ? [{ email }] : [])
          ]
        });

        if (existingUser) {
          return res.status(400).json({
            message: existingUser.username === username ? 'Username already exists' : 'Email already exists'
          });
        }
      }

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          ...(username && { username }),
          ...(email && { email }),
          ...(bio !== undefined && { bio })
        },
        { new: true, runValidators: true }
      ).select('-password');

      res.json({
        message: 'Profile updated successfully',
        user: {
          id: updatedUser._id,
          username: updatedUser.username,
          email: updatedUser.email,
          role: updatedUser.role,
          avatar: updatedUser.avatar,
          bio: updatedUser.bio
        }
      });
    } catch (error) {
      console.error('Update profile error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = authController;

// server/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = { userId: user._id, role: user.role };
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware };

// server/routes/auth.js
const express = require('express');
const authController = require('../controllers/authController');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authMiddleware, authController.getMe);
router.put('/profile', authMiddleware, authController.updateProfile);

module.exports = router;`,
            language: 'javascript',
            tips: [
              'Always hash passwords before storing them',
              'Use JWT tokens for stateless authentication',
              'Implement proper error handling and validation'
            ]
          }
        },
        {
          title: 'Frontend React Components',
          description: 'Build the React frontend with routing and state management',
          type: 'code',
          content: {
            explanation: 'Let\'s create the React frontend with authentication, post management, and a rich text editor.',
            code: `// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/posts/:slug" element={<PostDetail />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </main>
          <Toaster position="top-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

// client/src/contexts/AuthContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = \`Bearer \${token}\`;
      // Verify token and get user data
      api.get('/auth/me')
        .then(response => {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              user: response.data.user,
              token
            }
          });
        })
        .catch(() => {
          localStorage.removeItem('token');
          delete api.defaults.headers.common['Authorization'];
          dispatch({ type: 'SET_LOADING', payload: false });
        });
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = \`Bearer \${token}\`;

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user, token }
      });

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = \`Bearer \${token}\`;

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user, token }
      });

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    dispatch({ type: 'LOGOUT' });
  };

  const updateUser = (userData) => {
    dispatch({ type: 'UPDATE_USER', payload: userData });
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// client/src/components/PostEditor.jsx
import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostEditor = ({ onSubmit, initialData = {}, loading = false }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    content: initialData.content || '',
    excerpt: initialData.excerpt || '',
    categories: initialData.categories?.join(', ') || '',
    tags: initialData.tags?.join(', ') || '',
    status: initialData.status || 'draft'
  });
  const [featuredImage, setFeaturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData.featuredImage || '');
  const fileInputRef = useRef(null);

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean']
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({
      ...prev,
      content
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'categories' || key === 'tags') {
        const items = formData[key].split(',').map(item => item.trim()).filter(Boolean);
        items.forEach(item => submitData.append(key, item));
      } else {
        submitData.append(key, formData[key]);
      }
    });

    if (featuredImage) {
      submitData.append('featuredImage', featuredImage);
    }

    onSubmit(submitData);
  };

  return (
    <form onSubmit={handleSubmit} className="post-editor">
      <div className="editor-header">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter post title..."
          className="title-input"
          required
        />

        <div className="editor-actions">
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="status-select"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="save-btn"
          >
            {loading ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </div>

      <div className="editor-content">
        <div className="main-editor">
          <ReactQuill
            value={formData.content}
            onChange={handleContentChange}
            modules={quillModules}
            placeholder="Write your post content..."
            className="content-editor"
          />
        </div>

        <div className="editor-sidebar">
          <div className="sidebar-section">
            <h3>Featured Image</h3>
            <div className="image-upload">
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="image-preview" />
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="upload-btn"
              >
                {imagePreview ? 'Change Image' : 'Upload Image'}
              </button>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Excerpt</h3>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              placeholder="Brief description..."
              className="excerpt-input"
              rows={3}
            />
          </div>

          <div className="sidebar-section">
            <h3>Categories</h3>
            <input
              type="text"
              name="categories"
              value={formData.categories}
              onChange={handleInputChange}
              placeholder="Separate with commas"
              className="categories-input"
            />
          </div>

          <div className="sidebar-section">
            <h3>Tags</h3>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="Separate with commas"
              className="tags-input"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostEditor;`,
            language: 'jsx',
            tips: [
              'Use React Context for global state management',
              'Implement protected routes for authenticated users',
              'Use a rich text editor like ReactQuill for content creation'
            ]
          }
        },
        {
          title: 'Deployment & Production',
          description: 'Deploy the full-stack application',
          type: 'code',
          content: {
            explanation: 'Let\'s deploy our blog CMS to production using modern deployment services.',
            code: `// Deployment Configuration

/* ENVIRONMENT SETUP */

// server/.env (Production)
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog-cms
JWT_SECRET=your-super-secret-jwt-key-here
CLIENT_URL=https://your-frontend-domain.com

// client/.env (Production)
VITE_API_URL=https://your-backend-domain.com/api

/* BACKEND DEPLOYMENT (Railway/Render) */

// package.json scripts
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "echo 'No build step needed'",
    "test": "echo 'No tests specified'"
  }
}

// server/controllers/postController.js (Complete implementation)
const Post = require('../models/Post');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files allowed'), false);
    }
  }
});

const postController = {
  // Get all posts with pagination and filtering
  async getAllPosts(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const filter = {};
      if (req.query.status && req.query.status !== 'all') {
        filter.status = req.query.status;
      }
      if (req.query.category) {
        filter.categories = req.query.category;
      }
      if (req.query.search) {
        filter.$or = [
          { title: { $regex: req.query.search, $options: 'i' } },
          { content: { $regex: req.query.search, $options: 'i' } }
        ];
      }

      const posts = await Post.find(filter)
        .populate('author', 'username avatar')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      const total = await Post.countDocuments(filter);

      res.json({
        posts,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total
        }
      });
    } catch (error) {
      console.error('Get posts error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Create new post
  async createPost(req, res) {
    try {
      const { title, content, excerpt, status } = req.body;
      const categories = req.body.categories || [];
      const tags = req.body.tags || [];

      const postData = {
        title,
        content,
        excerpt,
        status,
        categories: Array.isArray(categories) ? categories : [categories].filter(Boolean),
        tags: Array.isArray(tags) ? tags : [tags].filter(Boolean),
        author: req.user.userId
      };

      if (req.file) {
        postData.featuredImage = \`/uploads/\${req.file.filename}\`;
      }

      const post = new Post(postData);
      await post.save();
      await post.populate('author', 'username avatar');

      res.status(201).json({
        message: 'Post created successfully',
        post
      });
    } catch (error) {
      console.error('Create post error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Get single post by slug
  async getPostBySlug(req, res) {
    try {
      const post = await Post.findOne({ slug: req.params.slug })
        .populate('author', 'username avatar bio')
        .populate('comments.author', 'username avatar');

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      // Increment views
      post.views += 1;
      await post.save();

      res.json({ post });
    } catch (error) {
      console.error('Get post error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Update post
  async updatePost(req, res) {
    try {
      const { title, content, excerpt, status } = req.body;
      const categories = req.body.categories || [];
      const tags = req.body.tags || [];

      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      // Check ownership or admin role
      if (post.author.toString() !== req.user.userId && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Not authorized' });
      }

      const updateData = {
        title,
        content,
        excerpt,
        status,
        categories: Array.isArray(categories) ? categories : [categories].filter(Boolean),
        tags: Array.isArray(tags) ? tags : [tags].filter(Boolean)
      };

      if (req.file) {
        updateData.featuredImage = \`/uploads/\${req.file.filename}\`;
      }

      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true, runValidators: true }
      ).populate('author', 'username avatar');

      res.json({
        message: 'Post updated successfully',
        post: updatedPost
      });
    } catch (error) {
      console.error('Update post error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Delete post
  async deletePost(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      // Check ownership or admin role
      if (post.author.toString() !== req.user.userId && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Not authorized' });
      }

      await Post.findByIdAndDelete(req.params.id);
      res.json({ message: 'Post deleted successfully' });
    } catch (error) {
      console.error('Delete post error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = { postController, upload };

/* FRONTEND DEPLOYMENT (Vercel/Netlify) */

// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});

// client/src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

/* PRODUCTION OPTIMIZATIONS */

// Security Headers (server/server.js)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// Rate limiting
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api', limiter);

// Compression
const compression = require('compression');
app.use(compression());

/* MONITORING & ANALYTICS */

// Error tracking with Sentry (client)
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE
});

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Performance:', entry.name, entry.duration);
  }
});

performanceObserver.observe({ entryTypes: ['navigation', 'resource'] });

/* DEPLOYMENT COMMANDS */

// Backend (Railway)
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up

// Frontend (Vercel)
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

// Or use GitHub integration for automatic deployments

/* TESTING IN PRODUCTION */

// Health check endpoint (server/server.js)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version
  });
});

// Database connection check
app.get('/health/db', async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).json({ database: 'connected' });
  } catch (error) {
    res.status(500).json({ database: 'disconnected', error: error.message });
  }
});`,
            language: 'javascript',
            tips: [
              'Use environment variables for all sensitive configuration',
              'Implement proper security headers and rate limiting',
              'Set up monitoring and error tracking for production',
              'Use CDN for static assets and images'
            ]
          }
        }
      ]
    },
    'social-media-platform': {
      title: 'Social Media Platform Walkthrough',
      description: 'Build a full-stack social media platform with real-time features',
      totalSteps: 12,
      steps: [
        {
          title: 'Project Architecture & Setup',
          description: 'Set up the MERN stack with Socket.io for real-time features',
          type: 'setup',
          content: {
            explanation: 'We\'ll build a comprehensive social media platform using the MERN stack (MongoDB, Express, React, Node.js) with Socket.io for real-time features like live chat and notifications.',
            code: `social-media-platform/
├── server/                 # Backend API
│   ├── config/
│   │   ├── database.js
│   │   └── cloudinary.js
│   ├── controllers/
│   │   ├── auth.js
│   │   ├── posts.js
│   │   ├── users.js
│   │   └── chat.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── upload.js
│   │   └── validation.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Comment.js
│   │   └── Chat.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── posts.js
│   │   ├── users.js
│   │   └── chat.js
│   ├── utils/
│   │   ├── jwt.js
│   │   └── helpers.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── client/                 # Frontend React App
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── auth/
│   │   │   ├── posts/
│   │   │   ├── profile/
│   │   │   └── chat/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
└── README.md

# Key Technologies:
- Frontend: React 18, React Router, Axios, Socket.io-client
- Backend: Node.js, Express, MongoDB, Mongoose, Socket.io
- Authentication: JWT tokens, bcrypt
- File Upload: Cloudinary, Multer
- Real-time: Socket.io for chat and notifications`,
            language: 'text',
            tips: [
              'Modular architecture separates concerns clearly',
              'Real-time features require WebSocket connections',
              'Cloud storage handles media files efficiently',
              'JWT authentication provides secure user sessions'
            ]
          }
        },
        {
          title: 'Database Schema Design',
          description: 'Design MongoDB schemas for users, posts, and relationships',
          type: 'code',
          content: {
            explanation: 'Let\'s create the database models that will power our social media platform.',
            code: `// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  profile: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String, maxlength: 160 },
    avatar: {
      url: String,
      public_id: String
    },
    coverPhoto: {
      url: String,
      public_id: String
    },
    location: String,
    website: String,
    dateOfBirth: Date
  },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  isVerified: { type: Boolean, default: false },
  isPrivate: { type: Boolean, default: false },
  isOnline: { type: Boolean, default: false },
  lastSeen: { type: Date, default: Date.now },
  notifications: [{
    type: { type: String, enum: ['like', 'comment', 'follow', 'message'] },
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    message: String,
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Get full name
userSchema.virtual('profile.fullName').get(function() {
  return \`\${this.profile.firstName} \${this.profile.lastName}\`;
});

module.exports = mongoose.model('User', userSchema);`,
            language: 'javascript',
            tips: [
              'Mongoose schemas define data structure and validation',
              'Virtual fields compute values without storing them',
              'Pre-save middleware handles password hashing securely',
              'References link related documents efficiently'
            ]
          }
        },
        {
          title: 'JWT Authentication Setup',
          description: 'Implement secure user authentication with JWT tokens',
          type: 'code',
          content: {
            explanation: 'Let\'s set up JWT-based authentication for secure user sessions.',
            code: `// utils/jwt.js
const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '30d'
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyToken,
  verifyRefreshToken
};

// middleware/auth.js
const { verifyToken } = require('../utils/jwt');
const User = require('../models/User');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token required'
      });
    }

    const decoded = verifyToken(token);
    const user = await User.findById(decoded.userId)
      .select('-password')
      .populate('followers following', 'username profile.firstName profile.lastName profile.avatar');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired'
      });
    }
    return res.status(403).json({
      success: false,
      message: 'Invalid token'
    });
  }
};

module.exports = { authenticateToken };`,
            language: 'javascript',
            tips: [
              'JWT tokens provide stateless authentication',
              'Refresh tokens enable secure token renewal',
              'Password hashing protects user credentials',
              'Middleware validates tokens on protected routes'
            ]
          }
        },
        {
          title: 'Real-time Chat System',
          description: 'Implement Socket.io for live messaging and notifications',
          type: 'code',
          content: {
            explanation: 'Let\'s implement real-time chat functionality using Socket.io for instant messaging.',
            code: `// server.js (Socket.io setup)
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Socket.io connection handling
const activeUsers = new Map();

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // User joins with their user ID
  socket.on('user_connected', async (userData) => {
    const { userId, username } = userData;

    // Store user info
    activeUsers.set(userId, {
      socketId: socket.id,
      username,
      userId
    });

    // Update user online status
    await User.findByIdAndUpdate(userId, {
      isOnline: true,
      lastSeen: new Date()
    });

    // Notify friends that user is online
    socket.broadcast.emit('user_online', { userId, username });
  });

  // Join chat room
  socket.on('join_chat', (chatId) => {
    socket.join(chatId);
    console.log(\`User joined chat: \${chatId}\`);
  });

  // Send message
  socket.on('send_message', async (messageData) => {
    try {
      const { chatId, senderId, content, replyTo } = messageData;

      // Save message to database
      const chat = await Chat.findById(chatId);
      if (!chat) return;

      const newMessage = {
        sender: senderId,
        content,
        replyTo: replyTo || null,
        sentAt: new Date()
      };

      chat.messages.push(newMessage);
      chat.lastMessage = {
        content: content.text || 'Media',
        sender: senderId,
        sentAt: new Date()
      };

      await chat.save();

      // Get the populated message
      await chat.populate('messages.sender', 'username profile.firstName profile.lastName profile.avatar');
      const savedMessage = chat.messages[chat.messages.length - 1];

      // Emit to all users in chat room
      io.to(chatId).emit('new_message', {
        ...savedMessage.toObject(),
        chatId
      });

    } catch (error) {
      console.error('Send message error:', error);
      socket.emit('message_error', { error: 'Failed to send message' });
    }
  });

  // Typing indicators
  socket.on('typing_start', (data) => {
    socket.to(data.chatId).emit('user_typing', {
      userId: data.userId,
      username: data.username
    });
  });

  socket.on('typing_stop', (data) => {
    socket.to(data.chatId).emit('user_stop_typing', {
      userId: data.userId
    });
  });

  // Handle disconnection
  socket.on('disconnect', async () => {
    console.log('User disconnected:', socket.id);

    // Find and remove user from active users
    let disconnectedUserId = null;
    for (const [userId, userData] of activeUsers.entries()) {
      if (userData.socketId === socket.id) {
        disconnectedUserId = userId;
        activeUsers.delete(userId);
        break;
      }
    }

    if (disconnectedUserId) {
      // Update user offline status
      await User.findByIdAndUpdate(disconnectedUserId, {
        isOnline: false,
        lastSeen: new Date()
      });

      // Notify friends that user is offline
      socket.broadcast.emit('user_offline', { userId: disconnectedUserId });
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
            language: 'javascript',
            tips: [
              'Socket.io enables real-time bidirectional communication',
              'Room management organizes chat participants',
              'Typing indicators improve user experience',
              'Message reactions add social interaction features'
            ]
          }
        }
      ]
    },
    'ecommerce-platform': {
      title: 'E-commerce Platform Walkthrough',
      description: 'Build a full-featured e-commerce platform with payments',
      totalSteps: 10,
      steps: [
        {
          title: 'Architecture & Setup',
          description: 'Set up MERN stack with Stripe payments and admin dashboard',
          type: 'setup',
          content: {
            explanation: 'We\'ll build a comprehensive e-commerce platform with customer shopping, admin management, and secure payment processing using Stripe.',
            code: `ecommerce-platform/
├── server/                 # Backend API
│   ├── config/
│   │   ├── database.js
│   │   ├── stripe.js
│   │   └── cloudinary.js
│   ├── controllers/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ��── orders.js
│   │   ├── payments.js
│   │   ├── users.js
│   │   └── admin.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── admin.js
│   │   ├── validation.js
│   │   └── upload.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── Order.js
│   │   ├── Cart.js
│   │   └── Review.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   ├── payments.js
│   │   ├── users.js
���   │   └── admin.js
│   ├── utils/
│   │   ├── jwt.js
│   │   ├── email.js
│   │   └── helpers.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── client/                 # Frontend React App
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── auth/
│   │   │   ├── products/
│   │   │   ├── cart/
│   │   │   ├── checkout/
│   │   │   ├── orders/
│   │   │   └── admin/
│   │   ├── pages/
│   │   │   ├── customer/
│   │   │   └── admin/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
├── admin/                  # Admin Dashboard
│   └── (React admin interface)
└── README.md

# Key Technologies:
- Frontend: React 18, Redux Toolkit, React Router, Stripe.js
- Backend: Node.js, Express, MongoDB, Mongoose
- Payments: Stripe API, Webhook handling
- Authentication: JWT tokens, role-based access
- File Upload: Cloudinary for product images
- Email: Nodemailer for order confirmations
- Search: MongoDB text search and filtering`,
            language: 'text',
            tips: [
              'Separate customer and admin interfaces for better UX',
              'Stripe handles secure payment processing',
              'Role-based authentication protects admin routes',
              'Cloudinary manages product image uploads efficiently'
            ]
          }
        },
        {
          title: 'Database Models Design',
          description: 'Create comprehensive e-commerce data models',
          type: 'code',
          content: {
            explanation: 'Let\'s design the database schemas for products, orders, users, and related e-commerce entities.',
            code: `// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  basic: {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    shortDescription: { type: String, maxlength: 160 },
    sku: { type: String, required: true, unique: true },
    barcode: String,
    brand: { type: String, required: true },
    tags: [String]
  },
  category: {
    primary: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    secondary: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
  },
  pricing: {
    basePrice: { type: Number, required: true, min: 0 },
    salePrice: { type: Number, min: 0 },
    costPrice: { type: Number, min: 0 },
    currency: { type: String, default: 'USD' },
    taxClass: { type: String, enum: ['standard', 'reduced', 'zero'], default: 'standard' }
  },
  inventory: {
    quantity: { type: Number, required: true, min: 0 },
    lowStockThreshold: { type: Number, default: 10 },
    trackQuantity: { type: Boolean, default: true },
    allowBackorders: { type: Boolean, default: false },
    status: { type: String, enum: ['in-stock', 'out-of-stock', 'preorder', 'discontinued'], default: 'in-stock' }
  },
  media: {
    images: [{
      url: { type: String, required: true },
      public_id: String,
      alt: String,
      isPrimary: { type: Boolean, default: false }
    }],
    videos: [{
      url: String,
      thumbnail: String,
      title: String
    }]
  },
  variants: [{
    name: String, // e.g., "Size", "Color"
    options: [{ // e.g., ["Small", "Medium", "Large"]
      value: String,
      price: Number,
      quantity: Number,
      sku: String
    }]
  }],
  reviews: {
    averageRating: { type: Number, default: 0, min: 0, max: 5 },
    totalReviews: { type: Number, default: 0 },
    ratingDistribution: {
      5: { type: Number, default: 0 },
      4: { type: Number, default: 0 },
      3: { type: Number, default: 0 },
      2: { type: Number, default: 0 },
      1: { type: Number, default: 0 }
    }
  },
  visibility: {
    isActive: { type: Boolean, default: true },
    isVisible: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    publishDate: { type: Date, default: Date.now }
  },
  relatedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

// Text search index
productSchema.index({
  'basic.name': 'text',
  'basic.description': 'text',
  'basic.brand': 'text',
  'basic.tags': 'text'
});

module.exports = mongoose.model('Product', productSchema);`,
            language: 'javascript',
            tips: [
              'Comprehensive schemas handle complex e-commerce requirements',
              'Embedded documents optimize for common access patterns',
              'Text indexes enable efficient product search',
              'Order history tracking provides audit trail'
            ]
          }
        }
      ]
    },
    'devops-dashboard': {
      title: 'DevOps Dashboard Walkthrough',
      description: 'Build a comprehensive DevOps monitoring dashboard',
      totalSteps: 8,
      steps: [
        {
          title: 'Architecture & Container Setup',
          description: 'Set up React dashboard with Docker monitoring and CI/CD integration',
          type: 'setup',
          content: {
            explanation: 'We\'ll build a DevOps dashboard that monitors Docker containers, CI/CD pipelines, system metrics, and deployment status with real-time updates.',
            code: `devops-dashboard/
├── frontend/               # React Dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── charts/
│   │   │   ├── containers/
│   │   │   ├── metrics/
│   │   │   ├── pipelines/
│   │   │   └── alerts/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
├── backend/                # Node.js API
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   │   ├── docker.js
│   │   │   ├── metrics.js
│   │   │   ├── github.js
│   │   │   └── kubernetes.js
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── utils/
│   └── package.json
├── monitoring/             # Monitoring Stack
│   ├── prometheus/
│   │   └── prometheus.yml
│   ├── grafana/
│   │   └── dashboards/
│   └── alertmanager/
├── docker-compose.yml      # Full stack setup
├���─ Dockerfile             # Multi-stage build
├── nginx.conf             # Reverse proxy
└── README.md

# Key Technologies:
- Frontend: React 18, Chart.js, Socket.io-client, Styled Components
- Backend: Node.js, Express, Socket.io, Docker API
- Monitoring: Prometheus, Grafana, Node Exporter
- Containers: Docker, Docker Compose, Kubernetes API
- CI/CD: GitHub Actions, Jenkins API integration
- Real-time: WebSockets for live updates
- Metrics: System metrics, container stats, pipeline status`,
            language: 'text',
            tips: [
              'Microservices architecture enables scalable monitoring',
              'Real-time WebSocket updates provide instant feedback',
              'Docker API integration monitors container lifecycle',
              'Prometheus + Grafana create powerful metric visualization'
            ]
          }
        }
      ]
    }
  };

  const currentWalkthrough = walkthroughs[projectId];

  if (!currentWalkthrough) {
    return null;
  }

  const currentStepData = currentWalkthrough.steps[currentStep];

  const copyToClipboard = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(currentStep);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const markStepComplete = () => {
    setCompletedSteps(prev => new Set([...prev, currentStep]));
  };

  const nextStep = () => {
    if (currentStep < currentWalkthrough.totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        className="bg-gray-900 rounded-2xl w-full max-w-6xl max-h-[90vh] flex overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Sidebar */}
        <div className="w-80 bg-gray-800 p-6 flex flex-col border-r border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Walkthrough</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">{currentWalkthrough.title}</h3>
            <p className="text-gray-400 text-sm">{currentWalkthrough.description}</p>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Progress</span>
              <span className="text-sm text-purple-400">
                {completedSteps.size}/{currentWalkthrough.totalSteps}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedSteps.size / currentWalkthrough.totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Steps List */}
          <div className="flex-1 overflow-y-auto">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Steps</h4>
            <div className="space-y-2">
              {currentWalkthrough.steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    currentStep === index
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      completedSteps.has(index)
                        ? 'bg-green-500 text-white'
                        : currentStep === index
                        ? 'bg-white text-purple-600'
                        : 'bg-gray-600 text-gray-300'
                    }`}>
                      {completedSteps.has(index) ? <FaCheck /> : index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{step.title}</div>
                      <div className="text-xs opacity-75">{step.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{currentStepData.title}</h3>
                <p className="text-gray-400">{currentStepData.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  Step {currentStep + 1} of {currentWalkthrough.totalSteps}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Explanation */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-400" />
                    What we're doing
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{currentStepData.content.explanation}</p>
                </div>

                {/* Code Block */}
                {currentStepData.content.code && (
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
                      <span className="text-sm text-gray-300">
                        {currentStepData.content.language}
                      </span>
                      <button
                        onClick={() => copyToClipboard(currentStepData.content.code)}
                        className="flex items-center gap-2 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-sm text-gray-300 transition-colors"
                      >
                        {copiedCode === currentStep ? <FaCheck /> : <FaCopy />}
                        {copiedCode === currentStep ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <pre className="p-4 text-sm text-gray-300 overflow-auto max-h-96 whitespace-pre-wrap">
                      <code>{currentStepData.content.code}</code>
                    </pre>
                  </div>
                )}

                {/* Tips */}
                {currentStepData.content.tips && (
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                      <FaInfoCircle />
                      Tips & Best Practices
                    </h4>
                    <ul className="space-y-2">
                      {currentStepData.content.tips.map((tip, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white transition-colors"
              >
                <FaArrowLeft />
                Previous
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={markStepComplete}
                  disabled={completedSteps.has(currentStep)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white transition-colors"
                >
                  <FaCheck />
                  {completedSteps.has(currentStep) ? 'Completed' : 'Mark Complete'}
                </button>

                <button
                  onClick={nextStep}
                  disabled={currentStep === currentWalkthrough.totalSteps - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white transition-colors"
                >
                  Next
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectWalkthrough;
