import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const questionsBank = {
easy: [
  {
    q: "What does ML stand for?",
    options: ["Machine Learning", "Modern Logic", "Multi Layer", "Math Language"],
    answer: 0,
    correct: "Machine Learning",
  },
  {
    q: "Which of the following is an example of supervised learning?",
    options: ["Clustering", "Classification", "Dimensionality Reduction", "Reinforcement"],
    answer: 1,
    correct: "Classification",
  },
  {
    q: "Which algorithm is commonly used for classification tasks?",
    options: ["Linear Regression", "K-Means", "Decision Tree", "Apriori"],
    answer: 2,
    correct: "Decision Tree",
  },
  {
    q: "What does 'AI' stand for?",
    options: ["Automated Integration", "Artificial Intelligence", "Advanced Information", "Applied Innovation"],
    answer: 1,
    correct: "Artificial Intelligence",
  },
  {
    q: "Which type of learning uses rewards and penalties?",
    options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Learning"],
    answer: 2,
    correct: "Reinforcement Learning",
  },
  {
    q: "Which library is widely used in Python for machine learning?",
    options: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    answer: 2,
    correct: "Scikit-learn",
  },
  {
    q: "Which algorithm is used for grouping similar data points?",
    options: ["Logistic Regression", "K-Means Clustering", "Naive Bayes", "Linear Regression"],
    answer: 1,
    correct: "K-Means Clustering",
  },
  {
    q: "Which of the following is a deep learning framework?",
    options: ["TensorFlow", "NumPy", "Matplotlib", "Pandas"],
    answer: 0,
    correct: "TensorFlow",
  },
  {
    q: "Which evaluation metric is commonly used for classification models?",
    options: ["Mean Squared Error", "Accuracy", "R-squared", "Variance"],
    answer: 1,
    correct: "Accuracy",
  },
  {
    q: "Which algorithm is best for predicting continuous values?",
    options: ["Logistic Regression", "K-Means", "Linear Regression", "Decision Tree Classification"],
    answer: 2,
    correct: "Linear Regression",
  },
],

medium: [
  {
    q: "Which algorithm is commonly used for dimensionality reduction?",
    options: ["PCA", "KNN", "SVM", "Random Forest"],
    answer: 0,
    correct: "PCA",
  },
  {
    q: "Which activation function is most commonly used in hidden layers of neural networks?",
    options: ["ReLU", "Sigmoid", "Softmax", "Linear"],
    answer: 0,
    correct: "ReLU",
  },
  {
    q: "What does the confusion matrix evaluate in classification?",
    options: ["Model training time", "Prediction errors", "True vs Predicted labels", "Learning rate"],
    answer: 2,
    correct: "True vs Predicted labels",
  },
  {
    q: "Which of the following is NOT an ensemble method?",
    options: ["Bagging", "Boosting", "Stacking", "Gradient Descent"],
    answer: 3,
    correct: "Gradient Descent",
  },
  {
    q: "In Natural Language Processing, TF-IDF is used for?",
    options: ["Word embeddings", "Stopword removal", "Text vectorization", "Sentence segmentation"],
    answer: 2,
    correct: "Text vectorization",
  },
  {
    q: "Which technique helps prevent overfitting in machine learning models?",
    options: ["Regularization", "Batch Normalization", "Dropout", "All of the above"],
    answer: 3,
    correct: "All of the above",
  },
  {
    q: "Which distance metric is most commonly used in K-Nearest Neighbors?",
    options: ["Manhattan Distance", "Cosine Similarity", "Euclidean Distance", "Hamming Distance"],
    answer: 2,
    correct: "Euclidean Distance",
  },
  {
    q: "Which of the following is a generative model?",
    options: ["Decision Tree", "Naive Bayes", "GAN", "SVM"],
    answer: 2,
    correct: "GAN",
  },
  {
    q: "In reinforcement learning, the agent’s goal is to maximize?",
    options: ["Learning rate", "Reward", "Accuracy", "Exploration"],
    answer: 1,
    correct: "Reward",
  },
  {
    q: "Which evaluation metric is best for imbalanced classification problems?",
    options: ["Accuracy", "Precision", "Recall", "F1-score"],
    answer: 3,
    correct: "F1-score",
  },
],

hard: [
  {
    q: "Which algorithm is used for reducing the vanishing gradient problem in deep neural networks?",
    options: ["Sigmoid Activation", "ReLU", "Softmax", "Tanh"],
    answer: 1,
    correct: "ReLU",
  },
  {
    q: "In Gradient Descent, what happens if the learning rate is too high?",
    options: [
      "The model converges quickly to the optimal solution",
      "The model may overshoot and fail to converge",
      "The model trains slower but more accurately",
      "The model always reaches a global minimum"
    ],
    answer: 1,
    correct: "The model may overshoot and fail to converge",
  },
  {
    q: "Which of the following is NOT a type of neural network architecture?",
    options: ["CNN", "RNN", "DNN", "SQLN"],
    answer: 3,
    correct: "SQLN",
  },
  {
    q: "What does the backpropagation algorithm primarily do?",
    options: [
      "Optimizes hyperparameters",
      "Updates weights using gradients",
      "Splits dataset into training and testing",
      "Increases model accuracy automatically"
    ],
    answer: 1,
    correct: "Updates weights using gradients",
  },
  {
    q: "Which loss function is commonly used for binary classification?",
    options: ["Mean Squared Error", "Cross-Entropy Loss", "Hinge Loss", "KL Divergence"],
    answer: 1,
    correct: "Cross-Entropy Loss",
  },
  {
    q: "Which optimization algorithm uses momentum to speed up training?",
    options: ["Adam", "RMSprop", "SGD with Momentum", "Adagrad"],
    answer: 2,
    correct: "SGD with Momentum",
  },
  {
    q: "In reinforcement learning, what is the 'exploration vs exploitation' trade-off?",
    options: [
      "Balancing training vs testing data",
      "Choosing between trying new actions or using known rewards",
      "Optimizing batch size vs learning rate",
      "Balancing supervised vs unsupervised learning"
    ],
    answer: 1,
    correct: "Choosing between trying new actions or using known rewards",
  },
  {
    q: "Which problem does the vanishing gradient mainly affect?",
    options: ["Shallow models", "Recurrent Neural Networks", "Decision Trees", "Support Vector Machines"],
    answer: 1,
    correct: "Recurrent Neural Networks",
  },
  {
    q: "What is the main advantage of using Dropout in deep learning?",
    options: [
      "Increases training accuracy",
      "Prevents overfitting by randomly ignoring neurons",
      "Speeds up gradient descent",
      "Improves interpretability of the model"
    ],
    answer: 1,
    correct: "Prevents overfitting by randomly ignoring neurons",
  },
  {
    q: "Which of the following is a challenge in training GANs (Generative Adversarial Networks)?",
    options: ["Mode collapse", "High bias", "Over-regularization", "Low variance"],
    answer: 0,
    correct: "Mode collapse",
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
              className="px-8 py-4 rounded-2xl bg-orange-600 font-semibold"
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


