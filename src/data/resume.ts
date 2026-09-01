// Central content file — edit this to update the entire site.
// Sourced from Jay's resume. Update freely; components read from here.

export const profile = {
  name: "Jay Deepak Pawar",
  taglineWords: [
    "Full-Stack Developer",
    "Agentic AI Engineer",
    "DevOps Engineer",
  ],
  summary:
    "Computer Science student specializing in full-stack development, Agentic AI, and cloud-native engineering. I build production-grade applications with the MERN stack, Python, and Java — with hands-on exposure to blockchain systems, data pipelines, and DevOps practices including CI/CD and containerization.",
  phone: "8830083175",
  email: "jayp90171@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/jay-pawar-2717b1297/",
    github: "https://github.com/jaypawar90171",
    leetcode: "https://leetcode.com/u/jayp90171/",
  },
};

export const education = [
  {
    school: "KIT's College of Engineering",
    location: "Kolhapur",
    degree: "B.Tech in Computer Science and Engineering",
    detail: "CGPA: 8.9",
    period: "Sep 2023 - July 2026",
  },
  {
    school: "Government Polytechnic Kolhapur",
    location: "Kolhapur",
    degree: "Diploma in Information Technology",
    detail: "Percentage: 93.18%",
    period: "Dec 2020 - Aug 2023",
  },
];

