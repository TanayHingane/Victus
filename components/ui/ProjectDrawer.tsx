import * as React from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useState } from "react";

export function Project1() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="hidden md:block">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button children="Know More" className="hidden md:block" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] hidden md:block">
            <DialogHeader>
              <img
                className="w-full h-36 object-contain p-2 pb-4"
                src="/pfss.png"
              />
              <DialogTitle>Personal Portfolio</DialogTitle>
              <DialogDescription>2024</DialogDescription>
              <DialogDescription>
                This is a personal portfolio website showcasing expertise in web
                development and user experience design. With a sleek and modern
                UI, the site highlights skills in transforming designs into
                functional and high-performing web applications. Visitors can
                explore the resume, connect for collaborations, and learn more
                about past projects. The site is structured with an
                easy-to-navigate layout, featuring sections like Home, About,
                and Contact for seamless user interaction. 🚀💻
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-5 py-4">
              <Badge
                variant={"destructive"}
                children="Next.js"
                className="h-9 w-fit px-4 py-2"
              />
              <Badge
                variant={"destructive"}
                children="React.js"
                className="h-9 w-fit px-4 py-2"
              />
              <Badge
                variant={"destructive"}
                children="Tailwind CSS"
                className="h-9 w-fit px-4 py-2"
              />
            </div>
            <div className="flex border border-neutral-600 rounded-lg w-fit">
              <div className="p-2 gap-2 flex">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/TanayHingane.png"
                    alt="Tanay Hingane"
                  />
                  <AvatarFallback>TH</AvatarFallback>
                </Avatar>
                <label className="text-base font-medium text-black ">
                  Tanay Hingane
                </label>
              </div>
            </div>
            <Button
              variant={"outline"}
              children="View Repository"
              className="mt-4 w-full pointer-events-auto"
              onClick={() =>
                window.open("https://github.com/TanayHingane/Victus03")
              }
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:hidden block">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild className="md:hidden block">
            <Button children="Know More" className="md:hidden block" />
          </DrawerTrigger>
          <DrawerContent className="md:hidden block">
            <DrawerHeader className="text-left">
              <DrawerTitle>Personal Portfolio</DrawerTitle>
              <DrawerTitle>2024</DrawerTitle>
              <DrawerDescription className="py-2">
                This is a personal portfolio website showcasing expertise in web
                development and user experience design. With a sleek and modern
                UI, the site highlights skills in transforming designs into
                functional and high-performing web applications. Visitors can
                explore the resume, connect for collaborations, and learn more
                about past projects. The site is structured with an
                easy-to-navigate layout, featuring sections like Home, About,
                and Contact for seamless user interaction. 🚀💻
              </DrawerDescription>
              <div className="flex gap-5 py-2">
                <Badge
                  variant={"destructive"}
                  children="Next.js"
                  className="h-9 w-fit px-4 py-2"
                />
                <Badge
                  variant={"destructive"}
                  children="React.js"
                  className="h-9 w-fit px-4 py-2"
                />
                <Badge
                  variant={"destructive"}
                  children="Tailwind CSS"
                  className="h-9 w-fit px-4 py-2"
                />
              </div>
              <div className="flex border border-neutral-600 rounded-lg w-fit">
                <div className="p-2 gap-2 flex">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/TanayHingane.png"
                      alt="Tanay Hingane"
                    />
                    <AvatarFallback>TH</AvatarFallback>
                  </Avatar>
                  <label className="text-base font-medium text-black ">
                    Tanay Hingane
                  </label>
                </div>
              </div>
            </DrawerHeader>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button
                  variant={"outline"}
                  children="View Repository"
                  onClick={() =>
                    window.open("https://github.com/TanayHingane/Victus03")
                  }
                />
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export function Project2() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="hidden md:block">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button children="Know More" className="hidden md:block" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] hidden md:block">
            <DialogHeader>
              <img
                className="w-full h-36 object-contain p-2 pb-4"
                src="/snakess.png"
              />
              <DialogTitle>Snake Game</DialogTitle>
              <DialogDescription>2023-2024</DialogDescription>
              <DialogDescription>
                This website features a classic Snake game with a modern UI.
                Players control a growing snake, navigating it to eat food while
                avoiding collisions. The interface includes a score tracker and
                high score display, allowing users to challenge themselves to
                beat their best score. The game has a minimalistic design with a
                dark-themed game board for a visually appealing experience.
                Ideal for casual gaming and improving reflexes! 🎮🐍
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-5 py-2">
              <Badge
                variant={"destructive"}
                children="HTML"
                className="h-9 w-fit px-4 py-2"
              />
              <Badge
                variant={"destructive"}
                children="CSS"
                className="h-9 w-fit px-4 py-2"
              />
              <Badge
                variant={"destructive"}
                children="Javascript"
                className="h-9 w-fit px-4 py-2"
              />
            </div>
            <div className="flex border border-neutral-600 rounded-lg w-fit">
              <div className="p-2 gap-2 flex">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/TanayHingane.png"
                    alt="Tanay Hingane"
                  />
                  <AvatarFallback>TH</AvatarFallback>
                </Avatar>
                <label className="text-base font-medium text-black ">
                  Tanay Hingane
                </label>
              </div>
            </div>
            <Button
              variant={"outline"}
              children="View Repository"
              className="mt-4 w-full pointer-events-auto"
              onClick={() =>
                window.open("https://github.com/TanayHingane/snakegamevictus")
              }
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:hidden block">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button children="Know More" className="md:hidden block" />
          </DrawerTrigger>
          <DrawerContent className="md:hidden block">
            <DrawerHeader className="text-left">
              <DrawerTitle>Snake Game</DrawerTitle>
              <DrawerTitle>2023-2024</DrawerTitle>
              <DrawerDescription className="py-2">
                This website features a classic Snake game with a modern UI.
                Players control a growing snake, navigating it to eat food while
                avoiding collisions. The interface includes a score tracker and
                high score display, allowing users to challenge themselves to
                beat their best score. The game has a minimalistic design with a
                dark-themed game board for a visually appealing experience.
                Ideal for casual gaming and improving reflexes! 🎮🐍
              </DrawerDescription>
              <div className="flex gap-5 py-2">
                <Badge
                  variant={"destructive"}
                  children="HTML"
                  className="h-9 w-fit px-4 py-2"
                />
                <Badge
                  variant={"destructive"}
                  children="CSS"
                  className="h-9 w-fit px-4 py-2"
                />
                <Badge
                  variant={"destructive"}
                  children="Javascript"
                  className="h-9 w-fit px-4 py-2"
                />
              </div>
              <div className="flex border border-neutral-600 rounded-lg w-fit py-2">
                <div className="p-2 gap-2 flex">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/TanayHingane.png"
                      alt="Tanay Hingane"
                    />
                    <AvatarFallback>TH</AvatarFallback>
                  </Avatar>
                  <label className="text-base font-medium text-black ">
                    Tanay Hingane
                  </label>
                </div>
              </div>
            </DrawerHeader>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button
                  variant={"outline"}
                  children="View Repository"
                  onClick={() =>
                    window.open(
                      "https://github.com/TanayHingane/snakegamevictus"
                    )
                  }
                />
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export function Project3() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="hidden md:block">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button children="Know More" className="hidden md:block" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] hidden md:block">
            <DialogHeader>
              <img
                className="w-full h-36 object-contain p-2 pb-4"
                src="/todo.png"
              />
              <DialogTitle>Simple To-Do list</DialogTitle>
              <DialogDescription>2023</DialogDescription>
              <DialogDescription>
                a beautifully designed to-do list application that combines
                simplicity with elegance. Featuring a scenic mountain
                background, it provides a distraction-free and user-friendly
                interface for managing daily tasks. Users can effortlessly add,
                filter, and delete tasks, ensuring better productivity. With its
                minimalist design and intuitive controls, the app offers a
                seamless experience for organizing tasks efficiently. Whether
                tracking pending or completed tasks, this sleek and modern to-do
                list enhances focus and workflow. 🚀
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-5 py-2">
              <Badge
                variant={"destructive"}
                children="HTML"
                className="h-9 w-fit px-4 py-2"
              />
              <Badge
                variant={"destructive"}
                children="CSS"
                className="h-9 w-fit px-4 py-2"
              />
              <Badge
                variant={"destructive"}
                children="Javascript"
                className="h-9 w-fit px-4 py-2"
              />
            </div>
            <div className="flex border border-neutral-600 rounded-lg w-fit">
              <div className="p-2 gap-2 flex">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/TanayHingane.png"
                    alt="Tanay Hingane"
                  />
                  <AvatarFallback>TH</AvatarFallback>
                </Avatar>
                <label className="text-base font-medium text-black">
                  Tanay Hingane
                </label>
              </div>
            </div>
            <Button
              variant={"outline"}
              children="View Repository"
              className="mt-4 w-full pointer-events-auto"
              onClick={() =>
                window.open("https://github.com/TanayHingane/SimpleToDo")
              }
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:hidden block">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button children="Know More" className="md:hidden block" />
          </DrawerTrigger>
          <DrawerContent className="md:hidden block">
            <DrawerHeader className="text-left">
              <DrawerTitle>Simple To-Do list</DrawerTitle>
              <DrawerTitle>2023</DrawerTitle>
              <DrawerDescription className="py-2">
                a beautifully designed to-do list application that combines
                simplicity with elegance. Featuring a scenic mountain
                background, it provides a distraction-free and user-friendly
                interface for managing daily tasks. Users can effortlessly add,
                filter, and delete tasks, ensuring better productivity. With its
                minimalist design and intuitive controls, the app offers a
                seamless experience for organizing tasks efficiently. Whether
                tracking pending or completed tasks, this sleek and modern to-do
                list enhances focus and workflow. 🚀
              </DrawerDescription>
              <div className="flex gap-5 py-2">
                <Badge
                  variant={"destructive"}
                  children="HTML"
                  className="h-9 w-fit px-4 py-2"
                />
                <Badge
                  variant={"destructive"}
                  children="CSS"
                  className="h-9 w-fit px-4 py-2"
                />
                <Badge
                  variant={"destructive"}
                  children="Javascript"
                  className="h-9 w-fit px-4 py-2"
                />
              </div>
              <div className="flex border border-neutral-600 rounded-lg w-fit py-2">
                <div className="p-2 gap-2 flex">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/TanayHingane.png"
                      alt="Tanay Hingane"
                    />
                    <AvatarFallback>TH</AvatarFallback>
                  </Avatar>
                  <label className="text-base font-medium text-black ">
                    Tanay Hingane
                  </label>
                </div>
              </div>
            </DrawerHeader>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button
                  variant={"outline"}
                  children="View Repository"
                  onClick={() =>
                    window.open("https://github.com/TanayHingane/SimpleToDo")
                  }
                />
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
