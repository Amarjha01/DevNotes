import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const questionsBank = {
easy: [
  {
    q: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Integration",
      "Applied Protocol Instruction",
      "Automatic Processing Interface"
    ],
    answer: 0,
    correct: "Application Programming Interface",
  },
  {
    q: "Which HTTP method is commonly used to retrieve data?",
    options: ["POST", "PUT", "GET", "DELETE"],
    answer: 2,
    correct: "GET",
  },
  {
    q: "Which database is a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
    answer: 1,
    correct: "MongoDB",
  },
  {
    q: "In Node.js, which module is used to create a server?",
    options: ["http", "fs", "express", "url"],
    answer: 0,
    correct: "http",
  },
  {
    q: "Which command initializes a new Node.js project?",
    options: ["node init", "npm start", "npm init", "node project"],
    answer: 2,
    correct: "npm init",
  },
  {
    q: "Which HTTP status code means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    answer: 2,
    correct: "404",
  },
  {
    q: "Express.js is used with Node.js for?",
    options: [
      "Database management",
      "Building user interfaces",
      "Handling HTTP requests and responses",
      "Compiling JavaScript code"
    ],
    answer: 2,
    correct: "Handling HTTP requests and responses",
  },
  {
    q: "Which symbol is used to export a module in Node.js?",
    options: ["export", "exports", "module.exports", "require"],
    answer: 2,
    correct: "module.exports",
  },
  {
    q: "Which database uses SQL language?",
    options: ["MongoDB", "Redis", "MySQL", "Cassandra"],
    answer: 2,
    correct: "MySQL",
  },
  {
    q: "Which package is used in Node.js to connect MongoDB?",
    options: ["mongoose", "mysql2", "pg", "sequelize"],
    answer: 0,
    correct: "mongoose",
  },
],

medium: [
  {
    q: "Which HTTP method is idempotent and typically used to update resources?",
    options: ["POST", "PUT", "PATCH", "DELETE"],
    answer: 1,
    correct: "PUT",
  },
  {
    q: "In Express.js, which method is used to define middleware for all incoming requests?",
    options: ["app.get()", "app.use()", "app.all()", "app.middleware()"],
    answer: 1,
    correct: "app.use()",
  },
  {
    q: "Which SQL command is used to remove all records from a table without deleting the table?",
    options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    answer: 2,
    correct: "TRUNCATE",
  },
  {
    q: "Which Node.js module is used to work with file system operations?",
    options: ["fs", "path", "os", "http"],
    answer: 0,
    correct: "fs",
  },
  {
    q: "In MongoDB, which method is used to update multiple documents?",
    options: ["updateOne()", "updateMany()", "replaceOne()", "modifyAll()"],
    answer: 1,
    correct: "updateMany()",
  },
  {
    q: "Which HTTP status code represents 'Unauthorized'?",
    options: ["400", "401", "403", "500"],
    answer: 1,
    correct: "401",
  },
  {
    q: "What does JWT stand for in backend authentication?",
    options: [
      "Java Web Token",
      "JSON Web Token",
      "JavaScript Web Transfer",
      "JSON Work Type"
    ],
    answer: 1,
    correct: "JSON Web Token",
  },
  {
    q: "Which command is used to install a package globally in Node.js?",
    options: ["npm install", "npm install -g", "npm global add", "npm add"],
    answer: 1,
    correct: "npm install -g",
  },
  {
    q: "In SQL, which clause is used to filter results after aggregation?",
    options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"],
    answer: 2,
    correct: "HAVING",
  },
  {
    q: "Which method in Express is used to send a JSON response?",
    options: ["res.send()", "res.json()", "res.end()", "res.write()"],
    answer: 1,
    correct: "res.json()",
  },
],

hard: [
  {
    q: "In RESTful APIs, which HTTP method is idempotent but not safe?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: 2,
    correct: "PUT",
  },
  {
    q: "In Node.js, what does the 'cluster' module help with?",
    options: [
      "Database Sharding",
      "Creating multiple processes to utilize multi-core systems",
      "Event Loop Optimization",
      "WebSocket Handling"
    ],
    answer: 1,
    correct: "Creating multiple processes to utilize multi-core systems",
  },
  {
    q: "Which database isolation level prevents dirty reads but allows non-repeatable reads?",
    options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
    answer: 1,
    correct: "Read Committed",
  },
  {
    q: "What is the default isolation level in PostgreSQL?",
    options: ["Read Committed", "Repeatable Read", "Serializable", "Read Uncommitted"],
    answer: 0,
    correct: "Read Committed",
  },
  {
    q: "In JWT (JSON Web Tokens), which part is used to verify the token’s integrity?",
    options: ["Header", "Payload", "Signature", "Issuer"],
    answer: 2,
    correct: "Signature",
  },
  {
    q: "Which Node.js method is asynchronous by default?",
    options: ["fs.readFile", "fs.readFileSync", "crypto.pbkdf2Sync", "child_process.execSync"],
    answer: 0,
    correct: "fs.readFile",
  },
  {
    q: "In MongoDB, which indexing strategy is best for range queries?",
    options: ["Hashed Index", "Compound Index", "Text Index", "B-Tree Index"],
    answer: 3,
    correct: "B-Tree Index",
  },
  {
    q: "Which of the following ensures ACID compliance in relational databases?",
    options: ["Indexes", "Constraints", "Transactions", "Views"],
    answer: 2,
    correct: "Transactions",
  },
  {
    q: "Which HTTP header is used for conditional requests in REST?",
    options: ["Content-Type", "Authorization", "ETag", "Accept"],
    answer: 2,
    correct: "ETag",
  },
  {
    q: "In distributed systems, what problem does the CAP theorem describe?",
    options: [
      "Consistency, Availability, Partition tolerance trade-off",
      "Concurrency, Atomicity, Performance trade-off",
      "Cache, API, Persistence trade-off",
      "Communication, Authentication, Processing trade-off"
    ],
    answer: 0,
    correct: "Consistency, Availability, Partition tolerance trade-off",
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
              className="px-8 py-4 rounded-2xl bg-blue-600 font-semibold"
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


