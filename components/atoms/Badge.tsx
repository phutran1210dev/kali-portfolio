"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        cosmic: "border-purple-500/50 bg-purple-500/10 text-purple-300 font-mono hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/20",
        nebula: "border-pink-400/50 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-300 font-mono hover:from-pink-500/20 hover:to-purple-500/20 hover:shadow-lg hover:shadow-pink-500/20",
        skill: "border-blue-500/50 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };