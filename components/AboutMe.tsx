"use client";

import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHead";
// import BookOpenIcon from "@/assets/images/book-cover.png";
// import Image from "next/image";
// import javaScriptIcon from "@/assets/icons/skill/JavaScript.svg";
// import typeScriptIcon from "@/assets/icons/skill/TypeScript.svg";
// import reactIcon from "@/assets/icons/skill/React.svg";
// import nextJsIcon from "@/assets/icons/skill/Next.js.svg";
// import tailwindCssIcon from "@/assets/icons/skill/TailwindCSS.svg";
// import gitIcon from "@/assets/icons/skill/GitHub.svg";
// import nodeJsIcon from "@/assets/icons/skill/Node.js.svg";
// import shadcnIcon from "@/assets/icons/skill/shadcn.svg";
// import appwriteIcon from "@/assets/icons/skill/Appwrite.svg";
// import vercelIcon from "@/assets/icons/skill/Vercel.svg";
// import phpIcon from "@/assets/icons/skill/PHP.svg";
// import cloudflareIcon from "@/assets/icons/skill/Cloudflare.svg";
// import figmaIcon from "@/assets/icons/skill/Figma.svg";
import { CardHeader } from "@/components/ui/CardHeader";
import { ToolBoxItems } from "@/components/ui/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import { AnimatedListDemo } from "./ui/AnimatedListDemo";
import { text } from "stream/consumers";
import { title } from "process";
import { CARDS } from "./ui/GoodThoughts";
import { CardStack } from "./ui/card-stack";
import { MarqueeDemo } from "./Lang";
// import { Text } from "lucide-react";

// const toolbox = [
//   {
//     title: "JavaScript",
//     icon: javaScriptIcon,
//   },
//   {
//     title: "TypeScript",
//     icon: typeScriptIcon,
//   },
//   {
//     title: "React",
//     icon: reactIcon,
//   },
//   {
//     title: "Next.js",
//     icon: nextJsIcon,
//   },
//   {
//     title: "Tailwind CSS",
//     icon: tailwindCssIcon,
//   },
//   {
//     title: "Git+GitHub",
//     icon: gitIcon,
//   },
//   {
//     title: "Node.js",
//     icon: nodeJsIcon,
//   },
//   //   {
//   //     title: "Shadcn/UI",
//   //     icon: shadcnIcon,
//   //   },
//   //   {
//   //     title: "Appwrite",
//   //     icon: appwriteIcon,
//   //   },
//   {
//     title: "Vercel",
//     icon: vercelIcon,
//   },
//   {
//     title: "Cloudflare",
//     icon: cloudflareIcon,
//   },
//   {
//     title: "Figma",
//     icon: figmaIcon,
//   },
//   {
//     title: "PHP",
//     icon: phpIcon,
//   },
// ];

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
              <div className="w-40 mx-auto mt-2 md:mt-0 items-center">
                <MapEmbed />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export function MapEmbed() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7499.668258174582!2d73.81721254110823!3d19.97347675923897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeab98f006623%3A0x445073c003f091dc!2sUpnagar%2C%20Nashik%2C%20Maharashtra%20422214!5e0!3m2!1sen!2sin!4v1741158562836!5m2!1sen!2sin"
      width="190"
      height="200"
      loading="eager"
      className="border-1 rounded-lg"
    ></iframe>
  );
}
