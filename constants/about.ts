import { Shield, Target, Search, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    icon: Shield,
    title: "Full-Stack Development",
    description: "Building scalable applications with modern frameworks and best practices",
  },
  {
    icon: Target,
    title: "UI/UX Excellence",
    description: "Creating intuitive and beautiful user interfaces that users love",
  },
  {
    icon: Search,
    title: "Problem Solver",
    description: "Delivering innovative solutions to complex technical challenges",
  },
  {
    icon: Award,
    title: "Continuous Learner",
    description: "Always exploring new technologies and industry best practices",
  },
];

export const labExperience: string[] = [
  "Space Tech & Modern Web Development",
];

export const cloudCertifications: string[] = [
  "AWS Certified Cloud Practitioner",
  "AWS Certified Solutions Architect - Associate",
];

export const securityCertifications: string[] = [];

export const languageSkills: string[] = [
  "HSK 3+ (Chinese Proficiency Test)",
  "IELTS 5.5 (International English Language Testing System)",
];

// Legacy export for backward compatibility
export const certifications: string[] = [
  ...labExperience,
  ...cloudCertifications,
  ...securityCertifications,
  ...languageSkills,
];