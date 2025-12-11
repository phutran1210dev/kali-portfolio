"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "cosmic" | "nebula" | "glass" | "hacker" | "matrix";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-card text-card-foreground border",
      cosmic: "bg-gradient-to-br from-purple-950/90 via-black/90 to-blue-950/90 border border-purple-500/50 text-purple-100 shadow-lg shadow-purple-500/20 backdrop-blur-sm",
      nebula: "bg-gradient-to-br from-pink-950/80 via-purple-950/80 to-blue-950/80 border border-pink-400/50 text-pink-100 shadow-lg shadow-pink-400/20 backdrop-blur-sm",
      glass: "bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 backdrop-blur-md",
      hacker: "bg-gradient-to-br from-black/90 via-green-950/20 to-black/90 border border-green-500/50 text-green-100 shadow-lg shadow-green-500/20 backdrop-blur-sm",
      matrix: "bg-gradient-to-br from-black/95 via-green-950/10 to-black/95 border border-green-400/30 text-green-300 shadow-lg shadow-green-400/10 backdrop-blur-sm font-mono",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg p-6 shadow-sm transition-all hover:shadow-md",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
export type { CardProps };