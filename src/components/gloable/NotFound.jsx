import React, { useState, useEffect } from 'react';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Glitch effect trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#11071f] via-[#1a0b2e] to-[#2d1b3d] text-white">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-purple-400 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `float ${particle.speed}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
            animationDelay: '1s',
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Glitch effect overlay */}
        {glitchActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 animate-pulse" />
        )}

        {/* Main 404 heading */}
        <div className="relative mb-8">
          <h1 
            className={`text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 transform transition-all duration-300 ${
              glitchActive ? 'animate-bounce scale-105' : ''
            }`}
            style={{
              textShadow: glitchActive ? '0 0 20px rgba(147, 51, 234, 0.5)' : 'none',
              transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
            }}
          >
            404
          </h1>
          
          {/* Glitch layers */}
          {glitchActive && (
            <>
              <h1 className="absolute top-0 left-0 text-8xl md:text-9xl font-black text-red-400 opacity-60 transform translate-x-1 -translate-y-1">
                404
              </h1>
              <h1 className="absolute top-0 left-0 text-8xl md:text-9xl font-black text-blue-400 opacity-60 transform -translate-x-1 translate-y-1">
                404
              </h1>
            </>
          )}
        </div>

        {/* Subtitle with typewriter effect */}
        <div className="mb-8 max-w-md">
          <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-fade-in">
            Oops! You've ventured into the
          </p>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            digital void
          </p>
          <p className="text-lg mt-4 text-gray-400">
            This page seems to have escaped to another dimension
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Return to Reality</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <button
            onClick={() => window.history.back()}
            className="group relative px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10">Go Back</span>
          </button>
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/6 text-purple-400/30 text-4xl animate-spin"
            style={{ animationDuration: '20s' }}
          >
            ⚡
          </div>
          <div 
            className="absolute top-1/3 right-1/6 text-pink-400/30 text-3xl animate-bounce"
            style={{ animationDelay: '1s' }}
          >
            🌟
          </div>
          <div 
            className="absolute bottom-1/4 left-1/5 text-blue-400/30 text-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          >
            🚀
          </div>
          <div 
            className="absolute bottom-1/3 right-1/5 text-purple-400/30 text-2xl animate-spin"
            style={{ animationDuration: '15s', animationDelay: '0.5s' }}
          >
            💫
          </div>
        </div>

        {/* Footer message */}
        <p className="text-sm text-gray-500 mt-8 animate-pulse">
          Error code: DIMENSION_NOT_FOUND
        </p>
      </div>

      {/* Custom keyframe animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NotFound;