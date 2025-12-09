"use client";

import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends Omit<LucideProps, "ref"> {
  icon: LucideIcon;
  variant?: "default" | "cosmic" | "nebula";
}

export function Icon({ icon: IconComponent, className, variant = "default", ...props }: IconProps) {
  const variantClasses = {
    default: "",
    cosmic: "text-purple-400 drop-shadow-sm drop-shadow-purple-400/50",
    nebula: "text-pink-400 drop-shadow-sm drop-shadow-pink-400/50",
  };

  return (
    <IconComponent
      className={cn("h-4 w-4", variantClasses[variant], className)}
      {...props}
    />
  );
}