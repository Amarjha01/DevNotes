// src/pages/notes/Backend.jsx
import { useState } from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const notes = [
  {
    title: "Node.js Notes",
    description:
      "Learn Node.js fundamentals including event loop, modules, npm, and asynchronous programming.",
    preview: "/downloads/nodejs-notes.pdf",
    download: "/downloads/nodejs-notes.pdf",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Express.js Notes",
    description:
      "Middleware, routing, REST API development, error handling, and authentication with Express.",
    preview: "/downloads/express-notes.pdf",
    download: "/downloads/express-notes.pdf",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "MongoDB Notes",
    description:
      "NoSQL database concepts, CRUD operations, aggregation pipeline, schema design, and indexing.",
    preview: "/downloads/mongodb-notes.pdf",
    download: "/downloads/mongodb-notes.pdf",
    color: "from-yellow-500 to-green-500",
  },
  {
    title: "JWT Auth Notes",
    description:
      "Authentication & authorization, JWT tokens, secure API design, and refresh token strategies.",
    preview: "/downloads/jwt-notes.pdf",
    download: "/downloads/jwt-notes.pdf",
    color: "from-red-500 to-orange-500",
  },
];

export default function BackendNotes() {
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Backend Development Notes
        </h1>
        <p className="mt-3 text-gray-400">
          Master backend technologies and server-side development with these structured notes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-green-500/20 transition-all duration-300 overflow-hidden flex flex-col"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition text-sm font-medium"
                >
                  <FaEye /> Preview
                </button>
                <a
                  href={note.download}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
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

            <h2 className="text-xl font-bold mb-4 text-green-400">Preview</h2>

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
