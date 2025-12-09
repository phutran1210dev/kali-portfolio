"use client";

import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLink {
  name: string;
  url: string;
  icon: typeof Github;
}

interface SocialLinksProps {
  variant?: "default" | "cosmic" | "nebula";
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/phutran1210dev",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/phutr1210",
    icon: Linkedin,
  },
  {
    name: "Phone",
    url: "tel:+84779066669",
    icon: Phone,
  },
  {
    name: "Email",
    url: "mailto:phutran1210.dev@gmail.com",
    icon: Mail,
  },
];

export function SocialLinks({
  variant = "cosmic",
  orientation = "horizontal",
  size = "md",
  className,
}: SocialLinksProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={cn(
        "flex gap-3",
        orientation === "vertical" ? "flex-col" : "flex-row items-center",
        className
      )}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
        >
          <Button
            variant={variant === "default" ? "outline" : variant}
            size="icon"
            className={cn(
              sizeClasses[size],
              "group relative overflow-hidden"
            )}
          >
            <Icon
              icon={link.icon}
              variant={variant === "default" ? "default" : variant}
              className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
            />
            {variant === "cosmic" && (
              <span className="absolute inset-0 bg-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            {variant === "nebula" && (
              <span className="absolute inset-0 bg-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </Button>
        </a>
      ))}
    </div>
  );
}