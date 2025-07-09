// components/frontend/Reactjs.jsx
import React from 'react';

const ReactJs = () => {
  const notes = [
    {
      title: 'What is React?',
      description: 'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state effectively.'
    },
    {
      title: 'JSX',
      description: 'JSX stands for JavaScript XML. It allows us to write HTML in React. JSX makes it easier to write and add HTML in React.',
      code: `const element = <h1>Hello, world!</h1>;`
    },
    {
      title: 'Components',
      description: 'Components are the building blocks of a React application. They can be class-based or functional.',
      code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`
    },
    {
      title: 'Props and State',
      description: 'Props are used to pass data from parent to child components. State is used to manage local component data.',
      code: `const [count, setCount] = useState(0);`
    },
    {
      title: 'useEffect Hook',
      description: 'The useEffect hook lets you perform side effects in functional components.',
      code: `useEffect(() => {
  console.log("Component mounted");
}, []);`
    },
    {
      title: 'React Router',
      description: 'React Router is a standard library for routing in React. It enables navigation between views of various components in a React Application.'
    },
    {
      title: 'Conditional Rendering',
      description: 'React allows you to render components conditionally using JavaScript logic inside JSX.',
      code: `{isLoggedIn ? <LogoutButton /> : <LoginButton />}`
    },
    {
      title: 'Lists and Keys',
      description: 'You can build collections of elements using `map()` and use a unique key prop to keep track of items.',
      code: `const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);`
    },
    {
      title: 'useContext Hook',
      description: 'useContext allows you to share values (like themes, auth, etc.) between components without passing props manually.',
      code: `const value = useContext(MyContext);`
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">React JS Notes</h1>
      {notes.map((note, idx) => (
        <div key={idx} className="bg-[#24193b] p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-300 mb-2">{note.title}</h2>
          <p className="mb-2 text-gray-200">{note.description}</p>
          {note.code && (
            <pre className="bg-black/40 p-3 text-sm rounded overflow-x-auto text-green-300">
              <code>{note.code}</code>
            </pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReactJs;
