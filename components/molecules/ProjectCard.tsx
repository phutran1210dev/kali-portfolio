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
  variant?: "default" | "cosmic" | "nebula";
  className?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  productionUrl,
  progress = 100,
  variant = "cosmic",
  className,
}: ProjectCardProps) {
  const maxVisibleTechs = 4;
  const visibleTechs = technologies.slice(0, maxVisibleTechs);
  const remainingTechs = technologies.slice(maxVisibleTechs);
  const remainingCount = technologies.length - maxVisibleTechs;
  const headerRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // Space console terminal animation
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
        variant === "cosmic" && "hover:shadow-lg hover:shadow-purple-500/30",
        variant === "nebula" && "hover:shadow-lg hover:shadow-pink-400/30",
        className
      )}
    >
      {/* Space Console Terminal Header */}
      <div 
        ref={headerRef}
        className={cn(
          "relative h-48 w-full overflow-hidden rounded-t-lg border-b",
          variant === "cosmic" && "bg-gradient-to-br from-purple-950/40 via-blue-950/20 to-black border-purple-400/50",
          variant === "nebula" && "bg-gradient-to-br from-pink-950/40 via-purple-950/20 to-black border-pink-400/50"
        )}
      >
        {/* Terminal Window Header */}
        <div className={cn(
          "flex items-center justify-between p-3 border-b",
          variant === "cosmic" && "bg-purple-950/30 border-purple-500/30",
          variant === "nebula" && "bg-pink-950/30 border-pink-500/30"
        )}>
          <div className="flex items-center space-x-2">
            <div className="terminal-dot w-3 h-3 rounded-full bg-pink-400 shadow-lg shadow-pink-500/50"></div>
            <div className="terminal-dot w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
            <div className="terminal-dot w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
          </div>
          <div className={cn(
            "text-xs font-mono font-semibold",
            variant === "cosmic" && "text-purple-300",
            variant === "nebula" && "text-pink-300"
          )}>
            space@nebula:~/projects
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 space-y-2 font-mono text-xs">
          <div className={cn(
            "terminal-line flex items-center font-semibold",
            variant === "cosmic" && "text-purple-300",
            variant === "nebula" && "text-pink-300"
          )}>
            <span className="text-blue-400">╭─(</span>
            <span className={cn(
              "font-bold",
              variant === "cosmic" && "text-purple-400",
              variant === "nebula" && "text-pink-400"
            )}>space㉿nebula</span>
            <span className="text-blue-400">)-[</span>
            <span className="text-gray-200 font-semibold">~/projects</span>
            <span className="text-blue-400">]</span>
          </div>
          <div className={cn(
            "terminal-line flex items-center font-semibold",
            variant === "cosmic" && "text-purple-300",
            variant === "nebula" && "text-pink-300"
          )}>
            <span className="text-blue-400">╰─</span>
            <span className={cn(
              "font-bold",
              variant === "cosmic" && "text-purple-400",
              variant === "nebula" && "text-pink-400"
            )}>$ </span>
            <span className="text-gray-200">cat project_info.txt</span>
          </div>
          <div className={cn(
            "terminal-line h-px",
            variant === "cosmic" && "bg-linear-to-r from-transparent via-purple-400/70 to-transparent",
            variant === "nebula" && "bg-linear-to-r from-transparent via-pink-400/70 to-transparent"
          )}></div>
          <div className={cn(
            "terminal-line font-bold text-sm",
            variant === "cosmic" && "text-purple-300",
            variant === "nebula" && "text-pink-300"
          )}># {title}</div>
          <div className={cn(
            "terminal-line h-px",
            variant === "cosmic" && "bg-linear-to-r from-transparent via-purple-400/50 to-transparent",
            variant === "nebula" && "bg-linear-to-r from-transparent via-pink-400/50 to-transparent"
          )}></div>
        </div>

        {/* Cosmic overlay */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          variant === "cosmic" && "bg-purple-500/10",
          variant === "nebula" && "bg-pink-400/10"
        )} />

        {/* Scanning line effect */}
        <div className={cn(
          "absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "bg-linear-to-r from-transparent via-current to-transparent animate-pulse",
          variant === "cosmic" && "text-purple-500",
          variant === "nebula" && "text-pink-400"
        )} />
      </div>
      
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
              variant === "cosmic" && "text-purple-400",
              variant === "nebula" && "text-pink-400",
              variant === "default" && "text-primary"
            )}>Progress</span>
            <span className={cn(
              "font-bold",
              progress === 100 && "text-purple-400",
              progress >= 80 && progress < 100 && "text-pink-400",
              progress < 80 && "text-orange-400"
            )}>{progress}%</span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-500 ease-out",
                progress === 100 && "bg-linear-to-r from-purple-500 to-blue-400 shadow-lg shadow-purple-500/30",
                progress >= 80 && progress < 100 && "bg-linear-to-r from-pink-500 to-purple-400 shadow-lg shadow-pink-500/30",
                progress < 80 && "bg-linear-to-r from-orange-500 to-pink-400 shadow-lg shadow-orange-500/30"
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
                  variant === "cosmic" && "bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30",
                  variant === "nebula" && "bg-pink-500/20 text-pink-300 border-pink-500/30 hover:bg-pink-500/30"
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
                  variant === "cosmic" && "bg-gray-900 border-purple-500/50 shadow-purple-500/20 text-purple-300",
                  variant === "nebula" && "bg-gray-900 border-pink-500/50 shadow-pink-500/20 text-pink-300",
                  variant === "default" && "bg-gray-900 border-gray-600 shadow-gray-500/20 text-gray-300"
                )}>
                  {remainingTechs.join(", ")}
                  
                  {/* Arrow */}
                  <div className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2",
                    "w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent",
                    variant === "cosmic" && "border-t-purple-500/50",
                    variant === "nebula" && "border-t-pink-500/50",
                    variant === "default" && "border-t-gray-600"
                  )} />
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {/* Code Button */}
          {githubUrl ? (
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
              className="opacity-50 cursor-not-allowed bg-gray-800/50 border-gray-600 text-gray-500"
              title="Source code not available"
            >
              <Icon icon={Github} className="h-4 w-4 mr-2" />
              Code
            </Button>
          )}
          
          {/* Live Demo Button */}
          {liveUrl ? (
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
              className="opacity-50 cursor-not-allowed bg-gray-800/50 border-gray-600 text-gray-500"
              title="Live demo not available"
            >
              <Icon icon={ExternalLink} className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          )}
          
          {/* Production Button */}
          {productionUrl ? (
            <a href={productionUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant={variant === "default" ? "default" : variant}
                size="sm"
                className={cn(
                  "font-mono font-semibold",
                  variant === "cosmic" && "bg-purple-500/30 border-purple-400 text-purple-300 hover:bg-purple-500/40 shadow-lg shadow-purple-500/30",
                  variant === "nebula" && "bg-pink-500/30 border-pink-400 text-pink-300 hover:bg-pink-500/40 shadow-lg shadow-pink-500/30"
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
              className="opacity-50 cursor-not-allowed bg-gray-800/50 border-gray-600 text-gray-500"
              title="Production not available"
            >
              <Icon icon={ExternalLink} className="h-4 w-4 mr-2" />
              Production
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}