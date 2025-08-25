
import Chat from '../Chat';
import React, { useState } from 'react';
import CodeBlock from '../../components/common/CodeBlock'; 

const ReactJs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const notes = [
    {
      title: 'What is React?',
      description: 'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state effectively.',
      category: 'Basics',
      difficulty: 'Beginner',
      icon: '⚛️',
      tips: [
        'React uses a virtual DOM for efficient updates',
        'Ideal for single-page applications',
        'Maintained by Meta and the community',
      ],
    },
    {
      title: 'JSX',
      description: 'JSX (JavaScript XML) allows you to write HTML-like syntax in JavaScript, making React components easier to create and read.',
      category: 'Basics',
      difficulty: 'Beginner',
      icon: '📝',
      code: `const element = <h1>Hello, world!</h1>;`,
      tips: [
        'JSX must return a single parent element',
        'Use camelCase for HTML attributes (e.g., className)',
        'JSX is transpiled to JavaScript by tools like Babel',
      ],
    },
    // New Topic: React Fragments
    {
      title: 'React Fragments',
      description: 'Fragments let you group multiple elements without adding extra DOM nodes, keeping the markup clean.',
      category: 'Basics',
      difficulty: 'Beginner',
      icon: '<>',
      code: `return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);`,
      tips: [
        'Use <>...</> or <React.Fragment>...</React.Fragment>',
        'Avoids unnecessary div wrappers',
        'Supports key prop for lists',
      ],
    },
    {
      title: 'Components',
      description: 'Components are the building blocks of a React application. They can be functional (using hooks) or class-based.',
      category: 'Basics',
      difficulty: 'Beginner',
      icon: '🧩',
      code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
      tips: [
        'Functional components are preferred in modern React',
        'Keep components small and focused',
        'Use PascalCase for component names',
      ],
    },
    {
      title: 'Props and State',
      description: 'Props pass data from parent to child components. State manages local component data that can change over time.',
      category: 'Hooks',
      difficulty: 'Beginner',
      icon: '⚙️',
      code: `const [count, setCount] = useState(0);`,
      tips: [
        'Props are read-only in child components',
        'Use useState for simple state management',
        'State updates trigger re-renders',
      ],
    },
    // New Topic: useState Hook
    {
      title: 'useState Hook',
      description: 'The useState hook manages state in functional components, allowing dynamic updates to UI.',
      category: 'Hooks',
      difficulty: 'Beginner',
      icon: '📊',
      code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
      tips: [
        'Initialize state with a default value',
        'Use functional updates for state based on previous state',
        'Avoid directly mutating state',
      ],
    },
    {
      title: 'useEffect Hook',
      description: 'The useEffect hook handles side effects like data fetching, subscriptions, or DOM updates in functional components.',
      category: 'Hooks',
      difficulty: 'Intermediate',
      icon: '🔄',
      code: `useEffect(() => {
  console.log("Component mounted");
}, []);`,
      tips: [
        'Empty dependency array mimics componentDidMount',
        'Return a cleanup function to avoid memory leaks',
        'List all dependencies used in the effect',
      ],
    },
    // New Topic: useRef Hook
    {
      title: 'useRef Hook',
      description: 'The useRef hook creates a mutable reference that persists across renders, often used for DOM access or storing values.',
      category: 'Hooks',
      difficulty: 'Intermediate',
      icon: '🔗',
      code: `import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  const focusInput = () => inputRef.current.focus();
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}`,
      tips: [
        'useRef does not trigger re-renders',
        'Use for DOM elements or persistent values',
        'Access the current value with ref.current',
      ],
    },
    // New Topic: useReducer Hook
    {
      title: 'useReducer Hook',
      description: 'The useReducer hook manages complex state logic, an alternative to useState for state transitions.',
      category: 'Hooks',
      difficulty: 'Intermediate',
      icon: '⚖️',
      code: `import { useReducer } from 'react';

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    </div>
  );
}`,
      tips: [
        'Use for complex state logic with multiple actions',
        'Reducer functions should be pure',
        'Combine with useContext for global state',
      ],
    },
    // New Topic: Custom Hooks
    {
      title: 'Custom Hooks',
      description: 'Custom hooks allow you to extract reusable logic from components into standalone functions.',
      category: 'Hooks',
      difficulty: 'Intermediate',
      icon: '🛠️',
      code: `import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth });
  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}

function Component() {
  const { width } = useWindowSize();
  return <p>Window width: {width}px</p>;
}`,
      tips: [
        'Custom hooks must start with "use"',
        'Reuse logic across components',
        'Follow hooks rules (e.g., no hooks in loops)',
      ],
    },
    {
      title: 'React Router',
      description: 'React Router enables navigation between views in a React application using components like BrowserRouter and Route.',
      category: 'Routing',
      difficulty: 'Intermediate',
      icon: '🛤️',
      code: `import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`,
      tips: [
        'Use <Link> for navigation instead of <a>',
        'Handle dynamic routes with useParams',
        'Wrap app in BrowserRouter for routing',
      ],
    },
    {
      title: 'Conditional Rendering',
      description: 'Render components conditionally using JavaScript logic like ternaries or logical operators in JSX.',
      category: 'Interactivity',
      difficulty: 'Beginner',
      icon: '🔍',
      code: `{isLoggedIn ? <LogoutButton /> : <LoginButton />}`,
      tips: [
        'Use ternary operators for simple conditions',
        'Logical && for single-branch rendering',
        'Avoid complex logic in JSX',
      ],
    },
    // New Topic: Event Handling in React
    {
      title: 'Event Handling in React',
      description: 'Handle user interactions like clicks or form inputs using event handlers in React components.',
      category: 'Interactivity',
      difficulty: 'Beginner',
      icon: '🖱️',
      code: `function Button() {
  const handleClick = () => alert('Clicked!');
  return <button onClick={handleClick}>Click me</button>;
}

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return <form onSubmit={handleSubmit}><input type="text" /></form>;
}`,
      tips: [
        'Use camelCase for event handlers (e.g., onClick)',
        'Prevent default behavior with e.preventDefault()',
        'Pass functions, not their results, to event handlers',
      ],
    },
    {
      title: 'Lists and Keys',
      description: 'Render lists of elements using map() and assign a unique key prop to track items efficiently.',
      category: 'Interactivity',
      difficulty: 'Beginner',
      icon: '📋',
      code: `const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);`,
      tips: [
        'Keys must be unique among siblings',
        'Use stable IDs (e.g., database IDs) for keys',
        'Avoid using array indices as keys for dynamic lists',
      ],
    },
    {
      title: 'useContext Hook',
      description: 'useContext allows sharing values (like themes or auth) across components without prop drilling.',
      category: 'Hooks',
      difficulty: 'Intermediate',
      icon: '🌐',
      code: `const value = useContext(MyContext);`,
      tips: [
        'Use for global data like themes or user info',
        'Create context with createContext()',
        'Wrap components in Provider to share values',
      ],
    },
    // New Topic: React.memo and Optimization
    {
      title: 'React.memo and Optimization',
      description: 'Optimize performance by memoizing components with React.memo and controlling re-renders.',
      category: 'Advanced',
      difficulty: 'Advanced',
      icon: '⚡',
      code: `const MemoizedComponent = React.memo(({ value }) => {
  console.log('Rendering');
  return <div>{value}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <MemoizedComponent value="Static" />
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}`,
      tips: [
        'Use React.memo for components with static props',
        'Combine with useCallback/useMemo for callbacks and values',
        'Profile performance before optimizing',
      ],
    },
    // New Topic: State Management (Redux/Zustand)
    {
      title: 'State Management (Redux/Zustand)',
      description: 'Manage global state in complex apps using libraries like Redux or Zustand.',
      category: 'Advanced',
      difficulty: 'Advanced',
      icon: '🏬',
      code: `// Zustand example
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
      tips: [
        'Use Redux for large apps with complex state',
        'Zustand is lighter and simpler for smaller apps',
        'Keep state as minimal as possible',
      ],
    },
    // New Topic: Suspense and Lazy Loading
    {
      title: 'Suspense and Lazy Loading',
      description: 'Lazy load components with React.lazy and Suspense to improve performance.',
      category: 'Advanced',
      difficulty: 'Advanced',
      icon: '🚀',
      code: `const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`,
      tips: [
        'Use for code-splitting large components',
        'Provide a fallback UI during loading',
        'Works with dynamic imports',
      ],
    },
    // New Topic: Error Boundaries
    {
      title: 'Error Boundaries',
      description: 'Error boundaries catch JavaScript errors in components to prevent app crashes.',
      category: 'Advanced',
      difficulty: 'Advanced',
      icon: '🛡️',
      code: `class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}`,
      tips: [
        'Use class components for error boundaries',
        'Wrap critical components to catch errors',
        'Log errors in componentDidCatch for debugging',
      ],
    },
  ];

  const categories = ['All', ...new Set(notes.map((note) => note.category))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredNotes = notes.filter((note) => {
    const categoryMatch = selectedCategory === 'All' || note.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || note.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">React JS Learning Hub</h1>
          <p className="text-purple-200 text-lg">
            Master React with interactive notes and code examples
          </p>
        </div>
      
  


        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <label className="text-white font-medium">Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-purple-500/20 backdrop-blur-sm text-white border border-purple-300/40 hover:border-purple-300/60 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-purple-200 transition-all duration-200"
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="bg-purple-900 text-purple-100 hover:bg-purple-800 transition-all duration-200"
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-white font-medium">Difficulty:</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-purple-500/20 backdrop-blur-sm text-white border border-purple-300/40 hover:border-purple-300/60 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-purple-200 transition-all duration-200"
              >
                {difficulties.map((difficulty) => (
                  <option
                    key={difficulty}
                    value={difficulty}
                    className="bg-purple-900 text-purple-100 hover:bg-purple-800 transition-all duration-200"
                  >
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredNotes.map((note, idx) => (
            <div
              key={idx}
              className="bg-[#24193b] p-6 rounded-lg shadow-md hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{note.icon}</span>
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">{note.title}</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-200 text-sm">{note.category}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                          note.difficulty
                        )}`}
                      >
                        {note.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-200 mb-4 leading-relaxed whitespace-pre-line">
                {note.description}
              </p>

              {/* Code Block */}
              {note.code && (
                <div className="mb-4">
                  <CodeBlock code={note.code} language="javascript" />
                </div>
              )}

              {/* Tips */}
              {note.tips && (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="text-purple-300 font-medium mb-2 flex items-center gap-2">
                    💡 Pro Tips
                  </h3>
                  <ul className="space-y-1">
                    {note.tips.map((tip, tipIdx) => (
                      <li
                        key={tipIdx}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-purple-200">
          <p>Keep learning and happy coding! 🚀</p>
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default ReactJs;