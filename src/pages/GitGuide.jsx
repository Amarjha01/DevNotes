import React, { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';

const notes = [
  {
    title: 'Introduction to Version Control Systems (VCS)',
    description:
      'Version Control Systems (VCS) allow developers to track and manage changes to source code over time. They enable collaboration, history tracking, and branching, which are essential for modern software development.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🗂️',
    code: `# Key points:
- Track changes to files over time
- Collaborate with multiple developers
- Branching and merging capabilities
- Examples: Git, SVN, Mercurial`,
    tips: [
      'Understand the benefits of version control early.',
      'Learn basic concepts like commit, branch, and merge.',
      'Use VCS even for solo projects to track changes.'
    ],
    additionalInfo: [
      'Version control helps in efficient teamwork.',
      'It creates a history of your project for easy rollback.'
    ],
    links: {
      vcsIntro: 'https://www.atlassian.com/git/tutorials/what-is-version-control'
    }
  },
  {
    title: 'Getting Started with Git',
    description:
      'Git is a distributed version control system widely used in software development. Install Git, configure your user name/email and learn essential commands.',
    category: 'Setup',
    difficulty: 'Beginner',
    icon: '🐙',
    code: `# Setup Git:
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git init

# Check Git version
git --version`,
    tips: [
      'Set your username and email properly for commits.',
      'Initialize repositories to start tracking projects.',
      'Use “git status” to check repository state frequently.'
    ],
    links: {
      gitDownload: 'https://git-scm.com/downloads',
      gitDocs: 'https://git-scm.com/doc'
    }
  },
  {
    title: 'Basic Git Workflow',
    description:
      'Learn how to create commits, stage files, and view the commit history. Understand the typical workflow of editing, staging, committing, and pushing code.',
    category: 'Core Commands',
    difficulty: 'Beginner',
    icon: '🛠️',
    code: `# Workflow example:
git status               # See changes
git add <file>           # Stage changes
git commit -m "message"  # Commit changes
git log                  # View commit history`,
    tips: [
      'Commit small, logical changes with clear messages.',
      'Use “git status” often to understand repo state.',
      'Stage only what you want to commit using “git add”.'
    ],
    links: {
      gitBasics: 'https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository'
    }
  },
  {
    title: 'Working with Branches',
    description:
      'Branching lets you create independent lines of development in a project. Learn to create, switch, merge, and delete branches.',
    category: 'Branching',
    difficulty: 'Intermediate',
    icon: '🌿',
    code: `# Branch commands:
git branch                  # List branches
git branch <branch-name>    # Create branch
git checkout <branch-name>  # Switch branch
git merge <branch-name>     # Merge branch`,
    tips: [
      'Use branches for features or bug fixes.',
      'Keep master/main branch clean and stable.',
      'Merge branches carefully and resolve conflicts.'
    ],
    additionalInfo: [
      'Branching helps isolate development and keep code organized.',
      'Efficient branching strategies improve team collaboration.'
    ],
    links: {
      branchingGuide: 'https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell'
    }
  },
  {
    title: 'Undoing Changes in Git',
    description:
      'Learn how to discard changes, reset commits, and clean your working directory safely.',
    category: 'Advanced Commands',
    difficulty: 'Intermediate',
    icon: '🛑',
    code: `# Undo examples:
git checkout -- <file>      # Discard changes in working directory
git reset HEAD <file>        # Unstage file
git revert <commit>          # Undo a commit by creating a new commit
git reset --hard <commit>    # Reset branch to commit, discarding changes`,
    tips: [
      'Be cautious with commands that discard changes.',
      'Use revert if you want to undo changes publicly.',
      'Backup important work before running destructive commands.'
    ],
    links: {
      undoChanges: 'https://www.git-scm.com/book/en/v2/Git-Basics-Undoing-Things'
    }
  },
  {
    title: 'Introduction to GitHub',
    description:
      'GitHub is a cloud-based hosting service for Git repositories. It facilitates collaboration, issue tracking, code reviews, and project management.',
    category: 'GitHub',
    difficulty: 'Beginner',
    icon: '🐱',
    code: `# Core GitHub features:
- Remote repositories
- Forks and pull requests
- Issues and project boards
- GitHub Actions for automation`,
    tips: [
      'Connect local Git repos with remote GitHub repositories.',
      'Use pull requests to review and merge code.',
      'Leverage GitHub issues to track bugs and tasks.'
    ],
    links: {
      githubIntro: 'https://docs.github.com/en/get-started/quickstart'
    }
  },
  {
    title: 'Connecting Git to GitHub',
    description:
      'Learn how to add a remote GitHub repository and push your local commits.',
    category: 'GitHub',
    difficulty: 'Beginner',
    icon: '🔗',
    code: `# Add remote and push:
git remote add origin https://github.com/username/repo.git
git push -u origin main`,
    tips: [
      'Use SSH keys for secure authentication.',
      'Push to main or master branch as default.',
      'Pull before pushing to sync changes.'
    ],
    links: {
      githubRemote: 'https://docs.github.com/en/github/using-git/adding-a-remote'
    }
  },
  {
    title: 'Collaborating with Forks and Pull Requests',
    description:
      'Fork repositories to propose changes without direct write access. Pull requests propose changes for review and merging.',
    category: 'GitHub Collaboration',
    difficulty: 'Intermediate',
    icon: '🤝',
    code: `# Pull request workflow:
- Fork project
- Clone your fork locally
- Create a branch, make changes
- Push branch to your fork
- Open PR to original repo`,
    tips: [
      'Keep your fork updated with the original repo upstream.',
      'Write descriptive pull request titles and descriptions.',
      'Respond promptly to PR review comments.'
    ],
    links: {
      prGuide: 'https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests'
    }
  },
  {
    title: 'Managing Issues and Projects on GitHub',
    description:
      'Use GitHub Issues to track bugs and feature requests, and GitHub Projects to organize and prioritize tasks.',
    category: 'GitHub Tools',
    difficulty: 'Intermediate',
    icon: '📋',
    code: `# Quick commands:
# Create a new issue via GitHub UI
# Use labels, assignees, and milestones
# Organize with Kanban-style project boards`,
    tips: [
      'Use templates for consistent issue reporting.',
      'Connect commits and PRs to issues with keywords.',
      'Keep project boards updated with the team.'
    ],
    links: {
      issuesGuide: 'https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues',
      projectsGuide: 'https://docs.github.com/en/issues/organizing-your-work-with-project-boards/about-project-boards'
    }
  },
  {
    title: 'Advanced Git: Rebasing and Cherry-picking',
    description:
      'Learn how to rewrite commit history with rebase or pick specific commits using cherry-pick.',
    category: 'Advanced Commands',
    difficulty: 'Advanced',
    icon: '🎯',
    code: `# Rebase example:
git checkout feature
git rebase main

# Cherry-pick example:
git cherry-pick <commit-hash>`,
    tips: [
      'Use rebase to maintain a clean commit history.',
      'Avoid rebasing public branches shared with others.',
      'Cherry-pick useful commits without merging entire branches.'
    ],
    additionalInfo: [
      'Rebasing modifies commit history, so use with care.',
      'Cherry-pick helps bring specific changes across branches.'
    ],
    links: {
      rebaseGuide: 'https://git-scm.com/book/en/v2/Git-Branching-Rebasing',
      cherryPickGuide: 'https://git-scm.com/docs/git-cherry-pick'
    }
  },
  {
    title: 'GitHub Actions: CI/CD Automation',
    description:
      'GitHub Actions enable you to automate workflows like testing, building, and deploying your code when certain events happen.',
    category: 'Automation',
    difficulty: 'Advanced',
    icon: '🤖',
    code: `# Example workflow file (.github/workflows/main.yml):
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test`,
    tips: [
      'Use pre-built Actions from the marketplace.',
      'Test workflows on feature branches before deploying.',
      'Secure secrets and sensitive data in GitHub Secrets.'
    ],
    links: {
      actionsDocs: 'https://docs.github.com/en/actions'
    }
  }
];

const categories = ['All', ...new Set(notes.map(note => note.category))];

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Beginner':
      return 'text-green-400 bg-green-500/10';
    case 'Intermediate':
      return 'text-yellow-400 bg-yellow-500/10';
    case 'Advanced':
      return 'text-red-400 bg-red-500/10';
    default:
      return 'text-gray-400 bg-gray-500/10';
  }
};

const GitGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
  }, []);

  const toggleCard = (index) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const filteredNotes = notes.filter(
    (note) =>
      (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (note.code && note.code.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (selectedCategory === 'All' || selectedCategory === note.category)
  );

  return (
    <div className="space-y-8 p-6 bg-[#1a0f2e] min-h-screen text-white mt-24">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="text-5xl text-yellow-400"><FaCode/></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Complete Learning Guide on Version Control (Git & GitHub)
          </h1>
        </div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Step-by-step guide to mastering version control with Git and GitHub, covering setup, core commands, collaboration, advanced features, and automation.
        </p>
        <input
          type="text"
          placeholder="Search topics..."
          className="mt-4 px-4 py-2 rounded-md bg-purple-900/20 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-md mx-auto text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search topics"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-purple-500 text-white'
                : 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Notes Grid */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-1">
        {filteredNotes.map((note, index) => (
          <div
            key={index}
            className={`group bg-gradient-to-br from-[#2a1640] to-[#1a0f2e] border border-purple-800/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${
              animateCards ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Card Header */}
            <div className="p-6 border-b border-purple-800/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{note.icon}</div>
                  <div>
                    <h2 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{note.title}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">{note.category}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(note.difficulty)}`}>{note.difficulty}</span>
                    </div>
                  </div>
                </div>
                {note.code && (
                  <button
                    onClick={() => toggleCard(index)}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    aria-label="Toggle code snippet"
                  >
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-200 ${expandedCards.has(index) ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">{note.description}</p>

              {note.additionalInfo && (
                <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                  {note.additionalInfo.map((info, i) => (
                    <li key={i}>🔸 {info}</li>
                  ))}
                </ul>
              )}

              {note.code && (
                <div
                  className={`transition-all duration-300 ${
                    expandedCards.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-400">Example Notes:</span>
                      <button
                        onClick={() => copyToClipboard(note.code)}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                        aria-label="Copy code snippet"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        Copy
                      </button>
                    </div>
                    <pre className="bg-black/50 border border-gray-700 rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap">
                      <code className="text-green-400">{note.code}</code>
                    </pre>
                  </div>
                </div>
              )}

              {note.tips && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-purple-400 mb-2">💡 Pro Tips:</h3>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {note.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {note.links && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {Object.entries(note.links).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg text-white text-sm shadow-md transition 
                      ${
                        key.includes('git') ? 'bg-indigo-700 hover:bg-indigo-600' :
                        key.includes('github') ? 'bg-pink-600 hover:bg-pink-700' :
                        key.includes('actions') ? 'bg-teal-600 hover:bg-teal-700' :
                        key.includes('undo') ? 'bg-red-600 hover:bg-red-500' :
                        'bg-purple-700 hover:bg-purple-600'
                      }`}
                    >
                      {key
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, (str) => str.toUpperCase())
                        .replace(/Docs/, ' Docs')
                        .replace(/Intro/, ' Introduction')
                        .replace(/GitHub/, 'GitHub')
                      }
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl mb-2">No Git/GitHub topics found</h3>
          <p>Try adjusting your search terms or category filter.</p>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GitGuide;



