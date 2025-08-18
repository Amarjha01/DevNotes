// src/pages/notes/Dsa.jsx
import { useState } from "react";
import { FaDownload, FaEye, FaBookmark } from "react-icons/fa";
import { motion } from "framer-motion";

const notes = [
  {
    id: "arrays-searching",
    title: "Arrays & Searching",
    description:
      "Fundamentals of arrays with searching algorithms including linear search and binary search.",
    preview:
      "https://drive.google.com/file/d/12HN4T3MAoG7rTrcpTyrB8BH1DsaS-OZ3/preview",
    download:
      "https://drive.google.com/file/d/12HN4T3MAoG7rTrcpTyrB8BH1DsaS-OZ3/view?usp=sharing",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "sorting-algorithms",
    title: "Sorting Algorithms",
    description:
      "Covers bubble sort, selection sort, insertion sort, merge sort, quicksort, and other sorting techniques.",
    preview:
      "https://drive.google.com/file/d/1FX0Ou6r76TEVLAxSfvWYyiiL6Yg7rpFA/preview",
    download:
      "https://drive.google.com/file/d/1FX0Ou6r76TEVLAxSfvWYyiiL6Yg7rpFA/view?usp=sharing",
    color: "from-pink-500 to-red-500",
  },
  {
    id: "linked-list",
    title: "Linked List",
    description:
      "Notes on singly, doubly, and circular linked lists with insertion, deletion, and traversal operations.",
    preview:
      "https://drive.google.com/file/d/1FhqryoOtusdtfdvQ6VifBnGOMIZHXX4n/preview",
    download:
      "https://drive.google.com/file/d/1FhqryoOtusdtfdvQ6VifBnGOMIZHXX4n/view?usp=sharing",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "strings",
    title: "Strings",
    description:
      "Concepts of string manipulation, pattern matching, and related algorithms like KMP and Rabin-Karp.",
    preview:
      "https://drive.google.com/file/d/1QYC7q-By94d6UcIzC1bXhHunhGow-2HG/preview",
    download:
      "https://drive.google.com/file/d/1QYC7q-By94d6UcIzC1bXhHunhGow-2HG/view?usp=sharing",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "greedy",
    title: "Greedy",
    description:
      "Introduction to greedy algorithms with problems like activity selection, Huffman coding, and minimum spanning tree.",
    preview:
      "https://drive.google.com/file/d/1V4xrq-LgxF6Le70dqOvc6wfmWwAaxPlO/preview",
    download:
      "https://drive.google.com/file/d/1V4xrq-LgxF6Le70dqOvc6wfmWwAaxPlO/view?usp=sharing",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "trees",
    title: "Trees",
    description:
      "Notes on tree data structures, traversal techniques, and applications of general and binary trees.",
    preview:
      "https://drive.google.com/file/d/1dUBvAj7ckM82xB-YJlRHRhUIYB9U82Y9/preview",
    download:
      "https://drive.google.com/file/d/1dUBvAj7ckM82xB-YJlRHRhUIYB9U82Y9/view?usp=sharing",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "bst",
    title: "Binary Search Tree (BST)",
    description:
      "Covers concepts of binary search trees, insertion, deletion, searching, and traversals.",
    preview:
      "https://drive.google.com/file/d/1ejDdDcDK5bi1ThXfk26oqGWdJwYtGlWE/preview",
    download:
      "https://drive.google.com/file/d/1ejDdDcDK5bi1ThXfk26oqGWdJwYtGlWE/view?usp=sharing",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "arrays",
    title: "Arrays",
    description:
      "Basics of arrays, memory representation, operations, and applications in problem-solving.",
    preview:
      "https://drive.google.com/file/d/1jeWm_KE8avxTiBRtZSFmqWuaw-8fR9LT/preview",
    download:
      "https://drive.google.com/file/d/1jeWm_KE8avxTiBRtZSFmqWuaw-8fR9LT/view?usp=sharing",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "queues",
    title: "Queues",
    description:
      "Covers linear queues, circular queues, priority queues, and dequeue operations with examples.",
    preview:
      "https://drive.google.com/file/d/1or-g9B6f7p3iRXo0lmjfwc7kQ-pUpgx1/preview",
    download:
      "https://drive.google.com/file/d/1or-g9B6f7p3iRXo0lmjfwc7kQ-pUpgx1/view?usp=sharing",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "hashing",
    title: "Hashing",
    description:
      "Notes on hash functions, collision handling techniques, and applications in data storage and retrieval.",
    preview:
      "https://drive.google.com/file/d/1tz5mHkQwk9ONkBnsAjoxPsEo6Ff3K5su/preview",
    download:
      "https://drive.google.com/file/d/1tz5mHkQwk9ONkBnsAjoxPsEo6Ff3K5su/view?usp=sharing",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "stacks",
    title: "Stacks",
    description:
      "Concepts of stack data structure, push/pop operations, and applications like expression evaluation.",
    preview:
      "https://drive.google.com/file/d/1uK5S1klXfLKd0ERml_11EoyDLnqagime/preview",
    download:
      "https://drive.google.com/file/d/1uK5S1klXfLKd0ERml_11EoyDLnqagime/view?usp=sharing",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    description:
      "Detailed notes on DP concepts including memoization, tabulation, and classic problems like knapsack and LCS.",
    preview:
      "https://drive.google.com/file/d/16M0bzyKHTboGzkzaLeGEiyhn8-V8rP_2/preview",
    download:
      "https://drive.google.com/file/d/16M0bzyKHTboGzkzaLeGEiyhn8-V8rP_2/view?usp=drive_link",
    color: "from-green-500 to-emerald-500",
  },
];


