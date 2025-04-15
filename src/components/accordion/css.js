  export const cssbasic = [
    {
      id: 1,
      question: "What is CSS and why is it used?",
      answer: `CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls the layout, colors, fonts, spacing, and overall visual appearance of web elements. 
  
  Example:
  <p style="color: blue; font-size: 18px;">Hello CSS!</p>
  Or using external CSS:
  <style>
  p {
    color: blue;
    font-size: 18px;
  }
  </style>`
    },
    {
      id: 2,
      question: "What are the different types of CSS?",
      answer: `There are three types of CSS:
  1. **Inline CSS**: Applied directly on elements using the style attribute.
  2. **Internal CSS**: Defined within a <style> tag in the HTML <head>.
  3. **External CSS**: Linked through an external file using <link> tag.
  
  Example:
  <link rel="stylesheet" href="styles.css">`
    },
    {
      id: 3,
      question: "What is the difference between class and ID selectors in CSS?",
      answer: `- **Class selector**: Targets multiple elements and is prefixed with a dot (e.g., .btn).
  - **ID selector**: Targets a single unique element and is prefixed with a hash (e.g., #header).
  
  Example:
  CSS:
  .btn { background: green; }
  #header { color: red; }
  HTML:
  <div class="btn">Click</div>
  <div id="header">Welcome</div>`
    },
    {
      id: 4,
      question: "What is the box model in CSS?",
      answer: `The box model describes how elements are structured in CSS:
  - **Content**: The actual content.
  - **Padding**: Space around the content.
  - **Border**: Line around the padding.
  - **Margin**: Space outside the border.
  
  Example:
  div {
    margin: 10px;
    border: 1px solid black;
    padding: 20px;
  }`
    },
    {
      id: 5,
      question: "How can you add comments in CSS?",
      answer: `Comments in CSS are written using /* */ syntax.
  
  Example:
  /* This is a comment */
  div {
    color: blue;
  }`
    },
    {
      id: 6,
      question: "What are pseudo-classes in CSS?",
      answer: `Pseudo-classes are used to define the special state of an element.
  
  Example:
  a:hover {
    color: red;
  }
  
  :hover, :first-child, :nth-child(), :checked are some examples.`
    },
    {
      id: 7,
      question: "What is the difference between relative, absolute, and fixed positioning?",
      answer: `- **Relative**: Positioned relative to its normal position.
  - **Absolute**: Positioned relative to the nearest positioned ancestor.
  - **Fixed**: Positioned relative to the viewport and doesn’t move on scroll.
  
  Example:
  div {
    position: absolute;
    top: 50px;
  }`
    },
    {
      id: 8,
      question: "How do you apply styles to multiple elements?",
      answer: `You can separate selectors with commas.
  
  Example:
  h1, h2, p {
    color: navy;
  }`
    },
    {
      id: 9,
      question: "What is specificity in CSS?",
      answer: `Specificity determines which CSS rule is applied. Higher specificity overrides lower.
  
  Order:
  Inline > ID > Class > Element
  
  Example:
  #id { color: red; }
  .class { color: blue; }
  p { color: green; }`
    },
    {
      id: 10,
      question: "How do you link an external CSS file to an HTML document?",
      answer: `Use the <link> tag inside the <head> section:
  <link rel="stylesheet" href="styles.css">`
    },
    {
      id: 11,
      question: "What are media queries in CSS?",
      answer: `Media queries are used for responsive design.
  
  Example:
  @media (max-width: 768px) {
    body {
      background-color: lightblue;
    }
  }`
    },
    {
      id: 12,
      question: "What is a CSS selector?",
      answer: `A selector is used to target HTML elements.
  
  Example:
  p { color: red; }
  .btn { background: green; }`
    },
    {
      id: 13,
      question: "How do you center an element in CSS?",
      answer: `Horizontally center with:
  div {
    margin: 0 auto;
    width: 50%;
  }
  
  Using flexbox:
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
  }`
    },
    {
      id: 14,
      question: "What is inheritance in CSS?",
      answer: `Certain properties (like color, font) are inherited from parent elements by child elements.
  
  Example:
  div {
    color: red;
  }
  
  <p> inside the div will be red by inheritance.`
    },
    {
      id: 15,
      question: "How do you add Google Fonts in your webpage?",
      answer: `Use the <link> tag in the head:
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  
  Then use in CSS:
  body {
    font-family: 'Roboto', sans-serif;
  }`
    }
  ];
  
  
  export const cssintermediate = [
    {
      id: 1,
      question: "What is the difference between 'em', 'rem', and 'px' units in CSS?",
      answer: `- **px**: An absolute unit; 1px = 1 pixel on the screen.
  - **em**: Relative to the font-size of the parent element.
  - **rem**: Relative to the root (html) font-size.
  
  Example:
  html { font-size: 16px; }
  div { font-size: 2em; } /* 32px if parent is 16px */
  div { font-size: 2rem; } /* Always 32px */`
    },
    {
      id: 2,
      question: "What is the difference between visibility: hidden and display: none?",
      answer: `- **display: none** removes the element from the document flow; no space is occupied.
  - **visibility: hidden** hides the element, but the space is still occupied.
  
  Example:
  div { visibility: hidden; }
  div { display: none; }`
    },
    {
      id: 3,
      question: "What is Flexbox and why is it used?",
      answer: `Flexbox is a layout model that allows responsive alignment and distribution of items within a container.
  
  Example:
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }`
    },
    {
      id: 4,
      question: "What is the difference between inline, block, and inline-block elements?",
      answer: `- **inline**: Does not start on a new line; only takes as much width as necessary.
  - **block**: Takes up full width and starts on a new line.
  - **inline-block**: Like inline but allows setting width and height.
  
  Example:
  div { display: inline-block; width: 100px; height: 50px; }`
    },
    {
      id: 5,
      question: "How do you create a responsive layout in CSS?",
      answer: `Use flexible units (%, em, rem), media queries, and tools like Flexbox/Grid.
  
  Example:
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  }`
    },
    {
      id: 6,
      question: "What is the z-index in CSS?",
      answer: `z-index controls the stacking order of elements (higher z-index appears on top).
  
  Example:
  .box1 { z-index: 2; }
  .box2 { z-index: 1; }`
    },
    {
      id: 7,
      question: "What are pseudo-elements in CSS?",
      answer: `Pseudo-elements allow styling specific parts of an element.
  
  Examples:
  ::before, ::after, ::first-letter
  
  p::first-letter {
    font-size: 200%;
  }`
    },
    {
      id: 8,
      question: "What is the difference between relative and absolute positioning?",
      answer: `- **relative**: Positions relative to the element’s normal position.
  - **absolute**: Positions relative to the nearest positioned ancestor (not static).
  
  Example:
  .parent { position: relative; }
  .child { position: absolute; top: 10px; }`
    },
    {
      id: 9,
      question: "How does the calc() function work in CSS?",
      answer: `calc() allows mathematical expressions in CSS values.
  
  Example:
  width: calc(100% - 50px);`
    },
    {
      id: 10,
      question: "What is the difference between min-width, max-width, and width?",
      answer: `- **width**: Sets a fixed width.
  - **min-width**: Minimum possible width.
  - **max-width**: Maximum allowed width.
  
  Example:
  div {
    min-width: 200px;
    max-width: 500px;
  }`
    },
    {
      id: 11,
      question: "What are transitions in CSS?",
      answer: `Transitions provide smooth animation between states.
  
  Example:
  div {
    transition: background-color 0.5s ease;
  }`
    },
    {
      id: 12,
      question: "How does CSS Grid differ from Flexbox?",
      answer: `- **Flexbox** is one-dimensional (row or column).
  - **Grid** is two-dimensional (rows and columns).
  
  Example:
  display: grid;
  grid-template-columns: 1fr 1fr;`
    },
    {
      id: 13,
      question: "What are the different combinators in CSS?",
      answer: `Combinators define relationships between selectors:
  - **descendant** (space)
  - **child** (>)
  - **adjacent sibling** (+)
  - **general sibling** (~)
  
  Example:
  div > p { color: red; }`
    },
    {
      id: 14,
      question: "How do you apply styles conditionally in CSS?",
      answer: `Use pseudo-classes like :hover, :checked, :focus, or JS-based class toggling.
  
  Example:
  input:checked + label {
    color: green;
  }`
    },
    {
      id: 15,
      question: "What is the difference between opacity and visibility?",
      answer: `- **opacity: 0** hides element but keeps it in the layout; it's still clickable.
  - **visibility: hidden** hides element and reserves space.
  - **display: none** hides and removes space.
  
  Use depending on layout and interaction requirements.`
    }
  ];
 
  export const cssadvanced = [
    {
      id: 1,
      question: "What is the difference between CSS Grid and Flexbox?",
      answer: `- **CSS Grid** is a two-dimensional layout system (rows and columns).
  - **Flexbox** is one-dimensional (either row or column).
  
  Use Grid when you need to design complex layouts with both axes. Flexbox is better for simpler, linear layouts.
  
  Example:
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }`
    },
    {
      id: 2,
      question: "What is specificity in CSS and how is it calculated?",
      answer: `Specificity determines which CSS rule applies when multiple rules match an element. It is calculated based on:
  - Inline styles (1000)
  - IDs (100)
  - Classes/attributes/pseudo-classes (10)
  - Elements/pseudo-elements (1)
  
  Example:
  #id (100) > .class (10) > element (1)`
    },
    {
      id: 3,
      question: "What are pseudo-classes and pseudo-elements?",
      answer: `- **Pseudo-classes**: Apply styles based on state (e.g., :hover, :focus)
  - **Pseudo-elements**: Style specific parts (e.g., ::before, ::after)
  
  Example:
  a:hover { color: red; }
  p::first-letter { font-size: 200%; }`
    },
    {
      id: 4,
      question: "How do media queries work in CSS?",
      answer: `Media queries apply styles based on device characteristics like width, resolution, or orientation.
  
  Example:
  @media (max-width: 600px) {
    body { background-color: lightgray; }
  }`
    },
    {
      id: 5,
      question: "What is the difference between absolute, relative, fixed, and sticky positioning?",
      answer: `- **relative**: Relative to its normal position.
  - **absolute**: Relative to the nearest positioned ancestor.
  - **fixed**: Positioned relative to the viewport.
  - **sticky**: Switches between relative and fixed depending on scroll position.`
    },
    {
      id: 6,
      question: "What is the difference between transform, translate, and transition?",
      answer: `- **transform** changes an element’s appearance (rotate, scale, translate).
  - **translate** moves an element without affecting layout.
  - **transition** adds animation effects when values change.
  
  Example:
  div {
    transform: translateX(50px);
    transition: transform 0.3s ease;
  }`
    },
    {
      id: 7,
      question: "What is a CSS preprocessor and how is it useful?",
      answer: `A preprocessor like SASS or LESS extends CSS with variables, nesting, mixins, and functions. It helps organize and reuse styles more efficiently.
  
  Example (SASS):
  $main-color: #333;
  body { color: $main-color; }`
    },
    {
      id: 8,
      question: "What are keyframes in CSS animations?",
      answer: `@keyframes define intermediate steps in a CSS animation.
  
  Example:
  @keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  div {
    animation: slideIn 1s ease-in-out;
  }`
    },
    {
      id: 9,
      question: "How do you optimize CSS for performance?",
      answer: `- Minify CSS files.
  - Use shorthand properties.
  - Avoid deep selectors.
  - Combine files.
  - Remove unused CSS (purgecss).
  - Use critical CSS for above-the-fold content.`
    },
    {
      id: 10,
      question: "What is the stacking context in CSS?",
      answer: `Stacking context determines the order of overlapping elements (z-index).
  A new context is formed by:
  - root element
  - position: relative/absolute/fixed + z-index
  - opacity < 1
  
  Understanding it helps with z-index conflicts.`
    },
    {
      id: 11,
      question: "What are custom properties (CSS variables)?",
      answer: `Custom properties allow reusable values with the -- prefix.
  
  Example:
  :root {
    --main-color: #4CAF50;
  }
  button {
    background: var(--main-color);
  }`
    },
    {
      id: 12,
      question: "How do you create a mobile-first design in CSS?",
      answer: `Start with styles for small screens and add media queries for larger sizes.
  
  Example:
  body { font-size: 14px; }
  @media (min-width: 768px) {
    body { font-size: 16px; }
  }`
    },
    {
      id: 13,
      question: "What are the different ways to apply CSS to a web page?",
      answer: `- Inline styles (in the element)
  - Internal styles (inside <style> tag)
  - External styles (linked CSS file)
  
  Best practice: Use external CSS for maintainability.`
    },
    {
      id: 14,
      question: "What is reflow and repaint in CSS rendering?",
      answer: `- **Reflow**: Browser recalculates layout (expensive).
  - **Repaint**: Only visual changes like color.
  
  Avoid frequent DOM changes to improve performance.`
    },
    {
      id: 15,
      question: "What is the clamp() function in CSS?",
      answer: `clamp(min, preferred, max) lets you set responsive sizes.
  
  Example:
  font-size: clamp(1rem, 2vw, 2rem);`
    }
  ];
  