import { useState } from "react";
import { notes } from "../data/notes"; // Adjust path if data file is elsewhere

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredNotes, setFilteredNotes] = useState([]);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        if (term) {
            const filtered = notes.filter(
                (note) =>
                    note.title.toLowerCase().includes(term) ||
                    note.tags.some((tag) => tag.toLowerCase().includes(term))
            );
            setFilteredNotes(filtered);
        } else {
            setFilteredNotes([]);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto relative">
            {/* Search Input */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search notes (e.g., Flexbox, React Hooks)..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-2 pl-10 bg-gray-800 text-white rounded-full border border-gray-600 focus:outline-none focus:border-purple-500 placeholder-gray-400 text-sm"
                    aria-label="Search notes"
                />
                <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            {/* Search Results */}
            {searchTerm && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    {filteredNotes.length > 0 ? (
                        <ul className="divide-y divide-gray-600">
                            {filteredNotes.map((note) => (
                                <li key={note.id} className="p-3 hover:bg-gray-700">
                                    <h3 className="text-md font-semibold text-white">{note.title}</h3>
                                    <p className="text-gray-400 text-xs">{note.category}</p>
                                    <p className="text-gray-300 text-xs">{note.content.substring(0, 80)}...</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="p-3 text-gray-400 text-sm">No results found for "{searchTerm}"</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;