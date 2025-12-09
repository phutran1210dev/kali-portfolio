"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "cosmic" | "nebula";
}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", variant = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-border",
      cosmic: "bg-gradient-to-r from-transparent via-purple-500 to-transparent",
      nebula: "bg-gradient-to-r from-transparent via-pink-400 to-transparent",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "shrink-0",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";

export { Separator };
export type { SeparatorProps };