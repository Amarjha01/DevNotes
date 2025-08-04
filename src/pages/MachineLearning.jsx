import React, { useState, useEffect, useMemo } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";

const sidebarLinks = [
    {
        name: 'AI Introduction',
        path: '/machine-learning/ai',
        icon: '🤖',
        description: 'What is Artificial Intelligence?',
        color: 'from-indigo-500 to-sky-500', // 🔵 Updated to match other vibrant themes
    },
    {
        name: 'Introduction',
        path: '/machine-learning/introduction',
        icon: '📘',
        description: 'What is Machine Learning?',
        color: 'from-orange-400 to-pink-500',
    },
    {
        name: 'Supervised Learning',
        path: '/machine-learning/supervised',
        icon: '🎯',
        description: 'Labeled Data Training',
        color: 'from-purple-500 to-pink-500',
    },
    {
        name: 'Unsupervised Learning',
        path: '/machine-learning/unsupervised',
        icon: '🧠',
        description: 'Pattern Discovery',
        color: 'from-blue-500 to-purple-600',
    },
    {
        name: 'Reinforcement Learning',
        path: '/machine-learning/reinforcement',
        icon: '🏆',
        description: 'Reward-Based Training',
        color: 'from-yellow-500 to-orange-600',
    },
    {
        name: 'Model Evaluation',
        path: '/machine-learning/evaluation',
        icon: '📊',
        description: 'Metrics & Validation',
        color: 'from-green-400 to-blue-500',
    },
];



const MachineLearning = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

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

    useEffect(() => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
    }, [location.pathname]);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const SidebarLink = ({ link, index, isActive }) => (
        <Link
            to={link.path}
            aria-label={link.name} // Added aria-label for accessibility
            className={`
        relative group px-4 py-4 rounded-xl text-sm font-medium 
        transition-all duration-300 transform hover:scale-[1.02]
        border border-transparent overflow-hidden
        ${isActive
                    ? 'bg-gradient-to-r from-orange-600/30 to-pink-600/30 text-orange-300 border-orange-500/30 shadow-lg shadow-orange-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-600/20 hover:to-pink-600/20 hover:border-orange-500/20'
                }
      `}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
        >
            <div className={`
        absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
        bg-gradient-to-r ${link.color} opacity-10
        ${hoveredLink === index ? 'opacity-20' : ''}
      `} />
            <div className="relative flex items-center gap-3">
                <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{link.icon}</span>
                <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{link.name}</div>
                    <div className="text-xs text-gray-400 mt-1 truncate">{link.description}</div>
                </div>
            </div>
            {isActive && (
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${link.color} rounded-full animate-pulse`}></div>
                </div>
            )}
            <div className={`
        absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${link.color} 
        transition-all duration-300 transform origin-left
        ${hoveredLink === index ? 'w-full' : 'w-0'}
      `} />
        </Link>
    );

    return (
        <div className="min-h-screen flex flex-col md:flex-row gap-6 mt-[20%] lg:mt-[6%] relative">
            <button
                className="lg:hidden fixed text-5xl right-6 z-50 bg-gradient-to-r from-orange-600 to-pink-600 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
            >
                <RiMenu3Fill />
            </button>

            {isSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                    onClick={toggleSidebar}
                />
            )}

            <aside className="
  relative
  lg:sticky lg:top-24 lg:w-1/5 w-4/5 max-w-xs
  bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]
  bg-opacity-90
  p-6 rounded-2xl shadow-xl shadow-orange-900/20
  border border-orange-800/20
  backdrop-blur-sm
  transition-all duration-300 ease-in-out
  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  fixed lg:relative z-50 lg:z-auto h-fit max-h-[90vh] overflow-y-auto
">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-2">
                        Machine Learning Topics
                    </h2>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                </div>

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

                <div className="mt-8 p-4 bg-gradient-to-r from-orange-900/20 to-pink-900/20 rounded-xl border border-orange-800/20">
                    <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-gray-400">Learning Progress</div>
                        <div className="text-sm font-medium text-orange-400">
                            {currentPageInfo.currentIndex + 1}/{sidebarLinks.length}
                        </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                        <div
                            className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${currentPageInfo.progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between">
                        {sidebarLinks.map((link, index) => (
                            <div
                                key={link.name}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index <= currentPageInfo.currentIndex
                                    ? `bg-gradient-to-r ${link.color}`
                                    : 'bg-gray-600'
                                    }`}
                                title={link.name}
                            />
                        ))}
                    </div>
                </div>

                {currentPageInfo.currentLink && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-orange-800/20 to-pink-800/20 rounded-lg border border-orange-700/30">
                        <div className="text-xs text-gray-400 mb-1">Currently Learning</div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg">{currentPageInfo.currentLink.icon}</span>
                            <span className="text-sm font-medium text-orange-300">
                                {currentPageInfo.currentLink.name}
                            </span>
                        </div>
                    </div>
                )}
            </aside>

            <section className="flex-1 relative">
                {/* Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-2xl"></div>

                {/* Radial Highlights */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,_theme(colors.orange.500),_transparent_50%)]"></div>
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,_theme(colors.pink.500),_transparent_50%)]"></div>
                </div>

                {/* Content Layer */}
                <div className="relative z-10 p-8 rounded-2xl border border-orange-800/20 backdrop-blur-sm min-h-[80vh]">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                            <span>Machine Learning</span>
                            <span>/</span>
                            <span className="text-orange-400 capitalize">{currentPageInfo.pageName}</span>
                        </div>

                        {currentPageInfo.currentLink && (
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{currentPageInfo.currentLink.icon}</span>
                                <div>
                                    <h1 className="text-4xl lg:text-2xl font-bold text-white">{currentPageInfo.currentLink.name}</h1>
                                    <p className="text-gray-400 lg:text-sm text-2xl">{currentPageInfo.currentLink.description}</p>
                                </div>
                            </div>
                        )}

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
                    </div>

                    <div className="animate-fade-in">
                        <Outlet />
                    </div>
                </div>

                {/* Animated Blobs */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-orange-600/10 to-pink-600/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            </section>



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

        aside::-webkit-scrollbar {
          width: 4px;
        }
        aside::-webkit-scrollbar-track {
          background: rgba(107, 114, 128, 0.1);
          border-radius: 2px;
        }
        aside::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #fb923c, #ec4899);
          border-radius: 2px;
        }
        aside::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f97316, #db2777);
        }
      `}</style>
        </div>
    );
};

export default MachineLearning;
