import {
  Shield,
  Globe,
  Database,
  Terminal,
  Code,
  Server,
  Cloud,
  GitBranch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

export interface SkillTab {
  key: "frontend" | "backend" | "lab" | "devops";
  label: string;
  color: string;
}

export interface SkillTabs {
  frontend: SkillCategory[];
  backend: SkillCategory[];
  lab: SkillCategory[];
  devops: SkillCategory[];
}

export const skillTabs: SkillTabs = {
  frontend: [
    {
      title: "React Ecosystem",
      description: "React and React-based frameworks",
      icon: Code,
      skills: ["React 19", "Next.js 15", "React Native", "TypeScript", "JavaScript"],
    },
    {
      title: "Styling & UI",
      description: "Design and user interface technologies",
      icon: Globe,
      skills: ["Tailwind CSS v4", "Shadcn/ui", "Radix UI", "Framer Motion", "Three.js", "GSAP", "Animejs"],
    },
    {
      title: "Build Tools & Package Managers",
      description: "Development tools and package management",
      icon: Terminal,
      skills: ["Vite", "Webpack", "Bun", "pnpm", "yarn", "npm"],
    },
  ],
  backend: [
    {
      title: "Backend Technologies",
      description: "Server-side languages and frameworks",
      icon: Server,
      skills: ["Node.js", "Express", "NestJS", "Python", "Golang"],
    },
    {
      title: "Databases & APIs",
      description: "Data storage and API development",
      icon: Database,
      skills: ["Drizzle ORM", "Prisma", "Supabase", "PostgreSQL", "Redis", "GraphQL"],
    },
  ],
  lab: [
    {
      title: "Web Security",
      description: "Modern web application security testing",
      icon: Shield,
      skills: ["OWASP Top 10 2023", "JWT Attacks", "GraphQL Security", "API Security", "SSTI", "Race Conditions"],
    },
    {
      title: "AI & Cloud Security",
      description: "Emerging security domains",
      icon: Terminal,
      skills: ["AI/ML Security", "Container Security", "Cloud Pentesting", "Serverless Security", "Supply Chain", "Zero Trust"],
    },
  ],
  devops: [
    {
      title: "Cloud & Infrastructure",
      description: "Modern cloud and deployment platforms",
      icon: Cloud,
      skills: ["Docker", "Kubernetes", "AWS (Certified Cloud Practitioner)", "Cloudflare"],
    },
    {
      title: "CI/CD & Tools",
      description: "Modern development and deployment workflows",
      icon: GitBranch,
      skills: ["GitHub Actions", "Turborepo", "Bun", "pnpm"],
    },
  ],
};

export const tabs: SkillTab[] = [
  { key: "frontend", label: "Frontend", color: "text-blue-400" },
  { key: "backend", label: "Backend", color: "text-yellow-400" },
  { key: "lab", label: "Space Tech", color: "text-purple-400" },
  { key: "devops", label: "DevOps", color: "text-pink-400" },
];

export type SkillTabKey = keyof SkillTabs;