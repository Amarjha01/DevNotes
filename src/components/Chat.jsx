import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FiSun, FiMoon, FiSend } from 'react-icons/fi';
import { ImSpinner2 } from 'react-icons/im';
import { GoArrowUp } from "react-icons/go";

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 0, role: 'bot', content: "Hi! I'm your AI assistant. Ask me anything." }
  ]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const chatEndRef = useRef(null);

  

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage = { id: Date.now(), role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/generate', { prompt: trimmed });
      const aiMessage = { id: Date.now() + 1, role: 'ai', content: response.data.text };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error communicating with AI:', error);
      const errorMessage = { id: Date.now() + 2, role: 'error', content: 'Failed to get reply from AI.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`max-w-4xl mx-auto my-8 flex flex-col h-[65vh] border rounded-xl  shadow-lg
      ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'}`}>
      <header className={`px-6 py-4 border-b rounded-t-xl flex items-center justify-between 
        ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-purple-50'}`}>
        <h2 className={`text-xl font-semibold 
          ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
          Gemini AI Assistant
        </h2>
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl text-purple-600 hover:text-purple-700 focus:outline-none"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </header>

      <main className={`flex-1 overflow-y-auto p-6 space-y-5 mb-0
        ${darkMode ? 'bg-gray-800' : 'bg-purple-50'}`}>
        {messages.length === 0 && (
          <p className={`text-center mt-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Ask me anything to get started...
          </p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-3/4 rounded-3xl p-4 whitespace-pre-wrap text-base leading-relaxed 
                ${msg.role === 'user'
                  ? 'shadow-purple-500/50 text-white ' + (darkMode ? 'bg-purple-700' : 'bg-purple-600')
                  : msg.role === 'ai'
                  ? `${darkMode ? 'bg-gray-700 text-gray-100 shadow-md' : 'bg-white text-gray-900'}`
                  : 'bg-red-100 text-red-700 shadow-inner font-semibold'}`}
              style={{ wordBreak: 'break-word' }}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </main>

     <footer
  className={`px-3 border-t rounded-b-xl flex items-center justify-between
    ${messages.length === 0 ? 'py-4' : 'py-2'} 
    ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}
>
  <div className="relative w-full">
    <textarea
      rows={2}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Type your message here..."
      className={`w-full pr-12 resize-none rounded-lg border p-3 text-base placeholder-gray-400
        focus:outline-none focus:ring-2 transition
        ${darkMode
          ? 'border-gray-600 bg-gray-900 text-gray-100 focus:ring-purple-500'
          : 'border-gray-300 bg-white text-gray-900 focus:ring-purple-600'}`}
      disabled={loading}
    />
    <button
      onClick={sendMessage}
      disabled={!input.trim() || loading}
      aria-label="Send message"
      className={`absolute bottom-6 right-3 p-2 rounded-full transition text-white flex items-center justify-center 
        ${input.trim() && !loading ? 'bg-purple-600 hover:bg-purple-700 cursor-pointer' : 'bg-purple-300 cursor-not-allowed'}`}
    >
      {loading ? (
        <ImSpinner2 className="animate-spin text-lg" />
      ) : (
        <GoArrowUp className="text-lg" />
      )}
    </button>
  </div>
</footer>


    </div>
  );
}

export default Chat;
