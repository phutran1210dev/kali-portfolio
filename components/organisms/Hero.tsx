"use client";

import { useEffect, useState, useRef } from "react";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { Icon } from "@/components/atoms/Icon";
import { Download, ChevronDown } from "lucide-react";
import { animateElement, animations } from "@/lib/anime";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = [
    "Software Engineer",
    "Ethical Hacker",
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (displayText.length < currentRole.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, currentIndex, roles]);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff41";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text =
          matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Animate on mount
  useEffect(() => {
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".animate-on-mount");

      animateElement(elements, {
        ...animations.fadeInUp,
        delay: (el, i) => i * 200,
      });
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Matrix Background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Terminal-style greeting */}
          <div className="animate-on-mount">
            <Typography variant="code" className="text-green-400 mb-4">
              $ whoami
            </Typography>
          </div>

          {/* Name */}
          <div className="animate-on-mount">
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-4"
            >
              <span className="text-white">Phú</span>{" "}
              <span className="text-green-400">Trần</span>
            </Typography>
          </div>

          {/* Dynamic Role */}
          <div className="animate-on-mount">
            <div className="h-16 flex items-center justify-center">
              <Typography
                variant="h2"
                className="text-xl md:text-3xl font-mono text-cyan-400"
              >
                &gt; {displayText}
                <span className="animate-pulse text-green-400">|</span>
              </Typography>
            </div>
          </div>

          {/* Description */}
          <div className="animate-on-mount">
            <Typography
              variant="lead"
              className="text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Passionate frontend developer with over 5+ years of experience in React, Next.js, and modern web technologies. 
              My journey began with curiosity about user interfaces and evolved into creating exceptional digital experiences 
              that users love.
            </Typography>
          </div>

          {/* CTA Buttons */}
          <div className="animate-on-mount flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/cv/SE_PHUTRAN.pdf" 
              download="SE_PHUTRAN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hacker" size="lg" className="group">
                <Icon
                  icon={Download}
                  className="h-4 w-4 mr-2 group-hover:animate-bounce"
                />
                Download CV
              </Button>
            </a>

            <Button 
              variant="matrix" 
              size="lg"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-on-mount">
            <SocialLinks variant="hacker" className="justify-center" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-on-mount">
          <div className="flex flex-col items-center space-y-2">
            <Typography variant="small" className="text-green-400 font-mono">
              scroll
            </Typography>
            <Icon
              icon={ChevronDown}
              variant="hacker"
              className="h-6 w-6 animate-bounce"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
