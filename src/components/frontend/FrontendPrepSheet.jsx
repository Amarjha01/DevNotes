import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FrontendPrepSheet() {
  const [filter, setFilter] = useState("All");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [solved, setSolved] = useState({});

  const topics = [
    {
      title: "HTML & Semantics",
      color: "from-orange-500 to-red-500",
      description: "Core HTML practice tasks focusing on semantics, forms, and accessibility.",
      questions: [
        { name: "Build a Portfolio Page", link: "https://www.frontendmentor.io/challenges", difficulty: "Easy" },
        { name: "Accessible Form Design", link: "https://www.w3.org/WAI/tutorials/forms/", difficulty: "Easy" },
        { name: "Landing Page Challenge", link: "https://www.frontendmentor.io/challenges", difficulty: "Medium" },
        { name: "SEO-Friendly Blog Page", link: "https://www.frontendmentor.io/challenges", difficulty: "Medium" },
        { name: "Multi-step Form", link: "https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ", difficulty: "Medium" },
        { name: "Accessibility Audit Task", link: "https://wave.webaim.org/", difficulty: "Hard" }
      ]
    },
    {
      title: "CSS & Styling",
      color: "from-blue-500 to-indigo-500",
      description: "Challenges covering layouts, responsiveness, and animations.",
      questions: [
        { name: "CSS Flexbox Froggy", link: "https://flexboxfroggy.com/", difficulty: "Easy" },
        { name: "CSS Grid Garden", link: "https://cssgridgarden.com/", difficulty: "Easy" },
        { name: "Pricing Grid Component", link: "https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC", difficulty: "Medium" },
        { name: "Responsive Navbar", link: "https://www.frontendmentor.io/challenges", difficulty: "Medium" },
        { name: "CSSBattle - Targets", link: "https://cssbattle.dev/", difficulty: "Medium" },
        { name: "Complex CSS Animations", link: "https://codepen.io/collection/nMgKxR", difficulty: "Hard" }
      ]
    },
    {
      title: "JavaScript Core",
      color: "from-yellow-500 to-amber-500",
      description: "Fundamental DOM, events, and ES6+ practice tasks.",
      questions: [
        { name: "Vanilla JS Todo App", link: "https://javascript30.com/", difficulty: "Easy" },
        { name: "Image Slider", link: "https://javascript30.com/", difficulty: "Easy" },
        { name: "Form Validation", link: "https://www.frontendmentor.io/challenges", difficulty: "Medium" },
        { name: "Debounce & Throttle Demo", link: "https://codepen.io/", difficulty: "Medium" },
        { name: "Infinite Scroll", link: "https://javascript30.com/", difficulty: "Medium" },
        { name: "Drag & Drop", link: "https://javascript30.com/", difficulty: "Hard" }
      ]
    },
    {
      title: "React Basics",
      color: "from-green-500 to-emerald-500",
      description: "React practice challenges with hooks, state, and props.",
      questions: [
        { name: "Counter App with Hooks", link: "https://codesandbox.io/", difficulty: "Easy" },
        { name: "Todo List (React)", link: "https://codesandbox.io/", difficulty: "Easy" },
        { name: "Weather App (API Fetch)", link: "https://codesandbox.io/", difficulty: "Medium" },
        { name: "Movie Search App", link: "https://codesandbox.io/", difficulty: "Medium" },
        { name: "React Router Navigation", link: "https://reactrouter.com/", difficulty: "Medium" },
        { name: "E-commerce Cart", link: "https://codesandbox.io/", difficulty: "Hard" }
      ]
    },
    {
      title: "Frontend System Design",
      color: "from-purple-500 to-pink-500",
      description: "Performance, optimization, and architecture tasks.",
      questions: [
        { name: "Lazy Loading Images", link: "https://web.dev/lazy-loading/", difficulty: "Medium" },
        { name: "Debounce Search Suggestions", link: "https://codepen.io/", difficulty: "Medium" },
        { name: "Responsive Dashboard", link: "https://www.frontendmentor.io/challenges", difficulty: "Medium" },
        { name: "Dark Mode Toggle", link: "https://codesandbox.io/", difficulty: "Easy" },
        { name: "Service Worker Caching", link: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API", difficulty: "Hard" },
        { name: "SSR vs CSR Demo", link: "https://nextjs.org/", difficulty: "Hard" }
      ]
    }
  ];

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-20 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
          🎨 Frontend Prep Sheet
        </h1>
        <p className="mt-3 text-gray-400">
          Practice HTML, CSS, JavaScript, and React with structured challenges.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-8">
        {difficulties.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`px-4 py-2 rounded-xl border transition ${
              filter === d
                ? "bg-yellow-600 border-yellow-400 text-white"
                : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Topics */}
      <div className="space-y-6">
        {topics.map((topic, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Topic Header */}
            <div
              onClick={() =>
                setExpandedTopic(expandedTopic === i ? null : i)
              }
              className={`cursor-pointer p-6 flex items-center justify-between bg-gradient-to-r ${topic.color}`}
            >
              <h2 className="text-2xl font-bold">{topic.title}</h2>
              {expandedTopic === i ? <ChevronUp /> : <ChevronDown />}
            </div>

            {/* Expanded Section */}
            {expandedTopic === i && (
              <div className="p-6 space-y-4">
                <p className="text-gray-400 mb-4">{topic.description}</p>

                {topic.questions
                  .filter(
                    (q) => filter === "All" || q.difficulty === filter
                  )
                  .map((q, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                    >
                      <div>
                        <a
                          href={q.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-lg font-medium text-yellow-300 hover:text-pink-400"
                        >
                          {q.name}
                        </a>
                        <span
                          className={`ml-3 px-2 py-1 text-xs rounded-lg ${
                            q.difficulty === "Easy"
                              ? "bg-green-600/30 text-green-400"
                              : q.difficulty === "Medium"
                              ? "bg-yellow-600/30 text-yellow-400"
                              : "bg-red-600/30 text-red-400"
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      </div>

                      {/* Solved Toggle */}
                      <button
                        onClick={() =>
                          setSolved((prev) => ({
                            ...prev,
                            [q.name]: !prev[q.name]
                          }))
                        }
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                          solved[q.name]
                            ? "bg-green-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {solved[q.name] ? "Solved" : "Unsolved"}
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
