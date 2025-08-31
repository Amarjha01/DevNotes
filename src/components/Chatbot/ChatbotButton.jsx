import { motion } from "framer-motion";
import { BsRobot } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ChatbotButton = () => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey(prev => prev + 1);
    }, [location.key]);

    const isHomePage = location.pathname === "/";

    return (
        <motion.div
            className="fixed bottom-24 right-8 z-[9999] pointer-events-auto"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
        >
            <button
                className="
          bg-gradient-to-r from-emerald-400 to-teal-500
          text-white rounded-full w-14 h-14
          flex items-center justify-center text-2xl
          shadow-lg hover:scale-105 transition-transform
          cursor-pointer
        "
                onClick={() => alert("Chatbot button clicked! 🚀")}
            >
                <BsRobot />
            </button>
        </motion.div>
    );
};

export default ChatbotButton;
