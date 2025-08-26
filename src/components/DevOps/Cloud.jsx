import React, { useRef } from 'react';
import Chat from '../Chat';
import { GoChevronDown } from "react-icons/go";
import CodeBlock from '../../components/common/CodeBlock'; 

const notes = [
  {
    title: 'What is Cloud Computing?',
    description: 'Cloud computing allows you to use computing resources over the internet instead of on-premises hardware. Major providers include AWS, GCP, and Azure.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '☁️',
    code: `# Benefits of Cloud:
# 1. Scalability
# 2. Pay-as-you-go pricing
# 3. High availability`,
    tips: [
      'Understand basic cloud service models: IaaS, PaaS, SaaS',
      'Cloud reduces infrastructure management overhead',
      'Learn the console and CLI tools of major providers'
    ]
  },
  {
    title: 'AWS Basics',
    description: 'AWS (Amazon Web Services) is a widely used cloud provider offering compute, storage, database, and networking services.',
    category: 'AWS',
    difficulty: 'Beginner',
    icon: '🟠',
    code: `# AWS Example:
# Launch an EC2 instance using AWS CLI
aws ec2 run-instances --image-id ami-12345678 --count 1 --instance-type t2.micro`,
    tips: [
      'Start with free-tier services',
      'Learn EC2, S3, Lambda basics',
      'Understand regions and availability zones'
    ]
  },
  {
    title: 'GCP & Azure Basics',
    description: 'GCP (Google Cloud Platform) and Azure are other major cloud providers offering similar services with unique features.',
    category: 'GCP & Azure',
    difficulty: 'Beginner',
    icon: '🔵',
    code: `# GCP Example:
gcloud compute instances create my-instance --zone=us-central1-a

# Azure Example:
az vm create --name MyVM --resource-group MyResourceGroup --image UbuntuLTS`,
    tips: [
      'Explore cloud console and CLI tools',
      'Understand IAM roles and permissions',
      'Use cloud documentation and tutorials'
    ]
  }
];

const Cloud = () => {
  const chatRef = useRef(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative space-y-8 pb-20">
      <h1 className="text-3xl font-bold text-white mb-4">☁️ Cloud Basics - AWS | GCP | Azure</h1>
      {notes.map((note, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-violet-700 via-indigo-600 to-indigo-400 text-white p-6 rounded-2xl shadow-md border border-gray-700/30"
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


export default Cloud;
