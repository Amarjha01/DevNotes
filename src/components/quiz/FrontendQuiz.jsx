import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import e from "express";

const questionsBank = {
 easy: [
  {
    q: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Level", "Home Tool Markup Language"],
    answer: 0,
    correct: "Hyper Text Markup Language",
  },
  {
    q: "Which tag is used for the largest heading in HTML?",
    options: ["<h1>", "<h6>", "<heading>", "<head>"],
    answer: 0,
    correct: "<h1>",
  },
  {
    q: "Which property changes text color in CSS?",
    options: ["font-style", "background-color", "color", "text-align"],
    answer: 2,
    correct: "color",
  },
  {
    q: "Which CSS property makes text bold?",
    options: ["font-weight", "font-bold", "text-style", "weight"],
    answer: 0,
    correct: "font-weight",
  },
  {
    q: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "<!-- -->"],
    answer: 0,
    correct: "//",
  },
  {
    q: "Which attribute is used in HTML to provide alt text for images?",
    options: ["title", "src", "alt", "href"],
    answer: 2,
    correct: "alt",
  },
  {
    q: "CSS stands for?",
    options: ["Cascading Style Sheets", "Computer Styled Sections", "Creative Style System", "Colorful Style Syntax"],
    answer: 0,
    correct: "Cascading Style Sheets",
  },
  {
    q: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<href>", "<a>", "<url>"],
    answer: 2,
    correct: "<a>",
  },
  {
    q: "Which keyword declares a constant in JavaScript?",
    options: ["let", "var", "const", "static"],
    answer: 2,
    correct: "const",
  },
  {
    q: "Which HTML tag is used to insert a line break?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    answer: 0,
    correct: "<br>",
  },
],
 medium : [
  {
    q: "Which HTML element is used to display tabular data?",
    options: ["<table>", "<grid>", "<tab>", "<data>"],
    answer: 0,
    correct: "<table>",
  },
  {
    q: "Which CSS property is used to control the stacking order of elements?",
    options: ["position", "order", "z-index", "stack"],
    answer: 2,
    correct: "z-index",
  },
  {
    q: "What will `typeof null` return in JavaScript?",
    options: ["null", "undefined", "object", "boolean"],
    answer: 2,
    correct: "object",
  },
  {
    q: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "Boolean", "Float", "Object"],
    answer: 2,
    correct: "Float",
  },
  {
    q: "In CSS, which unit is relative to the root element font-size?",
    options: ["em", "px", "rem", "%"],
    answer: 2,
    correct: "rem",
  },
  {
    q: "Which HTML attribute is used to uniquely identify an element?",
    options: ["class", "id", "key", "unique"],
    answer: 1,
    correct: "id",
  },
  {
    q: "Which method is used to parse a JSON string into an object?",
    options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "JSON.toObject()"],
    answer: 0,
    correct: "JSON.parse()",
  },
  {
    q: "Which CSS property is used to create space inside an element?",
    options: ["margin", "border", "padding", "spacing"],
    answer: 2,
    correct: "padding",
  },
  {
    q: "Which event occurs when an input field loses focus?",
    options: ["onfocus", "onblur", "onchange", "oninput"],
    answer: 1,
    correct: "onblur",
  },
  {
    q: "What is the default position value of an HTML element in CSS?",
    options: ["relative", "absolute", "static", "inherit"],
    answer: 2,
    correct: "static",
  },
],
hard: [
  {
    q: "Which HTML5 feature allows offline storage of web application data?",
    options: ["Local Storage", "Cookies", "Web SQL", "Session Storage"],
    answer: 0,
    correct: "Local Storage",
  },
  {
    q: "What is the output of `console.log(0.1 + 0.2 === 0.3);` in JavaScript?",
    options: ["true", "false", "undefined", "Error"],
    answer: 1,
    correct: "false",
  },
  {
    q: "Which CSS property is NOT inherited by default?",
    options: ["color", "font-size", "border", "font-family"],
    answer: 2,
    correct: "border",
  },
  {
    q: "Which method is used to prevent event bubbling in JavaScript?",
    options: ["stopEvent()", "preventDefault()", "stopPropagation()", "cancelBubble()"],
    answer: 2,
    correct: "stopPropagation()",
  },
  {
    q: "Which object is the parent of all JavaScript objects?",
    options: ["Object", "Window", "Global", "Prototype"],
    answer: 0,
    correct: "Object",
  },
  {
    q: "Which HTTP status code means 'Unauthorized'?",
    options: ["401", "403", "404", "500"],
    answer: 0,
    correct: "401",
  },
  {
    q: "Which CSS property is used to create a grid container?",
    options: ["display: flex", "display: grid", "grid-template", "grid-container"],
    answer: 1,
    correct: "display: grid",
  },
  {
    q: "What will `['1','2','3'].map(parseInt)` return?",
    options: ["[1, 2, 3]", "[NaN, NaN, NaN]", "[1, NaN, NaN]", "[1, 2, NaN]"],
    answer: 2,
    correct: "[1, NaN, NaN]",
  },
  {
    q: "In JavaScript, closures are created when?",
    options: [
      "A function is defined inside another function and accesses its variables",
      "A variable is declared globally",
      "An object is created",
      "A function returns a string"
    ],
    answer: 0,
    correct: "A function is defined inside another function and accesses its variables",
  },
  {
    q: "Which HTML API is used to drag and drop elements?",
    options: ["Drag API", "Droppable API", "Drag and Drop API", "File API"],
    answer: 2,
    correct: "Drag and Drop API",
  },
],


};

