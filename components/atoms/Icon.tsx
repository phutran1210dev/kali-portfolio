"use client";

import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends Omit<LucideProps, "ref"> {
  icon: LucideIcon;
  variant?: "default" | "hacker" | "matrix";
}

export function Icon({ icon: IconComponent, className, variant = "default", ...props }: IconProps) {
  const variantClasses = {
    default: "",
    hacker: "text-green-400 drop-shadow-sm drop-shadow-green-400/50",
    matrix: "text-cyan-400 drop-shadow-sm drop-shadow-cyan-400/50",
  };

  return (
    <IconComponent
      className={cn("h-4 w-4", variantClasses[variant], className)}
      {...props}
    />
  );
}