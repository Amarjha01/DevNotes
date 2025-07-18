import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaCode, FaLaptopCode, FaServer, FaRocket, FaEllipsisH } from 'react-icons/fa';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currLogo, setCurrLogo] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrLogo(prev => (prev < 6 ? prev + 1 : 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Frontend', path: '/frontend/html', icon: FaLaptopCode, color: 'text-purple-400' },
    { name: 'Backend', path: '/backend/nodejs', icon: FaServer, color: 'text-blue-400' },
    { name: 'Deployment', path: '/deployment', icon: FaRocket, color: 'text-green-400' },
    { name: 'Miscellaneous', path: '/miscellaneous', icon: FaEllipsisH, color: 'text-pink-400' }
  ];

  return (
    <header className={`fixed top-0  w-full z-50 transition-all duration-500 max-w-[1424px] m-auto ${
      scrolled 
        ? 'bg-[#0a0415]/5 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
        : 'bg-white/5 backdrop-blur-lg'
    }`}>
      <div className="flex items-center justify-between px-6 py-24 lg:py-4 transition-all duration-300 h-20">
        
        {/* Logo Section */}
        <button 
          onClick={() => window.location.href = '/'}
          className="group flex items-center gap-3 z-50 hover:scale-105 transition-all duration-300"
        >
          <div className="relative">
            <div className="w-32 h-32 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300 shadow-lg">
              <img 
                src={`/DevNotes-logos/logo${currLogo}.jpg`} 
                alt="DevNotes Logo" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-7xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DevNotes
            </h1>
            <p className="text-2xl lg:text-xs text-gray-400 -mt-1">Learn • Code • Share</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => window.location.href = item.path}
                className={`group relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 ${item.color} hover:scale-105`}
              >
                <Icon className="text-sm" />
                <span className="text-gray-300 group-hover:text-white">{item.name}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
              </button>
            );
          })}
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden relative text-8xl bg-gray-900/50 backdrop-blur-sm rounded-full flex items-center justify-center text-purple-400  z-50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="absolute  rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-3/4 right-20 rounded-2xl px-4 bg-[#0a0415]/95 pb-5 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-40">
            {/* Background Effects */}
            <div className="">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Mobile Menu Items */}
            <div className="relative  z-40 flex flex-col items-center space-y-6">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      window.location.href = item.path;
                      setMenuOpen(false);
                    }}
                    className={`group flex items-center items-center gap-4 px-8 py-4 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${item.color} hover:shadow-purple-500/25 min-w-[400px]`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'slideInFromRight 0.5s ease-out forwards'
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                      <Icon className="text-4xl" />
                    </div>
                    <div className="text-left">
                      <span className="text-4xl font-medium text-gray-300 group-hover:text-white">
                        {item.name}
                      </span>
                      <p className="text-xl text-gray-500 group-hover:text-gray-400">
                        Explore {item.name.toLowerCase()}
                      </p>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Footer */}
            <div className="relative z-10 flex flex-col items-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-gray-400 text-2xl">
                <FaCode className="text-purple-400" />
                <span>Built with passion</span>
              </div>
              <div className="flex gap-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-400"></div>
                <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-800"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}