"use client";

import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHead";
import { CardHeader } from "@/components/ui/CardHeader";
import { motion } from "framer-motion";
import { useRef } from "react";
import { AnimatedListDemo } from "./ui/AnimatedListDemo";
import { text } from "stream/consumers";
import { title } from "process";
import { CARDS } from "./ui/GoodThoughts";
import { CardStack } from "./ui/card-stack";
import { MarqueeDemo } from "./Lang";
import { Globe } from "./magicui/globe";
// import { Text } from "lucide-react";

export const AboutMe = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="pb-20 lg:pb-28" id="about">
      <div className="container">
        <SectionHeader
          title="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books that have shaped my perspective."
              />
              <div className="mx-12 mb-4">
                <CardStack items={CARDS} />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies I use to build exceptional digital experiences."
                className=""
              />
              <div className="-mt-3">
                <MarqueeDemo />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="p-0 h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <AnimatedListDemo />
            </Card>
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Active Now"
                description="Explore the books that have shaped my perspective."
              />
              <div className="relative flex size-72 max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent mx-12 -mt-10 md:pb-60">
                <Globe className=" " />
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
