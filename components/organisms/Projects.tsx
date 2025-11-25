"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Separator } from "@/components/atoms/Separator";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Button } from "@/components/atoms/Button";
import { animateElement, animations } from "@/lib/anime";
import { projectTabs, type ProjectTabKey } from "@/constants/projects";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<ProjectTabKey>("Frontend");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card");
            
            animateElement(cards, {
              ...animations.fadeInUp,
              delay: (el, i) => i * 150,
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
  }, [activeTab]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-linear-to-b from-black via-gray-900 to-black"
    >
      <Container>
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <Typography variant="code" className="text-green-400">
              $ find ./projects -type f -name &quot;*.md&quot; | head -10
            </Typography>
            <Typography variant="h2" className="font-mono text-white">
              Featured Projects
            </Typography>
            <Separator variant="hacker" className="w-24 mx-auto" />
            
            <Typography variant="p" className="text-gray-400 max-w-3xl mx-auto">
              A collection of frontend applications and full-stack projects
              showcasing modern web development practices and user-centered design.
            </Typography>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(projectTabs) as ProjectTabKey[]).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                onClick={() => setActiveTab(tab)}
                className={`font-mono transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-green-500/20 border-green-500 text-green-400 shadow-lg shadow-green-500/20"
                    : "border-gray-700 text-gray-400 hover:border-green-500/50 hover:text-green-300"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTabs[activeTab].map((project, index) => (
              <div key={project.title} className="project-card flex">
                <ProjectCard
                  {...project}
                  variant={index % 3 === 0 ? "hacker" : index % 3 === 1 ? "matrix" : "hacker"}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          {/* Terminal Output */}
          <div className="mt-16">
            <div className="bg-black border border-green-500/30 rounded-lg p-6 font-mono text-sm">
              <div className="text-green-400 mb-4">$ nmap -sV --script vuln target.com | grep -E "VULNERABLE|CVE"</div>
              <div className="space-y-1 text-gray-300 text-sm">
                <div>* <span className="text-red-400">CVE-2023-4911</span> CRITICAL: Buffer overflow in glibc</div>
                <div>* <span className="text-yellow-400">CVE-2023-22515</span> HIGH: Authentication bypass in Confluence</div>
                <div>* <span className="text-orange-400">CVE-2023-36884</span> MEDIUM: RCE via crafted document files</div>
                <div>* <span className="text-blue-400">CVE-2023-38545</span> INFO: SOCKS5 heap buffer overflow</div>
                <div>* <span className="text-green-400">OWASP-A01</span> Injection vulnerabilities detected</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}