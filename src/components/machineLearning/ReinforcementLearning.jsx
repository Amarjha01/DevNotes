import React, { useState } from 'react';
import Chat from '../Chat';

const notes = [
  {
    title: 'What is Reinforcement Learning?',
    description:
      'Reinforcement Learning (RL) is a type of machine learning where agents learn by interacting with an environment. The agent receives rewards or penalties and adjusts its actions to maximize long-term gains.',
    category: 'Introduction',
    difficulty: 'Intermediate',
    icon: '🏆',
    code: `# RL is based on:
- Agent: Learner or decision maker
- Environment: What the agent interacts with
- Reward Signal: Feedback for actions
- Policy: Strategy to choose actions
- Value Function: Predicts future reward

# Goal: Maximize cumulative reward over time`,
    tips: [
      'Trial-and-error based learning process.',
      'No labeled data required — relies on feedback signals.',
      'Used when actions influence future outcomes.',
    ],
    useCases: [
      'Game playing AI (e.g., AlphaGo, Dota bots).',
      'Autonomous driving systems.',
      'Robotic motion planning and control.',
    ],
  },
  {
    title: 'Core Components of RL',
    description:
      'Understanding the key elements: agents, environments, rewards, states, and actions is essential to implementing any RL system.',
    category: 'Concepts',
    difficulty: 'Intermediate',
    icon: '🧩',
    code: `# Agent-Environment Loop:
while not done:
    action = policy(state)
    next_state, reward = environment.step(action)
    update(state, action, reward, next_state)
    state = next_state`,
    tips: [
      'Policies can be deterministic or stochastic.',
      'Reward function should reflect the real-world goal.',
      'Value functions help evaluate long-term benefits.',
    ],
  },
  {
    title: 'Popular Algorithms',
    description:
      'Various RL algorithms differ in how they explore the environment and update their knowledge, including Q-learning, SARSA, DDPG, and PPO.',
    category: 'Algorithms',
    difficulty: 'Advanced',
    icon: '📘',
    code: `# Q-Learning Update Rule:
Q(s, a) = Q(s, a) + α * [reward + γ * max(Q(s', a')) - Q(s, a)]`,
    tips: [
      'Q-Learning is off-policy; SARSA is on-policy.',
      'Policy Gradient methods are useful in continuous action spaces.',
      'Deep RL uses neural networks as function approximators.',
    ],
    notes: [
      'Combine exploration and exploitation strategies.',
      'Requires careful tuning of hyperparameters (γ, α, etc.).',
    ],
  },
  {
    title: 'Applications of RL',
    description:
      'RL has proven useful in scenarios where agents need to make sequences of decisions with delayed consequences.',
    category: 'Applications',
    difficulty: 'Beginner',
    icon: '🚗',
    code: `# Examples:
- Self-driving car navigation
- Dynamic pricing in e-commerce
- Stock trading bots
- Industrial automation`,
    tips: [
      'Works best in simulated environments before real-world deployment.',
      'Improves continuously through interaction.',
      'Enables autonomous decision-making under uncertainty.',
    ],
  },
  // Additional contents can be added here
  {
    title: 'Exploration vs Exploitation',
    description:
      'Striking a balance between exploring new strategies and exploiting known rewards is a core challenge in reinforcement learning.',
    category: 'Concepts',
    difficulty: 'Intermediate',
    icon: '⚖️',
    tips: [
      'Exploration allows discovering potentially better actions.',
      'Exploitation uses knowledge to maximize rewards.',
      'Techniques like ε-greedy or softmax control this balance.',
    ],
  },
  {
    title: 'Value-Based Methods',
    description:
      'Value-based methods estimate the value of taking certain actions in certain states to find optimal policies.',
    category: 'Algorithms',
    difficulty: 'Advanced',
    icon: '📈',
    code: `# Example pseudocode:
Q(s,a) <- Q(s,a) + α * (reward + γ * max_a' Q(s',a') - Q(s,a))`,
    tips: [
      'Q-learning and SARSA are popular examples.',
      'These methods learn action-value functions.',
    ],
  },
  {
    title: 'Policy-Based Methods',
    description:
      'Policy-based methods learn a parameterized policy that maps states to actions directly, often using gradients.',
    category: 'Algorithms',
    difficulty: 'Advanced',
    icon: '🎯',
    tips: [
      'Suitable for continuous action spaces.',
      'Policy gradients optimize expected reward directly.',
      'Examples include REINFORCE and PPO.',
    ],
  },
  {
    title: 'Model-Based RL',
    description:
      'Model-based RL approaches build an internal model of the environment to plan ahead and make decisions.',
    category: 'Advanced Concepts',
    difficulty: 'Advanced',
    icon: '🔍',
    tips: [
      'Uses learned or known environment models.',
      'Can improve sample efficiency.',
      'Often combined with model-free methods.',
    ],
  },
];

const categories = ['All', ...Array.from(new Set(notes.map(note => note.category)))];

const ReinforcementLearning = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNotes = notes.filter(
    (note) => selectedCategory === 'All' || note.category === selectedCategory
  );

  return (
    <div className="space-y-8 p-6 min-h-screen  text-white ">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
        🏆 Reinforcement Learning - Reward-Based Training
      </h1>
      <p className="text-gray-300 mb-6 max-w-3xl">
        Explore how agents learn optimal strategies through trial and error by receiving rewards from their environment.
      </p>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
              selectedCategory === cat
                ? 'bg-yellow-500 text-black shadow-lg'
                : 'bg-yellow-500/30 text-yellow-200 hover:bg-yellow-500/50'
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
            className="bg-gradient-to-br from-[#3a2e1f] to-[#1e1a12] text-white p-6 rounded-2xl shadow-md border border-yellow-700/30"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{note.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold text-white">{note.title}</h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {note.category} · {note.difficulty}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{note.description}</p>

            {note.code && (
              <div className="mb-4">
                <div className="text-sm font-medium text-yellow-300 mb-1">Example Code:</div>
                <pre className="bg-[#1e1e2f] text-sm text-amber-300 rounded-md p-4 overflow-x-auto whitespace-pre-wrap">
                  <code>{note.code}</code>
                </pre>
              </div>
            )}

            {note.tips?.length > 0 && (
              <div className="mt-2">
                <div className="text-sm font-medium text-orange-300 mb-1">Tips:</div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                  {note.tips.map((tip, i) => (
                    <li key={i}>👉 {tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {note.useCases?.length > 0 && (
              <div className="mt-3">
                <div className="text-sm font-medium text-orange-200 mb-1">Use Cases:</div>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {note.useCases.map((use, i) => (
                    <li key={i}>📌 {use}</li>
                  ))}
                </ul>
              </div>
            )}

            {note.notes?.length > 0 && (
              <div className="mt-3">
                <div className="text-sm font-medium text-orange-200 mb-1">Notes:</div>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {note.notes.map((n, i) => (
                    <li key={i}>📎 {n}</li>
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

export default ReinforcementLearning;
