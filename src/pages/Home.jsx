import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaRocket, FaGithub, FaArrowRight, FaLaptopCode, FaServer, FaStar, FaUsers, FaBookOpen, FaProjectDiagram } from 'react-icons/fa';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  
  const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'];
  const fullText = 'Master Web Development';

  useEffect(() => {
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <div className="min-h-[80vh] mt-[5%] rounded-2xl lg:min-h-screen bg-gradient-to-br from-[#0a0415] via-[#11071f] to-[#1a0b2e] relative overflow-hidden flex justify-center items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute lg:top-[10%] top-[20%] left-10 text-purple-400/70 lg:text-purple-400/50 font-mono text-sm"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          &lt;div className="hero"&gt;
        </motion.div>
        <motion.div
          className="absolute top-32 right-20 text-blue-400/80 lg:text-blue-400/20 font-mono text-sm"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          {/* function() {{ return  'awesome' }} */}
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-green-400/50 lg:text-green-400/30 font-mono text-sm"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          const learn = () =&gt; code;
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Badge */}
        <motion.div
          className="mb-8 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="lg:text-sm text-2xl text-purple-300 flex items-center gap-2">
            <FaRocket className="text-yellow-400" />
            Your Journey to Full-Stack Excellence
          </span>
        </motion.div>

        {/* Main Title with Typing Effect */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {typedText}
          <span className="animate-pulse text-purple-400">|</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Your daily dose of web development notes. Master 
          <span className="text-purple-400 font-semibold"> HTML, CSS, JavaScript, React, Node.js</span> and more 
          in a structured, beautifully organized format.
        </motion.p>

        {/* Tech Stack Showcase */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full lg:text-sm text-2xl text-gray-300 border border-gray-700/50 hover:border-purple-500/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex gap-6 flex-wrap justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            to="/frontend/html"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 font-medium"
          >
            <span className="flex items-center gap-2 text-3xl">
              <FaLaptopCode />
              Explore Frontend
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            to="/projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 font-medium"
          >
            <span className="flex items-center gap-2 text-3xl">
              <FaProjectDiagram />
              Build Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            to="/backend/nodejs"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-medium"
          >
            <span className="flex items-center gap-2 text-3xl">
              <FaServer />
              Explore Backend
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
            <div className="text-sm text-gray-400 flex items-center gap-1">
              <FaBookOpen className="text-xs" />
              Tutorials
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">1000+</div>
            <div className="text-sm text-gray-400 flex items-center gap-1">
              <FaUsers className="text-xs" />
              Learners
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
            <div className="text-sm text-gray-400 flex items-center gap-1">
              <FaStar className="text-xs" />
              Support
            </div>
          </div>
        </motion.div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-8 right-8 z-[70]"
          // animate={controls}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <a
            href="https://github.com/amarjha01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110"
          >
            <FaGithub className="text-xl" />
          </a>
        </motion.div>

 
      </motion.div>
    </div>
  );
};

export default Home;