export default function QuizApp() {
  const [difficulty, setDifficulty] = useState(null);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const questions = difficulty ? questionsBank[difficulty] : [];

  useEffect(() => {
    let timer;
    if (started && !completed) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [started, completed]);

const handleAnswer = () => {
  const currentQ = questions[index];
  const chosen = selected !== null ? currentQ.options[selected] : null;
  const isCorrect = chosen === currentQ.correct; 
  setAttempts((prev) => {
    const newAttempts = [...prev];
    newAttempts[index] = {
      chosen: chosen,              
      correct: currentQ.correct, 
      status: chosen ? "attempted" : "skipped",
    };
    return newAttempts;
  });

  if (isCorrect) setScore((s) => s + 5); 
  setSelected(null);

  if (index + 1 < questions.length) {
    setIndex(index + 1);
  } else {
    setCompleted(true);
  }
};



  // Step 1: Choose Difficulty
  if (!difficulty) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-6">Choose Difficulty</h1>
        <div className="flex gap-4">
          {["easy", "medium", "hard"].map((level) => (
            <motion.button
              key={level}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDifficulty(level)}
              className="px-8 py-4 rounded-2xl bg-purple-600 font-semibold"
            >
              {level.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Step 2: Confirm Start
  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <motion.h1 className="text-3xl font-bold mb-4">
          You selected {difficulty.toUpperCase()} quiz
        </motion.h1>
        <p className="mb-6 text-gray-400">Do you want to start the test?</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStarted(true)}
          className="px-6 py-3 rounded-xl bg-blue-500 font-bold"
        >
          Start Quiz
        </motion.button>
      </div>
    );
  }

  // Step 3: Completed
  if (completed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl font-bold mb-6">🎉 Quiz Completed</h1>
        <p className="text-xl mb-2">
          Score: <span className="text-green-400">{score}</span> / 50
        </p>
        <p className="text-xl mb-6">Time Taken: {time}s</p>

        {/* Show answers summary */}
<div className="max-w-3xl w-full text-left bg-gray-800 rounded-xl p-6 space-y-4 overflow-y-auto max-h-[60vh]">
  {questions.map((q, i) => {
    const attempt = attempts[i];
    return (
      <div key={i} className="p-4 rounded-lg bg-gray-700">
        <p className="font-bold mb-2">
          Q{i + 1}: {q.q}
        </p>
        <p>
          <span className="text-yellow-400">Your Answer: </span>
          {attempt?.chosen || "Not Attempted"}
        </p>
        <p>
          <span className="text-green-400">Correct Answer: </span>
          {attempt?.correct}
        </p>
      </div>
    );
  })}
</div>


        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 rounded-xl bg-pink-500 font-semibold"
        >
          Retry
        </button>
      </div>
    );
  }

  // Step 4: Quiz Running
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
      {/* Attempt Tracker (clickable) */}
      <div className="flex gap-2 mb-6 overflow-x-auto max-w-full px-2 mt-20 z-10">
        {questions.map((_, i) => {
          const attempt = attempts[i];
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setIndex(i);
                setSelected(null);
              }}
              className={`w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full cursor-pointer transition
                ${i === index ? "bg-yellow-400 text-black" : ""}
                ${attempt?.status === "attempted" ? "bg-green-500 text-white" : ""}
                ${attempt?.status === "skipped" ? "bg-gray-500 text-white" : ""}
                ${!attempt && i !== index ? "bg-gray-700 text-white" : ""}`}
            >
              {i + 1}
            </motion.div>
          );
        })}
      </div>

      {/* Question Card */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl w-full bg-gray-800 border rounded-2xl p-8"
      >
        <div className="flex justify-between mb-4 text-sm text-gray-400">
          <span>
            Question {index + 1} / {questions.length}
          </span>
          <span>Time: {time}s</span>
        </div>

        <h2 className="text-xl font-bold mb-6">{questions[index].q}</h2>
        <div className="grid gap-3 mb-6">
          {questions[index].options.map((opt, i) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              key={i}
              onClick={() => setSelected(i)}
              className={`px-4 py-3 rounded-lg border transition
                ${
                  selected === i
                    ? "bg-green-600 border-green-400"
                    : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                }`}
            >
              {opt}
            </motion.button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          {/* Previous */}
          <button
            disabled={index === 0}
            onClick={() => setIndex((prev) => prev - 1)}
            className="px-4 py-2 rounded-xl bg-gray-600 disabled:opacity-50"
          >
            Previous
          </button>

          {/* Next / Finish */}
          <button
            onClick={handleAnswer}
            className="px-4 py-2 rounded-xl bg-blue-500 font-semibold"
          >
            {index + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}




