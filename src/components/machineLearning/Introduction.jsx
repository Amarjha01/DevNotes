import React, { useState } from 'react';
import Chat from '../Chat';

const notes = [
  {
    title: 'What is Machine Learning?',
    description:
      'Machine learning is a branch of artificial intelligence that enables algorithms to uncover hidden patterns within datasets. It allows them to predict new, similar data without explicit programming for each task. Applications include image/speech recognition, NLP, recommendations, fraud detection, portfolio optimization, and automation.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '📘',
    code: `# Example: Simple Linear Regression using sklearn
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`,
    tips: [
      'Focuses on pattern recognition and predictions',
      'Used in recommendation systems, fraud detection, etc.',
      'Requires data preprocessing and model evaluation',
    ],
  },
  {
    title: 'Types of Machine Learning',
    description: 'Three main types: Supervised, Unsupervised, and Reinforcement Learning.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🔍',
    code: `# Example: Classification vs Clustering
# Supervised - Classification
from sklearn.tree import DecisionTreeClassifier

# Unsupervised - Clustering
from sklearn.cluster import KMeans`,
    tips: [
      'Supervised uses labeled data (e.g., spam detection)',
      'Unsupervised finds hidden patterns (e.g., customer segmentation)',
      'Reinforcement learns through rewards (e.g., game AI)',
    ],
  },
  {
    title: 'Data Preprocessing',
    description:
      'Data preprocessing involves cleaning and transforming raw data into a usable format for machine learning. It helps improve model performance.',
    category: 'Data Preparation',
    difficulty: 'Beginner',
    icon: '🧹',
    code: `# Example: Handling Missing Values
import pandas as pd

data = pd.read_csv('data.csv')
data.fillna(data.mean(), inplace=True)`,
    tips: [
      'Handle missing values appropriately',
      'Normalize or standardize features for better performance',
      'Convert categorical variables to numerical format',
    ],
  },
  {
    title: 'Model Evaluation',
    description:
      'Assess model performance using metrics suitable for the problem type like accuracy, precision, recall, F1-score, and ROC curves.',
    category: 'Evaluation',
    difficulty: 'Intermediate',
    icon: '📊',
    code: `# Example: Classification accuracy with sklearn
from sklearn.metrics import accuracy_score

accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.2f}')`,
    tips: [
      'Choose metrics based on task (classification, regression)',
      'Use cross-validation to check robustness',
      'Visualize results with confusion matrix or ROC curves',
    ],
  },
  {
    title: 'Hyperparameter Tuning',
    description:
      'Optimize model hyperparameters with Grid Search, Random Search, or Bayesian optimization to improve model performance.',
    category: 'Optimization',
    difficulty: 'Intermediate',
    icon: '⚙️',
    code: `# Example: Grid Search for SVM
from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC

param_grid = {'C': [0.1, 1, 10], 'kernel': ['linear', 'rbf']}
grid = GridSearchCV(SVC(), param_grid, cv=5)
grid.fit(X_train, y_train)
print('Best params:', grid.best_params_)`,
    tips: [
      'Avoid overfitting by validating on test data',
      'Consider trade-off between compute time and search thoroughness',
      'Use simpler models if tuning is too costly',
    ],
  },
];

const categories = ['All', ...Array.from(new Set(notes.map(note => note.category)))];

const Introduction = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNotes = notes.filter(note => {
    return selectedCategory === 'All' || note.category === selectedCategory;
  });

  return (
    <div className="space-y-8 p-6 min-h-screen text-white ">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
        Artificial Intelligence - Introduction
      </h1>
      <p className="text-gray-300 mb-6 max-w-3xl">
        Get started with the core concepts of AI, its components, and real-world applications. Use the filter below to customize your learning path.
      </p>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
              selectedCategory === cat
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-purple-500/30 text-purple-200 hover:bg-purple-500/50'
            }`}
            aria-pressed={selectedCategory === cat}
            aria-label={`Filter category: ${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notes */}
      {filteredNotes.length === 0 ? (
        <p className="text-gray-400 text-center">No topics match the selected filter.</p>
      ) : (
        filteredNotes.map((note, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#3a3565] to-[#1e1b30] p-6 rounded-2xl shadow-md border border-gray-700/40"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{note.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-400">
                  {note.category} · {note.difficulty}
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{note.description}</p>
            {note.code && (
              <pre className="bg-[#1e1e2f] text-sm text-cyan-300 rounded-md p-4 overflow-x-auto whitespace-pre-wrap mb-4">
                <code>{note.code}</code>
              </pre>
            )}
            {note.tips && note.tips.length > 0 && (
              <div>
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
      <Chat/>
    </div>
  );
};

export default Introduction;
