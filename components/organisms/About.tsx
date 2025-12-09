"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Card } from "@/components/atoms/Card";
import { Badge } from "@/components/atoms/Badge";
import { Separator } from "@/components/atoms/Separator";
import { Icon } from "@/components/atoms/Icon";
import { animateElement, animations } from "@/lib/anime";
import { achievements, certifications } from "@/constants/about";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            
            animateElement(elements, {
              ...animations.fadeInUp,
              delay: (el, i) => i * 100,
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-linear-to-b from-black via-gray-900 to-black"
    >
      <Container>
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-on-scroll">
            <Typography variant="code" className="text-purple-400">
              $ cat about.txt
            </Typography>
            <Typography variant="h2" className="font-mono text-white">
              About Me
            </Typography>
            <Separator variant="cosmic" className="w-24 mx-auto" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6 animate-on-scroll">
              <Card variant="cosmic" className="p-8">
                <Typography variant="h3" className="font-mono text-purple-400 mb-6">
                  {"// Background"}
                </Typography>
                
                <div className="space-y-4 text-gray-300">
                  <Typography variant="p">
                    I&apos;m a passionate frontend software engineer with over 5 years of experience
                    in React, Next.js, and modern web development. My journey began with a 
                    curiosity about user interfaces and evolved into a mission to create 
                    exceptional digital experiences that solve real-world problems.
                  </Typography>
                  
                  <Typography variant="p">
                    Specializing in responsive web applications, performance optimization, and
                    user experience design, I&apos;ve helped numerous companies build scalable 
                    frontend solutions that delight users and drive business growth through
                    clean code and innovative interfaces.
                  </Typography>
                  
                  <Typography variant="p">
                    When I&apos;m not crafting pixel-perfect interfaces, I enjoy contributing to 
                    open-source projects, exploring new frontend technologies, and sharing 
                    knowledge through blog posts and tech meetups about the latest in web development.
                  </Typography>
                </div>
              </Card>

              {/* Certifications */}
              <Card variant="nebula" className="p-6 animate-on-scroll">
                <Typography variant="h4" className="font-mono text-pink-400 mb-4">
                  Certifications
                </Typography>
                
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <Badge key={cert} variant="nebula" className="font-mono">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.title}
                  variant="hacker"
                  className="p-6 animate-on-scroll hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                      <Icon
                        icon={achievement.icon}
                        variant="hacker"
                        className="h-6 w-6"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <Typography variant="h4" className="font-mono text-white mb-2">
                        {achievement.title}
                      </Typography>
                      
                      <Typography variant="small" className="text-gray-400">
                        {achievement.description}
                      </Typography>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}