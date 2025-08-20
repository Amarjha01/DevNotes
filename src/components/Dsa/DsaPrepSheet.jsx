import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DsaPrepSheet() {
  const [filter, setFilter] = useState("All");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [solved, setSolved] = useState({});

  const topics = [
    {
      title: "Arrays",
      color: "from-purple-500 to-pink-500",
      description: "Core problems on arrays covering basics to advanced techniques.",
      questions: [
        { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
        { name: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
        { name: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
        { name: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Medium" },
        { name: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
        { name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" }
      ]
    },
    {
      title: "Linked List",
      color: "from-green-500 to-emerald-500",
      description: "Practice linked list problems for interview prep.",
      questions: [
        { name: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
        { name: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
        { name: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
        { name: "Remove Nth Node From End", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
        { name: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium" },
        { name: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Hard" }
      ]
    },
    {
      title: "Dynamic Programming",
      color: "from-blue-500 to-cyan-500",
      description: "Classic DP problems to master optimal substructure and overlapping subproblems.",
      questions: [
        { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
        { name: "House Robber", link: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
        { name: "Coin Change", link: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
        { name: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
        { name: "Word Break", link: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
        { name: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Hard" }
      ]
    },
    {
      title: "Greedy Algorithms",
      color: "from-yellow-500 to-orange-500",
      description: "Problems that can be solved with greedy strategies.",
      questions: [
        { name: "Assign Cookies", link: "https://leetcode.com/problems/assign-cookies/", difficulty: "Easy" },
        { name: "Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/", difficulty: "Medium" },
        { name: "Jump Game", link: "https://leetcode.com/problems/jump-game/", difficulty: "Medium" },
        { name: "Gas Station", link: "https://leetcode.com/problems/gas-station/", difficulty: "Medium" },
        { name: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", difficulty: "Medium" },
        { name: "Candy", link: "https://leetcode.com/problems/candy/", difficulty: "Hard" }
      ]
    },
    {
      title: "Graphs",
      color: "from-red-500 to-pink-600",
      description: "Traversal, shortest path, and graph-based problem-solving.",
      questions: [
        { name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
        { name: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
        { name: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
        { name: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" },
        { name: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" },
        { name: "Minimum Spanning Tree (Kruskal/Prim)", link: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/", difficulty: "Hard" }
      ]
    },
    {
      title: "Trees",
      color: "from-teal-500 to-lime-500",
      description: "Binary Trees and Binary Search Trees core problems.",
      questions: [
        { name: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
        { name: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Easy" },
        { name: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Easy" },
        { name: "Lowest Common Ancestor", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" },
        { name: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
        { name: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" }
      ]
    }
  ];

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-20 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          🚀 DSA Prep Sheet
        </h1>
        <p className="mt-3 text-gray-400">
          Filter by difficulty, expand topics, and track your progress.
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
                ? "bg-purple-600 border-purple-400 text-white"
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
                          className="text-lg font-medium text-purple-300 hover:text-pink-400"
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