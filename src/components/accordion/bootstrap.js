  export const bootbasic = [
    {
      id: 1,
      question: "What is Bootstrap?",
      answer: `Bootstrap is a popular open-source CSS framework used for developing responsive and mobile-first websites. It provides a collection of reusable code, including HTML, CSS, and JavaScript components like navigation bars, forms, modals, buttons, and more.
  
  Example: 
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  
  Using Bootstrap classes, you can quickly design layouts without writing custom CSS.`
    },
    {
      id: 2,
      question: "What are the key features of Bootstrap?",
      answer: `Key features of Bootstrap include:
  
  - Mobile-first design: Prioritizes mobile view and then scales up.
  - Grid system: A 12-column responsive layout system.
  - Predefined CSS classes: For styling buttons, text, images, etc.
  - JavaScript plugins: Includes modals, dropdowns, carousels, etc.
  - Cross-browser compatibility: Works well across major browsers.`
    },
    {
      id: 3,
      question: "How do you include Bootstrap in a project?",
      answer: `You can include Bootstrap in three main ways:
  
  1. CDN (easiest method):
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  
  2. Download and host the files locally.
  3. Install via npm or yarn in a Node.js project:
  npm install bootstrap`
    },
    {
      id: 4,
      question: "What is the Bootstrap Grid System?",
      answer: `Bootstrap uses a 12-column responsive grid system to create layouts. You use rows and columns to structure content.
  
  Example:
  <div class="row">
    <div class="col-6">Column 1</div>
    <div class="col-6">Column 2</div>
  </div>
  
  This creates two equal-width columns that are responsive across devices.`
    },
    {
      id: 5,
      question: "What are containers in Bootstrap?",
      answer: `Containers are the most basic layout element in Bootstrap. They wrap content and provide left and right padding.
  
  Types:
  - .container: Fixed-width.
  - .container-fluid: Full-width container spanning the entire width of the viewport.
  
  Example:
  <div class="container">Content here</div>`
    },
    {
      id: 6,
      question: "What is the difference between .container and .container-fluid?",
      answer: `.container: Sets fixed width at each responsive breakpoint.
  .container-fluid: Always takes up 100% width of the viewport.
  
  Use .container for fixed layouts and .container-fluid for full-width layouts.`
    },
    {
      id: 7,
      question: "What are utility classes in Bootstrap?",
      answer: `Utility classes in Bootstrap are predefined classes that provide quick styling options.
  
  Examples:
  - .text-center → center aligns text
  - .m-3 → adds margin
  - .p-2 → adds padding
  - .d-flex → enables flexbox
  
  These help you style elements without writing custom CSS.`
    },
    {
      id: 8,
      question: "What are responsive breakpoints in Bootstrap?",
      answer: `Breakpoints define how the layout changes at different screen widths.
  
  Bootstrap breakpoints:
  - xs: <576px
  - sm: ≥576px
  - md: ≥768px
  - lg: ≥992px
  - xl: ≥1200px
  - xxl: ≥1400px
  
  Use them with grid and utilities like .col-md-6 or .d-none d-md-block.`
    },
    {
      id: 9,
      question: "How do you create a responsive navbar in Bootstrap?",
      answer: `You can use the .navbar, .navbar-expand, and .navbar-toggler classes.
  
  Example:
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      </ul>
    </div>
  </nav>`
    },
    {
      id: 10,
      question: "What is the use of the .row class in Bootstrap?",
      answer: `.row is used to create horizontal groups of columns. It ensures proper spacing between columns using negative margins and padding.
  
  Always place .col-* classes inside a .row.
  
  Example:
  <div class="row">
    <div class="col">Col 1</div>
    <div class="col">Col 2</div>
  </div>`
    },
    {
      id: 11,
      question: "What is a Jumbotron?",
      answer: `Jumbotron is a large box used for showcasing key content. In Bootstrap 5, it was removed but you can still replicate it using utilities.
  
  Example:
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Welcome!</h1>
    </div>
  </div>`
    },
    {
      id: 12,
      question: "What are buttons in Bootstrap and how do you style them?",
      answer: `Buttons use the .btn class followed by contextual classes.
  
  Example:
  <button class="btn btn-primary">Click Me</button>
  <button class="btn btn-danger">Delete</button>
  
  You can also use .btn-lg or .btn-sm for sizing.`
    },
    {
      id: 13,
      question: "How do you create forms in Bootstrap?",
      answer: `Bootstrap provides form-control classes to style form elements.
  
  Example:
  <form>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="email" class="form-control">
    </div>
  </form>`
    },
    {
      id: 14,
      question: "How does Bootstrap handle responsiveness?",
      answer: `Bootstrap is built mobile-first and uses flexible grids, media queries, and responsive utilities like .d-none, .d-md-block to adapt layouts to screen sizes.`
    },
    {
      id: 15,
      question: "What is the difference between .d-none and .invisible?",
      answer: `.d-none removes the element from the DOM flow, making it not occupy space.
  .invisible hides the element but still takes up space.
  
  Use .d-none for complete hiding and .invisible for visual hiding.`
    }
  ];


 
  
  export const bootintermediate = [
    {
      id: 1,
      question: "What is the difference between .d-none and .d-block classes?",
      answer: `.d-none hides the element entirely, removing it from the page layout.
  .d-block displays the element as a block element.
  
  Example:
  <div class="d-none">This is hidden</div>
  <div class="d-block">This is visible as block</div>`
    },
    {
      id: 2,
      question: "Explain the purpose of the .visually-hidden class.",
      answer: `.visually-hidden is used to hide elements visually while keeping them accessible to screen readers.
  
  This is useful for accessibility purposes.
  
  Example:
  <span class="visually-hidden">Screen reader only text</span>`
    },
    {
      id: 3,
      question: "What are contextual classes in Bootstrap?",
      answer: `Contextual classes change the appearance of components based on purpose.
  
  Examples include:
  - .text-primary
  - .bg-success
  - .btn-danger
  
  They help indicate states such as success, danger, info, etc.`
    },
    {
      id: 4,
      question: "How do you make a column stack on smaller screens?",
      answer: `Use responsive grid classes like .col-md-6.
  
  Example:
  <div class="row">
    <div class="col-12 col-md-6">Col 1</div>
    <div class="col-12 col-md-6">Col 2</div>
  </div>
  
  This makes each column full-width on small devices and half-width on medium+ devices.`
    },
    {
      id: 5,
      question: "What is a card in Bootstrap and how is it used?",
      answer: `A card is a flexible content container with options for headers, footers, images, and more.
  
  Example:
  <div class="card">
    <img src="image.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card Title</h5>
      <p class="card-text">Card content goes here.</p>
    </div>
  </div>`
    },
    {
      id: 6,
      question: "Explain how to use modals in Bootstrap.",
      answer: `Modals are used to show pop-up dialogs.
  
  Trigger button:
  <button data-bs-toggle="modal" data-bs-target="#myModal">Open Modal</button>
  
  Modal structure:
  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">...</div>
        <div class="modal-body">...</div>
      </div>
    </div>
  </div>`
    },
    {
      id: 7,
      question: "What is a tooltip and how is it implemented?",
      answer: `Tooltips provide hover text for elements.
  
  Example:
  <button data-bs-toggle="tooltip" title="Tooltip text">Hover me</button>
  
  Initialize tooltips using JavaScript:
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(t => new bootstrap.Tooltip(t));`
    },
    {
      id: 8,
      question: "How can you align items using flex utilities in Bootstrap?",
      answer: `Bootstrap provides flex utilities:
  - .d-flex: enables flex display
  - .justify-content-center: centers items horizontally
  - .align-items-center: centers items vertically
  
  Example:
  <div class="d-flex justify-content-center align-items-center">Centered content</div>`
    },
    {
      id: 9,
      question: "What are spacing utilities in Bootstrap?",
      answer: `Spacing utilities are used to add margin and padding.
  
  Syntax: m|p-{side}-{breakpoint}-{size}
  
  Example:
  - .m-3 → margin on all sides
  - .mt-2 → margin-top
  - .px-4 → padding left and right`
    },
    {
      id: 10,
      question: "How do you create responsive tables in Bootstrap?",
      answer: `Wrap the table in .table-responsive.
  
  Example:
  <div class="table-responsive">
    <table class="table">
      <thead>...</thead>
      <tbody>...</tbody>
    </table>
  </div>`
    },
    {
      id: 11,
      question: "What is the collapse component in Bootstrap?",
      answer: `Collapse is used to show/hide content.
  
  Example:
  <a data-bs-toggle="collapse" href="#collapseExample">Toggle</a>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">Hidden content</div>
  </div>`
    },
    {
      id: 12,
      question: "What are Bootstrap badges?",
      answer: `Badges are used for labels or counts.
  
  Example:
  <button class="btn btn-primary">
    Notifications <span class="badge bg-secondary">4</span>
  </button>`
    },
    {
      id: 13,
      question: "How do you use alerts in Bootstrap?",
      answer: `Alerts display important messages.
  
  Example:
  <div class="alert alert-warning">Warning alert!</div>`
    },
    {
      id: 14,
      question: "How do you implement a progress bar in Bootstrap?",
      answer: `Progress bars show task progress.
  
  Example:
  <div class="progress">
    <div class="progress-bar" style="width: 70%">70%</div>
  </div>`
    },
    {
      id: 15,
      question: "What is the purpose of Bootstrap’s helper classes?",
      answer: `Helper classes like .clearfix, .text-nowrap, .shadow, etc., provide quick styling and behavior tweaks without custom CSS.`
    }
  ];
  
  export const bootadvanced = [
    {
      id: 1,
      question: "What is the difference between Bootstrap and other CSS frameworks?",
      answer: `Bootstrap is a comprehensive, mobile-first, and responsive framework that includes pre-styled components, grid systems, and JavaScript plugins.
  
  Compared to others like Tailwind (utility-first) or Bulma (flexbox-based), Bootstrap is more component-rich and has wide adoption, making it easier for quick development.`
    },
    {
      id: 2,
      question: "How can you customize Bootstrap using Sass variables?",
      answer: `Bootstrap provides many Sass variables to customize styles globally.
  
  Example:
  scss
  $primary: #ff5733;
  $font-family-base: 'Open Sans', sans-serif;
  
  Then you recompile Bootstrap using these new variables for a custom look.`
    },
    {
      id: 3,
      question: "What is the purpose of Bootstrap’s utility API?",
      answer: `Bootstrap's Utility API allows developers to define and generate utility classes with custom values for margin, padding, colors, etc.
  
  It's defined in _utilities.scss and enables consistency and reusability.`
    },
    {
      id: 4,
      question: "Explain how Bootstrap 5 differs from Bootstrap 4.",
      answer: `Bootstrap 5 introduces several key changes:
  - No jQuery dependency
  - New offcanvas component
  - Improved grid with gutter utilities
  - RTL support
  - Enhanced form controls and utilities
  - Dropped IE10/11 support`
    },
    {
      id: 5,
      question: "How do you use the offcanvas component in Bootstrap?",
      answer: `Offcanvas components provide hidden sidebars that slide in.
  
  Example:
  html
  <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">Toggle</button>
  <div class="offcanvas offcanvas-start" id="offcanvasExample">
    <div class="offcanvas-header">...</div>
    <div class="offcanvas-body">...</div>
  </div>
  `
    },
    {
      id: 6,
      question: "How do you make a custom theme using Bootstrap?",
      answer: `Use Bootstrap's source Sass files. Override variables, import Bootstrap, and compile.
  
  Steps:
  1. Set your custom variables before importing Bootstrap.
  2. Compile with Sass:
  scss
  $primary: #3b5998;
  @import "bootstrap";`
  
    },
    {
      id: 7,
      question: "What is the Bootstrap Reboot and how does it differ from Normalize.css?",
      answer: `Bootstrap Reboot is a collection of CSS rules to normalize and improve browser consistency, derived from Normalize.css.
  
  Reboot includes:
  - Box-sizing rules
  - Margin resets
  - Headings/font-size normalization
  - Enhanced defaults over Normalize.css`
    },
    {
      id: 8,
      question: "How do breakpoints work in Bootstrap?",
      answer: `Breakpoints are responsive thresholds where layout behavior changes.
  
  Bootstrap’s default breakpoints:
  - sm: ≥576px
  - md: ≥768px
  - lg: ≥992px
  - xl: ≥1200px
  - xxl: ≥1400px
  
  Used with grid or utilities: .col-md-6, .d-lg-none, etc.`
    },
    {
      id: 9,
      question: "How does Bootstrap's grid system handle nested rows?",
      answer: `You can nest rows inside columns to build complex layouts.
  
  Example:
html
  <div class="row">
    <div class="col-6">
      <div class="row">
        <div class="col-6">Nested</div>
      </div>
    </div>
  </div>
  `
    },
    {
      id: 10,
      question: "What are the accessibility best practices in Bootstrap?",
      answer: `- Use semantic HTML tags
  - Use .visually-hidden for screen reader text
  - Ensure interactive elements are keyboard accessible
  - Include aria-* attributes in modals, navs, and alerts`
    },
    {
      id: 11,
      question: "What is the role of helper classes in responsive design?",
      answer: `Helper classes like .text-center, .float-end, .d-none are used to quickly adapt content layout for different screen sizes.
  
  They reduce custom CSS and make your layout more responsive.`
    },
    {
      id: 12,
      question: "How do Bootstrap’s icons work?",
      answer: `Bootstrap Icons is a separate icon library.
  
  You include via CDN:
  html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
  
  Usage:
  html
  <i class="bi bi-alarm"></i>
   `
    },
    {
      id: 13,
      question: "What is the purpose of Z-index utilities in Bootstrap?",
      answer: `Use .z-0, .z-1, .z-3 to manage stacking order of elements like modals, dropdowns, etc.
  
  Higher z-index brings the component in front.`
    },
    {
      id: 14,
      question: "How does Bootstrap handle print styles?",
      answer: `Bootstrap includes print-specific styles and utility classes like .d-print-none, .d-print-block for controlling visibility on print layouts.`
    },
    {
      id: 15,
      question: "How can you improve performance while using Bootstrap?",
      answer: `- Use minified files
  - Only import needed components via Sass
  - Combine and defer scripts
  - Use CDN for caching benefits`
    }
  ];
  
  