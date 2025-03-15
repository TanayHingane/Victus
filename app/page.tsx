"use client";

import { AboutMe } from "@/components/AboutMe";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import ProjectGrid from "@/components/ProjectGrid";
import SectionHeader from "@/components/ui/SectionHead";
import { Testimonial } from "@/components/Testimonial";
import { ContactSection } from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-5 px-2">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#Home" },
            { name: "Projects", link: "#Projects" },
            { name: "About Me", link: "#About" },
            { name: "Review", link: "#Review" },
          ]}
        />
        <Hero />
        <SectionHeader title="Projects" description="See my work" />
        <ProjectGrid />
        <AboutMe />
        <Testimonial />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
