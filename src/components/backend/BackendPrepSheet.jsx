import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BackendPrepSheet() {
  const [filter, setFilter] = useState("All");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [solved, setSolved] = useState({});

  const topics = [
    {
      title: "Databases & SQL",
      color: "from-blue-500 to-indigo-500",
      description: "Practice SQL queries, joins, and optimization techniques.",
      questions: [
        { name: "Basic SQL Queries", link: "https://www.hackerrank.com/domains/sql", difficulty: "Easy" },
        { name: "Joins Practice", link: "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/", difficulty: "Easy" },
        { name: "Group By & Having", link: "https://leetcode.com/problems/combine-two-tables/", difficulty: "Medium" },
        { name: "Employee Salary Queries", link: "https://leetcode.com/problemset/database/", difficulty: "Medium" },
        { name: "Indexing & Optimization", link: "https://www.geeksforgeeks.org/sql-indexes/", difficulty: "Hard" },
        { name: "Database Normalization", link: "https://www.interviewbit.com/sql-interview-questions/", difficulty: "Hard" }
      ]
    },
    {
      title: "APIs & REST",
      color: "from-green-500 to-emerald-500",
      description: "Build and practice REST APIs, CRUD operations, and integrations.",
      questions: [
        { name: "Intro to REST API", link: "https://www.geeksforgeeks.org/rest-api-introduction/", difficulty: "Easy" },
        { name: "CRUD with Express", link: "https://www.geeksforgeeks.org/node-js-crud-application-using-expressjs-and-mongodb/", difficulty: "Easy" },
        { name: "JWT Authentication", link: "https://www.geeksforgeeks.org/jwt-authentication-with-node-js/", difficulty: "Medium" },
        { name: "Rate Limiting", link: "https://www.geeksforgeeks.org/rate-limiting-in-node-js/", difficulty: "Medium" },
        { name: "API Caching", link: "https://www.geeksforgeeks.org/how-to-implement-caching-in-node-js-using-redis/", difficulty: "Hard" },
        { name: "OAuth 2.0 Flow", link: "https://www.geeksforgeeks.org/oauth-2-0-authorization-code-grant-type/", difficulty: "Hard" }
      ]
    },
    {
      title: "Authentication & Security",
      color: "from-red-500 to-orange-500",
      description: "Focus on authentication, authorization, and securing backend systems.",
      questions: [
        { name: "Password Hashing with Bcrypt", link: "https://www.geeksforgeeks.org/hashing-passwords-in-node-js-using-bcrypt/", difficulty: "Easy" },
        { name: "Session vs Token Auth", link: "https://www.geeksforgeeks.org/difference-between-session-based-and-token-based-authentication/", difficulty: "Easy" },
        { name: "CSRF Protection", link: "https://owasp.org/www-community/attacks/csrf", difficulty: "Medium" },
        { name: "XSS Prevention", link: "https://owasp.org/www-community/attacks/xss/", difficulty: "Medium" },
        { name: "Implement RBAC", link: "https://www.geeksforgeeks.org/role-based-access-control-rbac-and-permissions-in-node-js/", difficulty: "Hard" },
        { name: "HTTPS & SSL Setup", link: "https://www.geeksforgeeks.org/how-to-use-https-in-node-js/", difficulty: "Hard" }
      ]
    },
    {
      title: "System Design Basics",
      color: "from-purple-500 to-pink-500",
      description: "Design scalable systems with caching, load balancing, and queues.",
      questions: [
        { name: "URL Shortener Design", link: "https://leetcode.com/discuss/interview-question/system-design/124676/system-design-url-shortener", difficulty: "Easy" },
        { name: "Design a Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" },
        { name: "Message Queue Basics", link: "https://www.geeksforgeeks.org/message-queue-architecture-and-examples/", difficulty: "Medium" },
        { name: "Design Rate Limiter", link: "https://leetcode.com/discuss/interview-question/system-design/124720/system-design-rate-limiter", difficulty: "Medium" },
        { name: "Scalable Chat System", link: "https://leetcode.com/discuss/interview-question/system-design/124777/system-design-chat-messaging-service", difficulty: "Hard" },
        { name: "Design Twitter", link: "https://leetcode.com/discuss/interview-question/system-design/124558/system-design-twitter", difficulty: "Hard" }
      ]
    },
    {
      title: "Backend with Node.js",
      color: "from-yellow-500 to-amber-500",
      description: "Node.js specific practice challenges covering async, streams, and file handling.",
      questions: [
        { name: "Async vs Sync", link: "https://www.geeksforgeeks.org/difference-between-synchronous-and-asynchronous-in-node-js/", difficulty: "Easy" },
        { name: "File Handling in Node.js", link: "https://www.geeksforgeeks.org/node-js-file-system/", difficulty: "Easy" },
        { name: "Event Loop Explained", link: "https://nodejs.dev/en/learn/the-nodejs-event-loop/", difficulty: "Medium" },
        { name: "Streams in Node.js", link: "https://www.geeksforgeeks.org/node-js-streams/", difficulty: "Medium" },
        { name: "Cluster Module", link: "https://www.geeksforgeeks.org/node-js-cluster-module/", difficulty: "Hard" },
        { name: "Worker Threads", link: "https://nodejs.org/api/worker_threads.html", difficulty: "Hard" }
      ]
    }
  ];

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-20 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
          ⚡ Backend Prep Sheet
        </h1>
        <p className="mt-3 text-gray-400">
          Practice Databases, APIs, Security, and System Design with structured challenges.
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
                ? "bg-green-600 border-green-400 text-white"
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
                          className="text-lg font-medium text-green-300 hover:text-blue-400"
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
