import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MLAIPrepSheet() {
  const [filter, setFilter] = useState("All");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [solved, setSolved] = useState({});

  const topics = [
    {
      title: "Python for ML",
      color: "from-yellow-500 to-orange-500",
      description: "Brush up Python fundamentals for ML (NumPy, Pandas, Matplotlib).",
      questions: [
        { name: "NumPy 100 Exercises", link: "https://github.com/rougier/numpy-100", difficulty: "Easy" },
        { name: "Pandas Practice", link: "https://www.w3resource.com/python-exercises/pandas/index.php", difficulty: "Easy" },
        { name: "Matplotlib Visualization", link: "https://www.kaggle.com/learn/data-visualization", difficulty: "Medium" },
        { name: "EDA on Titanic Dataset", link: "https://www.kaggle.com/c/titanic", difficulty: "Medium" },
        { name: "Data Cleaning Challenge", link: "https://www.kaggle.com/competitions/data-cleaning-challenge", difficulty: "Medium" },
        { name: "Kaggle Notebook Reproduction", link: "https://www.kaggle.com/", difficulty: "Hard" }
      ]
    },
    {
      title: "Supervised Learning",
      color: "from-green-500 to-emerald-600",
      description: "Regression & classification practice.",
      questions: [
        { name: "Linear Regression Basics", link: "https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html", difficulty: "Easy" },
        { name: "Logistic Regression", link: "https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression", difficulty: "Easy" },
        { name: "Decision Trees", link: "https://scikit-learn.org/stable/modules/tree.html", difficulty: "Medium" },
        { name: "Random Forests", link: "https://scikit-learn.org/stable/modules/ensemble.html#forest", difficulty: "Medium" },
        { name: "SVM Classification", link: "https://scikit-learn.org/stable/modules/svm.html", difficulty: "Medium" },
        { name: "Ensemble Learning Project", link: "https://www.kaggle.com/competitions", difficulty: "Hard" }
      ]
    },
    {
      title: "Unsupervised Learning",
      color: "from-blue-500 to-indigo-500",
      description: "Clustering & dimensionality reduction tasks.",
      questions: [
        { name: "K-Means Clustering", link: "https://scikit-learn.org/stable/modules/clustering.html#k-means", difficulty: "Easy" },
        { name: "Hierarchical Clustering", link: "https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering", difficulty: "Medium" },
        { name: "PCA Dimensionality Reduction", link: "https://scikit-learn.org/stable/modules/decomposition.html#pca", difficulty: "Medium" },
        { name: "t-SNE Visualization", link: "https://scikit-learn.org/stable/modules/manifold.html#t-sne", difficulty: "Medium" },
        { name: "Anomaly Detection", link: "https://scikit-learn.org/stable/modules/outlier_detection.html", difficulty: "Medium" },
        { name: "Clustering Project", link: "https://www.kaggle.com/datasets", difficulty: "Hard" }
      ]
    },
    {
      title: "Deep Learning",
      color: "from-purple-500 to-pink-500",
      description: "Neural networks, CNNs, RNNs using TensorFlow/PyTorch.",
      questions: [
        { name: "MNIST with TensorFlow", link: "https://www.tensorflow.org/tutorials/quickstart/beginner", difficulty: "Easy" },
        { name: "Fashion MNIST with PyTorch", link: "https://pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html", difficulty: "Easy" },
        { name: "Image Classification (CIFAR-10)", link: "https://www.kaggle.com/c/cifar-10", difficulty: "Medium" },
        { name: "RNN for Text Generation", link: "https://www.tensorflow.org/text/tutorials/text_generation", difficulty: "Medium" },
        { name: "Transfer Learning with ResNet", link: "https://pytorch.org/tutorials/beginner/finetuning_torchvision_models_tutorial.html", difficulty: "Medium" },
        { name: "GANs Hands-On", link: "https://pytorch.org/tutorials/beginner/dcgan_faces_tutorial.html", difficulty: "Hard" }
      ]
    },
    {
      title: "ML System Design",
      color: "from-red-500 to-rose-500",
      description: "Scalability, pipelines, and deployment.",
      questions: [
        { name: "ML Pipeline Basics", link: "https://scikit-learn.org/stable/modules/compose.html", difficulty: "Medium" },
        { name: "Model Serving with Flask", link: "https://towardsdatascience.com/deploying-machine-learning-models-with-flask-dc3cf4f1b2c", difficulty: "Medium" },
        { name: "FastAPI ML Deployment", link: "https://fastapi.tiangolo.com/tutorial/", difficulty: "Medium" },
        { name: "MLflow Model Tracking", link: "https://mlflow.org/docs/latest/index.html", difficulty: "Medium" },
        { name: "Dockerizing ML Models", link: "https://www.docker.com/blog/containerizing-data-science/", difficulty: "Hard" },
        { name: "End-to-End ML Project", link: "https://www.kaggle.com/competitions", difficulty: "Hard" }
      ]
    }
  ];

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-20 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent">
          🤖 ML/AI Prep Sheet
        </h1>
        <p className="mt-3 text-gray-400">
          Practice Machine Learning & AI concepts with structured challenges.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-8">
        {difficulties.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`px-4 py-2 rounded-xl border transition ${
              filter === d
                ? "bg-yellow-600 border-yellow-400 text-white"
                : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Topics */}
      <div className="space-y-6">
        {topics.map((topic, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Topic Header */}
            <div
              onClick={() =>
                setExpandedTopic(expandedTopic === i ? null : i)
              }
              className={`cursor-pointer p-6 flex items-center justify-between bg-gradient-to-r ${topic.color}`}
            >
              <h2 className="text-2xl font-bold">{topic.title}</h2>
              {expandedTopic === i ? <ChevronUp /> : <ChevronDown />}
            </div>

            {/* Expanded Section */}
            {expandedTopic === i && (
              <div className="p-6 space-y-4">
                <p className="text-gray-400 mb-4">{topic.description}</p>

                {topic.questions
                  .filter(
                    (q) => filter === "All" || q.difficulty === filter
                  )
                  .map((q, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                    >
                      <div>
                        <a
                          href={q.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-lg font-medium text-yellow-300 hover:text-pink-400"
                        >
                          {q.name}
                        </a>
                        <span
                          className={`ml-3 px-2 py-1 text-xs rounded-lg ${
                            q.difficulty === "Easy"
                              ? "bg-green-600/30 text-green-400"
                              : q.difficulty === "Medium"
                              ? "bg-yellow-600/30 text-yellow-400"
                              : "bg-red-600/30 text-red-400"
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      </div>

                      {/* Solved Toggle */}
                      <button
                        onClick={() =>
                          setSolved((prev) => ({
                            ...prev,
                            [q.name]: !prev[q.name]
                          }))
                        }
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                          solved[q.name]
                            ? "bg-green-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {solved[q.name] ? "Solved" : "Unsolved"}
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
