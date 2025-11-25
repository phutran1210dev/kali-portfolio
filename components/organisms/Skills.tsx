"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Separator } from "@/components/atoms/Separator";
import { SkillCard } from "@/components/molecules/SkillCard";
import { Button } from "@/components/atoms/Button";
import { animateElement, animations } from "@/lib/anime";
import { skillTabs, tabs, type SkillTabKey } from "@/constants/skills";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<SkillTabKey>("frontend");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".skill-card");
            
            animateElement(cards, {
              ...animations.scaleIn,
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
  }, [activeTab]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-linear-to-b from-black via-gray-900 to-black"
    >
      <Container>
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <Typography variant="code" className="text-cyan-400">
              $ ls -la skills/
            </Typography>
            <Typography variant="h2" className="font-mono text-white">
              Technical Arsenal
            </Typography>
            <Separator variant="matrix" className="w-24 mx-auto" />
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 p-1 bg-gray-900/50 rounded-lg border border-gray-700/50">
              {tabs.map((tab) => (
                <Button
                  key={tab.key}
                  variant={activeTab === tab.key ? "hacker" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(tab.key)}
                  className={`font-mono transition-all duration-300 ${
                    activeTab === tab.key 
                      ? 'bg-green-500/20 border-green-500/50 text-green-300' 
                      : 'hover:bg-gray-800/50 text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`grid gap-8 ${
            skillTabs[activeTab].length === 3 
              ? "md:grid-cols-2 lg:grid-cols-3" 
              : "md:grid-cols-2"
          }`}>
            {skillTabs[activeTab].map((category, index) => (
              <div key={category.title} className="skill-card">
                <SkillCard
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  skills={category.skills}
                  variant={index % 3 === 0 ? "hacker" : index % 3 === 1 ? "matrix" : "hacker"}
                />
              </div>
            ))}
          </div>

          {/* Terminal Stats */}
          <div className="mt-16">
            <div className="bg-black border border-green-500/30 rounded-lg p-6 font-mono text-sm">
              <div className="text-green-400 mb-4">$ whois phutran1210.dev && dig +short phutran1210.dev</div>
              <div className="space-y-2 text-gray-300">
                {activeTab === "frontend" && (
                  <>
                    <div className="flex justify-between">
                      <span>React Projects:</span>
                      <span className="text-green-400">25+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Years Experience:</span>
                      <span className="text-green-400">5+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>UI Components Built:</span>
                      <span className="text-green-400">200+</span>
                    </div>
                  </>
                )}
                {activeTab === "backend" && (
                  <>
                    <div className="flex justify-between">
                      <span>$ sqlmap -u &quot;target.com&quot; --dbs:</span>
                      <span className="text-green-400">50+ APIs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$ enum4linux -a target.com:</span>
                      <span className="text-green-400">30+ DBs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$ nmap -sS -O target.com:</span>
                      <span className="text-green-400">40+ Servers</span>
                    </div>
                  </>
                )}
                {activeTab === "ceh" && (
                  <>
                    <div className="flex justify-between">
                      <span>$ nikto -h target.com -output vulns.txt:</span>
                      <span className="text-green-400">150+ Vulns</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$ msfconsole -q -x &quot;use exploit/multi&quot;:</span>
                      <span className="text-green-400">75+ Tests</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$ burpsuite --target=&quot;*.target.com&quot;:</span>
                      <span className="text-green-400">25+ Audits</span>
                    </div>
                  </>
                )}
                {activeTab === "devops" && (
                  <>
                    <div className="flex justify-between">
                      <span>$ docker ps -a | grep &quot;target&quot;:</span>
                      <span className="text-green-400">30+ Pipelines</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$ kubectl get pods --all-namespaces:</span>
                      <span className="text-green-400">50+ Images</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$ aws ec2 describe-instances:</span>
                      <span className="text-green-400">40+ Deployments</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}