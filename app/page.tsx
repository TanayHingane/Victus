"use client";

import { AboutMe } from "@/components/AboutMe";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import ProjectGrid from "@/components/ui/ProjectGrid";
import SectionHeader from "@/components/ui/SectionHead";

export default function Home() {
  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/" },
            { name: "Projects", link: "/" },
          ]}
        />
        <Hero />
        <SectionHeader title="Projects" description="See my work" />
        <ProjectGrid />
        <AboutMe />
      </div>
    </main>
  );
}
