import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-16  pt-16 pb-10 border-t border-white/15">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 lg:gap-32 xl:gap-96 w-full mx-auto px-3">
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/tanayhingane">
              <Avatar className="w-11 h-11 cursor-pointer">
                <AvatarImage src="./tp.JPG" className="object-cover" />
                <AvatarFallback>TH</AvatarFallback>
              </Avatar>
            </a>
            <span className="select-none pointer-events-none text-lg font-medium dark:text-neutral-900 text-neutral-50">
              Tanay Hingane
            </span>
          </div>
          <div className="flex  items-center gap-5 text-white">
            {footerIcons.map((item, _) => (
              <Link href={item.href} target="_blank" key={_}>
                <h2 className="flex">
                  {item.name}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg> */}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="font-normal text-sm dark:text-black/60 text-white/60 text-center">
            Made with ❤️ by Tanay Hingane
            <br />
            &copy; {new Date().getFullYear()} Tanay Hingane reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const footerIcons = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tanayhingane",
  },
  {
    name: "GitHub",
    href: "https://github.com/TanayHingane",
  },
  {
    name: "Discord",
    href: "https://discord.com/users/1198554997386915880",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@Tanay.H03",
  },
];
