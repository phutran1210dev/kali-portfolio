"use client";

import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";
import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  skills: string[];
  variant?: "default" | "hacker" | "matrix";
  className?: string;
}

export function SkillCard({
  title,
  description,
  icon,
  skills,
  variant = "hacker",
  className,
}: SkillCardProps) {
  return (
    <Card
      variant={variant}
      className={cn(
        "group hover:scale-105 transition-all duration-300 cursor-pointer",
        variant === "hacker" && "hover:shadow-green-500/20",
        variant === "matrix" && "hover:shadow-cyan-400/20",
        className
      )}
    >
      <div className="flex items-start space-x-4">
        <div className={cn(
          "p-3 rounded-lg",
          variant === "hacker" && "bg-green-500/10 border border-green-500/30",
          variant === "matrix" && "bg-cyan-400/10 border border-cyan-400/30",
          variant === "default" && "bg-muted"
        )}>
          <Icon
            icon={icon}
            variant={variant === "default" ? "default" : variant}
            className="h-6 w-6"
          />
        </div>
        
        <div className="flex-1 space-y-2">
          <Typography variant="h4" className="font-mono">
            {title}
          </Typography>
          
          {description && (
            <Typography variant="small" className="opacity-80">
              {description}
            </Typography>
          )}
          
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant={variant === "default" ? "skill" : variant}
                className="text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}