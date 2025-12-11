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
  variant?: "default" | "cosmic" | "nebula" | "hacker" | "matrix";
  className?: string;
}

export function SkillCard({
  title,
  description,
  icon,
  skills,
  variant = "cosmic",
  className,
}: SkillCardProps) {
  return (
    <Card
      variant={variant}
      className={cn(
        "group hover:scale-105 transition-all duration-300 cursor-pointer",
        variant === "cosmic" && "hover:shadow-purple-500/20",
        variant === "nebula" && "hover:shadow-pink-400/20",
        className
      )}
    >
      <div className="flex items-start space-x-4">
        <div className={cn(
          "p-3 rounded-lg",
          variant === "cosmic" && "bg-purple-500/10 border border-purple-500/30",
          variant === "nebula" && "bg-pink-400/10 border border-pink-400/30",
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