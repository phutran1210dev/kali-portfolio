"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/atoms/Container";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { NavigationItem } from "@/components/molecules/NavigationItem";
import { Icon } from "@/components/atoms/Icon";
import { Menu, X, Terminal, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "default" | "hacker";
}

const navigationItems = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export function Header({ variant = "hacker" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-purple-500/30 shadow-lg shadow-purple-500/20"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Icon icon={Terminal} variant="cosmic" className="h-6 w-6" />
            <Typography variant="h4" className="font-mono text-purple-400">
              Portfolio
            </Typography>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.href}
                href={item.href}
                variant={variant}
              >
                {item.label}
              </NavigationItem>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Space Badge */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <Icon icon={Shield} variant="cosmic" className="h-4 w-4" />
              <Typography variant="small" className="font-mono text-purple-400">
                Space
              </Typography>
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="cosmic"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon
                icon={isMobileMenuOpen ? X : Menu}
                variant="cosmic"
                className="h-4 w-4"
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-purple-500/30 mt-4 pt-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <NavigationItem
                  key={item.href}
                  href={item.href}
                  variant={variant}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavigationItem>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}