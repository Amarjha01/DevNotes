import React from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaRocket } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bottom-[0%] bg-gradient-to-r from-[#0a0415] via-[#11071f] to-[#1a0b2e] text-gray-300 py-12 overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute bottom-0 inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div> */}
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Section - Brand & Info */}
          <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="lg:w-10 lg:h-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <FaCode className="text-white text-lg" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <h3 className="lg:text-xl text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  DevNotes
                </h3>
                <p className="lg:text-xs text-xl text-gray-500">Code • Learn • Share</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 lg:text-sm">
              <span className="text-gray-400">© {new Date().getFullYear()}</span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1">
                Built with <FaHeart className="text-red-500 animate-pulse mx-1" /> by 
                <span className="text-purple-400 font-medium ml-1">Amar</span>
              </span>
            </div>
          </div>

          {/* Center Section - Quick Stats */}
          <div className="hidden lg:flex items-center gap-8 text-center">
            <div className="group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <FaRocket className="text-blue-400" />
              </div>
              <p className="text-xs text-gray-400">Always Learning</p>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            <div className="group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <FaCode className="text-green-400" />
              </div>
              <p className="text-xs text-gray-400">Open Source</p>
            </div>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="flex items-center gap-1 lg:text-sm text-2xl text-gray-400">
              <span>Connect with me</span>
              <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/amarjha01" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative lg:w-12 lg:h-12 w-16 h-16 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <FaGithub className="text-gray-400 group-hover:text-white transition-colors text-4xl lg:text-xl" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
              </a>
              <a 
                href="https://linkedin.com/in/amarjha01" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative lg:w-12 lg:h-12 w-16 h-16 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <FaLinkedin className="text-gray-400 group-hover:text-blue-400 transition-colors text-4xl lg:text-xl" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        {/* <div className="mt-8 pt-6 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <span>Made with passion in India</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Crafted for developers</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Powered by</span>
              <span className="text-purple-400 font-medium">React</span>
              <span>&</span>
              <span className="text-blue-400 font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;