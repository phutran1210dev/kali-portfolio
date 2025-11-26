"use client";

import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { animateElement } from "@/lib/anime";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  productionUrl?: string;
  progress?: number;
  variant?: "default" | "hacker" | "matrix";
  className?: string;
  securityRestricted?: boolean;
  isCEHProject?: boolean;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  productionUrl,
  progress = 100,
  variant = "hacker",
  className,
  securityRestricted = false,
  isCEHProject = false,
}: ProjectCardProps) {
  const maxVisibleTechs = 4;
  const visibleTechs = technologies.slice(0, maxVisibleTechs);
  const remainingTechs = technologies.slice(maxVisibleTechs);
  const remainingCount = technologies.length - maxVisibleTechs;
  const headerRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // CEH Kali Linux terminal animation
  useEffect(() => {
    if (headerRef.current) {
      const dots = headerRef.current.querySelectorAll('.terminal-dot');
      const lines = headerRef.current.querySelectorAll('.terminal-line');
      
      // Animate terminal dots (like Kali Linux terminal)
      animateElement(dots, {
        scale: [0, 1, 0.8],
        opacity: [0, 1],
        duration: 600,
        delay: (el, i) => i * 200,
        ease: "outBack",
      });

      // Animate terminal lines (scanning effect)
      setTimeout(() => {
        animateElement(lines, {
          scaleX: [0, 1],
          opacity: [0, 0.7, 0.4],
          duration: 800,
          delay: (el, i) => i * 100,
          ease: "outExpo",
        });
      }, 800);
    }
  }, []);

  return (
    <Card
      variant={variant}
      className={cn(
        "group hover:scale-[1.02] transition-all duration-300 overflow-hidden h-full flex flex-col",
        variant === "hacker" && "hover:shadow-lg hover:shadow-green-500/20",
        variant === "matrix" && "hover:shadow-lg hover:shadow-cyan-400/20",
        className
      )}
    >
      {/* CEH Kali Linux Terminal Header */}
      <div 
        ref={headerRef}
        className={cn(
          "relative h-48 w-full overflow-hidden rounded-t-lg border-b",
          variant === "hacker" && "bg-linear-to-br from-gray-900 via-green-950/20 to-gray-800 border-green-400/50",
          variant === "matrix" && "bg-linear-to-br from-gray-900 via-cyan-950/20 to-gray-800 border-cyan-400/50"
        )}
      >
        {/* Terminal Window Header */}
        <div className={cn(
          "flex items-center justify-between p-3 border-b",
          variant === "hacker" && "bg-green-950/30 border-green-500/30",
          variant === "matrix" && "bg-cyan-950/30 border-cyan-500/30"
        )}>
          <div className="flex items-center space-x-2">
            <div className="terminal-dot w-3 h-3 rounded-full bg-red-400 shadow-lg shadow-red-500/50"></div>
            <div className="terminal-dot w-3 h-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-500/50"></div>
            <div className="terminal-dot w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-500/50"></div>
          </div>
          <div className={cn(
            "text-xs font-mono font-semibold",
            variant === "hacker" && "text-green-300",
            variant === "matrix" && "text-cyan-300"
          )}>
            root@kali:~/projects
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 space-y-2 font-mono text-xs">
          <div className={cn(
            "terminal-line flex items-center font-semibold",
            variant === "hacker" && "text-green-300",
            variant === "matrix" && "text-cyan-300"
          )}>
            <span className="text-red-400">┌──(</span>
            <span className={cn(
              "font-bold",
              variant === "hacker" && "text-green-400",
              variant === "matrix" && "text-cyan-400"
            )}>root㉿kali</span>
            <span className="text-red-400">)-[</span>
            <span className="text-gray-200 font-semibold">~/projects</span>
            <span className="text-red-400">]</span>
          </div>
          <div className={cn(
            "terminal-line flex items-center font-semibold",
            variant === "hacker" && "text-green-300",
            variant === "matrix" && "text-cyan-300"
          )}>
            <span className="text-red-400">└─</span>
            <span className={cn(
              "font-bold",
              variant === "hacker" && "text-green-400",
              variant === "matrix" && "text-cyan-400"
            )}>$ </span>
            <span className="text-gray-200">cat project_info.txt</span>
          </div>
          <div className={cn(
            "terminal-line h-px",
            variant === "hacker" && "bg-linear-to-r from-transparent via-green-400/70 to-transparent",
            variant === "matrix" && "bg-linear-to-r from-transparent via-cyan-400/70 to-transparent"
          )}></div>
          <div className={cn(
            "terminal-line font-bold text-sm",
            variant === "hacker" && "text-green-300",
            variant === "matrix" && "text-cyan-300"
          )}># {title}</div>
          <div className={cn(
            "terminal-line h-px",
            variant === "hacker" && "bg-linear-to-r from-transparent via-green-400/50 to-transparent",
            variant === "matrix" && "bg-linear-to-r from-transparent via-cyan-400/50 to-transparent"
          )}></div>
        </div>

        {/* Matrix-style overlay */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          variant === "hacker" && "bg-green-500/5",
          variant === "matrix" && "bg-cyan-400/5"
        )} />

        {/* Scanning line effect */}
        <div className={cn(
          "absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "bg-linear-to-r from-transparent via-current to-transparent animate-pulse",
          variant === "hacker" && "text-green-500",
          variant === "matrix" && "text-cyan-400"
        )} />
      </div>
      
      {/* Security Warning Ribbon for CEH Projects */}
      {isCEHProject && securityRestricted && (
        <div className="relative overflow-hidden border-y border-red-500/50 bg-red-900/30 font-mono text-xs font-bold">
          <div className="px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-red-300">⚠️ SECURITY WARNING</span>
            </div>
          </div>
          <div className="px-4 py-1 text-xs border-t bg-red-800/20 border-red-500/20 text-red-200">
            🔒 Educational purposes only - DO NOT implement in practice
          </div>
        </div>
      )}
      
      <div className="p-6 space-y-4 flex flex-col grow">
        <Typography variant="h3" className="font-mono group-hover:text-primary transition-colors">
          {title}
        </Typography>
        
        <Typography variant="small" className="opacity-80 leading-relaxed grow">
          {description}
        </Typography>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className={cn(
              "font-semibold",
              variant === "hacker" && "text-green-400",
              variant === "matrix" && "text-cyan-400",
              variant === "default" && "text-primary"
            )}>Progress</span>
            <span className={cn(
              "font-bold",
              progress === 100 && "text-green-400",
              progress >= 80 && progress < 100 && "text-yellow-400",
              progress < 80 && "text-red-400"
            )}>{progress}%</span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-500 ease-out",
                progress === 100 && "bg-linear-to-r from-green-500 to-green-400 shadow-lg shadow-green-500/30",
                progress >= 80 && progress < 100 && "bg-linear-to-r from-yellow-500 to-yellow-400 shadow-lg shadow-yellow-500/30",
                progress < 80 && "bg-linear-to-r from-red-500 to-red-400 shadow-lg shadow-red-500/30"
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {visibleTechs.map((tech) => (
            <Badge
              key={tech}
              variant={variant === "default" ? "skill" : variant}
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
          {remainingCount > 0 && (
            <div className="relative">
              <Badge
                variant={variant === "default" ? "skill" : variant}
                className={cn(
                  "text-xs cursor-help transition-all duration-300",
                  variant === "hacker" && "bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30",
                  variant === "matrix" && "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30"
                )}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                +{remainingCount} more
              </Badge>
              
              {/* Tooltip */}
              {showTooltip && (
                <div className={cn(
                  "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50",
                  "whitespace-nowrap px-3 py-2 rounded-lg shadow-lg",
                  "border animate-in fade-in-0 zoom-in-95 duration-200",
                  "text-sm font-mono",
                  variant === "hacker" && "bg-gray-900 border-green-500/50 shadow-green-500/20 text-green-300",
                  variant === "matrix" && "bg-gray-900 border-cyan-500/50 shadow-cyan-500/20 text-cyan-300",
                  variant === "default" && "bg-gray-900 border-gray-600 shadow-gray-500/20 text-gray-300"
                )}>
                  {remainingTechs.join(", ")}
                  
                  {/* Arrow */}
                  <div className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2",
                    "w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent",
                    variant === "hacker" && "border-t-green-500/50",
                    variant === "matrix" && "border-t-cyan-500/50",
                    variant === "default" && "border-t-gray-600"
                  )} />
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {/* Code Button */}
          {githubUrl && !securityRestricted ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant={variant === "default" ? "outline" : variant}
                size="sm"
              >
                <Icon icon={Github} className="h-4 w-4 mr-2" />
                Code
              </Button>
            </a>
          ) : (
            <Button
              variant="outline"
              size="sm"
              disabled
              className={cn(
                "opacity-50 cursor-not-allowed bg-gray-800/50 border-gray-600 text-gray-500",
                securityRestricted && "border-red-600/50 text-red-500/50"
              )}
              title={securityRestricted ? "Source code restricted for security reasons" : "Source code not available"}
            >
              <Icon icon={Github} className="h-4 w-4 mr-2" />
              {securityRestricted ? "Private" : "Code"}
            </Button>
          )}
          
          {/* Live Demo Button */}
          {liveUrl && !securityRestricted ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant={variant === "default" ? "default" : variant}
                size="sm"
              >
                <Icon icon={ExternalLink} className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </a>
          ) : (
            <Button
              variant="outline"
              size="sm"
              disabled
              className={cn(
                "opacity-50 cursor-not-allowed bg-gray-800/50 border-gray-600 text-gray-500",
                securityRestricted && "border-red-600/50 text-red-500/50"
              )}
              title={securityRestricted ? "Live demo restricted for security reasons" : "Live demo not available"}
            >
              <Icon icon={ExternalLink} className="h-4 w-4 mr-2" />
              {securityRestricted ? "Restricted" : "Live Demo"}
            </Button>
          )}
          
          {/* Production Button */}
          {productionUrl && !securityRestricted ? (
            <a href={productionUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant={variant === "default" ? "default" : variant}
                size="sm"
                className={cn(
                  "font-mono font-semibold",
                  variant === "hacker" && "bg-green-500/30 border-green-400 text-green-300 hover:bg-green-500/40 shadow-lg shadow-green-500/20",
                  variant === "matrix" && "bg-cyan-500/30 border-cyan-400 text-cyan-300 hover:bg-cyan-500/40 shadow-lg shadow-cyan-500/20"
                )}
              >
                <Icon icon={ExternalLink} className="h-4 w-4 mr-2" />
                Production
              </Button>
            </a>
          ) : (
            <Button
              variant="outline"
              size="sm"
              disabled
              className={cn(
                "opacity-50 cursor-not-allowed bg-gray-800/50 border-gray-600 text-gray-500",
                securityRestricted && "border-red-600/50 text-red-500/50"
              )}
              title={securityRestricted ? "Production access restricted for security reasons" : "Production not available"}
            >
              <Icon icon={ExternalLink} className="h-4 w-4 mr-2" />
              {securityRestricted ? "Classified" : "Production"}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}