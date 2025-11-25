export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  productionUrl?: string;
  progress: number;
  riskLevel?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
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
      githubUrl: "https://github.com/phutran1210dev/kali-portfolio",
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
      title: "Task Management REST API",
      description: "Professional task management system with user authentication, project organization, team collaboration, and real-time notifications. Features JWT authentication, role-based permissions, and comprehensive API documentation.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Swagger"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "E-commerce Backend API",
      description: "Complete e-commerce backend with product catalog, shopping cart, order processing, payment integration (Stripe), inventory management, and admin dashboard APIs. Includes automated testing and CI/CD pipeline.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "NestJS", "PostgreSQL", "Stripe", "Redis", "Docker", "Jest"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Real-time Chat System",
      description: "Scalable chat application backend with WebSocket connections, message persistence, file sharing, group chats, and user presence tracking. Implements message encryption and rate limiting.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "Socket.io", "Redis", "MongoDB", "Multer", "Rate Limiting"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Blog CMS with GraphQL",
      description: "Modern content management system with GraphQL API, markdown support, image optimization, SEO features, and multi-author capabilities. Features advanced query optimization and caching strategies.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "GraphQL", "Apollo Server", "MongoDB", "Cloudinary", "Redis"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Social Media API Platform",
      description: "Social networking backend with user profiles, posts, comments, likes, follow system, and news feed algorithm. Implements advanced database indexing and query optimization for performance.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS S3", "Bull Queue"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Microservices Event System",
      description: "Event-driven microservices architecture with service discovery, message queuing, distributed logging, and health monitoring. Demonstrates advanced backend patterns and scalability concepts.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "Docker", "RabbitMQ", "Consul", "ELK Stack", "Prometheus"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "File Storage & CDN Service",
      description: "Cloud file storage service with upload optimization, image processing, CDN integration, and access control. Features automatic backup, file versioning, and bandwidth optimization.",
      image: "/projects/placeholder.svg",
      technologies: ["Node.js", "AWS S3", "CloudFront", "Sharp", "Multer", "Compression"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Enterprise CQRS Banking System",
      description: "Advanced banking platform using CQRS/Event Sourcing with NestJS. Features distributed transactions, saga patterns, domain-driven design, and advanced security. Implements complex financial workflows with audit trails.",
      image: "/projects/placeholder.svg",
      technologies: ["NestJS", "TypeScript", "CQRS", "Event Sourcing", "DDD", "Kafka", "PostgreSQL", "Redis", "Saga Pattern"],
      githubUrl: "",
      progress: 0,
    },
    {
      title: "Multi-tenant SaaS Platform",
      description: "Enterprise-grade SaaS architecture with advanced tenant isolation, dynamic schema generation, custom decorators, interceptors, and guards. Features automated billing, usage analytics, and white-label customization.",
      image: "/projects/placeholder.svg",
      technologies: ["NestJS", "TypeScript", "Multi-tenancy", "Custom Decorators", "Interceptors", "Guards", "Prisma", "Bull Queue", "Stripe"],
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
      riskLevel: "LOW",
    },
    {
      title: "Threat Intelligence Dashboard",
      description: "Real-time threat intelligence aggregation and visualization dashboard with IOC tracking, threat actor profiling, and automated alert generation.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "Vue.js", "D3.js", "Elasticsearch", "OSINT", "Nmap", "Wireshark", "Burp Suite"],
      githubUrl: "https://github.com/phutran1210dev/threat-intel",
      progress: 100,
      riskLevel: "MEDIUM",
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated vulnerability assessment tool with custom payloads, detailed reporting, and integration with popular security frameworks.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "Nessus", "OpenVAS", "Nikto", "SQLMap"],
      githubUrl: "https://github.com/phutran1210dev/vuln-scanner",
      progress: 100,
      riskLevel: "MEDIUM",
    },
    {
      title: "Network Port Scanner",
      description: "Basic network reconnaissance tool for discovering open ports and services. Educational project for learning network scanning fundamentals and TCP/UDP protocols.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "Socket", "Threading", "Argparse"],
      githubUrl: "",
      progress: 0,
      riskLevel: "LOW",
    },
    {
      title: "Web Application Firewall Bypass",
      description: "Intermediate security testing tool for WAF evasion techniques. Implements various payload encoding methods and filter bypass strategies for penetration testing.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "Requests", "BeautifulSoup", "Regex", "Base64"],
      githubUrl: "",
      progress: 0,
      riskLevel: "MEDIUM",
    },
    {
      title: "Advanced Persistent Threat Simulator",
      description: "Advanced cybersecurity simulation framework for APT attack patterns and defense mechanisms. Includes multi-stage attack vectors, lateral movement, and stealth techniques.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "PowerShell", "Metasploit", "Empire", "Cobalt Strike", "YARA"],
      progress: 0,
      riskLevel: "HIGH",
    },
    {
      title: "Social Engineering Toolkit (SET)",
      description: "Custom social engineering automation framework with phishing campaign management, payload generation, and credential harvesting. Includes email templates, fake websites, and USB attack vectors.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "SET Framework", "Apache2", "BeEF", "Credential Harvester", "Phishing"],
      progress: 0,
      riskLevel: "HIGH",
    },
    {
      title: "Wireless Security Auditing Suite",
      description: "Comprehensive WiFi penetration testing toolkit with WPA/WPA2/WPA3 attacks, evil twin setup, deauthentication attacks, and wireless network monitoring. Includes handshake capture and cracking utilities.",
      image: "/projects/placeholder.svg",
      technologies: ["Kali Linux", "Aircrack-ng", "Reaver", "Wifite", "Hostapd", "Wireshark", "Python"],
      progress: 0,
      riskLevel: "MEDIUM",
    },
    {
      title: "Digital Forensics Investigation Tool",
      description: "Complete digital forensics suite for incident response with memory analysis, file carving, network forensics, and evidence preservation. Features automated reporting and chain of custody documentation.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "Volatility", "Autopsy", "Sleuth Kit", "Binwalk", "Foremost", "Wireshark"],
      githubUrl: "",
      progress: 0,
      riskLevel: "LOW",
    },
    {
      title: "WiFi Password Cracking Suite",
      description: "Advanced WiFi security testing framework with automated handshake capture, dictionary attacks, rainbow tables, and WPS PIN attacks. Features GPU acceleration and custom wordlist generation for enterprise networks.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "Aircrack-ng", "Hashcat", "John the Ripper", "Reaver", "Pixie Dust", "CUDA"],
      progress: 0,
      riskLevel: "CRITICAL",
    },
    {
      title: "Advanced Phishing Malware Generator",
      description: "Custom malware development framework for phishing campaigns with keylogger functionality, screenshot capture, credential extraction, and stealth persistence. Features anti-VM detection and encrypted C2 communication.",
      image: "/projects/placeholder.svg",
      technologies: ["Python", "PyInstaller", "Cryptography", "Win32API", "Persistence", "Obfuscation", "C2 Framework"],
      progress: 0,
      riskLevel: "CRITICAL",
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