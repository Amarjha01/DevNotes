import React, { useRef } from 'react';
import Chat from '../Chat';
import { GoChevronDown } from "react-icons/go";

const notes = [
  {
    title: 'What is Terraform?',
    description: 'Terraform is an open-source Infrastructure as Code (IaC) tool that allows you to define and provision cloud infrastructure using declarative configuration files.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🌍',
    code: `# Example: Initialize Terraform
terraform init

# Plan infrastructure changes
terraform plan

# Apply infrastructure changes
terraform apply`,
    tips: [
      'Terraform manages cloud resources across multiple providers',
      'Use declarative .tf files to define infrastructure',
      'Always review terraform plan before apply'
    ]
  },
  {
    title: 'Terraform Configuration',
    description: 'Terraform configurations are written in HashiCorp Configuration Language (HCL). They define resources, providers, variables, and outputs.',
    category: 'Configuration',
    difficulty: 'Beginner',
    icon: '📝',
    code: `# main.tf Example
provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "my_bucket" {
  bucket = "my-terraform-bucket"
  acl    = "private"
}`,
    tips: [
      'Group resources logically in multiple .tf files',
      'Use variables for dynamic values',
      'Outputs help share data between modules or users'
    ]
  },
  {
    title: 'Terraform Modules',
    description: 'Modules allow you to organize and reuse Terraform code efficiently.',
    category: 'Modules',
    difficulty: 'Beginner',
    icon: '📦',
    code: `# Using a module
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  name   = "my-vpc"
  cidr   = "10.0.0.0/16"
}`,
    tips: [
      'Modules improve code reusability and readability',
      'Use public modules from Terraform Registry',
      'Keep module code isolated from main configuration'
    ]
  }
];

const Terraform = () => {
  const chatRef = useRef(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative space-y-8 pb-20">
      <h1 className="text-3xl font-bold text-white mb-4">🌍 Terraform - Infrastructure as Code</h1>
      {notes.map((note, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-orange-600 via-rose-500 to-pink-400 text-white p-6 rounded-2xl shadow-md border border-gray-700/30"
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
              <pre className="bg-[#1e1e2f] text-sm text-emerald-200 rounded-md p-4 overflow-x-auto whitespace-pre-wrap">
                <code>{note.code}</code>
              </pre>
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

export default Terraform;
