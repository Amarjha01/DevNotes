// src/pages/notes/Dsa.jsx
import { useState } from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const notes = [
  {
    title: "DSA Basics",
    description:
      "Introduction to data structures, arrays, linked lists, stacks, and queues.",
    preview: "/downloads/dsa-basics.pdf",
    download: "/downloads/dsa-basics.pdf",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Sorting Algorithms",
    description:
      "Learn Bubble Sort, Merge Sort, Quick Sort, and their time complexities.",
    preview: "/downloads/sorting.pdf",
    download: "/downloads/sorting.pdf",
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Searching Algorithms",
    description:
      "Master Linear Search, Binary Search, and advanced searching techniques.",
    preview: "/downloads/searching.pdf",
    download: "/downloads/searching.pdf",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Dynamic Programming",
    description:
      "Understand DP concepts with examples like Fibonacci, Knapsack, and LIS.",
    preview: "https://drive.google.com/file/d/16M0bzyKHTboGzkzaLeGEiyhn8-V8rP_2/preview",
    download: "https://drive.google.com/file/d/16M0bzyKHTboGzkzaLeGEiyhn8-V8rP_2/view?usp=drive_link",
    color: "from-green-500 to-emerald-500",
  },
];

export default function DsaNotes() {
  const [previewUrl, setPreviewUrl] = useState(null);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden flex flex-col"
          >
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
            {/* Close Button */}
            <button
              onClick={() => setPreviewUrl(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-purple-400">Preview</h2>

            {/* Iframe for preview */}
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
