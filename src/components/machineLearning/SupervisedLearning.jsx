import React, { useState } from 'react';
import Chat from '../Chat';
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: 'What is Supervised Learning?',
    description:
      'Supervised learning is a subset of machine learning where the model is trained on labeled data. Each training example includes an input and its corresponding correct output. The goal is for the model to learn a mapping from inputs to outputs and generalize well on unseen data.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🎯',
    code: `# Common supervised learning tasks:
- Classification: Predicting discrete labels
- Regression: Predicting continuous values`,
    tips: [
      'Uses labeled training data',
      'Includes classification and regression problems',
      'Model learns from example input-output pairs',
    ],
  },
  {
    title: 'Classification vs Regression',
    description:
      'Classification involves predicting categories (e.g., spam or not spam), while regression predicts continuous values (e.g., house prices).',
    category: 'Core Concepts',
    difficulty: 'Beginner',
    icon: '📊',
    code: `# Classification Example:
# Predicting email as spam or not

# Regression Example:
# Predicting a person's salary based on years of experience`,
    tips: [
      'Classification = Discrete labels (e.g., cat/dog)',
      'Regression = Continuous outputs (e.g., prices)',
      'Evaluation metrics differ for each type',
    ],
  },
  {
    title: 'Popular Algorithms',
    description:
      'Several algorithms are commonly used for supervised learning depending on the task and data size. Some perform better with structured data, while others excel with high-dimensional spaces.',
    category: 'Algorithms',
    difficulty: 'Intermediate',
    icon: '⚙️',
    code: `# Examples of supervised learning algorithms:
- Linear Regression
- Logistic Regression
- Decision Trees
- Random Forest
- Support Vector Machines (SVM)
- K-Nearest Neighbors (KNN)`,
    tips: [
      'Choose the algorithm based on problem type',
      'Tree-based models work well with structured data',
      'SVM is powerful for small datasets with a clear margin',
    ],
  },
  // Additional content to expand the page
  {
    title: 'Training and Testing Data',
    description:
      'Data is split into training and testing sets to evaluate model performance properly and avoid overfitting.',
    category: 'Core Concepts',
    difficulty: 'Beginner',
    icon: '🧪',
    tips: [
      'Typical split is 70-80% training, 20-30% testing',
      'Use cross-validation for more reliable estimates',
      'Avoid data leakage between sets',
    ],
  },
  {
    title: 'Performance Metrics',
    description:
      'Metrics such as Accuracy, Precision, Recall, F1-Score, and RMSE help measure the effectiveness of supervised models.',
    category: 'Evaluation',
    difficulty: 'Intermediate',
    icon: '📈',
    tips: [
      'Accuracy is not always the best metric for imbalanced data',
      'Precision and Recall better capture trade-offs',
      'Regression uses metrics like Mean Squared Error (MSE)',
    ],
  },
  {
    title: 'Feature Selection',
    description:
      'Selecting the most relevant features helps improve model accuracy and reduce overfitting.',
    category: 'Data Preparation',
    difficulty: 'Intermediate',
    icon: '🔧',
    tips: [
      'Techniques include correlation analysis, mutual information, and recursive feature elimination',
      'Domain knowledge is crucial',
    ],
  },
];

const categories = ['All', ...Array.from(new Set(notes.map(note => note.category)))];

const SupervisedLearning = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNotes = notes.filter(
    (note) => selectedCategory === 'All' || note.category === selectedCategory
  );

  return (
    <div className="space-y-8 bg-gradient-to-b min-h-screen text-white">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
        Supervised Learning - Concepts
      </h1>
      <p className="text-gray-300 mb-6 max-w-3xl">
        Learn the foundational principles of supervised learning, from classification and regression to key algorithms and use cases.
      </p>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
              selectedCategory === cat
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-blue-500/30 text-blue-200 hover:bg-blue-500/50'
            }`}
            aria-pressed={selectedCategory === cat}
            aria-label={`Filter category: ${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredNotes.length === 0 ? (
        <p className="text-gray-400 text-center">No topics match the selected filter.</p>
      ) : (
        filteredNotes.map((note, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#34495e] to-[#2c3e50] border-l-4 border-blue-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{note.icon}</span>
                <div>
                  <h2 className="text-2xl font-semibold">{note.title}</h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {note.category} · {note.difficulty}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{note.description}</p>

            {note.code && (
              <div className="mb-4">
                <div className="text-sm font-medium text-blue-300 mb-1">Example Notes:</div>
                <CodeBlock code={note.code} language="python" />
              </div>
            )}

            {note.tips?.length > 0 && (
              <div className="mt-2">
                <div className="text-sm font-medium text-pink-300 mb-1">Tips:</div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                  {note.tips.map((tip, i) => (
                    <li key={i}>👉 {tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      )}
      <Chat />
    </div>
  );
};

export default SupervisedLearning;