export const experience = [
  {
    role: "Associate Technical Consultant",
    org: "Streebo Inc",
    location: "Ahmedabad, Gujarat",
    period: "Jan 2026 - August 2026",
    points: [
      "Contributing to the backend development of AI Operator — an agentic browser automation system that executes real-world tasks (e-commerce, bookings, form submissions) on behalf of users via conversational AI interfaces.",
      "Implementing new features for the AI Operator's sandboxed execution engine, enabling secure, isolated task execution triggered by chatbot interactions.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "Mechsoft Digital Technologies Pvt. Ltd.",
    location: "Pune, Maharashtra",
    period: "Jul 2025 - Dec 2025",
    points: [
      "Contributed to a Library Management System with item listing, rental queues, and user notifications.",
      "Built both a mobile application for users and an admin panel using React to manage rentals and monitor platform activity.",
    ],
  },
];

export const projects = [
  {
    id: "skillforge",
    name: "SkillForge AI",
    period: "Jan 2026 – July 2026",
    tags: ["LangGraph", "LangChain", "FastAPI", "React", "RAG", "Groq LLaMA"],
    featured: true,
    icon: "🧠",
    github: "https://github.com/jay/skillforge-ai",
    liveDemo: "https://skillforge-ai.vercel.app",
    summary:
      "A full-stack AI-powered career platform that scrapes live job postings and generates personalized, week-by-week learning roadmaps via a LangGraph multi-agent RAG pipeline.",
    points: [
      "Scrapes live job postings using Selenium and generates personalized week-by-week learning roadmaps specific to a targeted company via a LangGraph multi-agent RAG pipeline.",
      "Engineered a dual embedding strategy using Ollama and MongoDB Atlas Vector Search, enabling semantic job discovery and accurate skill-gap analysis from uploaded resumes.",
      "Implemented an AI Career Chat with multi-stage query routing, document grading, and adaptive retrieval — served via Groq LLaMA-3.3-70B with real-time web augmentation through Tavily Search.",
    ],
    // Real architecture used to drive the interactive pipeline visualization
    pipeline: [
      {
        id: "upload",
        label: "Resume / Query Input",
        detail: "User uploads resume or asks a career question through the chat interface.",
      },
      {
        id: "route",
        label: "Multi-Stage Query Routing",
        detail: "LangGraph agent classifies intent and routes to the right sub-pipeline (roadmap, chat, skill-gap).",
      },
      {
        id: "scrape",
        label: "Live Job Scraping",
        detail: "Selenium scrapes live job postings matching the target role/company in real time.",
      },
      {
        id: "embed",
        label: "Dual Embedding + Retrieval",
        detail: "Ollama embeddings + MongoDB Atlas Vector Search retrieve relevant postings and skill data.",
      },
      {
        id: "grade",
        label: "Document Grading",
        detail: "Retrieved documents are graded for relevance before being passed downstream.",
      },
      {
        id: "web",
        label: "Real-Time Web Augmentation",
        detail: "Tavily Search pulls in fresh context when local retrieval is insufficient.",
      },
      {
        id: "generate",
        label: "Roadmap / Chat Generation",
        detail: "Groq LLaMA-3.3-70B synthesizes a personalized week-by-week roadmap or chat response.",
      },
    ],
  },
  {
    id: "devsync",
    name: "DevSync",
    period: "Jan 2025 - July 2025",
    tags: ["MERN", "Generative AI", "Redis", "WebSockets", "WebContainers"],
    featured: false,
    icon: "⚡",
    github: "https://github.com/jaypawar90171/DevSync",
    liveDemo: "https://github.com/jaypawar90171/DevSync",
    summary:
      "A full-stack collaboration platform for developers to create projects, add collaborators, and communicate in real time — with AI-driven in-chat code generation.",
    points: [
      "Built a full-stack collaboration platform using the MERN stack for creating projects, adding collaborators, and real-time chat rooms.",
      "Implemented real-time messaging with Socket.io, scoped so only project collaborators can chat within dedicated project-based rooms.",
      "Integrated Google Generative AI (Gemini 1.5 Flash) for AI-driven chat assistance — generating project-specific code, structuring it into files, and enabling direct execution via WebContainers.",
    ],
  },
  {
    id: "voting-dapp",
    name: "Blockchain Based Voting System",
    period: "Sept 2024 - May 2024",
    tags: ["Ethereum", "Hardhat", "Web3.js", "React", "MetaMask"],
    featured: false,
    icon: "🔗",
    github: "https://github.com/jaypawar90171/Blockchain-based-E-Voting",
    liveDemo: "https://blockchain-based-e-voting.vercel.app/",
    summary:
      "A decentralized voting application on Ethereum with a React frontend, ensuring transparent, tamper-proof elections.",
    points: [
      "Designed and developed a decentralized application (DApp) on the Ethereum blockchain with a React-based frontend for secure and transparent voting.",
      "Implemented and deployed secure smart contracts ensuring on-chain transparency, integrity, and MetaMask wallet integration.",
      "Utilized Web3.js to interact with Ethereum smart contracts, enabling blockchain transactions and real-time data retrieval.",
    ],
  },
];

export const skills = {
  Languages: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "Dart", "HTML/CSS"],
  "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "FastAPI"],
  "AI & Agentic Systems": ["LangChain", "LangGraph", "RAG Pipelines"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  "DevOps & Tools": ["Docker", "Jenkins", "Git", "GitHub/GitLab", "Linux"],
  Blockchain: ["Ethereum", "Solidity", "Smart Contracts", "Web3.js", "Hardhat", "MetaMask"],
  Other: ["WebSockets", "Redis", "Selenium", "REST APIs", "Prisma ORM"],
};

export const stats = [
  { label: "LeetCode Problems Solved", value: 500, suffix: "+" },
  { label: "GeeksforGeeks Problems Solved", value: 200, suffix: "+" },
  { label: "College GfG Rank", value: 10, suffix: "" },
  { label: "CGPA", value: 8.9, suffix: "" },
];

export const achievements = [
  {
    title: "Winner — KIT PBL Day 2025",
    detail: "Project: Stock Price Recommender",
  },
  {
    title: "2nd Runner-up — KIT PBL Day 2024",
    detail: "Project: Blockchain based Decentralized Voting System",
  },
  {
    title: "2nd Runner-up — PIONEER 2025 Coding Competition",
    detail: "Held at KIT's College of Engineering",
  },
];

export const certificates = [
  {
    title: "Cloud Computing (NPTEL)",
    detail: "12-week course, Jan-Apr 2025, Score: 75/100",
  },
  {
    title: "AI/ML Virtual Internship (Google)",
    detail: "Completed via Kolhapur Institute of Technology",
  },
];