// ✅ LocalStorage helper functions
const getBookmarks = () => {
  try {
    const saved = localStorage.getItem("dsaBookmarks");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const setBookmarksLS = (data) => {
  localStorage.setItem("dsaBookmarks", JSON.stringify(data));
};

export default function DsaNotes() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [search, setSearch] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(false);

  // ✅ Bookmarks state
  const [bookmarks, setBookmarks] = useState(getBookmarks());

  const toggleBookmark = (noteId) => {
    let updated;
    if (bookmarks.includes(noteId)) {
      updated = bookmarks.filter((id) => id !== noteId);
    } else {
      updated = [...bookmarks, noteId];
    }
    setBookmarks(updated);
    setBookmarksLS(updated); // save in LS
  };

  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.title.toLowerCase().includes(search.toLowerCase());
    const isBookmarked = bookmarks.includes(note.id);
    return matchesSearch && (showBookmarks ? isBookmarked : true);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          DSA Notes
        </h1>
        <p className="mt-3 text-gray-400">
          Practice and strengthen your problem-solving with structured DSA notes.
        </p>
      </div>

      {/* 🔎 Search + Toggle */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={() => setShowBookmarks(!showBookmarks)}
          className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-sm font-medium"
        >
          {showBookmarks ? "Show All Notes" : "Show Bookmarks"}
        </button>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredNotes.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden flex flex-col relative"
          >
            {/* ⭐ Bookmark Button */}
            <button
              onClick={() => toggleBookmark(note.id)}
              className="absolute top-3 right-3"
            >
              <FaBookmark
                className={`text-xl ${
                  bookmarks.includes(note.id) ? "text-yellow-300" : "text-gray-500"
                }`}
              />
            </button>

            {/* Card Header */}
            <div
              className={`h-32 bg-gradient-to-r ${note.color} flex items-center justify-center`}
            >
              <h2 className="text-2xl font-bold">{note.title}</h2>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="text-gray-400 mb-6">{note.description}</p>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => setPreviewUrl(note.preview)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-sm font-medium"
                >
                  <FaEye /> Preview
                </button>
                <a
                  href={note.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition text-sm font-medium"
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewUrl && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl p-6 relative">
            <button
              onClick={() => setPreviewUrl(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-purple-400">Preview</h2>

            <iframe
              src={previewUrl}
              className="w-full h-[500px] rounded-xl border border-gray-700"
              title="Notes Preview"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
