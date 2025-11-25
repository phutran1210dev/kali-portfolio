"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Card } from "@/components/atoms/Card";
import { Separator } from "@/components/atoms/Separator";
import { Icon } from "@/components/atoms/Icon";
import { ContactForm } from "@/components/molecules/ContactForm";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { animateElement, animations } from "@/lib/anime";
import { contactInfo } from "@/constants/contact";

export function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 bg-linear-to-b from-black via-gray-900 to-black"
    >
      <Container>
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-on-scroll">
            <Typography variant="code" className="text-green-400">
              $ gobuster dir -u target.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
            </Typography>
            <Typography variant="h2" className="font-mono text-white">
              Get In Touch
            </Typography>
            <Separator variant="hacker" className="w-24 mx-auto" />
            
            <Typography variant="p" className="text-gray-400 max-w-2xl mx-auto">
              Ready to secure your systems? Let&apos;s discuss your cybersecurity needs.
              I&apos;m available for penetration testing, security consulting, and vulnerability assessments.
            </Typography>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <ContactForm variant="hacker" />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card variant="matrix" className="p-6 animate-on-scroll">
                <Typography variant="h3" className="font-mono text-cyan-400 mb-6">
                  {"// Contact Information"}
                </Typography>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start space-x-3">
                      <Icon
                        icon={info.icon}
                        variant="matrix"
                        className="h-5 w-5 mt-0.5"
                      />
                      <div>
                        <Typography variant="small" className="text-cyan-400 font-mono">
                          {info.label}:
                        </Typography>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-cyan-400 transition-colors font-mono"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <Typography variant="small" className="text-gray-300 font-mono">
                            {info.value}
                          </Typography>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card variant="hacker" className="p-6 animate-on-scroll">
                <Typography variant="h4" className="font-mono text-green-400 mb-4">
                  Follow Me
                </Typography>
                
                <SocialLinks variant="hacker" />
                
                <Typography variant="small" className="text-gray-400 mt-4">
                  Connect with me on social media for the latest security insights and updates.
                </Typography>
              </Card>

              {/* Security Notice */}
              <Card variant="hacker" className="p-6 animate-on-scroll border-yellow-500/50 bg-yellow-500/5">
                <Typography variant="h4" className="font-mono text-yellow-400 mb-3">
                  ⚠️ Security Notice
                </Typography>
                
                <Typography variant="small" className="text-yellow-300">
                  For sensitive communications, please use my PGP key. All penetration testing
                  activities are conducted with proper authorization and within legal boundaries.
                </Typography>
              </Card>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="mt-16 animate-on-scroll">
            <div className="bg-black border border-green-500/30 rounded-lg p-6 font-mono text-sm">
              <div className="text-green-400 mb-2">$ echo &quot;Thank you for visiting my portfolio!&quot;</div>
              <div className="text-gray-300">Thank you for visiting my portfolio!</div>
              <div className="text-green-400 mt-2">$ _</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}