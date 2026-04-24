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
        description: "This introductory module serves as the foundational pillar of your web development journey. We will explore the theoretical underpinnings of the World Wide Web, dissecting the intricate client-server architecture, Domain Name Systems (DNS), and the fundamental protocols that govern internet communication. Following this conceptual grounding, students will engage in practical environment configuration, establishing a robust local development workspace utilizing modern IDEs and essential extensions. Finally, we will delve into the structural semantics of HyperText Markup Language (HTML), examining the critical importance of document flow, accessibility standards, and the anatomical construction of web pages.",
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
        description: "Transitioning from structure to presentation, this module provides an exhaustive examination of Cascading Style Sheets (CSS). Students will systematically investigate the CSS object model, beginning with elementary selectors and specificity rules before advancing to the pivotal concept of the CSS Box Model—the geometric foundation of all web layout. The curriculum emphasizes modern, responsive layout paradigms, providing in-depth, practical instruction on both the Flexible Box Module (Flexbox) for one-dimensional alignment and the CSS Grid Layout for complex, two-dimensional architectural design. The module concludes with rigorous training in media queries and responsive design philosophies, ensuring fluid adaptability across disparate device viewports.",
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
        description: "In this comprehensive module, we transition into the dynamic realm of programmatic logic using JavaScript, the lingua franca of the web. The curriculum begins with a rigorous exploration of core computer science concepts instantiated in JavaScript, including lexical environments, variable declarations, primitive data types, and complex data structures such as arrays and objects. Students will master control flow mechanisms, conditional branching, and iterative loops. The module culminates in the practical application of these concepts via the Document Object Model (DOM) API, teaching students to dynamically manipulate node trees, handle asynchronous user events, and orchestrate interactive, state-driven web experiences.",
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
        description: "This module introduces students to the paradigm shift of component-based architecture through the lens of React, an industry-leading JavaScript library. Moving beyond imperative DOM manipulation, we will explore the declarative nature of JSX, virtual DOM reconciliation, and the unidirectional data flow that characterizes robust React applications. Deep dives into state management, component lifecycles, and prop drilling will equip students with the architectural foresight required to build scalable user interfaces. The module extensively covers React Hooks, fundamentally transforming how students conceptualize side effects and local state synchronization in functional components.",
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
        description: "The final module bridges the gap between client-side interfaces and server-side infrastructure, culminating in full-stack proficiency. Students will begin by dissecting Application Programming Interfaces (APIs), mastering the nuances of HTTP methods, RESTful design principles, and JSON payload structuring. Utilizing Node.js and Express.js, the curriculum guides students through the creation of robust web servers, routing mechanisms, and middleware integration. The course concludes with deployment strategies, teaching students how to containerize, host, and continuously integrate their applications into live production environments, transforming local code into globally accessible web services.",
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
        description: "This opening module lays the critical psychological and theoretical groundwork for User Interface (UI) and User Experience (UX) design. We systematically deconstruct the dichotomy and symbiotic relationship between visual aesthetics (UI) and functional usability (UX). Students will be immersed in the rigorous methodology of Design Thinking—a non-linear, iterative process encompassing empathy, definition, ideation, prototyping, and testing. Furthermore, the module delves deeply into visual hierarchy, Gestalt principles, and the imperative nature of digital accessibility (WCAG standards), ensuring that designed products are not only visually compelling but universally inclusive and cognitively frictionless.",
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
        description: "User research constitutes the empirical backbone of effective product design. This module instructs students in qualitative and quantitative research methodologies essential for uncovering latent user needs and behavioral patterns. We will thoroughly explore the formulation and execution of unbiased user interviews, the synthesis of demographic data into functional user personas, and the strategic mapping of user journeys to identify critical pain points and opportunities. Additionally, students will learn to architect logical information hierarchies (Information Architecture) and conduct rigorous competitive analyses to establish strategic market positioning for their digital products.",
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
        description: "Transitioning from theory to applied praxis, this module focuses on mastering industry-standard design tooling, specifically Figma. Students will embark on an exhaustive exploration of vector-based design, manipulating atomic elements, and constructing complex, scalable components utilizing Auto Layout paradigms. The curriculum progresses methodically from low-fidelity structural wireframing to high-fidelity, pixel-perfect visual design, incorporating typography, color theory, and advanced imagery. Ultimately, students will learn to interlink these static frames into dynamic, interactive prototypes, complete with micro-interactions and transitional animations, essential for user testing and stakeholder handoff.",
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
        description: "This foundational module serves as a rigorous introduction to the formal elements and principles of visual communication. We will academically dissect the core tenets of design—balance, contrast, emphasis, movement, pattern, and rhythm—and their psychological impact on the viewer. Students will explore the fundamental building blocks of art, including lines, shapes, forms, space, and texture. A critical technical distinction will be established between raster (pixel-based) and vector (mathematically-defined) graphics, outlining their respective applications, limitations, and standard file formats. Finally, the module ensures students establish an optimized hardware and software ecosystem for professional graphic production.",
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
        description: "This module delves into the profound psychological and structural elements of visual aesthetics: color and typography. We will begin with a comprehensive study of color theory, analyzing the color wheel, chromatic harmonies (analogous, complementary, triadic), and the emotional resonance specific palettes evoke within diverse cultural contexts. Transitioning to typography, the curriculum academically dissects the anatomy of typefaces—examining serifs, x-heights, ascenders, and descenders—as well as the spatial relationships of kerning, leading, and tracking. Students will master the art of typographic hierarchy and font pairing, ensuring optimal legibility and thematic cohesion in their designs.",
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
        description: "Focused exclusively on vector-based illustration, this module provides an intensive, masterclass-level exploration of Adobe Illustrator. Students will begin by mastering the workspace topology before advancing to the critical Pen Tool, learning the mathematical precision required to draft Bézier curves and execute complex pathfinder operations. The curriculum emphasizes the construction of complex geometries from primitive shapes using the Shape Builder tool. The module culminates in applied brand identity design, where students will utilize advanced typographic manipulation and vector artistry to synthesize professional, scalable logos and brand marks from conceptual sketches.",
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
        description: "This concluding module immerses students in the expansive capabilities of Adobe Photoshop, the industry standard for raster graphic manipulation. The curriculum is meticulously structured around the paradigm of non-destructive editing. Students will gain profound expertise in layer management, complex masking techniques, and the utilization of adjustment layers for tonal and chromatic correction. Advanced instruction will cover sophisticated photo retouching, frequency separation, and complex compositing techniques, enabling the seamless integration of disparate photographic elements into cohesive visual narratives. The module concludes with the practical creation of optimized, high-fidelity assets for digital marketing and social media.",
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
        description: "This foundational module establishes the strategic framework necessary for orchestrating successful digital marketing campaigns. We will begin by tracing the historical evolution of marketing paradigms and examining the current landscape of digital channels. A critical focus is placed on the precise articulation of target demographics through the development of granular buyer personas and the psychological mapping of consumer pain points. Students will learn to architect the Customer Value Journey—a multi-stage funnel encompassing brand awareness, active engagement, strategic conversion, and long-term retention. The module concludes with a rigorous analytical focus on Key Performance Indicators (KPIs) and the mathematical calculation of Return on Investment (ROI).",
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
        description: "This module provides a deep, technical dive into Organic Search Engine Optimization (SEO) and the strategic deployment of content marketing. Students will explore the algorithmic mechanics of modern search engines (crawling, indexing, and ranking factors). The curriculum mandates a rigorous approach to keyword research, identifying high-intent, long-tail search queries to drive targeted traffic. Instruction covers both on-page architectural optimization (meta data, semantic HTML, site speed) and off-page authority building (strategic backlink acquisition). Concurrently, students will master the creation of high-value, intent-driven content designed to secure high search engine result page (SERP) positioning and facilitate user conversion.",
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
        description: "The final module equips students with the tactical skills required to execute high-impact paid advertising and organic social media strategies. Students will learn to construct comprehensive content calendars tailored to the specific algorithms and user demographics of various social platforms. The curriculum includes intensive, hands-on training within the Meta Business Manager, instructing students on the deployment of highly targeted Facebook and Instagram advertising campaigns. We will also explore the complexities of Google Ads, encompassing Search, Display, and Performance Max networks. Finally, the module covers the structural fundamentals of automated email marketing sequences, focusing on lead nurturing and maximizing customer lifetime value.",
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