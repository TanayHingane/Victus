"use client";

import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHead";
import { CardHeader } from "@/components/ui/CardHeader";
import { useRef } from "react";
import { AnimatedListDemo } from "./ui/AnimatedListDemo";
import { CARDS } from "./ui/GoodThoughts";
import { CardStack } from "./ui/card-stack";
import { MarqueeDemo } from "./ui/Lang";
import { ScratchToReveal } from "./magicui/scratch-to-reveal";
import { Pointer } from "./magicui/pointer";
import { PaintRoller } from "lucide-react";

// import { Text } from "lucide-react";

export const AboutMe = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="pb-20 lg:py-28" id="About">
      <div className="container px-4">
        <SectionHeader
          title="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore thought that have shaped myself"
              />
              <div className="flex items-center justify-center mb-1 mt-12 xl:justify-center md:justify-center lg:justify-center xl:-ml-20">
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
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 flex items-center justify-center">
              <ScratchToReveal
                width={395}
                height={320}
                minScratchPercentage={40}
                className="flex items-center justify-center overflow-hidden object-fit"
                gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              >
                <Pointer>
                  <PaintRoller className="text-black fill-purple" />
                </Pointer>
                <TanayIcon />
              </ScratchToReveal>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

//<img class="wxVZT" src="https://images.bitmoji.com/3d/avatar/30356572-99689645722_35-s5-v1.webp?ua=2">
//<img role="presentation" class="Dozhe" src="https://cf-st.sc-cdn.net/3d/render/37401951-99689645722_35-s5-v1.webp?trim=circle&amp;scale=0&amp;ua=2" srcset="https://cf-st.sc-cdn.net/3d/render/37401951-99689645722_35-s5-v1.webp?trim=circle&amp;scale=0&amp;ua=2 1x, https://cf-st.sc-cdn.net/3d/render/37401951-99689645722_35-s5-v1.webp?trim=circle&amp;scale=1&amp;ua=2 2x">
//<img src="https://cf-st.sc-cdn.net/3d/render/31151407-99689645722_35-s5-v1.webp?trim=circle&amp;scale=0&amp;ua=2" srcset="https://cf-st.sc-cdn.net/3d/render/31151407-99689645722_35-s5-v1.webp?trim=circle&amp;scale=0&amp;ua=2 1x, https://cf-st.sc-cdn.net/3d/render/31151407-99689645722_35-s5-v1.webp?trim=circle&amp;scale=1&amp;ua=2 2x"></img>
//<img role="presentation" class="Dozhe" src="https://cf-st.sc-cdn.net/3d/render/34726058-99689645722_35-s5-v1.webp?trim=circle&amp;scale=0&amp;ua=2" srcset="https://cf-st.sc-cdn.net/3d/render/34726058-99689645722_35-s5-v1.webp?trim=circle&amp;scale=0&amp;ua=2 1x, https://cf-st.sc-cdn.net/3d/render/34726058-99689645722_35-s5-v1.webp?trim=circle&amp;scale=1&amp;ua=2 2x">

export function TanayIcon() {
  return (
    <>
      <img className="w-full h-full object-cover" src="/map2.png" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:outline-offset-1 after:outline-gray-950/20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 to-purple -z-20 animate-ping [animation-duration:2s]"></div>
        <div className="absolute inset-0 rounded-full bg-purple -z-10"></div>
        <img
          className="size-16 rounded-full "
          src="https://cf-st.sc-cdn.net/3d/render/34726058-99689645722_35-s5-v1.webp?trim=circle&amp;scale=0&amp;ua=2"
        />
      </div>
    </>
  );
}
