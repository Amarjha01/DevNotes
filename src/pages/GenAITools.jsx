import { Outlet, NavLink } from 'react-router-dom';
import { FaPaintBrush, FaServer, FaBrain, FaAndroid } from 'react-icons/fa'; // ✅ Icons

export default function GenAITools() {
  const navItems = [
    { name: 'Frontend Tools', path: 'FrontEndTools', icon: <FaPaintBrush className="mr-2" /> },
    { name: 'Backend Tools', path: 'BackEndTools', icon: <FaServer className="mr-2" /> },
    { name: 'ML Tools', path: 'MLTools', icon: <FaBrain className="mr-2" /> },
    { name: 'Android Dev Tools', path: 'AndroidDevTools', icon: <FaAndroid className="mr-2" /> }
  ];

  return (
    <div className="min-h-screen bg-transparent px-4 sm:px-6 md:px-10 pt-[120px] pb-20 relative">

      <div className="w-full flex justify-center mb-12">
<div className="flex flex-wrap items-center justify-center gap-3  bg-[#0a0415]/70 backdrop-blur-lg border border-purple-500/20 shadow-md rounded-2xl px-4 py-3 sm:px-6 mt-20 sm:mt-16 md:mt-24 lg:mt-1 sm:py-4 max-w-fit z-10">          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `px-5 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300
                relative overflow-hidden group whitespace-nowrap
                ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-400/30'
                    : 'bg-gray-900/50 text-purple-300 hover:bg-purple-600/30 hover:text-white'
                }`
              }
            >
              <span className="relative z-10 flex items-center">
                {item.icon}
                {item.name}
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
            </NavLink>
          ))}

        </div>
      </div>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}
