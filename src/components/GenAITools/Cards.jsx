import React from 'react';

export default function ToolCard({ title, description, path, tags = [], badge, popularity }) {
  return (
    <div
      className="relative group w-full max-w-[340px] min-h-[300px] bg-[#120725]/60 border border-purple-500/20
      backdrop-blur-lg rounded-2xl p-6 shadow-lg shadow-purple-900/20 transition-all duration-500
      hover:scale-[1.03] hover:shadow-purple-900/50 cursor-pointer overflow-hidden flex flex-col"
    >
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-500 z-0" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>

          <h3 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-2 sm:mb-3">
            {title}
          </h3>

          <p className="text-sm sm:text-base text-white line-clamp-3 mb-4 sm:mb-6">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold rounded-full border border-white text-black bg-amber-400"
            >
              {tag}
            </span>
          ))}
          {badge && (
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-600/20 text-blue-300 border border-blue-400">
              💰 {badge}
            </span>
          )}

          {popularity && (
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-pink-600/20 text-pink-300 border border-pink-400">
              🔥 {popularity}
            </span>
          )}
        </div>

        {/* Try It Button */}
        <a
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 sm:mt-6 block w-full px-6 py-2 text-sm font-semibold text-blue-300 border border-blue-500 rounded-full hover:bg-blue-500/20 transition duration-300 text-center"
        >
          Try It →
        </a>
      </div>
    </div>
  );
}
