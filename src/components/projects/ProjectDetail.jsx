import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import ProjectWalkthrough from './ProjectWalkthrough';
import { 
  FaArrowLeft, 
  FaCode, 
  FaRocket, 
  FaStar, 
  FaClock, 
  FaGithub, 
  FaPlay, 
  FaCheckCircle, 
  FaLightbulb,
  FaTools,
  FaGraduationCap,
  FaExternalLinkAlt
} from 'react-icons/fa';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [showWalkthrough, setShowWalkthrough] = useState(false);

  const projectsData = {
    'portfolio-website': {
      title: 'Portfolio Website',
      description: 'Build a responsive personal portfolio showcasing your skills and projects with modern design principles.',
      fullDescription: 'Create a stunning personal portfolio website that showcases your skills, projects, and experience. This project will teach you the fundamentals of responsive web design, semantic HTML structure, and modern CSS techniques. You\'ll learn how to create layouts that work across all devices, implement smooth animations, and optimize for performance.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      difficulty: 'Beginner',
      duration: '2-3 days',
      category: 'Frontend',
      color: 'from-green-500 to-blue-500',
      features: [
        'Responsive layout that works on all devices',
        'Modern design with smooth animations',
        'Contact form with validation',
        'Project showcase section',
        'About section with skills display',
        'Navigation with smooth scrolling',
        'Social media integration',
        'SEO optimization'
      ],
      learningOutcomes: [
        'Master responsive design principles',
        'Learn semantic HTML structure',
        'Understand CSS Flexbox and Grid',
        'Implement smooth animations',
        'Form validation with JavaScript',
        'Cross-browser compatibility',
        'Performance optimization',
        'SEO best practices'
      ],
      prerequisites: [
        'Basic understanding of HTML',
        'Familiarity with CSS',
        'Basic JavaScript knowledge'
      ],
      resources: [
        {
          type: 'Documentation',
          title: 'MDN Web Docs - HTML',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
          type: 'Tutorial',
          title: 'CSS Grid Complete Guide',
          url: 'https://css-tricks.com/snippets/css/complete-guide-grid/'
        },
        {
          type: 'Video',
          title: 'Responsive Web Design Course',
          url: 'https://www.youtube.com/watch?v=srvUrASNdZk'
        }
      ],
      steps: [
        {
          title: 'Setup Project Structure',
          description: 'Create the basic HTML structure and organize your files',
          tasks: [
            'Create index.html, style.css, and script.js files',
            'Set up semantic HTML structure',
            'Link CSS and JavaScript files'
          ]
        },
        {
          title: 'Design the Layout',
          description: 'Create responsive layouts using CSS Grid and Flexbox',
          tasks: [
            'Design header with navigation',
            'Create hero section',
            'Build about section',
            'Design projects showcase',
            'Add contact section and footer'
          ]
        },
        {
          title: 'Add Interactivity',
          description: 'Implement JavaScript functionality',
          tasks: [
            'Add smooth scrolling navigation',
            'Implement form validation',
            'Create animated skill bars',
            'Add scroll animations'
          ]
        },
        {
          title: 'Optimize and Deploy',
          description: 'Optimize for performance and deploy',
          tasks: [
            'Optimize images and assets',
            'Test responsive design',
            'Validate HTML and CSS',
            'Deploy to GitHub Pages or Netlify'
          ]
        }
      ]
    },
    'todo-list-app': {
      title: 'To-Do List App',
      description: 'Interactive task management application with local storage and filtering capabilities.',
      fullDescription: 'Build a feature-rich todo list application that demonstrates essential JavaScript concepts like DOM manipulation, event handling, and data persistence. This project will teach you how to create, read, update, and delete data while maintaining state across browser sessions.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      difficulty: 'Beginner',
      duration: '1-2 days',
      category: 'Frontend',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Add new tasks with input validation',
        'Mark tasks as complete/incomplete',
        'Delete individual tasks',
        'Filter tasks (all, active, completed)',
        'Persistent storage with localStorage',
        'Task counter and statistics',
        'Clear all completed tasks',
        'Responsive design'
      ],
      learningOutcomes: [
        'DOM manipulation and traversal',
        'Event handling and delegation',
        'Local storage implementation',
        'Array methods and data filtering',
        'Input validation techniques',
        'State management patterns',
        'User experience design',
        'Code organization best practices'
      ],
      prerequisites: [
        'Basic HTML and CSS knowledge',
        'Understanding of JavaScript variables and functions',
        'Familiarity with arrays and objects'
      ],
      resources: [
        {
          type: 'Documentation',
          title: 'JavaScript DOM Methods',
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model'
        },
        {
          type: 'Tutorial',
          title: 'Local Storage Guide',
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage'
        }
      ],
      steps: [
        {
          title: 'Create the Interface',
          description: 'Build the HTML structure and basic styling',
          tasks: [
            'Design input form for new tasks',
            'Create task list container',
            'Add filter buttons',
            'Style with CSS for better UX'
          ]
        },
        {
          title: 'Implement Core Functionality',
          description: 'Add JavaScript for task management',
          tasks: [
            'Handle form submission',
            'Create task elements dynamically',
            'Implement mark as complete',
            'Add delete functionality'
          ]
        },
        {
          title: 'Add Advanced Features',
          description: 'Implement filtering and persistence',
          tasks: [
            'Create filter system',
            'Implement local storage',
            'Add task statistics',
            'Handle edge cases'
          ]
        }
      ]
    },
    'weather-app': {
      title: 'Weather Dashboard',
      description: 'Real-time weather application using OpenWeather API with forecasts and location search.',
      fullDescription: 'Build a comprehensive weather dashboard that fetches real-time weather data from the OpenWeather API. This project will teach you how to work with external APIs, handle asynchronous JavaScript, implement error handling, and create dynamic user interfaces that respond to real-time data.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeather API', 'Geolocation API'],
      difficulty: 'Intermediate',
      duration: '3-5 days',
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Current weather conditions',
        '5-day weather forecast',
        'Location search functionality',
        'Geolocation support',
        'Weather maps integration',
        'Temperature unit conversion',
        'Weather alerts and warnings',
        'Beautiful weather animations'
      ],
      learningOutcomes: [
        'API integration and authentication',
        'Asynchronous JavaScript (Promises, async/await)',
        'Error handling and user feedback',
        'Working with geolocation services',
        'Data visualization techniques',
        'Dynamic content rendering',
        'State management in vanilla JS',
        'Responsive design for data-heavy apps'
      ],
      prerequisites: [
        'Solid JavaScript fundamentals',
        'Understanding of promises and async operations',
        'Basic knowledge of APIs and HTTP requests',
        'Familiarity with DOM manipulation'
      ],
      resources: [
        {
          type: 'API Documentation',
          title: 'OpenWeather API Docs',
          url: 'https://openweathermap.org/api'
        },
        {
          type: 'Tutorial',
          title: 'Fetch API Guide',
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
        }
      ],
      steps: [
        {
          title: 'API Setup and Authentication',
          description: 'Register for API key and set up basic API calls',
          tasks: [
            'Register for OpenWeather API key',
            'Create basic HTML structure',
            'Set up API call functions',
            'Test API connectivity'
          ]
        },
        {
          title: 'Core Weather Display',
          description: 'Implement current weather display',
          tasks: [
            'Create weather card components',
            'Display current temperature and conditions',
            'Add weather icons and animations',
            'Implement location display'
          ]
        },
        {
          title: 'Advanced Features',
          description: 'Add forecasts and interactive features',
          tasks: [
            'Implement 5-day forecast',
            'Add location search',
            'Integrate geolocation',
            'Add error handling and loading states'
          ]
        }
      ]
    },
    'notes-app': {
      title: 'Notes Application',
      description: 'Full-featured note-taking app with React, categories, and rich text editing.',
      fullDescription: 'Create a powerful note-taking application using React that demonstrates component architecture, state management, and local data persistence. This project will teach you modern React patterns, hooks, and how to build scalable component hierarchies.',
      techStack: ['React', 'CSS3', 'Local Storage', 'React Hooks'],
      difficulty: 'Intermediate',
      duration: '4-6 days',
      category: 'Frontend',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Create and edit notes',
        'Organize notes in categories',
        'Search and filter functionality',
        'Rich text formatting',
        'Auto-save functionality',
        'Export notes to different formats',
        'Dark/light theme toggle',
        'Responsive design'
      ],
      learningOutcomes: [
        'React component architecture',
        'State management with hooks',
        'Local storage implementation',
        'Search and filtering algorithms',
        'Rich text editing implementation',
        'Theme switching techniques',
        'Performance optimization',
        'Component composition patterns'
      ],
      prerequisites: [
        'Basic React knowledge',
        'Understanding of components and props',
        'Familiarity with JavaScript ES6+',
        'Basic CSS and styling experience'
      ],
      resources: [
        {
          type: 'Documentation',
          title: 'React Hooks Reference',
          url: 'https://react.dev/reference/react'
        },
        {
          type: 'Tutorial',
          title: 'React Component Patterns',
          url: 'https://reactpatterns.com/'
        }
      ],
      steps: [
        {
          title: 'Project Setup',
          description: 'Initialize React app and basic structure',
          tasks: [
            'Create React app with Vite',
            'Set up component structure',
            'Create basic styling',
            'Plan state management'
          ]
        },
        {
          title: 'Core Note Functionality',
          description: 'Implement CRUD operations for notes',
          tasks: [
            'Create Note component',
            'Implement add/edit/delete notes',
            'Add local storage persistence',
            'Create note list view'
          ]
        },
        {
          title: 'Advanced Features',
          description: 'Add categories, search, and rich editing',
          tasks: [
            'Implement category system',
            'Add search functionality',
            'Create rich text editor',
            'Add theme switching'
          ]
        }
      ]
    },
    'blog-cms': {
      title: 'Blog CMS',
      description: 'Content management system for blogs with Node.js backend and authentication.',
      fullDescription: 'Build a complete content management system for blogs using the MERN stack. This project covers both frontend and backend development, teaching you how to create RESTful APIs, implement authentication, and build admin interfaces for content management.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt'],
      difficulty: 'Intermediate',
      duration: '1-2 weeks',
      category: 'Full-Stack',
      color: 'from-emerald-500 to-teal-500',
      features: [
        'User registration and authentication',
        'Create and edit blog posts',
        'Rich text editor for content',
        'Image upload and management',
        'Comment system',
        'Admin dashboard',
        'SEO optimization',
        'Responsive design'
      ],
      learningOutcomes: [
        'Full-stack development workflow',
        'RESTful API design and implementation',
        'Authentication and authorization',
        'Database design and operations',
        'File upload handling',
        'Security best practices',
        'Admin interface development',
        'API testing and documentation'
      ],
      prerequisites: [
        'Intermediate JavaScript knowledge',
        'Basic React experience',
        'Understanding of HTTP and REST concepts',
        'Basic knowledge of databases'
      ],
      resources: [
        {
          type: 'Documentation',
          title: 'Express.js Guide',
          url: 'https://expressjs.com/'
        },
        {
          type: 'Tutorial',
          title: 'MongoDB with Node.js',
          url: 'https://docs.mongodb.com/drivers/node/'
        }
      ],
      steps: [
        {
          title: 'Backend Setup',
          description: 'Create API server with authentication',
          tasks: [
            'Set up Express server',
            'Configure MongoDB connection',
            'Implement user authentication',
            'Create blog post API endpoints'
          ]
        },
        {
          title: 'Frontend Development',
          description: 'Build React frontend with routing',
          tasks: [
            'Set up React app with routing',
            'Create authentication components',
            'Build blog post editor',
            'Implement admin dashboard'
          ]
        },
        {
          title: 'Integration and Features',
          description: 'Connect frontend to backend and add features',
          tasks: [
            'Integrate API calls',
            'Add comment system',
            'Implement file upload',
            'Add SEO optimization'
          ]
        }
      ]
    },
    'social-media-platform': {
      title: 'Social Media Platform',
      description: 'Full-featured social network with real-time chat, posts, and user interactions.',
      fullDescription: 'Build a comprehensive social media platform that includes user profiles, posts, real-time messaging, and social interactions. This advanced project demonstrates scalable architecture, real-time communication, and complex state management patterns used in modern web applications.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Cloudinary', 'Redux'],
      difficulty: 'Advanced',
      duration: '3-4 weeks',
      category: 'Full-Stack',
      color: 'from-rose-500 to-pink-500',
      features: [
        'User registration and profiles',
        'Create and share posts with media',
        'Like and comment system',
        'Real-time chat messaging',
        'Friend/follow system',
        'News feed algorithm',
        'Notifications system',
        'Media upload and storage',
        'Search functionality',
        'Mobile-responsive design'
      ],
      learningOutcomes: [
        'Advanced React patterns and optimization',
        'Real-time communication with WebSockets',
        'Complex state management with Redux',
        'Scalable backend architecture',
        'Database modeling for social features',
        'File upload and cloud storage',
        'Security and data protection',
        'Performance optimization techniques',
        'Testing strategies for complex apps'
      ],
      prerequisites: [
        'Advanced React and JavaScript knowledge',
        'Experience with Node.js and Express',
        'Understanding of database design',
        'Familiarity with state management',
        'Basic knowledge of WebSockets'
      ],
      resources: [
        {
          type: 'Documentation',
          title: 'Socket.io Documentation',
          url: 'https://socket.io/docs/'
        },
        {
          type: 'Guide',
          title: 'Redux Toolkit Guide',
          url: 'https://redux-toolkit.js.org/'
        }
      ],
      steps: [
        {
          title: 'Core Architecture Setup',
          description: 'Set up project structure and authentication',
          tasks: [
            'Project setup with proper folder structure',
            'Database schema design',
            'Authentication system implementation',
            'Basic API structure'
          ]
        },
        {
          title: 'Social Features',
          description: 'Implement posts, likes, and user interactions',
          tasks: [
            'Post creation and display',
            'Like and comment functionality',
            'User profiles and follow system',
            'News feed implementation'
          ]
        },
        {
          title: 'Real-time Features',
          description: 'Add chat and notifications',
          tasks: [
            'Real-time chat implementation',
            'Notification system',
            'Online status tracking',
            'Performance optimization'
          ]
        }
      ]
    },
    'ecommerce-platform': {
      title: 'E-commerce Platform',
      description: 'Complete online store with payment integration, inventory management, and admin dashboard.',
      fullDescription: 'Develop a full-featured e-commerce platform that handles product management, shopping cart functionality, secure payments, and order processing. This project teaches you how to build commercial-grade applications with complex business logic and payment integration.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'Redux', 'JWT', 'Nodemailer'],
      difficulty: 'Advanced',
      duration: '4-6 weeks',
      category: 'Full-Stack',
      color: 'from-amber-500 to-orange-500',
      features: [
        'Product catalog with categories',
        'Shopping cart and wishlist',
        'Secure payment processing',
        'Order management system',
        'Inventory tracking',
        'Admin dashboard',
        'Customer reviews and ratings',
        'Email notifications',
        'Search and filtering',
        'Mobile-responsive design'
      ],
      learningOutcomes: [
        'E-commerce business logic implementation',
        'Payment gateway integration',
        'Complex state management',
        'Order processing workflows',
        'Inventory management systems',
        'Email service integration',
        'Security best practices',
        'Admin interface development',
        'Testing commercial applications'
      ],
      prerequisites: [
        'Advanced full-stack development skills',
        'Experience with payment systems',
        'Understanding of e-commerce concepts',
        'Knowledge of security practices'
      ],
      resources: [
        {
          type: 'Documentation',
          title: 'Stripe Payment Integration',
          url: 'https://stripe.com/docs'
        },
        {
          type: 'Guide',
          title: 'E-commerce Security Best Practices',
          url: 'https://stripe.com/guides/security'
        }
      ],
      steps: [
        {
          title: 'Product Management',
          description: 'Set up product catalog and admin features',
          tasks: [
            'Product schema and API design',
            'Admin product management',
            'Category and inventory system',
            'Image upload and optimization'
          ]
        },
        {
          title: 'Shopping Experience',
          description: 'Implement cart and checkout process',
          tasks: [
            'Shopping cart functionality',
            'Checkout flow design',
            'Payment integration',
            'Order confirmation system'
          ]
        },
        {
          title: 'Business Features',
          description: 'Add reviews, notifications, and analytics',
          tasks: [
            'Review and rating system',
            'Email notifications',
            'Order tracking',
            'Analytics dashboard'
          ]
        }
      ]
    },
    'devops-dashboard': {
      title: 'DevOps Dashboard',
      description: 'Monitoring dashboard with CI/CD pipeline integration and deployment tracking.',
      fullDescription: 'Create a comprehensive DevOps dashboard that monitors deployment pipelines, tracks application performance, and provides real-time insights into your development and deployment processes. This project introduces you to DevOps practices, containerization, and monitoring tools.',
      techStack: ['React', 'Node.js', 'Docker', 'GitHub Actions', 'AWS/Vercel', 'Prometheus', 'Grafana'],
      difficulty: 'Advanced',
      duration: '2-3 weeks',
      category: 'DevOps',
      color: 'from-violet-500 to-purple-500',
      features: [
        'Pipeline status monitoring',
        'Deployment tracking and history',
        'Performance metrics visualization',
        'Error alerting system',
        'Build log analysis',
        'Environment status monitoring',
        'Automated deployment triggers',
        'Team collaboration features'
      ],
      learningOutcomes: [
        'DevOps practices and methodologies',
        'CI/CD pipeline configuration',
        'Containerization with Docker',
        'Cloud deployment strategies',
        'Monitoring and alerting systems',
        'Infrastructure as Code concepts',
        'Performance monitoring',
        'Automation scripting'
      ],
      prerequisites: [
        'Understanding of deployment processes',
        'Basic Docker knowledge',
        'Familiarity with Git and GitHub',
        'Cloud platform experience'
      ],
      resources: [
        {
          type: 'Documentation',
          title: 'GitHub Actions Guide',
          url: 'https://docs.github.com/en/actions'
        },
        {
          type: 'Tutorial',
          title: 'Docker for Developers',
          url: 'https://docs.docker.com/get-started/'
        }
      ],
      steps: [
        {
          title: 'Infrastructure Setup',
          description: 'Set up monitoring and deployment infrastructure',
          tasks: [
            'Configure CI/CD pipelines',
            'Set up monitoring tools',
            'Create Docker configurations',
            'Deploy to cloud platform'
          ]
        },
        {
          title: 'Dashboard Development',
          description: 'Build the monitoring dashboard interface',
          tasks: [
            'Create dashboard components',
            'Integrate monitoring APIs',
            'Implement real-time updates',
            'Add alerting system'
          ]
        },
        {
          title: 'Advanced Features',
          description: 'Add automation and collaboration features',
          tasks: [
            'Automated deployment triggers',
            'Team notification system',
            'Performance analytics',
            'Documentation and guides'
          ]
        }
      ]
    },
    'quiz-app': {
      title: 'Quiz Application',
      description: 'Multiple choice quiz with scoring, timer functionality, and results analysis.',
      fullDescription: 'Create an interactive quiz application that tests users\' knowledge with multiple-choice questions. This project focuses on logic building, timer implementation, and dynamic content generation while providing a great user experience.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'JSON'],
      difficulty: 'Beginner',
      duration: '2-3 days',
      category: 'Frontend',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Multiple choice questions',
        'Timer for each question',
        'Score calculation and tracking',
        'Progress indicator',
        'Results page with analysis',
        'Question randomization',
        'Different difficulty levels',
        'Responsive design'
      ],
      learningOutcomes: [
        'Logic building and algorithms',
        'Timer and interval functions',
        'Dynamic content generation',
        'Data structure manipulation',
        'User interface state management',
        'Score calculation systems',
        'JSON data handling',
        'Progressive web app concepts'
      ],
      prerequisites: [
        'Basic JavaScript knowledge',
        'Understanding of functions and objects',
        'Familiarity with arrays'
      ],
      resources: [
        {
          type: 'Documentation',
          title: 'JavaScript Timers',
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/setTimeout'
        }
      ],
      steps: [
        {
          title: 'Design Quiz Structure',
          description: 'Plan the quiz flow and create questions data',
          tasks: [
            'Create question database',
            'Design quiz interface',
            'Plan user flow'
          ]
        },
        {
          title: 'Implement Quiz Logic',
          description: 'Build the core quiz functionality',
          tasks: [
            'Display questions dynamically',
            'Handle user answers',
            'Implement timer',
            'Track progress'
          ]
        },
        {
          title: 'Add Results System',
          description: 'Create scoring and results display',
          tasks: [
            'Calculate final score',
            'Show detailed results',
            'Add replay functionality'
          ]
        }
      ]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen mt-20 bg-gradient-to-br from-[#0a0415] via-[#11071f] to-[#1a0b2e] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-purple-400 hover:text-purple-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-[#0a0415] via-[#11071f] to-[#1a0b2e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-300 hover:text-white hover:border-purple-500/50 transition-all"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${project.color} mb-6`}>
            <FaCode className="text-3xl text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            {project.fullDescription}
          </p>

          {/* Project Meta */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty)}`}>
              <FaStar className="inline mr-2" />
              {project.difficulty}
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              <FaClock className="inline mr-2" />
              {project.duration}
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
              <FaCode className="inline mr-2" />
              {project.category}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowWalkthrough(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              <FaPlay />
              {(project.difficulty === 'Beginner' || project.difficulty === 'Intermediate' ||
                ['social-media-platform', 'ecommerce-platform', 'devops-dashboard'].includes(projectId)) ? 'Start Walkthrough' : 'Start Building'}
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-300 hover:text-white hover:border-purple-500/50 transition-all">
              <FaGithub />
              View Repository
            </button>
          </div>
        </motion.div>

        {/* Project Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tech Stack */}
            <motion.section
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaTools className="text-purple-400" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl text-purple-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaRocket className="text-green-400" />
                Features You'll Build
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Learning Outcomes */}
            <motion.section
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-blue-400" />
                What You'll Learn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaLightbulb className="text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Step-by-Step Guide */}
            {project.steps && (
              <motion.section
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <FaPlay className="text-purple-400" />
                  Step-by-Step Guide
                </h3>
                <div className="space-y-6">
                  {project.steps.map((step, index) => (
                    <div key={index} className="border-l-2 border-purple-500/30 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </span>
                        <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                      </div>
                      <p className="text-gray-400 mb-3">{step.description}</p>
                      <ul className="space-y-1">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-gray-300">
                            <FaCheckCircle className="text-green-400 mt-1 text-sm flex-shrink-0" />
                            <span className="text-sm">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Prerequisites */}
            <motion.section
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                Prerequisites
              </h3>
              <ul className="space-y-2">
                {project.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{prereq}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Resources */}
            <motion.section
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaExternalLinkAlt className="text-blue-400" />
                Resources
              </h3>
              <div className="space-y-3">
                {project.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-purple-400 font-medium">{resource.type}</span>
                        <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                          {resource.title}
                        </h4>
                      </div>
                      <FaExternalLinkAlt className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.section>

            {/* Quick Start */}
            <motion.section
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Ready to Start?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Clone the starter repository and follow the guide to build this project step by step.
              </p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Get Started Now
              </button>
            </motion.section>
          </div>
        </div>
      </div>

      {/* Walkthrough Modal */}
      {showWalkthrough && (
        <ProjectWalkthrough
          projectId={projectId}
          onClose={() => setShowWalkthrough(false)}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
