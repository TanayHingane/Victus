"use client";
import { cn } from "@/lib/utils";

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-fuchsia-100 text-purple dark:bg-fuchsia-100 dark:text-purple px-1 py-0.5 ",
        className
      )}
    >
      {children}
    </span>
  );
};

export const CARDS = [
  {
    id: 0,
    name: "Ratan Tata",
    designation: "Senior Software Engineer",
    content: (
      <p>
        "The greatest <Highlight>failure</Highlight> is not to{" "}
        <Highlight>try</Highlight>."
      </p>
    ),
  },
  {
    id: 0,
    name: "DR. APJ Abdul Kalam",
    designation: "Senior Software Engineer",
    content: (
      <p>
        "If you want to <Highlight>shine</Highlight> like a sun, first{" "}
        <Highlight>burn</Highlight> like a sun."
      </p>
    ),
  },
  {
    id: 0,
    name: "Jeff Bezos",
    designation: "Senior Software Engineer",
    content: (
      <p>
        One of the only ways to get out of a tight box is to{" "}
        <Highlight>invent your way out</Highlight>.
      </p>
    ),
  },
  {
    id: 0,
    name: "Virat Kohli",
    designation: "Senior Software Engineer",
    content: (
      <p>
        If there's <Highlight>1% chance</Highlight>, sometimes that chance is
        good enough
      </p>
    ),
  },
  {
    id: 0,
    name: "Rohit Sharma",
    designation: "Senior Software Engineer",
    content: (
      <p>
        If you want to <Highlight>Go Big</Highlight>, stop{" "}
        <Highlight>Thinking Small</Highlight>.
      </p>
    ),
  },
];
