import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function ChatbotModal({ onClose }) {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! 👋 I am DevNotes Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userQuery = input.trim();
        setMessages((prev) => [...prev, { sender: "user", text: userQuery }]);
        setInput("");
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
