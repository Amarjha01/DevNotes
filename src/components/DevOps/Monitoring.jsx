import React, { useRef } from 'react';
import Chat from '../Chat';
import { GoChevronDown } from "react-icons/go";
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: 'What is Monitoring?',
    description: 'Monitoring is the practice of observing your system’s performance, availability, and reliability using tools like Prometheus and Grafana.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '📊',
    code: `# Prometheus: Query system metrics
up
node_cpu_seconds_total

# Grafana: Create dashboards to visualize metrics`,
    tips: [
      'Monitoring helps detect issues early',
      'Prometheus collects and stores metrics',
      'Grafana visualizes metrics in dashboards'
    ]
  },
  {
    title: 'Prometheus Basics',
    description: 'Prometheus is an open-source monitoring system that collects metrics from configured targets at given intervals.',
    category: 'Prometheus',
    difficulty: 'Beginner',
    icon: '📈',
    code: `# prometheus.yml Example
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: "node"
    static_configs:
      - targets: ["localhost:9100"]`,
    tips: [
      'Define scrape intervals for each target',
      'Use labels to organize metrics',
      'Set up alerts using Alertmanager'
    ]
  },
  {
    title: 'Grafana Dashboards',
    description: 'Grafana is an open-source platform to create dashboards and visualize metrics collected by Prometheus or other data sources.',
    category: 'Grafana',
    difficulty: 'Beginner',
    icon: '📋',
    code: `# Steps to create a dashboard
1. Add Prometheus as a data source
2. Create a new dashboard
3. Add panels and queries to visualize metrics`,
    tips: [
      'Use panels to display different metrics',
      'Combine multiple panels for an overview',
      'Set alerts on dashboards for monitoring thresholds'
    ]
  }
];

const Monitoring = () => {
  const chatRef = useRef(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative space-y-8 pb-20">
      <h1 className="text-3xl font-bold text-white mb-4">📊 Monitoring - Prometheus & Grafana</h1>
      {notes.map((note, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-teal-600 to-cyan-400 text-white p-6 rounded-2xl shadow-md border border-gray-700/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{note.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-100 mt-1">
                  {note.category} · {note.difficulty}
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-100 mb-4">{note.description}</p>

          {note.code && (
            <div className="mb-4">
              <div className="text-sm font-medium text-purple-200 mb-1">Example Code:</div>
              <CodeBlock code={note.code} language="yaml" />
            </div>
          )}

          {note.tips?.length > 0 && (
            <div className="mt-2">
              <div className="text-sm font-medium text-pink-200 mb-1">Tips:</div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-100">
                {note.tips.map((tip, i) => (
                  <li key={i}>👉 {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {/* Chat Section */}
      <div ref={chatRef}>
        <Chat />
      </div>

      {/* Floating Button */}
      <button
        onClick={scrollToChat}
        aria-label="Go to AI Assistant"
        title="Go to AI Assistant"
        className="fixed top-6 right-6 z-50 text-2xl font-extrabold bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <GoChevronDown />
      </button>
    </div>
  );
};


export default Monitoring;
