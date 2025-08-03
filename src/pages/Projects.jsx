import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch, FaCode, FaRocket, FaStar, FaClock, FaUsers, FaGithub, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = {
    beginner: [
      {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        description: 'Build a responsive personal portfolio showcasing your skills and projects',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        difficulty: 'Beginner',
        duration: '2-3 days',
        learningOutcomes: ['Responsive design', 'Semantic HTML', 'CSS Flexbox/Grid', 'Basic JavaScript'],
        features: ['Responsive layout', 'Contact form', 'Project showcase', 'About section'],
        category: 'Frontend',
        color: 'from-green-500 to-blue-500'
      },
      {
        id: 'todo-list-app',
        title: 'To-Do List App',
        description: 'Interactive task management application with local storage',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        difficulty: 'Beginner',
        duration: '1-2 days',
        learningOutcomes: ['DOM manipulation', 'Local storage', 'Event handling', 'Array methods'],
        features: ['Add/remove tasks', 'Mark as complete', 'Local storage', 'Filter tasks'],
        category: 'Frontend',
        color: 'from-purple-500 to-pink-500'
      },
      {
        id: 'quiz-app',
        title: 'Quiz Application',
        description: 'Multiple choice quiz with scoring and timer functionality',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        difficulty: 'Beginner',
        duration: '2-3 days',
        learningOutcomes: ['Logic building', 'Timer functions', 'Score calculation', 'Dynamic content'],
        features: ['Multiple questions', 'Timer', 'Score tracking', 'Results page'],
        category: 'Frontend',
        color: 'from-yellow-500 to-orange-500'
      }
    ],
    intermediate: [
      {
        id: 'weather-app',
        title: 'Weather Dashboard',
        description: 'Real-time weather application using OpenWeather API',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
        difficulty: 'Intermediate',
        duration: '3-5 days',
        learningOutcomes: ['API integration', 'Async/await', 'Error handling', 'Data visualization'],
        features: ['Current weather', '5-day forecast', 'Location search', 'Weather maps'],
        category: 'Frontend',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        id: 'notes-app',
        title: 'Notes Application',
        description: 'Full-featured note-taking app with React and local storage',
        techStack: ['React', 'CSS', 'Local Storage'],
        difficulty: 'Intermediate',
        duration: '4-6 days',
        learningOutcomes: ['React hooks', 'State management', 'CRUD operations', 'Component architecture'],
        features: ['Create/edit notes', 'Categories', 'Search', 'Rich text editor'],
        category: 'Frontend',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        id: 'blog-cms',
        title: 'Blog CMS',
        description: 'Content management system for blogs with Node.js backend',
        techStack: ['Node.js', 'Express', 'MongoDB', 'React'],
        difficulty: 'Intermediate',
        duration: '1-2 weeks',
        learningOutcomes: ['REST APIs', 'Database design', 'Authentication', 'Full-stack development'],
        features: ['Create posts', 'User authentication', 'Admin panel', 'Comments system'],
        category: 'Full-Stack',
        color: 'from-emerald-500 to-teal-500'
      }
    ],
    advanced: [
      {
        id: 'social-media-platform',
        title: 'Social Media Platform',
        description: 'Full-featured social network with real-time features',
        techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
        difficulty: 'Advanced',
        duration: '3-4 weeks',
        learningOutcomes: ['Real-time communication', 'Advanced authentication', 'Scalable architecture', 'WebSocket integration'],
        features: ['User profiles', 'Posts & comments', 'Real-time chat', 'Notifications', 'Media upload'],
        category: 'Full-Stack',
        color: 'from-rose-500 to-pink-500'
      },
      {
        id: 'ecommerce-platform',
        title: 'E-commerce Platform',
        description: 'Complete online store with payment integration',
        techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
        difficulty: 'Advanced',
        duration: '4-6 weeks',
        learningOutcomes: ['Payment processing', 'Shopping cart logic', 'Order management', 'Inventory tracking'],
        features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Order tracking', 'Admin dashboard'],
        category: 'Full-Stack',
        color: 'from-amber-500 to-orange-500'
      },
      {
        id: 'devops-dashboard',
        title: 'DevOps Dashboard',
        description: 'Monitoring dashboard with CI/CD pipeline integration',
        techStack: ['React', 'Docker', 'GitHub Actions', 'AWS', 'Monitoring Tools'],
        difficulty: 'Advanced',
        duration: '2-3 weeks',
        learningOutcomes: ['DevOps practices', 'Containerization', 'CI/CD pipelines', 'Cloud deployment'],
        features: ['Pipeline monitoring', 'Deployment tracking', 'Error alerts', 'Performance metrics'],
        category: 'DevOps',
        color: 'from-violet-500 to-purple-500'
      }
    ]
  };

  const allProjects = [...projects.beginner, ...projects.intermediate, ...projects.advanced];

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'beginner' && projects.beginner.includes(project)) ||
      (selectedCategory === 'intermediate' && projects.intermediate.includes(project)) ||
      (selectedCategory === 'advanced' && projects.advanced.includes(project));
    
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode },
    { id: 'beginner', name: 'Beginner', icon: FaStar },
    { id: 'intermediate', name: 'Intermediate', icon: FaRocket },
    { id: 'advanced', name: 'Advanced', icon: FaUsers }
  ];

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-[#0a0415] via-[#11071f] to-[#1a0b2e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Hands-On Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Learn by building real-world projects. From simple beginner exercises to advanced full-stack applications.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects or tech stack..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-all w-80"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                }`}
              >
                <Icon className="text-sm" />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                  <FaCode className="text-white text-xl" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {project.difficulty}
                  </span>
                  {(project.difficulty === 'Beginner' || project.difficulty === 'Intermediate' ||
                    (project.difficulty === 'Advanced' && ['social-media-platform', 'ecommerce-platform', 'devops-dashboard'].includes(project.id))) && (
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium flex items-center gap-1">
                      <FaPlay className="text-xs" />
                      Walkthrough
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>

              {/* Project Stats */}
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-1">
                  <FaClock className="text-xs" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-xs text-yellow-400" />
                  {project.category}
                </div>
              </div>

              {/* Action Button */}
              <Link
                to={`/projects/${project.id}`}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 group-hover:scale-105"
              >
                {(project.difficulty === 'Beginner' || project.difficulty === 'Intermediate' ||
                  (project.difficulty === 'Advanced' && ['social-media-platform', 'ecommerce-platform', 'devops-dashboard'].includes(project.id)))
                  ? 'Start Walkthrough' : 'View Project'}
                <FaRocket className="text-sm" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaSearch className="text-6xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Building?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Choose a project that matches your skill level and start your coding journey. Each project includes detailed guides, resources, and learning outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-300 hover:text-white hover:border-purple-500/50 transition-all"
            >
              <FaGithub />
              View on GitHub
            </a>
            <Link
              to="/frontend/html"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              <FaCode />
              Learn Fundamentals First
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
