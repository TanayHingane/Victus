// import grainImage from "/grain.jpg";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Card({
  className,
  children,
  ...otherProps
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 after:z-10 overflow-hidden after:content[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
      {...otherProps}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={
          {
            //   backgroundImage: `url(${grainImage.src})`,
          }
        }
      ></div>
      {children}
    </div>
  );
}
