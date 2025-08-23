import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import {
  FaBars,
  FaTimes,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaRobot,
  FaRocket,
  FaEllipsisH,
  FaProjectDiagram,
  FaBrain,
  FaAndroid,
} from "react-icons/fa";
import SearchBar from "../SearchBar";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currLogo, setCurrLogo] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // New state for managing open dropdown

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrLogo((prev) => (prev < 6 ? prev + 1 : 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // New useEffect to close dropdowns when the user clicks anywhere else
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown and the button
      if (event.target.closest(".dropdown-container") === null) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    {
      name: "Frontend",
      icon: FaLaptopCode,
      color: "text-purple-400",
      children: [
        { label: "Docs", path: "/frontend/html" },
        { label: "Notes", path: "/notes/frontend" },
        { label: "Practice", path: "/frontend/frontendprepsheet" },
        { label: "Quiz", path: "/quiz/frontend" },
      ],
    },
    {
      name: "Backend",
      icon: FaServer,
      color: "text-blue-400",
      children: [
        { label: "Docs", path: "/backend/nodejs" },
        { label: "Notes", path: "/notes/backend" },
        { label: "Practice", path: "/backend/backendprepsheet" },
        { label: "Quiz", path: "/quiz/backend" },
      ],
    },
    {
      name: "ML/AI",
      icon: FaBrain,
      color: "text-orange-400",
      children: [
        { label: "Docs", path: "/machine-learning/ai" },
        { label: "Notes", path: "/notes/ml" },
      ],
    },
    {
      name: "DSA",
      icon: FaPlay,
      color: "text-purple-400",
      children: [
        { label: "Docs", path: "/dsa/array" },
        { label: "Notes", path: "/notes/dsa" },
        { label: "Practice", path: "/dsa/dsaprepsheet" },
      ],
    },
    {
      name: "System Design",
      icon: FaDatabase,
      color: "text-purple-400",
      children: [
        { label: "Docs", path: "/system-design/scalability" },
        { label: "Notes", path: "/notes/system" },
      ],
    },
    {
      name: "Android",
      icon: FaAndroid,
      color: "text-green-400",
      children: [
        { label: "Docs", path: "/android" },
        { label: "Notes", path: "/notes/android" },
      ],
    },
    {
      name: "Projects",
      path: "/projects",
      icon: FaProjectDiagram,
      color: "text-emerald-400",
    },
    {
      name: "GitGuide",
      path: "/GitGuide",
      icon: FaCode,
      color: "text-yellow-400",
    },
    {
      name: "Gen-AI Dev Tools",
      path: "/GenAI-Tools/FrontEndTools",
      icon: FaRobot,
      color: "text-purple-400",
    },
  ];

  const handleDropdownClick = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 max-w-[1424px] m-auto ${
        scrolled
          ? "bg-[#0a0415]/5 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10"
          : "bg-white/5 backdrop-blur-lg"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:py-4 transition-all duration-300 h-20">
        {/* Logo Section */}
        <button
          onClick={() => (window.location.href = "/")}
          className="group flex items-center gap-3 z-50 hover:scale-105 transition-all duration-300"
        >
          <div className="relative">
            <div className="w-12 h-12 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300 shadow-lg">
              <img
                src={`/DevNotes-logos/logo${currLogo}.jpg`}
                alt="DevNotes Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DevNotes
            </h1>
            <p className="text-xs text-gray-400 -mt-1">Learn • Code • Share</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-900/50 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-700/50 ml-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isDropdownOpen = openDropdown === item.name;
            return (
              <div key={item.name} className="relative dropdown-container">
                {/* Parent Button */}
                <button
                  onClick={() => {
                    if (item.children) {
                      handleDropdownClick(item.name);
                    } else {
                      window.location.href = item.path;
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 ${
                    item.color
                  } ${isDropdownOpen ? "bg-gray-800/50" : ""}`}
                >
                  <Icon className="text-lg" />
                  <span className="text-gray-300 group-hover:text-white">
                    {item.name}
                  </span>
                  {item.children && (
                    <FaChevronDown
                      className={`text-xs ml-1 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-gray-900/90 backdrop-blur-md rounded-lg shadow-lg p-2 min-w-[150px] animate-fadeIn">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.path}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden relative text-2xl bg-gray-900/50 backdrop-blur-sm rounded-full p-2 flex items-center justify-center text-purple-400 z-50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="fixed top-20 right-4 rounded-2xl px-4 bg-[#0a0415]/95 pb-5 backdrop-blur-xl flex flex-col z-40 w-11/12 max-w-md 
                  max-h-[calc(100vh-5rem)] overflow-y-auto overflow-x-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse z-0"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000 z-0"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500 z-0"></div>
            </div>

            {/* Mobile Search Bar */}
            <div className="relative z-10 w-full px-4 py-3 border-b border-gray-700/50">
              <SearchBar />
            </div>

            {/* Menu Items (no scroll here) */}
            <div className="relative z-10 flex flex-col items-center space-y-4 w-full px-2 py-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      window.location.href = item.path;
                      setMenuOpen(false);
                    }}
                    className={`group flex items-center gap-4 px-4 py-3 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${item.color} hover:shadow-purple-500/25 w-full`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "slideInFromRight 0.5s ease-out forwards",
                    }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                      <Icon className="text-xl" />
                    </div>
                    <div className="text-left">
                      <span className="text-lg font-medium text-gray-300 group-hover:text-white">
                        {item.name}
                      </span>
                      <p className="text-sm text-gray-500 group-hover:text-gray-400">
                        Explore {item.name.toLowerCase()}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="relative z-10 flex flex-col items-center gap-2 mt-4 pb-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaCode className="text-purple-400" />
                <span>Built with passion</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-400"></div>
                <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-800"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations and dropdown */}
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
