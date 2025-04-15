export const reactbasic = [
    {
      id: 1,
      question: "What is React?",
      answer: `React is a JavaScript library developed by Facebook for building user interfaces (UIs), 
  especially for single-page applications.It allows developers to create large web applications 
  that can update and render efficiently in response to data changes.
  
  🧠 Key Idea: React follows a declarative paradigm and uses reusable components.
  Example:
  import React from 'react';
  function App() {
    return <h1>Hello, React!</h1>;
  }`
    },
    {
      id: 2,
      question: "What are the main features of React?",
      answer: `Main features of React include:
  1. Virtual DOM for fast rendering
  2. Component-based architecture
  3. One-way data binding
  4. JSX syntax
  5. Support for Hooks and functional programming
  
  ✅ These features help React build dynamic and performant UIs efficiently.`
    },
    {
      id: 3,
      question: "What is JSX?",
      answer: `JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe what the UI should look like.
  
  Example:
  const element = <h1>Hello JSX</h1>;
  
  JSX is not HTML, but it looks similar and compiles to React.createElement() under the hood.`
    },
    {
      id: 4,
      question: "What is the difference between a class component and a functional component?",
      answer: `Class components are ES6 classes that extend from React.Component and can use lifecycle methods.
  Functional components are simpler and are just JavaScript functions. With Hooks, they can now also manage 
  state and side effects.
  
  Example:
  // Class Component
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  // Functional Component
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`
    },
    {
      id: 5,
      question: "What is the virtual DOM?",
      answer: `The virtual DOM is a lightweight JavaScript representation of the actual DOM.
  
  React creates a virtual DOM and updates it in memory instead of updating the real DOM immediately. 
  When changes occur, it compares the new virtual DOM with the previous one (diffing),
  and only applies necessary updates to the real DOM for better performance.`
    },
    {
      id: 6,
      question: "How does React handle rendering and updating the UI?",
      answer: `React uses the virtual DOM to efficiently update the UI.
  1. UI changes trigger re-rendering of components.
  2. React compares the new virtual DOM with the previous one.
  3. It calculates the minimum number of changes required.
  4. It updates only the necessary parts in the real DOM.`
    },
    {
      id: 7,
      question: "What are props in React?",
      answer: `Props (short for properties) are read-only attributes passed from parent to child components 
      to configure them or pass data.
  
  Example:
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`
    },
    {
      id: 8,
      question: "What is the state in React?",
      answer: `State is a built-in object that stores property values that belong to a component. 
      When state changes, the component re-renders.
  
  Example:
  const [count, setCount] = useState(0);` 
    },
    {
      id: 9,
      question: "What is the use of useState hook?",
      answer: `useState is a Hook in React that allows you to add state to functional components.
  
  Example:
  const [name, setName] = useState('React');` 
    },
    {
      id: 10,
      question: "How do you create a React app using create-react-app?",
      answer: `You can create a new React application using:
  npx create-react-app my-app
  cd my-app
  npm start` 
    },
    {
      id: 11,
      question: "What is the purpose of key prop in lists?",
      answer: `The key prop helps React identify which items have changed, are added, or removed. 
      It should be unique among siblings.
  
  Example:
  {items.map(item => <li key={item.id}>{item.name}</li>)}`
    },
    {
      id: 12,
      question: "What are fragments in React?",
      answer: `Fragments let you group multiple elements without adding extra nodes to the DOM.
  
  Example:
  <>
    <td>Name</td>
    <td>Age</td>
  </>`
    },
    {
      id: 13,
      question: "How to handle events in React?",
      answer: `Events are handled using camelCase syntax and passing functions as event handlers.
  
  Example:
  <button onClick={handleClick}>Click Me</button>`
    },
    {
      id: 14,
      question: "What are controlled and uncontrolled components?",
      answer: `Controlled components are those whose form data is handled by React state. 
      Uncontrolled components store data in the DOM.
  
  Controlled Example:
  <input value={name} onChange={e => setName(e.target.value)} />`
    },
    {
      id: 15,
      question: "What is the difference between null and undefined in JSX rendering?",
      answer: `In JSX:
  - Rendering 'null' means rendering nothing (returns no element).
  - Rendering 'undefined' often causes no output, but it's better to avoid directly rendering it.
  
   Use conditional rendering to avoid showing unwanted content.`
    }
  ];
   
  export const reactintermediate = [
    {
      id: 1,
      question: "What are React hooks? Name a few.",
      answer: `Hooks are special functions that let you use React features (like state and lifecycle) in functional components.
  
  Common Hooks:
  - useState
  - useEffect
  - useContext
  - useRef
  - useReducer
  - useMemo
  - useCallback
  
  Example:
  const [count, setCount] = useState(0);`
    },
    {
      id: 2,
      question: "Explain the use of useEffect hook.",
      answer: `useEffect lets you perform side effects like data fetching, subscriptions, DOM updates, etc.
  
  Syntax:
  useEffect(() => {
    // code here
  }, [dependencies]);
  
  Example:
  useEffect(() => {
    document.title = "Count: +count";
  }, [count]);`
    },
    {
      id: 3,
      question: "How does useEffect differ from lifecycle methods in class components?",
      answer: `In class components, lifecycle methods are split (componentDidMount, componentDidUpdate, etc). 
      useEffect combines them in one API.
  
  Example:
  useEffect(() => {
    // Mount
    return () => {
      // Unmount cleanup
    };
  }, []);`
    },
    {
      id: 4,
      question: "What is context in React?",
      answer: `Context provides a way to pass data through the component tree without having to 
      pass props manually at every level.
  
  Use case: Theme, Auth, Language switching
  
  Example:
  const ThemeContext = React.createContext();
  <ThemeContext.Provider value="dark">
    <App />
  </ThemeContext.Provider>`
    },
    {
      id: 5,
      question: "How to pass data between components (parent to child & child to parent)?",
      answer: `- Parent to Child: via props
  - Child to Parent: via callback functions passed as props
  
  Example (Child to Parent):
  function Child({ onClick }) {
    return <button onClick={() => onClick('data')}>Send</button>;
  }`
    },
    {
      id: 6,
      question: "How do you lift state up in React?",
      answer: `Lifting state up means moving shared state to the nearest common ancestor 
      to coordinate behavior between components.
  
  Example:
  Move state from two sibling components to their parent and pass data via props.`
    },
    {
      id: 7,
      question: "What is conditional rendering?",
      answer: `It means rendering UI elements based on a condition.
  
  Example:
  {isLoggedIn ? <Dashboard /> : <Login />} `
    },
    {
      id: 8,
      question: "What is prop drilling and how do you avoid it?",
      answer: `Prop drilling is passing data through many nested components unnecessarily.
  
  Solution: Use Context API or state management libraries like Redux.`
    },
    {
      id: 9,
      question: "How do you optimize performance in React?",
      answer: `Ways to optimize:
  - Use React.memo
  - Avoid unnecessary re-renders
  - Lazy load components
  - Use useCallback and useMemo
  - Code splitting`
    },
    {
      id: 10,
      question: "What is memoization in React (React.memo, useMemo, useCallback)?",
      answer: `Memoization avoids expensive recalculations on every render.
  - React.memo: prevents re-rendering of components if props don't change.
  - useMemo: memoizes a computed value.
  - useCallback: memoizes a function.`
    },
    {
      id: 11,
      question: "How do you fetch data from an API in React?",
      answer: `Use useEffect for side-effect and fetch API.
  
  Example:
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(setData);
  }, []);`
    },
    {
      id: 12,
      question: "What is the difference between useEffect(() => {}, []) and useEffect(() => {}, [someValue])?",
      answer: `- [] means run only once on mount (componentDidMount).
  - [someValue] means run every time someValue changes.`
    },
    {
      id: 13,
      question: "What is custom hook and when do you create one?",
      answer: `Custom Hooks are functions that reuse Hook logic.
  Use them when logic is shared across components.
  
  Example:
  function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(url).then(res => res.json()).then(setData);
    }, [url]);
    return data;
  }`
    },
    {
      id: 14,
      question: "What is the use of useRef?",
      answer: `useRef is used to access DOM elements or store mutable values that don’t trigger re-render.
  
  Example:
  const inputRef = useRef();
  <input ref={inputRef} />`
    },
    {
      id: 15,
      question: "How do you style React components?",
      answer: `Ways to style:
  - Inline styles: style={{ color: 'blue' }}
  - CSS modules
  - Styled-components
  - Tailwind or Bootstrap frameworks`
    }
  ];
  
  export const reactadvanced = [
    {
      id: 1,
      question: "What is the reconciliation process in React?",
      answer: `Reconciliation is the process through which React updates the DOM by comparing 
  the previous and current virtual DOMs.
  It uses a diffing algorithm to identify changes and applies them efficiently to the real DOM.`
    },
    {
      id: 2,
      question: "What is the difference between controlled and uncontrolled inputs?",
      answer: `- Controlled: React controls the form input through state.
  - Uncontrolled: Input state is handled by the DOM.
  
  Example (Controlled):
  <input value={name} onChange={e => setName(e.target.value)} />`
    },
    {
      id: 3,
      question: "Explain React Fiber architecture.",
      answer: `React Fiber is a complete rewrite of the React core algorithm. It enables incremental rendering of the 
      virtual DOM, better error handling, and supports features like Suspense and Concurrent Mode.`
    },
    {
      id: 4,
      question: "What is Concurrent Mode in React?",
      answer: `Concurrent Mode allows React to interrupt rendering and work on multiple tasks simultaneously, 
      improving responsiveness and user experience.`
    },
    {
      id: 5,
      question: "What are error boundaries in React?",
      answer: `Error boundaries are React components that catch JavaScript errors in their child component tree 
      and display a fallback UI instead of crashing the whole app.
  
  Example:
  class ErrorBoundary extends React.Component {
    componentDidCatch(error, info) {
      // Handle error
    }
    render() {
      return this.props.children;
    }
  }`
    },
    {
      id: 6,
      question: "How does Suspense work in React?",
      answer: `Suspense lets you wait for something before rendering a component. Often used with lazy loading components or data fetching.
  
  Example:
  const LazyComp = React.lazy(() => import('./Component'));
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComp />
  </Suspense>`
    },
    {
      id: 7,
      question: "How to implement code splitting in React?",
      answer: `Code splitting helps load parts of the app on demand to improve performance. Use dynamic import() and React.lazy.
  
  Example:
  const Page = React.lazy(() => import('./Page'));`
    },
    {
      id: 8,
      question: "What is server-side rendering (SSR) in React?",
      answer: `SSR renders React components on the server instead of the browser, improving performance and SEO.
  Frameworks like Next.js provide SSR support.`
    },
    {
      id: 9,
      question: "Explain hydration in React.",
      answer: `Hydration is the process where React attaches event listeners to static HTML that was rendered by the server during SSR.`
    },
    {
      id: 10,
      question: "What are higher-order components (HOC)?",
      answer: `A HOC is a function that takes a component and returns a new component with additional props or logic.
  
  Example:
  function withLogger(WrappedComponent) {
    return function(props) {
      console.log(props);
      return <WrappedComponent {...props} />;
    }`
    },
    {
      id: 11,
      question: "What is the difference between useLayoutEffect and useEffect?",
      answer: `useLayoutEffect runs synchronously *after* all DOM mutations, while useEffect runs *after* the paint. 
      For layout measurements, use useLayoutEffect.`
    },
    {
      id: 12,
      question: "What is the purpose of lazy loading in React?",
      answer: `Lazy loading defers loading components until they are needed, improving initial load time.
  
  Use React.lazy and Suspense.`
    },
    {
      id: 13,
      question: "Explain the working of Redux and how it integrates with React.",
      answer: `Redux is a state management library. It stores global state in a single store and updates it through actions and reducers.
  Use react-redux’s Provider to integrate Redux with React.`
    },
    {
      id: 14,
      question: "What are some best practices for large-scale React applications?",
      answer: `- Component reusability
  - Use Context or Redux for global state
  - Code splitting
  - Folder structure & modularization
  - Performance optimization
  - Proper error boundaries`
    },
    {
      id: 15,
      question: "How would you handle authentication in a React application?",
      answer: `Common approach:
  - Login form with username/password
  - Call authentication API
  - Store token in localStorage or cookies
  - Protect routes using PrivateRoute and conditionally render components.`
    }
  ];
  

  
  