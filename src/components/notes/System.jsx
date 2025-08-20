import { useState } from "react";
import { FaDownload, FaEye, FaBookmark } from "react-icons/fa";
import { motion } from "framer-motion";

const notes = [
  {
    id: "system",
    title: "System Design",
    description:
      "Overview of operating systems, types, and their core responsibilities.",
    preview:
      "https://drive.google.com/file/d/1D_Q_2Shtsy36gGzBf7C9ieE4CtLp7-n6/preview",
    download:
      "https://drive.google.com/file/d/1D_Q_2Shtsy36gGzBf7C9ieE4CtLp7-n6/view?usp=sharing",
    color: "from-blue-500 to-indigo-500",
  },
];

// ✅ LocalStorage helper functions
const getBookmarks = () => {
  try {
    const saved = localStorage.getItem("systemBookmarks");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const setBookmarksLS = (data) => {
  localStorage.setItem("systemBookmarks", JSON.stringify(data));
};

export default function SystemNotes() {
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
    const matchesSearch = note.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const isBookmarked = bookmarks.includes(note.id);
    return matchesSearch && (showBookmarks ? isBookmarked : true);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Operating System Notes
        </h1>
        <p className="mt-3 text-gray-400">
          Understand the core concepts of operating systems with these structured notes.
        </p>
      </div>

      {/* 🔎 Search + Toggle */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setShowBookmarks(!showBookmarks)}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
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
            className="bg-gray-900/60 border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden flex flex-col relative"
          >
            {/* ⭐ Bookmark Button */}
            <button
              onClick={() => toggleBookmark(note.id)}
              className="absolute top-3 right-3"
            >
              <FaBookmark
                className={`text-xl ${
                  bookmarks.includes(note.id)
                    ? "text-yellow-300"
                    : "text-gray-500"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
                >
                  <FaEye /> Preview
                </button>
                <a
                  href={note.download}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition text-sm font-medium"
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

            <h2 className="text-xl font-bold mb-4 text-blue-400">Preview</h2>

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
