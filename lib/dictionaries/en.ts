import type { Dictionary } from "./id";

/** English dictionary. Bentuknya dikunci oleh `Dictionary` dari `id.ts`. */
export const en: Dictionary = {
  nav: {
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
    ],
    contact: "Contact",
  },
  a11y: {
    primaryNav: "Primary navigation",
    homeLink: "MaoProject — back to home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle light or dark theme",
    languageGroup: "Choose language",
    idOption: "Bahasa Indonesia",
    enOption: "English",
    footerNav: "Footer navigation",
    backToTop: "Back to top",
    skipToContent: "Skip to main content",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Web & Interactive Application Developer",
    grade: "11th Grade Student",
    tagline:
      "I build modern web interfaces, dynamic back-end systems, and interactive game logic — from HTML, CSS, and JavaScript to PHP.",
    ctaProjects: "View My Projects",
    ctaContact: "Get in Touch",
    avatarAlt: "Astronaut avatar illustration of Muhammad Rizky Al-Hafidzi",
  },
  about: {
    eyebrow: "About Me",
    title: "Learning, building,",
    accent: "and always launching.",
    paragraphs: [
      "I'm Muhammad Rizky Al-Hafidzi, an 11th grade student with a deep interest in software engineering. I enjoy turning ideas into products people can actually use: designing modern web interfaces, writing dynamic back-end logic, and creating interactive experiences like browser-based games.",
      "Every project is a learning space for me — from writing semantic HTML structure and polishing layouts with CSS to processing data with JavaScript and PHP. The best way to grow, I believe, is to build real things, however small.",
    ],
    cards: [
      {
        title: "Education",
        body: "An 11th grade student who loves experimenting with many things.",
      },
      {
        title: "Exploration Focus",
        body: "Full-stack web development (HTML/CSS/JS/PHP) and interactive browser game logic.",
      },
    ],
    nowTitle: "Currently learning",
    now: ["Tailwind CSS", "PHP & databases", "Canvas game logic", "Git & versioning"],
  },
  skills: {
    eyebrow: "Technical Skills",
    title: "Tools and languages",
    accent: "I work with",
    description:
      "The everyday toolkit I use to build pages, applications, and games on the web.",
    items: [
      {
        title: "Front-End",
        tech: "HTML5 · CSS3 · JavaScript (ES6+)",
        body: "Semantic structure, interface animation, DOM manipulation, and canvas game logic.",
      },
      {
        title: "Back-End & Server",
        tech: "PHP",
        body: "Server-side data processing, shopping cart session management, and database integration.",
      },
      {
        title: "Frameworks & Libraries",
        tech: "Tailwind CSS · Bootstrap · Supporting libraries",
        body: "Faster responsive styling plus modular JS and PHP application structure.",
      },
      {
        title: "Development Tools",
        tech: "Git · Code Editor · Browser DevTools",
        body: "Source versioning, performance debugging, and cross-device display testing.",
      },
    ],
  },
  projects: {
    eyebrow: "Project Gallery",
    title: "Three featured",
    accent: "projects",
    description:
      "Real case studies that show the range of what I can build — from an interactive fighting game to a full e-commerce checkout flow.",
    filterAll: "All",
    categories: {
      game: "Game Development",
      webapp: "Web App",
      ecommerce: "E-Commerce",
    },
    items: {
      "game-fighting": {
        title: "Game Fighting",
        description:
          "A two-player fighting game that runs directly in the browser. Built on HTML5 canvas to detect hitbox collisions, manage match state, and render animation every frame.",
        features: [
          "2-player & AI modes",
          "Health bar and round timer",
          "Responsive keyboard controls",
        ],
      },
      weather: {
        title: "Weather Web App",
        description:
          "A weather application that pulls real-time data from a public API. Users search for a city and see temperature, humidity, and wind speed with condition icons that update dynamically.",
        features: [
          "Real-time city search",
          "Temperature, humidity & wind",
          "Dynamic weather icons",
        ],
      },
      shopping: {
        title: "Web Shopping",
        description:
          "An online store simulation with a product catalog, search and filters, shopping cart, and a checkout flow. Cart logic and price calculation are processed with JavaScript and PHP.",
        features: [
          "Product catalog with filters",
          "Cart & automatic totals",
          "Checkout flow simulation",
        ],
      },
    },
    liveDemo: "Live Demo",
    source: "Source Code",
    moreOnGithub: "See more projects on GitHub",
  },
  contact: {
    eyebrow: "Contact",
    title: "Got an idea? Let's",
    accent: "collaborate.",
    description:
      "Open to project collaborations, competitions, or just a chat about web and games. Send a message through the form or find me on GitHub.",
    emailCardTitle: "Email",
    githubCardTitle: "GitHub",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "name@email.com",
      subject: "Subject",
      subjectPlaceholder: "What would you like to discuss?",
      message: "Message",
      messagePlaceholder: "Tell me about your project, idea, or question…",
      submit: "Send Message",
      errors: {
        name: "Please enter your name.",
        email: "Enter a valid email address.",
        subject: "Please enter a subject.",
        message: "Please write your message (at least 10 characters).",
      },
      idle: "This button opens your email app with the message pre-filled.",
      success:
        "Thank you! Your email app should now be open with the message ready to send.",
      successFallback: "If it didn't open, send it directly to",
    },
  },
  footer: {
    tagline:
      "Building web interfaces and interactive experiences — one line of code every day.",
    rights: "All rights reserved.",
    builtWith: "Built with Next.js, Tailwind CSS, and a Space Station theme.",
  },
};
