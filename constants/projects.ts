export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  productionUrl?: string;
  progress: number;
}

export interface ProjectTabs {
  Frontend: Project[];
  Backend: Project[];
  CEH: Project[];
  Other: Project[];
}

export const projectTabs: ProjectTabs = {
  Frontend: [
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with atomic design pattern, CEH terminal animations, and responsive layout for showcasing projects and skills.",
      image: "/projects/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Anime.js", "React"],
      githubUrl: "",
      progress: 100,
    },
    {
      title: "E-Learning Platform",
      description: "Interactive online learning platform with course management, video streaming, progress tracking, and student-teacher interaction features. Built with modern React architecture.",
      image: "/projects/placeholder.svg",
      technologies: ["React", "JavaScript", "Redux", "CSS3", "HTML5"],
      githubUrl: "",
      liveUrl: "https://e-learning-app-one.vercel.app/",
      progress: 100,
    },
    {
      title: "IS Speaking Platform",
      description: "Interactive English speaking practice platform with speech recognition, pronunciation analysis, and real-time feedback. Built with modern web technologies and deployed on Vercel.",
      image: "/projects/placeholder.svg",
      technologies: ["React", "Next.js", "Redux", "Bootstrap", "Webpack", "Vercel"],
      githubUrl: "",
      liveUrl: "https://is-speaking.vercel.app/",
      progress: 95,
    },
    {
      title: "ShareGram",
      description: "Social media sharing platform with advanced content management, user interaction features, and real-time communication. Fully deployed production application with scalable architecture.",
      image: "/projects/placeholder.svg",
      technologies: ["React", "Redux", "JavaScript", "SCSS", "Tiger Pay", "Lodash"],
      githubUrl: "",
      productionUrl: "https://share-gram.com/",
      progress: 100,
    },
    {
      title: "Advanced Data Visualization Platform",
      description: "Enterprise-grade data visualization platform with real-time analytics, interactive dashboards, and machine learning insights. Built with modern web technologies for scalable data processing.",
      image: "/projects/placeholder.svg",
      technologies: ["React", "TypeScript", "D3.js", "WebGL", "WebAssembly", "Three.js"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Distributed Blockchain Application",
      description: "Advanced decentralized application with smart contract integration, cryptocurrency payments, and distributed consensus mechanisms. Features Web3 integration and DeFi protocols.",
      image: "/projects/placeholder.svg",
      technologies: ["React", "Web3.js", "Solidity", "Ethereum", "MetaMask", "IPFS"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Real-time Collaborative IDE",
      description: "Cloud-based collaborative development environment with real-time code editing, integrated debugging, and team collaboration features. Advanced code analysis and AI-powered suggestions.",
      image: "/projects/placeholder.svg",
      technologies: ["React", "WebRTC", "Monaco Editor", "Docker", "Kubernetes", "AI/ML"],
      githubUrl: "",
      progress: 0,
    }
  ],
  Backend: [
    {
      title: "Simple REST API",
      description: "Basic REST API with CRUD operations for user management. Educational project for learning HTTP methods, routing, and database integration fundamentals.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "Express", "JSON", "File System"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Blog API with Authentication",
      description: "Simple blog API with user authentication, JWT tokens, and basic CRUD operations for posts and comments. Includes input validation and error handling.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "Express", "JWT", "bcrypt", "MongoDB"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "E-commerce Product API",
      description: "Product management API with categories, search functionality, and basic inventory management. Includes pagination and filtering capabilities.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "Joi"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Real-time Chat API",
      description: "WebSocket-based chat API with room management, message history, and user presence tracking. Implements real-time communication protocols.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "Socket.io", "Redis", "PostgreSQL", "WebSocket"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Task Management System",
      description: "Advanced task management API with team collaboration, project organization, and notification system. Features role-based access control.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "Bull Queue"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Payment Processing API",
      description: "Secure payment processing system with multiple payment gateways, transaction logging, and fraud detection. Implements PCI compliance standards.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "Stripe", "PayPal", "PostgreSQL", "Encryption"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Microservices Architecture",
      description: "Distributed microservices system with service discovery, load balancing, and inter-service communication. Advanced containerization and orchestration.",
      image: "/projects/placeholder.svg",
      technologies: ["Docker", "Kubernetes", "RabbitMQ", "PostgreSQL", "Redis"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "GraphQL Federation Gateway",
      description: "Advanced GraphQL federation system with multiple service integration, schema stitching, and real-time subscriptions. Enterprise-grade API gateway.",
      image: "/projects/placeholder.svg",
      technologies: ["GraphQL", "Apollo Federation", "Node.js", "Docker", "Kafka"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Distributed Event Sourcing System",
      description: "Advanced event-driven architecture with CQRS pattern, event sourcing, and distributed transaction management. High-performance scalable system.",
      image: "/projects/placeholder.svg",
      technologies: ["Event Sourcing", "CQRS", "Kafka", "Elasticsearch", "Docker"],
      githubUrl: "",
      progress: 0,
    }
  ],
  CEH: [
    {
      title: "CTF Platform",
      description: "Full-featured Capture The Flag platform with dynamic challenges, real-time scoring, team management, and automated challenge deployment.",
      image: "/projects/placeholder.svg",
      technologies: ["Kali Linux", "Python", "Docker", "MySQL", "Metasploit"],
      githubUrl: "https://github.com/phutran1210dev/ctf-platform",
      progress: 100,
    },
    {
      title: "Threat Intelligence Dashboard",
      description: "Real-time threat intelligence aggregation and visualization dashboard with IOC tracking, threat actor profiling, and automated alert generation.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "Vue.js", "D3.js", "Elasticsearch", "OSINT", "Nmap", "Wireshark", "Burp Suite"],
      githubUrl: "https://github.com/phutran1210dev/threat-intel",
      progress: 100,
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated vulnerability assessment tool with custom payloads, detailed reporting, and integration with popular security frameworks.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "Nessus", "OpenVAS", "Nikto", "SQLMap"],
      githubUrl: "https://github.com/phutran1210dev/vuln-scanner",
      progress: 100,
    },
    {
      title: "Network Port Scanner",
      description: "Basic network reconnaissance tool for discovering open ports and services. Educational project for learning network scanning fundamentals and TCP/UDP protocols.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "Socket", "Threading", "Argparse"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Web Application Firewall Bypass",
      description: "Intermediate security testing tool for WAF evasion techniques. Implements various payload encoding methods and filter bypass strategies for penetration testing.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "Requests", "BeautifulSoup", "Regex", "Base64"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Advanced Persistent Threat Simulator",
      description: "Advanced cybersecurity simulation framework for APT attack patterns and defense mechanisms. Includes multi-stage attack vectors, lateral movement, and stealth techniques.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "PowerShell", "Metasploit", "Empire", "Cobalt Strike", "YARA"],
      githubUrl: "",
      progress: 0,
    }
  ],
  Other: [
    {
      title: "Mobile Chat App",
      description: "Cross-platform mobile application for real-time messaging with end-to-end encryption and multimedia sharing capabilities.",
      image: "/projects/placeholder.svg",
      technologies: ["React Native", "Firebase", "TypeScript", "Redux", "Expo"],
      githubUrl: "https://github.com/phutran1210dev/chat-app",
      liveUrl: "https://chat-app-demo.com",
      productionUrl: "https://chat.phutran.dev",
      progress: 88,
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool with natural language processing, multiple output formats, and customizable templates.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "OpenAI API", "Streamlit", "NLP", "Machine Learning"],
      githubUrl: "https://github.com/phutran1210dev/ai-generator",
      liveUrl: "https://ai-generator.com",
      productionUrl: "https://ai.phutran.dev",
      progress: 92,
    }
  ]
};

export type ProjectTabKey = keyof ProjectTabs;