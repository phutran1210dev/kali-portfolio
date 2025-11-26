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
    title: "Certified Ethical Hacker (CEH)",
    description: "EC-Council certified with expertise in ethical hacking methodologies",
  },
  {
    icon: Target,
    title: "Penetration Testing",
    description: "Advanced penetration testing across web, mobile, and network infrastructures",
  },
  {
    icon: Search,
    title: "Vulnerability Research",
    description: "Discovered and responsibly disclosed 50+ security vulnerabilities",
  },
  {
    icon: Award,
    title: "Bug Bounty Hunter",
    description: "Top performer on multiple bug bounty platforms with $50k+ earnings",
  },
];

export const cehCertifications: string[] = [
  "CEH v13 (Certified Ethical Hacker v13)",
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
  ...cehCertifications,
  ...cloudCertifications,
  ...securityCertifications,
  ...languageSkills,
];