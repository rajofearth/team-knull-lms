export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  isActive?: boolean;
  videoUrl?: string;
  description?: string;
}

export interface Resource {
  title: string;
  type: string;
  icon: "file" | "folder";
  url: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessonsCompleted: number;
  totalLessons: number;
  lessons: Lesson[];
}

export interface Progress {
  percentage: number;
  lessonsCompleted: number;
  totalLessons: number;
  projectsCompleted: number;
  totalProjects: number;
  quizScore: number;
  certificateAvailable: boolean;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  stats: {
    students: string;
    courses: number;
    rating: number;
  };
  coursesOnPlatform: {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
    rating: number;
  }[];
}

export interface Overview {
  whatYouWillLearn: string[];
  requirements: string[];
  detailedDescription: string;
  syllabus: string[];
  applications: string[];
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  rating: number;
  reviewsCount: string | number;
  studentsCount: string;
  level: string;
  duration: string;
  thumbnail: string;
  badge?: string;
  price: number;
  progress: Progress;
  resources: Resource[];
  modules: Module[];
  overview: Overview;
  instructors: Instructor[];
}

export const courses: Record<string, CourseData> = {
  "web-dev": {
    id: "web-dev",
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, and modern web development by building real-world projects. From zero to job-ready.",
    rating: 4.7,
    reviewsCount: 892,
    studentsCount: "12,430",
    level: "Beginner to Advanced",
    duration: "25 Hours",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/57D02ZX8T4T6X7YR0XTTDXRA9J.jpg",
    badge: "New",
    price: 59,
    progress: {
      percentage: 65,
      lessonsCompleted: 18,
      totalLessons: 28,
      projectsCompleted: 3,
      totalProjects: 5,
      quizScore: 82,
      certificateAvailable: true,
    },
    resources: [
      { title: "HTML Cheatsheet", type: "PDF", icon: "file", url: "#" },
      { title: "CSS Starter Pack", type: "ZIP", icon: "folder", url: "#" },
      { title: "JS Reference Guide", type: "PDF", icon: "file", url: "#" },
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 · Getting Started",
        description: "The World Wide Web operates on a fundamental client-server architecture. When a user requests a webpage, their browser acts as the client, sending an HTTP request across the internet to a server hosting the site's files. The Domain Name System (DNS) functions as the internet's directory, translating human-readable domain names into IP addresses. At the structural core of these delivered files is HTML (HyperText Markup Language). HTML is not a programming language, but a markup language that utilizes a system of tags to define the semantic structure and content of a document, instructing the browser on how to interpret headings, paragraphs, links, and media elements within the document object model.",
        lessonsCompleted: 5,
        totalLessons: 5,
        lessons: [
          { id: "l1", title: "1. Introduction to Web Development", duration: "04:32", isCompleted: true, videoUrl: "https://example.com/v1", description: "Learn what web development is and the roles of HTML, CSS, and JS." },
          { id: "l2", title: "2. How the Web Works", duration: "06:18", isCompleted: true, videoUrl: "https://example.com/v2", description: "Understand DNS, servers, and how browsers render pages." },
          { id: "l3", title: "3. Setting Up Your Environment", duration: "05:45", isCompleted: true, videoUrl: "https://example.com/v3", description: "Install VS Code and essential extensions." },
          { id: "l4", title: "4. HTML Basics", duration: "08:23", isCompleted: true, videoUrl: "https://example.com/v4", description: "Learn the core structure of an HTML document." },
          { id: "l5", title: "5. HTML Elements and Structure", duration: "10:15", isCompleted: true, isActive: true, videoUrl: "https://example.com/v5", description: "Deep dive into semantic HTML elements like header, main, and footer." },
        ],
      },
      {
        id: "m2",
        title: "Module 2 · CSS Fundamentals",
        description: "While HTML provides the structural skeleton of a web document, Cascading Style Sheets (CSS) dictate its visual presentation. CSS operates on a rule-based system where selectors target specific HTML elements to apply aesthetic properties. Central to CSS layout is the Box Model, a paradigm dictating that every HTML element is encapsulated within a rectangular box comprising content, padding, borders, and margins. Modern web design relies heavily on flexible layout systems; Flexbox provides a one-dimensional layout model ideal for aligning items in rows or columns, whereas CSS Grid offers a two-dimensional system for constructing complex, responsive page architectures that adapt seamlessly to varying viewport dimensions.",
        lessonsCompleted: 6,
        totalLessons: 6,
        lessons: [
          { id: "l6", title: "6. Introduction to CSS", duration: "07:45", isCompleted: true, videoUrl: "https://example.com/v6", description: "Adding styles to your raw HTML using external stylesheets." },
          { id: "l7", title: "7. CSS Selectors and Properties", duration: "12:20", isCompleted: true, videoUrl: "https://example.com/v7", description: "Targeting specific elements and changing their visual attributes." },
          { id: "l8", title: "8. The Box Model", duration: "09:15", isCompleted: true, videoUrl: "https://example.com/v8", description: "Understanding padding, margins, borders, and element dimensions." },
          { id: "l9", title: "9. Flexbox Layouts", duration: "15:30", isCompleted: true, videoUrl: "https://example.com/v9", description: "Creating fluid and flexible one-dimensional layouts." },
          { id: "l10", title: "10. Grid Systems", duration: "14:10", isCompleted: true, videoUrl: "https://example.com/v10", description: "Building complex two-dimensional website layouts." },
          { id: "l11", title: "11. Responsive Design", duration: "11:50", isCompleted: true, videoUrl: "https://example.com/v11", description: "Making your website look great on mobile phones and tablets using media queries." },
        ],
      },
      {
        id: "m3",
        title: "Module 3 · JavaScript Basics",
        description: "JavaScript is a high-level, interpreted programming language that introduces dynamic interactivity to otherwise static web documents. It is a multi-paradigm language supporting object-oriented, imperative, and declarative styles. Execution occurs within a lexical environment where variables store data primitives or complex references like arrays and objects. Control flow is managed through conditional statements and iterative loops. Crucially, JavaScript interacts with the browser environment via the Document Object Model (DOM) API, a tree-like representation of the HTML document. By querying and manipulating DOM nodes, JavaScript can dynamically alter content, inject styling, and attach event listeners to asynchronously respond to user inputs.",
        lessonsCompleted: 7,
        totalLessons: 7,
        lessons: [
          { id: "l12", title: "12. JS Syntax and Variables", duration: "08:10", isCompleted: true, videoUrl: "https://example.com/v12", description: "Let, const, and basic syntax rules." },
          { id: "l13", title: "13. Data Types and Operators", duration: "10:30", isCompleted: true, videoUrl: "https://example.com/v13", description: "Strings, numbers, booleans, null, and undefined." },
          { id: "l14", title: "14. Functions and Scope", duration: "13:45", isCompleted: true, videoUrl: "https://example.com/v14", description: "Creating reusable blocks of code and understanding lexical scope." },
          { id: "l15", title: "15. Conditionals and Loops", duration: "11:20", isCompleted: true, videoUrl: "https://example.com/v15", description: "If/else statements, switch cases, for, and while loops." },
          { id: "l16", title: "16. Arrays and Objects", duration: "14:50", isCompleted: true, videoUrl: "https://example.com/v16", description: "Storing and manipulating collections of data." },
          { id: "l17", title: "17. DOM Manipulation", duration: "16:15", isCompleted: true, videoUrl: "https://example.com/v17", description: "Selecting HTML elements and modifying them using JavaScript." },
          { id: "l18", title: "18. Event Listeners", duration: "12:40", isCompleted: true, videoUrl: "https://example.com/v18", description: "Making web pages interactive by responding to user clicks and keystrokes." },
        ],
      },
      {
        id: "m4",
        title: "Module 4 · Frontend Frameworks (React)",
        description: "As web applications escalate in complexity, imperative DOM manipulation becomes difficult to maintain. React, a declarative JavaScript library, addresses this by introducing a component-based architecture. A React component is a self-contained, reusable piece of the user interface that encapsulates its own structure (written in JSX), styling, and logic. React utilizes a Virtual DOM to optimize rendering; instead of directly manipulating the actual DOM, React calculates the most efficient minimal set of changes required to synchronize the UI with underlying data state. State management and side effects in modern React are handled via Hooks, allowing functional components to maintain internal data across render cycles.",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l19", title: "19. Introduction to React", duration: "11:20", isCompleted: false, videoUrl: "https://example.com/v19", description: "Why use frameworks? Setting up a Vite + React project." },
          { id: "l20", title: "20. Components & JSX", duration: "14:05", isCompleted: false, videoUrl: "https://example.com/v20", description: "Writing HTML inside JavaScript and building modular UI blocks." },
          { id: "l21", title: "21. State and Props", duration: "18:45", isCompleted: false, videoUrl: "https://example.com/v21", description: "Passing data between components and managing local data." },
          { id: "l22", title: "22. Handling Events in React", duration: "12:10", isCompleted: false, videoUrl: "https://example.com/v22", description: "React-specific event handling patterns." },
          { id: "l23", title: "23. React Hooks (useState & useEffect)", duration: "20:30", isCompleted: false, videoUrl: "https://example.com/v23", description: "The magic of modern React functional components." },
        ],
      },
      {
        id: "m5",
        title: "Module 5 · Backend & APIs",
        description: "Server-side, or backend, development involves the architecture that operates behind the scenes, securely managing data and serving client requests. Application Programming Interfaces (APIs) act as the intermediary communication layer, utilizing Representational State Transfer (REST) principles and JavaScript Object Notation (JSON) payloads over HTTP. Node.js allows JavaScript to be executed outside the browser via the V8 engine, enabling asynchronous, non-blocking server operations. Express.js, a minimal routing framework for Node, streamlines the creation of endpoints. Ultimately, these server architectures must be containerized and deployed to cloud hosting environments to ensure continuous global availability.",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l24", title: "24. Introduction to APIs", duration: "09:40", isCompleted: false, videoUrl: "https://example.com/v24", description: "Understanding HTTP requests, REST, and JSON." },
          { id: "l25", title: "25. Fetch API & Promises", duration: "16:20", isCompleted: false, videoUrl: "https://example.com/v25", description: "Asynchronous JavaScript and retrieving external data." },
          { id: "l26", title: "26. Node.js Crash Course", duration: "15:00", isCompleted: false, videoUrl: "https://example.com/v26", description: "Running JavaScript outside the browser." },
          { id: "l27", title: "27. Intro to Express.js", duration: "19:15", isCompleted: false, videoUrl: "https://example.com/v27", description: "Building a simple server and API endpoints." },
          { id: "l28", title: "28. Deployment & Hosting", duration: "11:50", isCompleted: false, videoUrl: "https://example.com/v28", description: "Putting your application on the web using Vercel and Render." },
        ],
      },
    ],
    overview: {
      whatYouWillLearn: [
        "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
        "Learn the latest technologies, including JavaScript, React, Node and even Web3 development.",
        "After the course you will be able to build ANY website you want.",
        "Build fully-fledged websites and web apps for your startup or business.",
        "Master frontend development with React.",
        "Learn backend development with Node.js.",
      ],
      requirements: [
        "No prior coding experience is required - we'll start from the absolute basics.",
        "A computer (Windows, Mac, or Linux) with internet access.",
        "All software used in this course is free to download and install.",
      ],
      detailedDescription: "This is the most comprehensive web development course available online. We'll take you from absolute beginner to a job-ready fullstack developer. You'll learn HTML, CSS, JavaScript, React, Node.js, and much more. This course is taught by industry experts who have years of experience building real-world applications.",
      syllabus: [
        "Introduction to Web Development",
        "HTML5 & Semantic Markup",
        "CSS3 Fundamentals & Advanced Layouts",
        "Modern JavaScript (ES6+)",
        "React.js & Frontend Frameworks",
        "Node.js & Backend Development",
        "Database Integration with MongoDB",
        "Deployment & DevOps Basics",
      ],
      applications: [
        "E-commerce Platforms",
        "Social Media Dashboards",
        "Personal Portfolios",
        "Corporate Websites",
        "SaaS Applications",
      ],
    },
    instructors: [
      {
        id: "inst-1",
        name: "Dr. Angela Yu",
        role: "Lead Instructor",
        avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/93P39XQ7T5T6X7YR0XTTDXRA9J.jpg",
        bio: "Angela is a developer and a teacher. She is the founder of the London App Brewery, London's leading programming bootcamp. She has helped hundreds of thousands of students learn to code and change their lives by becoming a developer.",
        stats: {
          students: "1.2M+",
          courses: 7,
          rating: 4.8,
        },
        coursesOnPlatform: [
          { id: "ios-dev", title: "Complete iOS Development Bootcamp", thumbnail: "https://example.com/ios.jpg", price: 59, rating: 4.9 },
          { id: "python-pro", title: "100 Days of Code: The Complete Python Pro Bootcamp", thumbnail: "https://example.com/python.jpg", price: 49, rating: 4.8 },
        ],
      },
      {
        id: "inst-2",
        name: "Maximilian Schwarzmüller",
        role: "Technical Specialist",
        avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/82C39XQ7T5T6X7YR0XTTDXRA9J.jpg",
        bio: "Maximilian is a self-taught developer who has been working in the industry for over 10 years. He is a top-rated instructor on multiple platforms and is known for his clear and concise teaching style.",
        stats: {
          students: "2M+",
          courses: 45,
          rating: 4.7,
        },
        coursesOnPlatform: [
          { id: "react-complete", title: "React - The Complete Guide", thumbnail: "https://example.com/react.jpg", price: 59, rating: 4.8 },
          { id: "node-js", title: "Node.js - The Complete Guide", thumbnail: "https://example.com/node.jpg", price: 49, rating: 4.7 },
        ],
      },
    ],
  },
  "uiux-design": {
    id: "uiux-design",
    title: "UI/UX Design Fundamentals",
    description: "Learn the basics of UI/UX design and create beautiful user interfaces with Figma and design principles.",
    rating: 4.8,
    reviewsCount: "1.2k",
    studentsCount: "8,540",
    level: "Beginner",
    duration: "12 Hours",
    thumbnail: "/course_uiux.png",
    badge: "Bestseller",
    price: 49,
    progress: {
      percentage: 0,
      lessonsCompleted: 0,
      totalLessons: 15,
      projectsCompleted: 0,
      totalProjects: 3,
      quizScore: 0,
      certificateAvailable: true,
    },
    resources: [
      { title: "Design Principles PDF", type: "PDF", icon: "file", url: "#" },
      { title: "Figma UI Kit", type: "ZIP", icon: "folder", url: "#" },
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 · Intro to Design",
        description: "User Experience (UX) and User Interface (UI) design are distinctly separate yet deeply interconnected disciplines. UX encompasses the overarching cognitive and emotional journey a user experiences while interacting with a product, prioritizing usability, efficiency, and logical flow. UI, conversely, represents the tangible visual touchpoints—typography, color, and layout—through which that interaction occurs. The foundation of successful UI/UX lies in Design Thinking, an iterative process prioritizing profound user empathy over rigid assumption. By adhering to Gestalt principles of visual perception and strict accessibility guidelines (such as WCAG), designers construct interfaces that naturally guide user attention and ensure equitable access for all demographics.",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l1", title: "1. What is UI vs UX?", duration: "05:30", isCompleted: false, videoUrl: "https://example.com/ui1", description: "Understanding the difference and synergy between User Interface and User Experience." },
          { id: "l2", title: "2. The Design Process", duration: "08:15", isCompleted: false, videoUrl: "https://example.com/ui2", description: "A high-level view of standard product design workflows." },
          { id: "l3", title: "3. Design Thinking", duration: "10:45", isCompleted: false, videoUrl: "https://example.com/ui3", description: "Empathize, Define, Ideate, Prototype, and Test." },
          { id: "l4", title: "4. Visual Hierarchy", duration: "07:20", isCompleted: false, videoUrl: "https://example.com/ui4", description: "Guiding the user's eye using scale, color, and layout." },
          { id: "l5", title: "5. Accessibility in Design", duration: "09:10", isCompleted: false, videoUrl: "https://example.com/ui5", description: "Ensuring your designs are usable by everyone, including people with disabilities." },
        ],
      },
      {
        id: "m2",
        title: "Module 2 · User Research",
        description: "Empirical research is the bedrock of objective design decisions, mitigating the inherent biases of the design team. Qualitative research, often conducted via semi-structured user interviews, seeks to understand the 'why' behind user behaviors, uncovering latent motivations and frustrations. This qualitative data is synthesized into User Personas: archetypical representations of core demographic segments that serve to anchor design decisions in human empathy. Subsequent mapping of User Journeys visually articulates the sequential phases a user navigates to achieve a specific goal, highlighting critical friction points. Concurrently, Information Architecture (IA) establishes the ontological structure of the product's content, ensuring intuitive navigability.",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l6", title: "6. Conducting User Interviews", duration: "12:00", isCompleted: false, videoUrl: "https://example.com/ui6", description: "How to ask the right questions to uncover real user problems." },
          { id: "l7", title: "7. Creating User Personas", duration: "08:45", isCompleted: false, videoUrl: "https://example.com/ui7", description: "Synthesizing research into actionable user archetypes." },
          { id: "l8", title: "8. User Journeys & Flows", duration: "11:30", isCompleted: false, videoUrl: "https://example.com/ui8", description: "Mapping out the steps a user takes to achieve a goal." },
          { id: "l9", title: "9. Information Architecture", duration: "14:15", isCompleted: false, videoUrl: "https://example.com/ui9", description: "Organizing content logically and creating intuitive navigation." },
          { id: "l10", title: "10. Competitive Analysis", duration: "09:50", isCompleted: false, videoUrl: "https://example.com/ui10", description: "Learning from industry competitors and finding gaps." },
        ],
      },
      {
        id: "m3",
        title: "Module 3 · Figma & Prototyping",
        description: "Modern interface design is predominantly executed within vector graphics editors like Figma, which allow for infinite scalability without resolution degradation. The construction of robust interfaces relies on atomic design principles, wherein elemental shapes and typographic rules are combined into complex, reusable Components. Auto Layout systems enforce mathematical consistency in padding and responsive resizing behavior. The design lifecycle transitions from wireframing (low-fidelity structural blueprints) to high-fidelity mockups encompassing definitive branding. Finally, these static frames are connected via prototyping tools to simulate state changes, micro-interactions, and navigational transitions, yielding a testable artifact prior to engineering handoff.",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l11", title: "11. Getting Started with Figma", duration: "15:20", isCompleted: false, videoUrl: "https://example.com/ui11", description: "Touring the interface and basic shapes." },
          { id: "l12", title: "12. Auto Layout & Components", duration: "18:40", isCompleted: false, videoUrl: "https://example.com/ui12", description: "Building responsive and reusable design elements." },
          { id: "l13", title: "13. Wireframing", duration: "13:10", isCompleted: false, videoUrl: "https://example.com/ui13", description: "Sketching out low-fidelity layouts." },
          { id: "l14", title: "14. High-Fidelity Design", duration: "22:00", isCompleted: false, videoUrl: "https://example.com/ui14", description: "Adding color, typography, and imagery to wireframes." },
          { id: "l15", title: "15. Interactive Prototyping", duration: "16:30", isCompleted: false, videoUrl: "https://example.com/ui15", description: "Connecting screens and adding animations for user testing." },
        ],
      },
    ],
    overview: {
      whatYouWillLearn: [
        "Understand the core principles of UI and UX design.",
        "Master Figma and build professional prototypes.",
        "Learn to conduct user research and usability testing.",
        "Create visually stunning and accessible interfaces.",
      ],
      requirements: [
        "No previous design experience needed.",
        "A computer with internet access.",
        "Figma account (free).",
      ],
      detailedDescription: "Master the art of creating beautiful and functional digital products. This course covers everything from color theory and typography to advanced prototyping and user testing.",
      syllabus: [
        "Introduction to UI/UX",
        "Design Thinking Process",
        "Figma Mastery",
        "Visual Design Principles",
        "Prototyping & Animation",
      ],
      applications: [
        "Mobile App Design",
        "Web Application Interfaces",
        "Product Landing Pages",
      ],
    },
    instructors: [
      {
        id: "inst-3",
        name: "Gary Simon",
        role: "Design Lead",
        avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/71D39XQ7T5T6X7YR0XTTDXRA9J.jpg",
        bio: "Gary Simon has over 20 years of experience in design and development. He has worked with clients ranging from small startups to Fortune 500 companies.",
        stats: {
          students: "500k+",
          courses: 12,
          rating: 4.9,
        },
        coursesOnPlatform: [
          { id: "figma-mastery", title: "Advanced Figma Techniques", thumbnail: "https://example.com/figma.jpg", price: 39, rating: 4.9 },
        ],
      },
    ],
  },
  "graphics-design": {
    id: "graphics-design",
    title: "Graphics Design Masterclass",
    description: "Design stunning visuals and brand identities like a pro using Photoshop, Illustrator and more.",
    rating: 4.9,
    reviewsCount: "1.1k",
    studentsCount: "5,210",
    level: "All Levels",
    duration: "18 Hours",
    thumbnail: "/course_graphics.png",
    badge: "Popular",
    price: 49,
    progress: {
      percentage: 0,
      lessonsCompleted: 0,
      totalLessons: 20,
      projectsCompleted: 0,
      totalProjects: 4,
      quizScore: 0,
      certificateAvailable: true,
    },
    resources: [
      { title: "Branding Guide", type: "PDF", icon: "file", url: "#" },
      { title: "Icon Pack", type: "ZIP", icon: "folder", url: "#" },
      { title: "Color Palettes", type: "ZIP", icon: "folder", url: "#" },
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 · Design Basics",
        description: "Graphic design is the formal arrangement of visual elements to communicate a specific message or evoke a targeted response. The foundational grammar of this visual language consists of the Elements of Art—line, shape, form, space, texture, and color. These elements are orchestrated according to the Principles of Design, which dictate how balance (symmetrical or asymmetrical), contrast, emphasis, and rhythm are deployed to establish visual hierarchy. A fundamental technical distinction in digital design is between raster and vector formats. Raster graphics consist of a fixed grid of colored pixels, resolution-dependent and prone to degradation when scaled, whereas vector graphics are defined by mathematical curves and polygons, allowing infinite, lossless scalability.",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l1", title: "1. Introduction to Graphics Design", duration: "06:20", isCompleted: false, videoUrl: "https://example.com/gd1", description: "What graphics design is and where it is applied." },
          { id: "l2", title: "2. The Principles of Design", duration: "11:45", isCompleted: false, videoUrl: "https://example.com/gd2", description: "Balance, contrast, emphasis, movement, pattern, and rhythm." },
          { id: "l3", title: "3. Elements of Art", duration: "09:30", isCompleted: false, videoUrl: "https://example.com/gd3", description: "Lines, shapes, forms, space, and texture." },
          { id: "l4", title: "4. Raster vs Vector Graphics", duration: "07:15", isCompleted: false, videoUrl: "https://example.com/gd4", description: "Understanding resolution and file types (JPG, PNG, SVG, EPS)." },
          { id: "l5", title: "5. Setting Up Your Workspace", duration: "05:50", isCompleted: false, videoUrl: "https://example.com/gd5", description: "Hardware and software recommendations for modern designers." },
        ],
      },
      {
        id: "m2",
        title: "Module 2 · Color Theory & Typography",
        description: "Color and typography are the primary vehicles for emotional resonance and brand identity in visual communication. Color theory is rooted in the color wheel, utilizing standardized harmonies—such as complementary (opposite), analogous (adjacent), or triadic (evenly spaced)—to construct cohesive palettes. Beyond aesthetics, color psychology dictates that specific hues inherently trigger specific cultural and cognitive associations. Typography, the art of arranging type, is governed by structural anatomy (x-height, ascenders, serifs) and spatial metrics (kerning, leading, tracking). Effective typographic design establishes a clear hierarchy of information through variations in scale, weight, and strategic font pairing, ensuring optimal legibility.",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l6", title: "6. The Color Wheel", duration: "08:10", isCompleted: false, videoUrl: "https://example.com/gd6", description: "Primary, secondary, and tertiary colors." },
          { id: "l7", title: "7. Color Psychology", duration: "12:00", isCompleted: false, videoUrl: "https://example.com/gd7", description: "How colors affect emotion and brand perception." },
          { id: "l8", title: "8. Creating Color Palettes", duration: "10:25", isCompleted: false, videoUrl: "https://example.com/gd8", description: "Tools and techniques for building cohesive brand palettes." },
          { id: "l9", title: "9. Anatomy of Typography", duration: "14:15", isCompleted: false, videoUrl: "https://example.com/gd9", description: "Serif, sans-serif, kerning, leading, and tracking." },
          { id: "l10", title: "10. Font Pairing Secrets", duration: "11:40", isCompleted: false, videoUrl: "https://example.com/gd10", description: "How to combine fonts without causing visual chaos." },
        ],
      },
      {
        id: "m3",
        title: "Module 3 · Adobe Illustrator Mastery",
        description: "Vector illustration relies on the precise manipulation of geometric primitives and complex mathematical paths. At the core of vector drafting is the Bézier curve, manipulated via the Pen Tool to define anchor points and directional handles. Complex forms are rarely drawn freehand; instead, they are constructed through boolean operations—combining, subtracting, or intersecting overlapping shapes using tools like the Shape Builder or Pathfinder. This constructive methodology ensures geometric precision and perfectly smooth contours. In brand identity and logo design, these vector techniques are critical, as the resulting artwork must maintain absolute fidelity whether scaled down to a favicon or enlarged to a billboard.",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l11", title: "11. Intro to Illustrator Workspace", duration: "15:00", isCompleted: false, videoUrl: "https://example.com/gd11", description: "Navigating tools, panels, and artboards." },
          { id: "l12", title: "12. The Pen Tool Masterclass", duration: "22:30", isCompleted: false, videoUrl: "https://example.com/gd12", description: "Drawing perfect curves and tracing sketches." },
          { id: "l13", title: "13. Shape Builder & Pathfinder", duration: "13:20", isCompleted: false, videoUrl: "https://example.com/gd13", description: "Combining simple shapes into complex illustrations." },
          { id: "l14", title: "14. Typography in Illustrator", duration: "09:45", isCompleted: false, videoUrl: "https://example.com/gd14", description: "Type on a path and custom lettering techniques." },
          { id: "l15", title: "15. Logo Design Project", duration: "25:10", isCompleted: false, videoUrl: "https://example.com/gd15", description: "Building a brand mark from scratch." },
        ],
      },
      {
        id: "m4",
        title: "Module 4 · Adobe Photoshop Mastery",
        description: "Raster image manipulation requires a pixel-level approach fundamentally different from vector drafting. Professional raster workflows are predicated on non-destructive editing, a paradigm wherein the original image data is never permanently altered. This is achieved through the use of Layers, which stack graphical elements independently, and Layer Masks, which utilize grayscale values to conceal or reveal portions of a layer without deleting pixels. Adjustment Layers apply tonal and chromatic corrections parametrically. Advanced compositing integrates disparate photographic elements by meticulously matching lighting, perspective, and atmospheric perspective, resulting in a cohesive, photorealistic digital synthesis.",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l16", title: "16. Intro to Photoshop Workspace", duration: "14:15", isCompleted: false, videoUrl: "https://example.com/gd16", description: "Understanding layers, masks, and adjustment layers." },
          { id: "l17", title: "17. Selection & Masking Tools", duration: "18:50", isCompleted: false, videoUrl: "https://example.com/gd17", description: "Cutting out subjects perfectly." },
          { id: "l18", title: "18. Photo Retouching", duration: "20:00", isCompleted: false, videoUrl: "https://example.com/gd18", description: "Removing blemishes and enhancing lighting/color." },
          { id: "l19", title: "19. Photo Compositing", duration: "28:30", isCompleted: false, videoUrl: "https://example.com/gd19", description: "Blending multiple images into a seamless scene." },
          { id: "l20", title: "20. Social Media Assets Project", duration: "21:10", isCompleted: false, videoUrl: "https://example.com/gd20", description: "Creating banners, thumbnails, and posts." },
        ],
      },
    ],
    overview: {
      whatYouWillLearn: [
        "Master Adobe Photoshop and Illustrator toolsets.",
        "Create visually stunning brand identities and logos.",
        "Understand deep concepts of color theory and typography.",
        "Design high-converting marketing materials for web and print.",
      ],
      requirements: [
        "No prior design experience is required.",
        "Access to Adobe Creative Cloud (Photoshop & Illustrator) or equivalent software.",
        "A reliable computer and an internet connection.",
      ],
      detailedDescription: "A comprehensive deep dive into professional graphic design. From mastering the pen tool in Illustrator to advanced non-destructive photo manipulation in Photoshop, this course is built to take you from a blank canvas to a stunning professional portfolio.",
      syllabus: [
        "Design Basics & Fundamentals",
        "Color Theory & Spatial Awareness",
        "Typography in Practice",
        "Adobe Illustrator Vector Mastery",
        "Adobe Photoshop Raster Mastery",
        "Portfolio Building",
      ],
      applications: [
        "Brand Identity Creation",
        "Social Media Graphics",
        "Print Materials & Posters",
        "Digital Advertising Assets",
      ],
    },
    instructors: [
      {
        id: "inst-4",
        name: "Lindsay Marsh",
        role: "Graphic Arts Instructor",
        avatar: "https://ui-avatars.com/api/?name=Lindsay+Marsh&background=random",
        bio: "Lindsay is a top-tier freelance graphic designer and instructor with over 15 years of industry experience. She has helped global brands redefine their identity and has taught hundreds of thousands of students worldwide.",
        stats: {
          students: "300k+",
          courses: 8,
          rating: 4.8,
        },
        coursesOnPlatform: [
          { id: "logo-design", title: "Logo Design Theory & Application", thumbnail: "https://example.com/logo-course.jpg", price: 35, rating: 4.7 },
        ],
      },
    ],
  },
  "digital-marketing": {
    id: "digital-marketing",
    title: "Digital Marketing Strategy",
    description: "Master digital marketing and grow any business online with SEO, Social Media, and Ads.",
    rating: 4.8,
    reviewsCount: 743,
    studentsCount: "10,120",
    level: "Beginner",
    duration: "10 Hours",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/711RZMR1A20C05JSNQGKYSNPWR.jpg",
    badge: "New",
    price: 39,
    progress: {
      percentage: 0,
      lessonsCompleted: 0,
      totalLessons: 12,
      projectsCompleted: 0,
      totalProjects: 2,
      quizScore: 0,
      certificateAvailable: true,
    },
    resources: [
      { title: "Marketing Plan Template", type: "PDF", icon: "file", url: "#" },
      { title: "SEO Checklist", type: "PDF", icon: "file", url: "#" },
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 · Foundation",
        description: "Digital marketing represents a paradigm shift from traditional broadcast advertising to targeted, data-driven consumer engagement. The foundation of any strategic initiative is the precise delineation of the target audience via detailed Buyer Personas. Understanding the psychological pain points of these personas enables marketers to architect the Customer Value Journey, a strategic funnel that systematically transitions a prospect from initial brand awareness through consideration, conversion, and ultimately, brand advocacy. Unlike traditional media, digital channels offer granular measurability. Strategic success is evaluated through Key Performance Indicators (KPIs) such as Customer Acquisition Cost (CAC), Conversion Rate, and the overarching Return on Investment (ROI).",
        lessonsCompleted: 0,
        totalLessons: 4,
        lessons: [
          { id: "l1", title: "1. Digital Marketing Overview", duration: "07:10", isCompleted: false, videoUrl: "https://example.com/dm1", description: "The evolution of marketing and digital channels." },
          { id: "l2", title: "2. Defining Your Target Audience", duration: "11:25", isCompleted: false, videoUrl: "https://example.com/dm2", description: "Creating buyer personas and identifying pain points." },
          { id: "l3", title: "3. The Customer Value Journey", duration: "14:50", isCompleted: false, videoUrl: "https://example.com/dm3", description: "Mapping out awareness, engagement, conversion, and retention." },
          { id: "l4", title: "4. Marketing Metrics & KPIs", duration: "09:30", isCompleted: false, videoUrl: "https://example.com/dm4", description: "How to measure success and calculate ROI." },
        ],
      },
      {
        id: "m2",
        title: "Module 2 · SEO & Content Marketing",
        description: "Search Engine Optimization (SEO) is the technical and semantic methodology of increasing the quantity and quality of organic search traffic. Search engine algorithms utilize automated crawlers to index the web, ranking pages based on complex heuristics of relevance and authority. Relevance is established through On-Page SEO: the strategic inclusion of thoroughly researched keywords within semantic HTML tags, metadata, and high-value written content. Authority is primarily determined by Off-Page SEO, most notably the accumulation of quality backlinks from external domains, functioning as independent votes of confidence. Content marketing aligns with SEO by continuously generating educational or entertaining assets that naturally satisfy user search intent.",
        lessonsCompleted: 0,
        totalLessons: 4,
        lessons: [
          { id: "l5", title: "5. Introduction to SEO", duration: "15:40", isCompleted: false, videoUrl: "https://example.com/dm5", description: "How search engines work and rank pages." },
          { id: "l6", title: "6. Keyword Research Strategy", duration: "18:15", isCompleted: false, videoUrl: "https://example.com/dm6", description: "Finding high-volume, low-competition terms." },
          { id: "l7", title: "7. On-Page & Off-Page Optimization", duration: "21:00", isCompleted: false, videoUrl: "https://example.com/dm7", description: "Meta tags, backlinks, and website architecture." },
          { id: "l8", title: "8. Content Creation & Distribution", duration: "16:20", isCompleted: false, videoUrl: "https://example.com/dm8", description: "Writing blogs that rank and convert." },
        ],
      },
      {
        id: "m3",
        title: "Module 3 · Paid Ads & Social Media",
        description: "While organic strategies build long-term equity, Paid Advertising (PPC) and Social Media marketing provide immediate, targeted amplification. Programmatic advertising platforms, such as Meta Ads and Google Ads, operate on complex bidding algorithms. Google Search Ads capture high-intent users actively querying specific terms, whereas Meta Ads leverage vast psychographic and demographic databases for push-based discovery advertising. Success in paid channels requires rigorous A/B testing of ad creative and copywriting. Concurrently, Email Marketing remains a highly potent channel for lifecycle marketing, utilizing automated, trigger-based sequences to nurture leads, recover abandoned carts, and maximize Customer Lifetime Value (CLV).",
        lessonsCompleted: 0,
        totalLessons: 4,
        lessons: [
          { id: "l9", title: "9. Social Media Strategy", duration: "13:30", isCompleted: false, videoUrl: "https://example.com/dm9", description: "Choosing platforms and creating a content calendar." },
          { id: "l10", title: "10. Facebook & Instagram Ads", duration: "25:45", isCompleted: false, videoUrl: "https://example.com/dm10", description: "Setting up Business Manager and launching your first campaign." },
          { id: "l11", title: "11. Google Ads (PPC) Basics", duration: "22:10", isCompleted: false, videoUrl: "https://example.com/dm11", description: "Search, Display, and Performance Max campaigns." },
          { id: "l12", title: "12. Email Marketing Fundamentals", duration: "14:05", isCompleted: false, videoUrl: "https://example.com/dm12", description: "Building a list and sending automated sequences." },
        ],
      },
    ],
    overview: {
      whatYouWillLearn: [
        "Master SEO best practices and rank on page 1 of Google.",
        "Run profitable Facebook, Instagram, and Google Ad campaigns.",
        "Build a comprehensive social media and content marketing strategy.",
        "Leverage email marketing sequences to nurture leads.",
      ],
      requirements: [
        "A computer with an internet connection.",
        "No prior marketing experience is necessary.",
        "A willingness to test and analyze data.",
      ],
      detailedDescription: "Learn how to grow any business online from scratch. This course covers the entire digital marketing spectrum including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, social media strategies, and high-conversion email marketing.",
      syllabus: [
        "Marketing Foundations & Funnels",
        "SEO & Organic Traffic Strategies",
        "Paid Advertising (Meta & Google Ads)",
        "Social Media Management",
        "Email Marketing & Automation",
        "Analytics & Conversion Tracking",
      ],
      applications: [
        "E-commerce Store Growth",
        "Local Business Lead Generation",
        "Freelance Digital Marketing",
        "In-house Marketing Teams",
      ],
    },
    instructors: [
      {
        id: "inst-5",
        name: "Sarah Strategy",
        role: "Digital Marketing Expert",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Strategy&background=random",
        bio: "Sarah is a seasoned digital marketer who has managed over $5M in ad spend and scaled numerous startups to 7 figures. She focuses on data-driven approaches to customer acquisition.",
        stats: {
          students: "150k+",
          courses: 5,
          rating: 4.9,
        },
        coursesOnPlatform: [
          { id: "fb-ads-pro", title: "Facebook Ads Profitability Masterclass", thumbnail: "https://example.com/fb-ads.jpg", price: 45, rating: 4.8 },
        ],
      },
    ],
  },
};