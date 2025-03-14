import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
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
                src="/dark-saas-landing-page.png"
              />
              <DialogTitle>Project Title</DialogTitle>
              <DialogDescription>Project Duration(date)</DialogDescription>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                delectus eos doloribus tempore. Veritatis doloremque soluta
                distinctio ad laudantium. Facilis neque illum voluptatem atque,
                natus possimus in incidunt non. Iure? Culpa harum vero beatae
                adipisci dolorum eius quidem odio blanditiis reprehenderit enim,
                ipsum laborum itaque ipsa unde cum quam vitae debitis, officiis
                iusto sed quos! Facilis magnam sapiente ea labore.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-5">
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
                children="Node.js"
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
            <Button variant={"outline"} children="View Repository" />
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
              <DrawerTitle>Project Title</DrawerTitle>
              <DrawerTitle>Project duration (date)</DrawerTitle>
              <DrawerDescription className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                delectus eos doloribus tempore. Veritatis doloremque soluta
                distinctio ad laudantium. Facilis neque illum voluptatem atque,
                natus possimus in incidunt non. Iure? Culpa harum vero beatae
                adipisci dolorum eius quidem odio blanditiis reprehenderit enim,
                ipsum laborum itaque ipsa unde cum quam vitae debitis, officiis
                iusto sed quos! Facilis magnam sapiente ea labore.
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
                  children="Node.js"
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
                <Button variant={"outline"} children="View Repository" />
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
            <Button children="Know More" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <img
                className="w-full h-36 object-contain p-2 pb-4"
                src="/dark-saas-landing-page.png"
              />
              <DialogTitle>Project Title</DialogTitle>
              <DialogDescription>Project Duration(date)</DialogDescription>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                delectus eos doloribus tempore. Veritatis doloremque soluta
                distinctio ad laudantium. Facilis neque illum voluptatem atque,
                natus possimus in incidunt non. Iure? Culpa harum vero beatae
                adipisci dolorum eius quidem odio blanditiis reprehenderit enim,
                ipsum laborum itaque ipsa unde cum quam vitae debitis, officiis
                iusto sed quos! Facilis magnam sapiente ea labore.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-5">
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
                children="Node.js"
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
            <Button variant={"outline"} children="View Repository" />
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:hidden block">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button children="Know More" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Project Title</DrawerTitle>
              <DrawerTitle>Project duration (date)</DrawerTitle>
              <DrawerDescription className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                delectus eos doloribus tempore. Veritatis doloremque soluta
                distinctio ad laudantium. Facilis neque illum voluptatem atque,
                natus possimus in incidunt non. Iure? Culpa harum vero beatae
                adipisci dolorum eius quidem odio blanditiis reprehenderit enim,
                ipsum laborum itaque ipsa unde cum quam vitae debitis, officiis
                iusto sed quos! Facilis magnam sapiente ea labore.
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
                  children="Node.js"
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
                <Button variant={"outline"} children="View Repository" />
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
            <Button children="Know More" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <img
                className="w-full h-36 object-contain p-2 pb-4"
                src="/dark-saas-landing-page.png"
              />
              <DialogTitle>Project Title</DialogTitle>
              <DialogDescription>Project Duration(date)</DialogDescription>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                delectus eos doloribus tempore. Veritatis doloremque soluta
                distinctio ad laudantium. Facilis neque illum voluptatem atque,
                natus possimus in incidunt non. Iure? Culpa harum vero beatae
                adipisci dolorum eius quidem odio blanditiis reprehenderit enim,
                ipsum laborum itaque ipsa unde cum quam vitae debitis, officiis
                iusto sed quos! Facilis magnam sapiente ea labore.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-5">
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
                children="Node.js"
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
            <Button variant={"outline"} children="View Repository" />
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:hidden block">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button children="Know More" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Project Title</DrawerTitle>
              <DrawerTitle>Project duration (date)</DrawerTitle>
              <DrawerDescription className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                delectus eos doloribus tempore. Veritatis doloremque soluta
                distinctio ad laudantium. Facilis neque illum voluptatem atque,
                natus possimus in incidunt non. Iure? Culpa harum vero beatae
                adipisci dolorum eius quidem odio blanditiis reprehenderit enim,
                ipsum laborum itaque ipsa unde cum quam vitae debitis, officiis
                iusto sed quos! Facilis magnam sapiente ea labore.
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
                  children="Node.js"
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
                <Button variant={"outline"} children="View Repository" />
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
