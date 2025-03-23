"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
}

let notifications = [
  {
    name: "Photography",
    description: "A Candid Photographer",

    icon: "📸",
    color: "#00C9A7",
  },
  {
    name: "Editor",
    description: "A Professional Video Editor",
    icon: "📹",
    color: "#FFB800",
  },
  {
    name: "Music",
    description: "Listening Music is addiction",
    icon: "🎧",
    color: "#FF3D71",
  },
  {
    name: "Travel",
    description: "Traveling is fun",

    icon: "🚗",
    color: "#00C9A7",
  },
  {
    name: "Cricket",
    description: "Right-armed spin bowler",
    icon: "🏏",
    color: "#FF3D71",
  },
  {
    name: "Hiking",
    description: "Hiking is fun",
    icon: "🥾",
    color: "#00C9A7",
  },
  {
    name: "Chess",
    description: "I prefer playing chess",
    time: "2m ago",
    icon: "♟️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 50 }, () => notifications).flat();

const Notification = ({ name, description, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-default overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-transparent border border-white/20",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md "
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 "></div>
    </div>
  );
}
