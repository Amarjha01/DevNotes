// src/pages/notes/Ml.jsx
import { useState } from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const notes = [
  {
    title: "Intro to Machine Learning",
    description:
      "Understand the basics of ML, its types, and real-world applications.",
    preview: "/downloads/ml-intro.pdf",
    download: "/downloads/ml-intro.pdf",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Supervised Learning",
    description:
      "Detailed notes on regression, classification, decision trees, and SVM.",
    preview: "/downloads/supervised.pdf",
    download: "/downloads/supervised.pdf",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Unsupervised Learning",
    description:
      "Learn clustering techniques, K-means, PCA, and dimensionality reduction.",
    preview: "/downloads/unsupervised.pdf",
    download: "/downloads/unsupervised.pdf",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Neural Networks",
    description:
      "Explore perceptrons, activation functions, backpropagation, and deep learning basics.",
    preview: "/downloads/neural-networks.pdf",
    download: "/downloads/neural-networks.pdf",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function MlNotes() {
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Machine Learning Notes
        </h1>
        <p className="mt-3 text-gray-400">
          Explore AI and ML concepts with structured and easy-to-follow notes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300 overflow-hidden flex flex-col"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition text-sm font-medium"
                >
                  <FaEye /> Preview
                </button>
                <a
                  href={note.download}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-sm font-medium"
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

            <h2 className="text-xl font-bold mb-4 text-pink-400">Preview</h2>

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
