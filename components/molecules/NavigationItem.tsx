"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface NavigationItemProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  isActive?: boolean;
  variant?: "default" | "cosmic";
}

export function NavigationItem({
  href,
  isActive,
  variant = "default",
  className,
  children,
  ...props
}: NavigationItemProps) {
  const variantClasses = {
    default: "text-muted-foreground hover:text-foreground",
    cosmic: "text-purple-400/70 hover:text-purple-400 border-b border-transparent hover:border-purple-400/50",
  };

  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-all duration-300 font-mono",
        variantClasses[variant],
        isActive && variant === "hacker" && "text-green-400 border-b border-green-400",
        isActive && variant === "default" && "text-foreground",
        className
      )}
      {...props}
    >
      {children}
      {variant === "hacker" && (
        <span className="absolute inset-0 bg-green-400/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
    </Link>
  );
}