import React, { useRef } from 'react';
import Chat from '../Chat';
import { GoChevronDown } from "react-icons/go";
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: 'What is Kubernetes?',
    description: 'Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '☸️',
    code: `# Example: Basic kubectl commands
# Create a namespace
kubectl create namespace my-app

# Deploy an application
kubectl apply -f deployment.yaml

# Check pods
kubectl get pods`,
    tips: [
      'Kubernetes manages containerized applications at scale',
      'Use YAML files for declarative configuration',
      'Namespaces help organize resources'
    ]
  },
  {
    title: 'Kubernetes Architecture',
    description: 'Kubernetes architecture consists of a master node (control plane) and worker nodes. The master manages cluster state, while worker nodes run containerized applications.',
    category: 'Architecture',
    difficulty: 'Beginner',
    icon: '🏗️',
    code: `# Master components: API Server, Controller Manager, Scheduler, etcd
# Worker components: Kubelet, Kube-proxy, Container Runtime`,
    tips: [
      'Control plane manages the cluster state',
      'Worker nodes host pods and services',
      'Understanding architecture helps in troubleshooting'
    ]
  },
  {
    title: 'Kubernetes Objects',
    description: 'Kubernetes objects represent the desired state of your cluster, including Pods, Services, Deployments, StatefulSets, and ConfigMaps.',
    category: 'Resources',
    difficulty: 'Beginner',
    icon: '🛠️',
    code: `# Example: Deployment YAML
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:latest`,
    tips: [
      'Deployments manage pods lifecycle',
      'Services provide stable endpoints',
      'ConfigMaps store configuration separately from code'
    ]
  }
];

const Kubernetes = () => {
  const chatRef = useRef(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative space-y-8 pb-20">
      <h1 className="text-3xl font-bold text-white mb-4">☸️ Kubernetes Container Orchestration</h1>
      {notes.map((note, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-purple-700 to-indigo-500 text-white p-6 rounded-2xl shadow-md border border-gray-700/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{note.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-200 mt-1">
                  {note.category} · {note.difficulty}
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-200 mb-4">{note.description}</p>

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

export default Kubernetes;
