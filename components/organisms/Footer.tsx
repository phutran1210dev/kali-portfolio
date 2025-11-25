"use client";

import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Separator } from "@/components/atoms/Separator";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { Icon } from "@/components/atoms/Icon";
import { Terminal, ArrowUp } from "lucide-react";
import { Button } from "@/components/atoms/Button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-green-500/30">
      <Container>
        <div className="py-12 space-y-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon icon={Terminal} variant="hacker" className="h-6 w-6" />
                <Typography variant="h4" className="font-mono text-green-400">
                  &gt; portfolio.exe
                </Typography>
              </div>
              
              <Typography variant="small" className="text-gray-400 max-w-md">
                Ethical Hacker & Cybersecurity Professional. Protecting digital assets
                through responsible security research and penetration testing.
              </Typography>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <Typography variant="h4" className="font-mono text-green-400">
                Quick Links
              </Typography>
              
              <nav className="space-y-2">
                {[
                  { href: "#about", label: "About" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-gray-400 hover:text-green-400 transition-colors font-mono text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social & Contact */}
            <div className="space-y-4">
              <Typography variant="h4" className="font-mono text-green-400">
                Connect
              </Typography>
              
              <SocialLinks variant="hacker" size="sm" />
              
              <Typography variant="small" className="text-gray-400">
                Available for cybersecurity consulting and penetration testing services.
              </Typography>
            </div>
          </div>

          <Separator variant="hacker" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm font-mono">
              <Typography variant="small" className="text-gray-400">
                © 2025 Phú Trần. All rights reserved.
              </Typography>
              
              <span className="text-green-500">|</span>
              
              <Typography variant="small" className="text-gray-400">
                Built with Next.js & Anime.js
              </Typography>
            </div>

            {/* Back to Top */}
            <Button
              variant="hacker"
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              <Icon
                icon={ArrowUp}
                className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform"
              />
              Back to Top
            </Button>
          </div>

          {/* Terminal Signature */}
          <div className="bg-black border border-green-500/30 rounded-lg p-4 font-mono text-xs text-center">
            <Typography variant="small" className="text-green-400">
              $ echo &quot;Built with 💚 by a security professional who believes in making the internet safer&quot;
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
}