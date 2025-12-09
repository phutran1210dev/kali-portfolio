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
            <Typography variant="code" className="text-purple-400">
              $ npm run contact --message="Let's build something amazing"
            </Typography>
            <Typography variant="h2" className="font-mono text-white">
              Get In Touch
            </Typography>
            <Separator variant="cosmic" className="w-24 mx-auto" />
            
            <Typography variant="p" className="text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your next project.
              I&apos;m available for web development, full-stack consulting, and technical collaboration.
            </Typography>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <ContactForm variant="cosmic" />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card variant="cosmic" className="p-6 animate-on-scroll">
                <Typography variant="h3" className="font-mono text-pink-400 mb-6">
                  {"// Contact Information"}
                </Typography>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start space-x-3">
                      <Icon
                        icon={info.icon}
                        variant="cosmic"
                        className="h-5 w-5 mt-0.5"
                      />
                      <div>
                        <Typography variant="small" className="text-pink-400 font-mono">
                          {info.label}:
                        </Typography>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-pink-400 transition-colors font-mono"
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
              <Card variant="cosmic" className="p-6 animate-on-scroll">
                <Typography variant="h4" className="font-mono text-purple-400 mb-4">
                  Follow Me
                </Typography>
                
                <SocialLinks variant="cosmic" />
                
                <Typography variant="small" className="text-gray-400 mt-4">
                  Connect with me on social media for the latest insights and updates.
                </Typography>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}