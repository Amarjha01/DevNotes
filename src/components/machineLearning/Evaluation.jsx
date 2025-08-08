import React, { useState } from 'react';
import Chat from '../Chat';

const notes = [
  {
    title: 'What is Model Evaluation?',
    description:
      'Model evaluation refers to the process of using metrics to assess how well your machine learning model performs on unseen data. It helps validate its effectiveness and reliability.',
    category: 'Concepts',
    difficulty: 'Beginner',
    icon: '📊',
    code: `# Evaluate accuracy
from sklearn.metrics import accuracy_score
accuracy = accuracy_score(y_true, y_pred)
print("Accuracy:", accuracy)`,
    tips: [
      'Choose evaluation metric based on task type.',
      'Accuracy is not always a good measure for imbalanced datasets.',
      'Use confusion matrix for classification diagnostics.',
    ],
  },
  {
    title: 'Classification Metrics',
    description:
      'Metrics like accuracy, precision, recall, F1-score, and ROC-AUC are used for classification problems. Each serves a unique purpose depending on the use-case.',
    category: 'Metrics',
    difficulty: 'Intermediate',
    icon: '📈',
    code: `# Precision, Recall, F1
from sklearn.metrics import precision_score, recall_score, f1_score

print("Precision:", precision_score(y_test, y_pred))
print("Recall:", recall_score(y_test, y_pred))
print("F1 Score:", f1_score(y_test, y_pred))`,
    tips: [
      'F1 is useful when dealing with imbalanced classes.',
      'Use ROC-AUC to evaluate classifier thresholds.',
      'Precision vs recall tradeoff is critical in sensitive applications.',
    ],
  },
  {
    title: 'Regression Metrics',
    description:
      'When evaluating regression models, you use metrics such as Mean Absolute Error (MAE), Mean Squared Error (MSE), and R² (coefficient of determination).',
    category: 'Metrics',
    difficulty: 'Intermediate',
    icon: '📉',
    code: `# Regression metrics
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

print("MAE:", mean_absolute_error(y_test, y_pred))
print("MSE:", mean_squared_error(y_test, y_pred))
print("R2:", r2_score(y_test, y_pred))`,
    tips: [
      'Lower MAE/MSE means better predictions.',
      'R² indicates how well the data is explained by the model.',
      'Log-transform skewed targets for improved MSE performance.',
    ],
  },
  {
    title: 'Cross-Validation',
    description:
      'Cross-validation is used to validate the model’s performance on different subsets of the dataset. It helps prevent overfitting and ensures generalization.',
    category: 'Validation',
    difficulty: 'Intermediate',
    icon: '🔁',
    code: `# K-Fold Cross Validation
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier

scores = cross_val_score(RandomForestClassifier(), X, y, cv=5)
print("CV Accuracy:", scores.mean())`,
    tips: [
      'Use stratified sampling for classification tasks.',
      'Increase folds for more robust estimates (e.g., 10-fold).',
      'Avoid data leakage during cross-validation splits.',
    ],
  },
  // Additional contents for enrichment
  {
    title: 'Confusion Matrix',
    description:
      'A confusion matrix is a table used to describe the performance of a classification model.',
    category: 'Metrics',
    difficulty: 'Intermediate',
    icon: '🔳',
    code: `# Example using sklearn
from sklearn.metrics import confusion_matrix

cm = confusion_matrix(y_test, y_pred)
print(cm)`,
    tips: [
      'Shows true vs predicted classes',
      'Useful for calculating precision, recall, and F1-score',
      'Visualize with heatmaps for better insights',
    ],
  },
  {
    title: 'ROC Curve and AUC',
    description:
      'ROC curve illustrates the diagnostic ability of a binary classifier, and AUC summarizes its performance.',
    category: 'Metrics',
    difficulty: 'Advanced',
    icon: '📉',
    code: `# Plot ROC Curve
from sklearn.metrics import roc_curve, roc_auc_score
import matplotlib.pyplot as plt

fpr, tpr, thresholds = roc_curve(y_test, y_scores)
plt.plot(fpr, tpr, label="ROC curve")
plt.show()
print("AUC:", roc_auc_score(y_test, y_scores))`,
    tips: [
      'AUC closer to 1 indicates better model',
      'ROC curve helps select threshold for classification',
    ],
  },
];

const categories = ['All', ...Array.from(new Set(notes.map(note => note.category)))];

const Evaluation = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNotes = notes.filter(
    (note) => selectedCategory === 'All' || note.category === selectedCategory
  );

  return (
    <div className="space-y-8 p-6 min-h-screen bg-gradient-to-br text-white">
      <h1 className="text-3xl font-bold text-white drop-shadow-md mb-4">
        📊 Model Evaluation - Metrics & Validation
      </h1>
      <p className="text-white/90 mb-6 max-w-3xl">
        Explore key metrics and validation techniques used to evaluate machine learning models. Use the category filter below to explore different evaluation topics.
      </p>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
              selectedCategory === cat
                ? 'bg-pink-500 text-white shadow-lg'
                : 'bg-pink-500/30 text-pink-200 hover:bg-pink-500/50'
            }`}
            aria-pressed={selectedCategory === cat}
            aria-label={`Filter category: ${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredNotes.length === 0 ? (
        <p className="text-white/70 text-center">No topics found in this category.</p>
      ) : (
        filteredNotes.map((note, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] bg-opacity-10 border border-gray-700/30 backdrop-blur-lg p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{note.icon}</span>
              <div>
                <h2 className="text-xl font-semibold text-white">{note.title}</h2>
                <p className="text-sm text-white/70">
                  {note.category} · {note.difficulty}
                </p>
              </div>
            </div>
            <p className="text-white/90 mb-4">{note.description}</p>
            {note.code && (
              <pre className="bg-[#2a2a3e] text-sm text-green-400 rounded-md p-4 overflow-x-auto whitespace-pre-wrap mb-4">
                <code>{note.code}</code>
              </pre>
            )}
            {note.tips?.length > 0 && (
              <div>
                <div className="text-sm font-medium text-yellow-300 mb-1">Tips:</div>
                <ul className="list-disc list-inside space-y-1 text-sm text-white/80">
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

export default Evaluation;
