  export const jsbasic = [
    {
      id: 1,
      question: "What is JavaScript?",
      answer: `JavaScript is a high-level, interpreted programming language that allows you to make web pages interactive. It runs on the client side in the browser and can manipulate HTML and CSS content dynamically. JavaScript supports object-oriented, imperative, and functional programming styles.
  
  Example:
  document.getElementById('demo').innerHTML = 'Hello, JavaScript!';`
    },
    {
      id: 2,
      question: "What are variables in JavaScript?",
      answer: `Variables are used to store data values. In JavaScript, you can declare a variable using var, let, or const.
  
  Example:
  let name = 'Alice';
  const age = 25;
  var country = 'India';`
    },
    {
      id: 3,
      question: "What are data types in JavaScript?",
      answer: `JavaScript has dynamic typing and supports the following data types:
  - Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt
  - Non-primitive: Objects, Arrays, Functions
  
  Example:
  let str = 'Hello';
  let num = 42;
  let obj = { name: 'Bob' };`
    },
    {
      id: 4,
      question: "What is the difference between == and === in JavaScript?",
      answer: `- == compares values after type coercion.
  - === compares both value and type (strict equality).
  
  Example:
  '5' == 5 // true
  '5' === 5 // false`
    },
    {
      id: 5,
      question: "What are functions in JavaScript?",
      answer: `Functions are blocks of reusable code that perform a task. JavaScript supports function declarations, expressions, and arrow functions.
  
  Example:
  function greet() {
    return 'Hello';
  }`
    },
    {
      id: 6,
      question: "What is an array in JavaScript?",
      answer: `An array is a special variable that can hold more than one value.
  
  Example:
  let fruits = ['Apple', 'Banana', 'Cherry'];`
    },
    {
      id: 7,
      question: "What is an object in JavaScript?",
      answer: `An object is a collection of key-value pairs.
  
  Example:
  let person = {
    name: 'John',
    age: 30
  };`
    },
    {
      id: 8,
      question: "What is the difference between null and undefined?",
      answer: `- undefined means a variable has been declared but not assigned a value.
  - null is an assignment value that represents no value.
  
  Example:
  let a;
  let b = null;`
    },
    {
      id: 9,
      question: "What is the use of typeof operator?",
      answer: `The typeof operator returns the type of a variable or expression.
  
  Example:
  typeof 123 // 'number'
  typeof 'abc' // 'string'`
    },
    {
      id: 10,
      question: "What is NaN in JavaScript?",
      answer: `NaN stands for Not-a-Number. It is returned when a mathematical operation fails to produce a valid number.
  
  Example:
  let x = 0 / 0; // NaN`
    },
    {
      id: 11,
      question: "How do you write comments in JavaScript?",
      answer: `You can write:
  - Single-line comments using //
  - Multi-line comments using /* ... */
  
  Example:
  // This is a comment
  /* This is a 
     multi-line comment */`
    },
    {
      id: 12,
      question: "What is event handling in JavaScript?",
      answer: `Event handling is the mechanism to execute code when a user interacts with the web page (e.g., click, mouseover).
  
  Example:
  document.getElementById('btn').addEventListener('click', () => alert('Clicked!'));
  `
    },
    {
      id: 13,
      question: "What is DOM in JavaScript?",
      answer: `DOM (Document Object Model) is a programming interface that allows JavaScript to interact with HTML and change content, structure, and style.
  
  Example:
  document.getElementById('title').innerHTML = 'New Title';`
    },
    {
      id: 14,
      question: "What is hoisting in JavaScript?",
      answer: `Hoisting is JavaScript’s default behavior of moving declarations to the top of the scope before code execution.
  
  Example:
  console.log(x); // undefined
  var x = 5;`
    },
    {
      id: 15,
      question: "What are template literals in JavaScript?",
      answer: `Template literals allow embedded expressions and multiline strings using backticks (\`).
  
  Example:
  let name = 'Alice';
  let greeting = "Hello +name ";
  console.log(greeting); // Hello, Alice!`
    }
  ];
  
  export const jsintermediate = [
    {
      id: 1,
      question: "What are closures in JavaScript?",
      answer: `A closure is the combination of a function and the lexical environment within which it was declared. Closures allow functions to access variables from an enclosing scope even after that scope has closed.
  
  Example:
  function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    }
  }
  const counter = outer();
  counter(); // 1
  counter(); // 2`
    },
    {
      id: 2,
      question: "What is the difference between let, const, and var?",
      answer: `- var is function-scoped, can be re-declared and updated.
  - let is block-scoped, cannot be re-declared but can be updated.
  - const is block-scoped, cannot be re-declared or updated.
  
  Example:
  var a = 10;
  let b = 20;
  const c = 30;`
    },
    {
      id: 3,
      question: "What is the 'this' keyword in JavaScript?",
      answer: `The 'this' keyword refers to the object that is executing the current function. Its value depends on how the function is called.
  
  Example:
  const obj = {
    name: 'Alice',
    greet() {
      console.log(this.name);
    }
  };
  obj.greet(); // Alice`
    },
    {
      id: 4,
      question: "What is a promise in JavaScript?",
      answer: `A promise represents a value that may be available now, later, or never. It is used for asynchronous operations.
  
  Example:
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), 1000);
  });
  promise.then(result => console.log(result));`
    },
    {
      id: 5,
      question: "Explain event bubbling and capturing.",
      answer: `Event bubbling: The event starts from the innermost element and bubbles up to its parents.
  Event capturing: The event is captured from the outermost element and propagates inward.
  
  Use addEventListener with the third argument to specify capture phase.
  
  Example:
  div.addEventListener('click', handler, true); // Capturing
  span.addEventListener('click', handler);      // Bubbling`
    },
    {
      id: 6,
      question: "What are arrow functions?",
      answer: `Arrow functions are a shorter syntax for writing functions. They do not bind their own 'this'.
  
  Example:
  const add = (a, b) => a + b;
  console.log(add(2, 3)); // 5`
    },
    {
      id: 7,
      question: "What is destructuring in JavaScript?",
      answer: `Destructuring is a way to unpack values from arrays or properties from objects into distinct variables.
  
  Example:
  const person = { name: 'John', age: 30 };
  const { name, age } = person;
  console.log(name, age);`
    },
    {
      id: 8,
      question: "What are higher-order functions?",
      answer: `Higher-order functions are functions that take other functions as arguments or return them as results.
  
  Example:
  function greet(fn) {
    fn();
  }
  greet(() => console.log('Hello'));`
    },
    {
      id: 9,
      question: "What is the spread operator in JavaScript?",
      answer: `The spread operator (...) expands iterable elements (like arrays) into individual elements.
  
  Example:
  let arr = [1, 2, 3];
  let newArr = [...arr, 4, 5];
  console.log(newArr); // [1, 2, 3, 4, 5]`
    },
    {
      id: 10,
      question: "What is the rest parameter syntax?",
      answer: `The rest parameter allows a function to accept an indefinite number of arguments as an array.
  
  Example:
  function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
  }`
    },
    {
      id: 11,
      question: "What are template literals?",
      answer: `Template literals use backticks to allow embedded expressions and multiline strings.
  
  Example:
  let name = 'Jane';
  console.log("Hello, +name ");`
    },
    {
      id: 12,
      question: "What is the difference between map and forEach?",
      answer: `- map returns a new array and is used for transformation.
  - forEach performs actions but does not return anything useful.
  
  Example:
  let arr = [1, 2, 3];
  let doubled = arr.map(x => x * 2);`
    },
    {
      id: 13,
      question: "What is a callback function?",
      answer: `A callback is a function passed into another function as an argument to be executed later.
  
  Example:
  function greet(name, callback) {
    callback();
  }
  greet('John', () => console.log('Hi John'));`
    },
    {
      id: 14,
      question: "What is the difference between synchronous and asynchronous code?",
      answer: `- Synchronous code is executed line by line.
  - Asynchronous code allows execution to continue while waiting for operations like data fetching.
  
  Example:
  console.log('Start');
  setTimeout(() => console.log('Waited'), 1000);
  console.log('End');`
    },
    {
      id: 15,
      question: "What is the 'typeof' operator used for?",
      answer: `The typeof operator returns a string indicating the type of the operand.
  
  Example:
  console.log(typeof 123); // 'number'
  console.log(typeof 'abc'); // 'string'`
    }
  ]; 
  export const jsadvanced = [
    {
      id: 1,
      question: "What is event delegation in JavaScript?",
      answer: `Event delegation is a technique where a single event listener is added to a parent element to handle events for its child elements. It takes advantage of event bubbling.
  
  Example:
  document.getElementById('parent').addEventListener('click', function(e) {
    if (e.target && e.target.matches('button.className')) {
      console.log('Button clicked:', e.target);
    }
  });`
    },
    {
      id: 2,
      question: "Explain the concept of hoisting in JavaScript.",
      answer: `Hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compile phase.
  
  Example:
  console.log(x); // undefined
  var x = 5;
  
  function sayHi() {
    console.log('Hi');
  }`
    },
    {
      id: 3,
      question: "What are JavaScript generators?",
      answer: `Generators are functions that can be paused and resumed using the yield keyword. They return an iterator object.
  
  Example:
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  const g = gen();
  console.log(g.next()); // { value: 1, done: false }`
    },
    {
      id: 4,
      question: "What is a WeakMap and how is it different from Map?",
      answer: `WeakMap only accepts objects as keys and doesn't prevent garbage collection if there are no other references.
  
  Example:
  const wm = new WeakMap();
  let obj = {};
  wm.set(obj, 'value');
  obj = null; // Now eligible for GC`
    },
    {
      id: 5,
      question: "What are service workers in JavaScript?",
      answer: `Service workers are scripts that run in the background and enable features like push notifications and offline support.
  
  They intercept network requests and serve custom responses.
  
  Example:
  self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
  });`
    },
    {
      id: 6,
      question: "Explain the event loop in JavaScript.",
      answer: `The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.
  
  It handles asynchronous callbacks via the call stack and task queue.
  
  Example:
  console.log('Start');
  setTimeout(() => console.log('Timeout'), 0);
  console.log('End'); // Executes before timeout`
    },
    {
      id: 7,
      question: "What is the difference between call, apply, and bind?",
      answer: `- call: Invokes a function with a specified this value and arguments.
  - apply: Same as call but arguments are passed as an array.
  - bind: Returns a new function with a specified this value.
  
  Example:
  function greet(msg) {
    console.log(msg + ' ' + this.name);
  }
  const user = { name: 'John' };
  greet.call(user, 'Hi');
  greet.apply(user, ['Hello']);
  const boundGreet = greet.bind(user);
  boundGreet('Welcome');`
    },
    {
      id: 8,
      question: "What are modules in JavaScript?",
      answer: `Modules help organize code by splitting it into reusable pieces.
  
  Use export/import syntax:
  
  // math.js
  export function add(a, b) { return a + b; }
  
  // main.js
  import { add } from './math.js';`
    },
    {
      id: 9,
      question: "What is the difference between deep and shallow copy?",
      answer: `Shallow copy copies references of nested objects, while deep copy duplicates everything.
  
  Example:
  let a = { name: 'Alice', address: { city: 'NY' } };
  let b = { ...a };
  b.address.city = 'LA'; // b and a both changed
  
  Deep copy:
  let c = JSON.parse(JSON.stringify(a));`
    },
    {
      id: 10,
      question: "What is memoization in JavaScript?",
      answer: `Memoization is a performance optimization technique where function results are cached.
  
  Example:
  const memo = (fn) => {
    const cache = {};
    return (n) => {
      if (n in cache) return cache[n];
      return cache[n] = fn(n);
    };
  };
  const fib = memo(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));`
    },
    {
      id: 11,
      question: "What are proxies in JavaScript?",
      answer: `A Proxy allows you to define custom behavior for fundamental operations (e.g., property lookup).
  
  Example:
  const handler = {
    get(target, prop) {
      return prop in target ? target[prop] : 'Not Found';
    }
  };
  const proxy = new Proxy({ name: 'Jane' }, handler);
  console.log(proxy.age); // Not Found`
    },
    {
      id: 12,
      question: "What are asynchronous iterators?",
      answer: `Asynchronous iterators allow looping over async data using for-await-of loop.
  
  Example:
  async function* asyncGen() {
    yield 'A';
    yield 'B';
  }
  for await (let val of asyncGen()) {
    console.log(val);
  }`
    },
    {
      id: 13,
      question: "What is dynamic import in JavaScript?",
      answer: `Dynamic import allows loading modules on demand.
  
  Example:
  import('./module.js').then(module => {
    module.func();
  });`
    },
    {
      id: 14,
      question: "What is the difference between == and ===?",
      answer: `== checks for equality with type coercion.
  === checks for strict equality (no type conversion).
  
  Example:
  '5' == 5   // true
  '5' === 5  // false`
    },
    {
      id: 15,
      question: "What is the Temporal API in JavaScript?",
      answer: `Temporal is a new proposal that provides modern date/time handling.
  
  Example:
  const now = Temporal.Now.plainDateTimeISO();
  console.log(now.toString());`
    }
  ];
  