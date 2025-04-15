export const htmlbasic = [
    {
      id: 1,
      question: "What is HTML?",
      answer: `HTML stands for HyperText Markup Language. It is the standard language used to create and design the structure of web pages. 
  It consists of a series of elements (tags) that tell the browser how to display the content.
  
  For example:
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Web Page</title>
    </head>
    <body>
      <h1>Hello, world!</h1>
      <p>This is a paragraph.</p>
    </body>
  </html>
  
  Here, the <h1> tag defines a large heading, and <p> defines a paragraph.`
    },
    {
      id: 2,
      question: "What is the purpose of the <!DOCTYPE html> declaration?",
      answer: `The <!DOCTYPE html> declaration is used to inform the web browser about the version of HTML being used in the document. 
  In HTML5, it looks like this:
  
  <!DOCTYPE html>
  It ensures that the browser renders the page in standards mode. Without it, browsers may switch to quirks mode, which can cause inconsistent rendering across different browsers.`
    },
    {
      id: 3,
      question: "What are semantic elements in HTML?",
      answer: `Semantic elements are HTML tags that clearly describe their meaning in a human- and machine-readable way.
  
  Examples include:
  - <header>
  - <footer>
  - <article>
  - <section>
  - <nav>
  
  For example:
  <article>
    <h2>Blog Title</h2>
    <p>This is the blog content...</p>
  </article>
  
  Using semantic elements improves accessibility and SEO by making your code easier to understand for screen readers and search engines.`
    },
    {
      id: 4,
      question: "What is the difference between block and inline elements?",
      answer: `Block-level elements take up the full width of their container and start on a new line, while inline elements only take up as much width as necessary and do not start on a new line.
  
  Examples of block elements: <div>, <p>, <h1> to <h6>
  Examples of inline elements: <span>, <a>, <strong>
  
  Example:
  <p>This is a <span>highlighted</span> word in a paragraph.</p>
  
  Here, <p> is a block element and <span> is inline.`
    },
    {
      id: 5,
      question: "How do you insert an image in HTML?",
      answer: `You can insert an image using the <img> tag. It is a self-closing tag that requires the 'src' attribute to specify the image path and 'alt' for alternative text.
  
  Example:
  <img src="logo.png" alt="Company Logo" width="100" height="100">
  
  The 'alt' attribute improves accessibility and SEO, and is displayed when the image cannot be loaded.`
    },
    {
      id: 6,
      question: "What is the use of the <a> tag in HTML?",
      answer: `The <a> tag defines a hyperlink, which is used to link from one page to another.
  
  Example:
  <a href="https://www.example.com">Visit Example</a>
  
  You can use attributes like 'target="_blank"' to open the link in a new tab.`
    },
    {
      id: 7,
      question: "What are HTML attributes?",
      answer: `Attributes provide additional information about an element. They are always specified in the opening tag and come in name/value pairs like name="value".
  
  Example:
  <img src="image.jpg" alt="An image" width="200">
  
  Here, 'src', 'alt', and 'width' are attributes.`
    },
    {
      id: 8,
      question: "How do you add comments in HTML?",
      answer: `Comments in HTML are not displayed in the browser and are used for documentation.
  
  Syntax:
  <!-- This is a comment -->
  
  Comments can be placed anywhere in the HTML code.`
    },
    {
      id: 9,
      question: "What is the difference between <div> and <span>?",
      answer: `<div> is a block-level container used for grouping larger chunks of content. <span> is an inline container used for styling small portions of text.
  
  Example:
  <div class="container">
    <p>This is a paragraph inside a div.</p>
  </div>
  
  <p>This is a <span style="color:red">red word</span> in a sentence.</p>`
    },
    {
      id: 10,
      question: "What are void elements in HTML?",
      answer: `Void elements are self-closing and do not have an end tag. They include elements like <br>, <hr>, <img>, <input>, etc.
  
  Example:
  <br> adds a line break
  <hr> creates a horizontal rule
  <img src="logo.png" alt="Logo"> inserts an image.`
    },
    {
      id: 11,
      question: "What is the role of the <title> tag?",
      answer: `The <title> tag defines the title of the document, which appears in the browser tab and is used by search engines.
  
  Example:
  <head>
    <title>My Portfolio</title>
  </head>`
    },
    {
      id: 12,
      question: "What is nesting in HTML?",
      answer: `Nesting refers to placing HTML tags inside other tags to form a hierarchy or structure.
  
  Example:
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  
  Improper nesting can cause rendering issues.`
    },
    {
      id: 13,
      question: "What are lists in HTML?",
      answer: `HTML supports ordered (numbered) and unordered (bulleted) lists.
  
  Example:
  <ol>
    <li>First</li>
    <li>Second</li>
  </ol>
  
  <ul>
    <li>Apple</li>
    <li>Banana</li>
  </ul>`
    },
    {
      id: 14,
      question: "What is the use of the <meta> tag?",
      answer: `The <meta> tag provides metadata about the HTML document such as character encoding, author, viewport settings, etc.
  
  Example:
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  This helps with SEO, accessibility, and responsiveness.`
    },
    {
      id: 15,
      question: "What are HTML entities?",
      answer: `HTML entities are used to display reserved characters in HTML.
  
  Example:
  - &lt; displays '<'
  - &gt; displays '>'
  - &amp; displays '&'
  
  This prevents browser misinterpretation of symbols.
  
  Example usage:
  <p>5 &lt; 10 is true.</p>`
    }
  ];
  
  export const htmlintermediate = [
    {
      id: 1,
      question: "What is the purpose of the <meta> tag?",
      answer: `The <meta> tag in HTML provides metadata about the HTML document that is not displayed on the web page itself. It helps browsers understand how to render the content and also assists search engines with SEO. Common uses include:
  
  - Setting the character encoding:
    <meta charset="UTF-8">
  
  - Setting the viewport for responsive design:
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  - Describing the page:
    <meta name="description" content="This is a portfolio website.">
  
  - Keywords for SEO:
    <meta name="keywords" content="HTML, CSS, JavaScript">
  
  These tags are placed inside the <head> section of the document.`
    },
    {
      id: 2,
      question: "Explain the difference between id and class attributes.",
      answer: `The 'id' attribute is used to uniquely identify a single element in an HTML document. Only one element can have a given 'id'. The 'class' attribute, on the other hand, can be used to identify multiple elements with the same style or behavior.
  
  Example:
  <div id="main-header">Welcome</div>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  
  In CSS:
  #main-header {
    font-size: 24px;
  }
  .card {
    border: 1px solid gray;
  }`
    },
    {
      id: 3,
      question: "How do you create a table in HTML? List essential tags used.",
      answer: `To create a table in HTML, use the following tags:
  - <table>: Defines the table.
  - <tr>: Table row.
  - <th>: Table header cell.
  - <td>: Table data cell.
  
  Example:
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
  </table>`
    },
    {
      id: 4,
      question: "What are the different input types available in HTML5?",
      answer: `HTML5 introduced new input types to enhance form functionalities. Common types include:
  - text
  - email
  - password
  - number
  - date
  - color
  - range
  - url
  - tel
  - search
  
  Example:
  <input type="email" placeholder="Enter your email">
  <input type="color">
  <input type="date">`
    },
    {
      id: 5,
      question: "How does the <form> tag work? Explain form attributes like action, method.",
      answer: `The <form> tag is used to collect user input. It contains input elements like <input>, <textarea>, <select>, and buttons.
  
  Key attributes:
  - action: URL where form data is sent (e.g., server endpoint).
  - method: HTTP method (GET or POST) used to send the data.
  
  Example:
  <form action="/submit" method="post">
    <input type="text" name="username">
    <input type="submit">
  </form>`
    },
    {
      id: 6,
      question: "What is the difference between relative and absolute URLs?",
      answer: `An absolute URL includes the full path, including protocol and domain name.
  Example: https://www.example.com/page.html
  
  A relative URL refers to a path relative to the current page.
  Example: /images/pic.jpg
  
  Use relative URLs for internal links and absolute for external.`
    },
    {
      id: 7,
      question: "How do you use the <iframe> tag?",
      answer: `The <iframe> tag is used to embed another HTML page or resource within the current page.
  
  Example:
  <iframe src="https://www.example.com" width="600" height="400"></iframe>
  
  It can also be used to embed videos, maps, etc. Security policies may restrict some embedded content.`
    },
    {
      id: 8,
      question: "What is the use of the <label> tag in forms?",
      answer: `The <label> tag is used to define labels for form elements, improving accessibility.
  
  Example:
  <label for="email">Email:</label>
  <input type="email" id="email">
  
  Clicking the label focuses the corresponding input.`
    },
    {
      id: 9,
      question: "What are the global attributes in HTML?",
      answer: `Global attributes can be used with any HTML element. Examples include:
  - id
  - class
  - style
  - title
  - data-* (custom data)
  - hidden
  - draggable
  
  Example:
  <p id="para1" title="Paragraph">Hello World</p>`
    },
    {
      id: 10,
      question: "What is the difference between <section>, <article>, and <div>?",
      answer: `<section>: Defines a standalone section (thematic grouping).
  <article>: Represents independent, self-contained content.
  <div>: Generic container with no semantic meaning.
  
  Example:
  <section>
    <h2>Features</h2>
  </section>
  
  <article>
    <h2>Blog Post</h2>
  </article>
  
  <div class="container">Some content</div>`
    },
    {
      id: 11,
      question: "How do you embed audio and video in HTML5?",
      answer: `HTML5 provides the <audio> and <video> tags for media embedding.
  
  Example:
  <audio controls>
    <source src="sound.mp3" type="audio/mpeg">
  </audio>
  
  <video controls width="400">
    <source src="movie.mp4" type="video/mp4">
  </video>
  
  The 'controls' attribute adds play, pause, and volume controls.`
    },
    {
      id: 12,
      question: "What are void (self-closing) elements in HTML?",
      answer: `Void elements are HTML tags that do not have closing tags. They include:
  - <img>
  - <br>
  - <hr>
  - <input>
  - <meta>
  
  Example:
  <br> adds a line break
  <img src="logo.png" alt="logo">`
    },
    {
      id: 13,
      question: "What is the use of the autocomplete attribute in forms?",
      answer: `The autocomplete attribute allows the browser to pre-fill input fields based on previously entered values.
  
  Example:
  <form autocomplete="on">
    <input name="email" type="email">
  </form>
  
  You can set it to "on" or "off" to enable or disable auto-completion.`
    },
    {
      id: 14,
      question: "What are data-* attributes in HTML5?",
      answer: `Data attributes allow you to store custom data on elements without affecting HTML validation.
  
  Example:
  <div data-user-id="12345" data-role="admin">User Info</div>
  
  In JavaScript:
  div.dataset.userId returns "12345"`
    },
    {
      id: 15,
      question: "What is the <fieldset> and <legend> tag used for?",
      answer: `<fieldset> groups related fields within a form.
  <legend> provides a caption for the fieldset.
  
  Example:
  <fieldset>
    <legend>Personal Info</legend>
    <label>Name:</label>
    <input type="text">
  </fieldset>`
    }
  ];

  export const htmladvanced = [
    {
      id: 1,
      question: "What is the difference between async and defer in script tags?",
      answer: `Both 'async' and 'defer' are boolean attributes used in the <script> tag to improve page loading performance by loading JavaScript asynchronously.
  
  - async: The script is fetched in parallel and executed as soon as it’s downloaded. It does not wait for HTML parsing to complete, which can lead to race conditions if the script depends on DOM.
  
  - defer: The script is fetched in parallel but executed after the HTML is completely parsed. Scripts with 'defer' are guaranteed to execute in order.
  
  Example:
  <script src="app.js" async></script>
  <script src="main.js" defer></script>`
    },
    {
      id: 2,
      question: "Explain the purpose and usage of the <canvas> element.",
      answer: `The <canvas> element is used for drawing graphics via JavaScript, such as charts, games, and image editing.
  
  Example:
  <canvas id="myCanvas" width="200" height="100"></canvas>
  JavaScript:
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 150, 75);`
    },
    {
      id: 3,
      question: "How do you implement responsive images using srcset?",
      answer: `The 'srcset' attribute allows the browser to choose the best image based on screen size and resolution.
  
  Example:
  <img src="small.jpg" 
       srcset="medium.jpg 768w, large.jpg 1200w" 
       sizes="(max-width: 768px) 100vw, 50vw" 
       alt="Responsive image">
  
  This ensures better performance and user experience across devices.`
    },
    {
      id: 4,
      question: "What are custom data attributes and how are they accessed in JavaScript?",
      answer: `Custom data attributes use the 'data-*' syntax to store extra information on elements.
  
  Example:
  <div data-user-id="101" data-role="admin"></div>
  
  Access in JavaScript:
  const el = document.querySelector("div");
  console.log(el.dataset.userId); // "101"
  console.log(el.dataset.role);   // "admin"`
    },
    {
      id: 5,
      question: "How does browser rendering work with HTML and CSS?",
      answer: `Rendering involves several steps:
  1. Parsing HTML into the DOM tree.
  2. Parsing CSS into the CSSOM tree.
  3. Render Tree construction from DOM + CSSOM.
  4. Layout: Calculating positions and sizes.
  5. Painting: Filling in pixels.
  6. Compositing: Final image shown to user.
  
  Efficient structure and styles lead to faster rendering and better performance.`
    },
    {
      id: 6,
      question: "What are ARIA roles and how do they help with accessibility?",
      answer: `ARIA (Accessible Rich Internet Applications) roles enhance accessibility by providing additional information to screen readers.
  
  Example:
  <nav role="navigation">
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
  
  ARIA attributes help users with disabilities navigate complex UIs like tabs, sliders, and modals.`
    },
    {
      id: 7,
      question: "How do you improve SEO using semantic HTML?",
      answer: `Semantic HTML uses meaningful tags like <article>, <nav>, <header>, <footer>, <section> that help search engines understand content structure.
  
  Benefits:
  - Better readability for bots and humans
  - Improved accessibility
  - Higher SEO rankings
  
  Example:
  <article>
    <h1>Blog Title</h1>
    <p>Blog content...</p>
  </article>`
    },
    {
      id: 8,
      question: "What is the Shadow DOM and how is it used?",
      answer: `Shadow DOM is a part of Web Components and allows encapsulation of markup and styles.
  
  Example:
  const shadow = element.attachShadow({ mode: 'open' });
  shadow.innerHTML = '<style>p { color: red; }</style><p>Hello</p>';
  
  This keeps styles and elements separate from the main DOM, avoiding conflicts.`
    },
    {
      id: 9,
      question: "Explain HTML Web Storage: localStorage vs sessionStorage.",
      answer: `Web Storage provides key-value storage in the browser:
  - localStorage: Persists even after the browser is closed.
  - sessionStorage: Exists only during page session.
  
  Example:
  localStorage.setItem('theme', 'dark');
  sessionStorage.setItem('user', 'Alice');
  
  You can retrieve with getItem and delete with removeItem.`
    },
    {
      id: 10,
      question: "What is the contenteditable attribute?",
      answer: `The 'contenteditable' attribute allows an element’s content to be edited directly in the browser.
  
  Example:
  <div contenteditable="true">Edit me</div>
  
  Useful for making user-editable areas without forms.`
    },
    {
      id: 11,
      question: "What are the limitations of HTML?",
      answer: `HTML alone cannot:
  - Create dynamic content (needs JavaScript)
  - Style elements (needs CSS)
  - Interact with databases (needs backend tech)
  
  HTML is a structure-only language and needs to be paired with other technologies for full functionality.`
    },
    {
      id: 12,
      question: "How do HTML5 APIs (like Geolocation, Drag and Drop) integrate with HTML?",
      answer: `HTML5 APIs are accessed using JavaScript but often use HTML elements for integration.
  
  Example - Geolocation:
  navigator.geolocation.getCurrentPosition(pos => {
    console.log(pos.coords.latitude);
  });
  
  Drag & Drop:
  HTML: <div draggable="true">Drag me</div>`
    },
    {
      id: 13,
      question: "How can you implement lazy loading for images in HTML?",
      answer: `Use the 'loading="lazy"' attribute to delay loading images until they appear in the viewport.
  
  Example:
  <img src="photo.jpg" loading="lazy" alt="Lazy image">
  
  Improves performance by reducing initial page load time.`
    },
    {
      id: 14,
      question: "What is a polyfill and when is it used in HTML5 features?",
      answer: `A polyfill is JavaScript code that provides modern HTML5 or CSS3 functionality to older browsers that do not natively support them.
  
  Example:
  HTML5 Shiv is a polyfill to support HTML5 elements in IE8:
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>`
    },
    {
      id: 15,
      question: "How do you include external resources (like fonts, stylesheets, or scripts) efficiently in HTML?",
      answer: `Efficient practices include:
  - Placing CSS in the <head>:
    <link rel="stylesheet" href="style.css">
  - Using async/defer for scripts:
    <script src="script.js" defer></script>
  - Prefetching fonts:
    <link rel="preconnect" href="https://fonts.googleapis.com">
  
  This improves performance and load time.`
    }
  ];
  
  