"use client";

import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { About } from "@/components/organisms/About";
import { Skills } from "@/components/organisms/Skills";
import { Projects } from "@/components/organisms/Projects";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";

export function PortfolioTemplate() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="cosmic" />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}