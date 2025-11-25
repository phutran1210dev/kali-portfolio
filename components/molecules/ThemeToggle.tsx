"use client";

import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { useTheme } from "@/lib/contexts/theme-context";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Icon icon={Monitor} className="h-4 w-4" />
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "system") return Monitor;
    if (actualTheme === "dark") return Moon;
    return Sun;
  };

  return (
    <Button
      variant="hacker"
      size="icon"
      onClick={cycleTheme}
      className="relative overflow-hidden group"
    >
      <Icon 
        icon={getIcon()} 
        variant="hacker"
        className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" 
      />
      <span className="sr-only">
        Toggle theme (current: {theme})
      </span>
    </Button>
  );
}