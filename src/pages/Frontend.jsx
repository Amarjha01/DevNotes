// pages/Frontend.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
const sidebarLinks = [
  { 
    name: 'HTML', 
    path: '/frontend/html', 
    icon: '🏗️', 
    description: 'Structure & Markup',
    color: 'from-orange-500 to-red-500'
  },
  { 
    name: 'CSS', 
    path: '/frontend/css', 
    icon: '🎨', 
    description: 'Styling & Layout',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'JavaScript', 
    path: '/frontend/js', 
    icon: '⚡', 
    description: 'Interactivity & Logic',
    color: 'from-yellow-500 to-orange-500'
  },
  { 
    name: 'React JS', 
    path: '/frontend/reactjs', 
    icon: '⚛️', 
    description: 'UI Library & Components',
    color: 'from-cyan-500 to-blue-500'
  },
  { 
    name: 'Tailwind CSS', 
    path: '/frontend/tailwind', 
    icon: '🌊', 
    description: 'Utility-First CSS',
    color: 'from-teal-500 to-green-500'
  },
];

const Frontend = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Memoize current page info to avoid recalculation
  const currentPageInfo = useMemo(() => {
    const currentPath = location.pathname;
    const currentLink = sidebarLinks.find(link => link.path === currentPath);
    const currentIndex = sidebarLinks.findIndex(link => link.path === currentPath);
    const pageName = currentPath.split('/').pop() || 'Overview';
    
    return {
      currentLink,
      currentIndex,
      pageName,
      progress: currentIndex >= 0 ? ((currentIndex + 1) / sidebarLinks.length) * 100 : 0
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const SidebarLink = ({ link, index, isActive }) => (
    
    <Link
      to={link.path}
      className={`
        relative group px-4 py-4 rounded-xl text-sm font-medium 
        transition-all duration-300 transform hover:scale-[1.02]
        border border-transparent overflow-hidden
        ${isActive 
          ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 border-purple-500/30 shadow-lg shadow-purple-500/20' 
          : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-purple-500/20'
        }
      `}
      onMouseEnter={() => setHoveredLink(index)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      {/* Background glow effect */}
      <div className={`
        absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
        bg-gradient-to-r ${link.color} opacity-10
        ${hoveredLink === index ? 'opacity-20' : ''}
      `} />
      
      {/* Content */}
      <div className="relative flex items-center gap-3">
        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
          {link.icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className="font-semibold truncate">{link.name}</div>
          <div className="text-xs text-gray-400 mt-1 truncate">{link.description}</div>
        </div>
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <div className={`w-2 h-2 bg-gradient-to-r ${link.color} rounded-full animate-pulse`}></div>
        </div>
      )}

      {/* Hover effect line */}
      <div className={`
        absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${link.color} 
        transition-all duration-300 transform origin-left
        ${hoveredLink === index ? 'w-full' : 'w-0'}
      `} />
    </Link>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-6 mt-[13%] md:mt-[6%] relative">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-36 text-5xl right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
      <RiMenu3Fill />
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Enhanced Sidebar */}
      <aside className={`
        lg:sticky lg:top-24 lg:w-1/5 w-4/5 max-w-xs
        bg-gradient-to-b from-[#1e1333] via-[#2a1955] to-[#1e1333]
        p-6 rounded-2xl shadow-2xl border border-purple-800/20
        backdrop-blur-sm
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        fixed lg:relative z-50 lg:z-auto h-fit max-h-[90vh] overflow-y-auto
      `}>
        <div className="relative">
          {/* Header with gradient text */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Frontend Topics
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          {/* Enhanced Navigation */}
          <nav className="flex flex-col gap-2 mb-6">
            {sidebarLinks.map((link, index) => (
              <SidebarLink
                key={link.name}
                link={link}
                index={index}
                isActive={location.pathname === link.path}
              />
            ))}
          </nav>

          {/* Enhanced Progress indicator */}
          <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-800/20">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-400">Learning Progress</div>
              <div className="text-sm font-medium text-purple-400">
                {currentPageInfo.currentIndex + 1}/{sidebarLinks.length}
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${currentPageInfo.progress}%` }}
              />
            </div>
            
            {/* Individual progress dots */}
            <div className="flex justify-between">
              {sidebarLinks.map((link, index) => (
                <div 
                  key={link.name}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index <= currentPageInfo.currentIndex
                      ? `bg-gradient-to-r ${link.color}` 
                      : 'bg-gray-600'
                  }`}
                  title={link.name}
                />
              ))}
            </div>
          </div>

          {/* Current topic indicator */}
          {currentPageInfo.currentLink && (
            <div className="mt-4 p-3 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg border border-purple-700/30">
              <div className="text-xs text-gray-400 mb-1">Currently Learning</div>
              <div className="flex items-center gap-2">
                <span className="text-lg">{currentPageInfo.currentLink.icon}</span>
                <span className="text-sm font-medium text-purple-300">
                  {currentPageInfo.currentLink.name}
                </span>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Enhanced Content Area */}
      <section className="flex-1 relative">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1129] via-[#2a1640] to-[#1a1129] rounded-2xl"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,_theme(colors.purple.500),_transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,_theme(colors.pink.500),_transparent_50%)]"></div>
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 p-8 rounded-2xl border border-purple-800/20 backdrop-blur-sm min-h-[80vh]">
          {/* Enhanced header with breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>Frontend</span>
              <span>/</span>
              <span className="text-purple-400 capitalize">
                {currentPageInfo.pageName}
              </span>
            </div>
            
            {/* Page title with icon */}
            {currentPageInfo.currentLink && (
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{currentPageInfo.currentLink.icon}</span>
                <div>
                  <h1 className="text-4xl lg:text-2xl font-bold text-white">{currentPageInfo.currentLink.name}</h1>
                  <p className="text-gray-400 lg:text-sm text-2xl">{currentPageInfo.currentLink.description}</p>
                </div>
              </div>
            )}
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          </div>

          {/* Content with fade-in animation */}
          <div className="animate-fade-in">
            <Outlet />
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* CSS Animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        /* Custom scrollbar for sidebar */
        aside::-webkit-scrollbar {
          width: 4px;
        }
        
        aside::-webkit-scrollbar-track {
          background: rgba(107, 114, 128, 0.1);
          border-radius: 2px;
        }
        
        aside::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 2px;
        }
        
        aside::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }
      `}</style>
    </div>
  );
};

export default Frontend;