import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import QA_DATA from "./qaData";

function findAnswer(query) {
    const q = query.toLowerCase();

    for (let item of QA_DATA) {
        if (item.keywords.some((kw) => q.includes(kw.toLowerCase()))) {
            return item;
        }
    }

    return null;
}

export default function ChatbotModel({ onClose }) {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! 👋 Ask me anything about DevNotes topics like Git, React, Deployment, DSA, etc." }
    ]);
    const [input, setInput] = useState("");
    const listRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = (text, sender) => {
        setMessages((prev) => [...prev, { sender, text }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userQuery = input.trim();
        sendMessage(userQuery, "user");
        setInput("");

        const answer = findAnswer(userQuery);
        if (answer) {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: answer.answer, link: answer.link }
            ]);
        } else {
            sendMessage("Sorry, I couldn’t find an exact match. Please try another question.", "bot");
        }
    };

    return (
        <motion.div
            className="fixed right-8 bottom-44 w-80 h-96 bg-[#0b1220] text-gray-200 rounded-xl shadow-2xl border border-gray-700 flex flex-col z-[9999]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2"
                style={{ background: "linear-gradient(90deg,#10b981,#06b6d4)" }}>
                <div className="text-black font-bold">DevNotes Assistant</div>
                <button onClick={onClose} className="text-white text-lg cursor-pointer">✖</button>
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 px-3 py-2 overflow-auto space-y-3 text-sm">
                {messages.map((m, idx) => (
                    <div key={idx} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] px-3 py-2 rounded-lg ${m.sender === "user" ? "bg-slate-700 text-white" : "bg-[#0f1724] text-gray-200"}`}>
                            {m.text}
                            {m.link && (
                                <div className="mt-2">
                                    <button
                                        onClick={() => navigate(m.link)}
                                        className="text-xs bg-gradient-to-r from-blue-500 to-cyan-400 px-2 py-1 rounded text-white cursor-pointer"
                                    >
                                        Go to Page
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-800">
                <div className="flex gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about DevNotes..."
                        className="flex-1 px-3 py-2 rounded-md bg-[#061025] border border-gray-700 text-sm text-gray-200"
                    />
                    <button type="submit" className="px-4 py-2 bg-emerald-500 text-white rounded-lg cursor-pointer hover:bg-emerald-600 transition">
                        Ask
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
