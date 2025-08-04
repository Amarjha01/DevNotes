import React, { useState } from 'react';

const notes = [
  {
    title: 'What is Unsupervised Learning?',
    description:
      'Unsupervised Learning is a type of machine learning where models learn from unlabeled data. It aims to discover hidden patterns or intrinsic structures without any specific output labels. Such models are crucial for exploratory data analysis.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🧠',
    code: `# No labeled output data
# Model tries to group, cluster, or reduce dimensionality
# Learns hidden patterns from input data

# Example Algorithms:
- K-Means Clustering: Partitions data into K clusters
- Hierarchical Clustering: Creates a tree of clusters
- PCA (Principal Component Analysis): Reduces dimensionality while preserving variance`,
    tips: [
      'No labels required, enabling broader applications',
      'Good for discovering natural groupings in data',
      'Often used for exploratory data analysis and visualization',
    ],
    additionalInfo: [
      'Popular in market segmentation, genetic clustering, social network analysis.',
      'Helps identify anomalies or outliers in data sets.',
    ],
  },
  {
    title: 'Clustering Techniques',
    description:
      'Clustering involves grouping data into clusters where members of the same group are more similar to each other than to those in other groups. It is a core part of unsupervised learning and has several applications in various fields.',
    category: 'Clustering',
    difficulty: 'Beginner',
    icon: '📦',
    code: `# K-Means example using sklearn
from sklearn.cluster import KMeans

model = KMeans(n_clusters=3)
model.fit(data)
labels = model.predict(data)`,
    tips: [
      'K-Means assumes spherical clusters and is sensitive to initial centroids.',
      'DBSCAN is better suited for identifying irregular shapes in data.',
      'Experiment with different values of K to find the best solution.',
    ],
    useCases: [
      'Image compression via color quantization.',
      'Market segmentation to target different customer groups effectively.',
    ],
  },
  {
    title: 'Dimensionality Reduction',
    description:
      'Reduces the number of input features while preserving important patterns, which is useful for visualization and speeding up learning. Dimensionality reduction techniques facilitate the exploration of high-dimensional data and enhance the performance of machine learning algorithms.',
    category: 'PCA & t-SNE',
    difficulty: 'Intermediate',
    icon: '📉',
    code: `# PCA example
from sklearn.decomposition import PCA

pca = PCA(n_components=2)
reduced = pca.fit_transform(data)`,
    tips: [
      'PCA identifies principal components that maximize variance.',
      't-SNE is excellent for visualizing high-dimensional data in lower dimensions.',
      'Use dimensionality reduction prior to clustering or classification for better results.',
    ],
    benefits: ['Reduces computational cost.', 'Helps to visualize complex data structures.'],
  },
  {
    title: 'Real-World Use Cases',
    description:
      'Unsupervised learning is commonly used in customer segmentation, anomaly detection, and recommendation systems. It employs various algorithms and techniques to reveal insights that drive decision-making processes in businesses.',
    category: 'Applications',
    difficulty: 'Beginner',
    icon: '🌍',
    code: `# Examples
- Grouping customers by purchasing behavior
- Detecting fraud or unusual patterns in transaction data
- Recommending products based on clustering results`,
    tips: [
      'Often used in marketing and cybersecurity for enhanced targeting and risk management.',
      'Improves personalization of services and enhances user experience.',
      'Facilitates the discovery of hidden insights from large datasets.',
    ],
    additionalApplications: [
      'Organizing computing centers based on workload similarity.',
      'Analysis of social networks to identify influential nodes.',
    ],
  },
  // Additional content for customization & enrichment
  {
    title: 'Association Rule Learning',
    description:
      'Discover interesting relations between variables in large databases, commonly used in market basket analysis.',
    category: 'Techniques',
    difficulty: 'Intermediate',
    icon: '🔗',
    code: `# Apriori Algorithm example
from mlxtend.frequent_patterns import apriori
from mlxtend.frequent_patterns import association_rules

frequent_itemsets = apriori(data, min_support=0.5, use_colnames=True)
rules = association_rules(frequent_itemsets, metric="lift", min_threshold=1)`,
    tips: [
      'Finds interesting itemsets and rules',
      'Used to analyze customer purchase patterns',
      'Lift metric indicates strength of association',
    ],
  },
  {
    title: 'Autoencoders',
    description:
      'Neural networks used for unsupervised learning to compress and reconstruct data, useful for anomaly detection and dimensionality reduction.',
    category: 'Neural Networks',
    difficulty: 'Advanced',
    icon: '🧠',
    code: `# TensorFlow Autoencoder example
from tensorflow.keras.layers import Input, Dense
from tensorflow.keras.models import Model

input_dim = X.shape[1]
input_layer = Input(shape=(input_dim,))
encoder = Dense(32, activation="relu")(input_layer)
decoder = Dense(input_dim, activation='sigmoid')(encoder)
autoencoder = Model(inputs=input_layer, outputs=decoder)
autoencoder.compile(optimizer='adam', loss='mse')`,
    tips: [
      'Good for unsupervised feature learning',
      'Common in anomaly detection tasks',
      'Requires careful tuning of architecture and parameters',
    ],
  },
];

const categories = ['All', ...Array.from(new Set(notes.map(note => note.category)))];

const UnsupervisedLearning = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNotes = notes.filter(
    (note) => selectedCategory === 'All' || note.category === selectedCategory
  );

  return (
    <div className="space-y-8 p-6 min-h-screen text-white bg-gradient-to-br">
      <h1 className="text-3xl font-bold mb-4 text-white">🧠 Unsupervised Learning - Introduction</h1>
      <p className="text-gray-300 mb-6 max-w-4xl">
        Get started with the core concepts of Unsupervised Learning, including techniques and real-world applications.
      </p>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
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
            className="bg-gradient-to-br from-[#2c2a4a] to-[#1e1b30] p-6 rounded-2xl shadow-md border border-gray-700/30"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{note.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold">{note.title}</h2>
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
                <pre className="bg-[#1e1e2f] text-sm text-cyan-300 rounded-md p-4 overflow-x-auto whitespace-pre-wrap">
                  <code>{note.code}</code>
                </pre>
              </div>
            )}

            {note.tips && note.tips.length > 0 && (
              <div className="mt-2">
                <div className="text-sm font-medium text-pink-300 mb-1">Tips:</div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                  {note.tips.map((tip, i) => (
                    <li key={i}>👉 {tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {note.useCases && note.useCases.length > 0 && (
              <div className="mt-3">
                <div className="text-sm font-medium text-yellow-300 mb-1">Use Cases:</div>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {note.useCases.map((useCase, i) => (
                    <li key={i}>📌 {useCase}</li>
                  ))}
                </ul>
              </div>
            )}

            {note.additionalInfo && note.additionalInfo.length > 0 && (
              <div className="mt-3">
                <div className="text-sm font-medium text-yellow-300 mb-1">Additional Information:</div>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {note.additionalInfo.map((info, i) => (
                    <li key={i}>ℹ️ {info}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default UnsupervisedLearning;
