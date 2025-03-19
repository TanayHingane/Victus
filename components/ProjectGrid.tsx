import React from "react";
import { Button } from "./ui/button";
import { Project1, Project2, Project3 } from "./ui/ProjectDrawer";

const ProjectGrid = () => {
  return (
    <div className="h-full flex justify-center items-center" id="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5 p-5 h-4/5 lg:h-fit md:h-fit my-14 ">
        <div className="bg-neutral-100 rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="flex">
            <img className="w-full h-48 object-cover" src="/pfss.png" />
          </div>
          <div className="p-4">
            <div className="text-xl font-medium text-gray-800 my-3">
              Sample Portfolio
            </div>
            <p className="text-gray-500 text-lg mb-3">
              This is a personal portfolio website showcasing expertise in web
              development and user experience design.
            </p>
            <div className="flex gap-2 my-5">
              <Project1 />
              <Button
                children="Visit"
                onClick={() =>
                  window.open("https://deadpooldeshpande.vercel.app/")
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="relative">
            <img className="w-full h-48 object-cover" src="/snakess.png" />
          </div>
          <div className="p-4">
            <div className="text-xl font-medium text-gray-800 my-3">
              Snake Game
            </div>
            <p className="text-gray-500 text-lg mb-3">
              This website features a classic Snake game with a modern UI.
              Remember the snake game from your childhood? This is it!
            </p>
            <div className="flex gap-2 my-5">
              <Project2 />
              <Button
                children="Visit"
                onClick={() =>
                  window.open("https://snakegamevictus.pages.dev/")
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="relative">
            <img
              className="w-full h-48 object-cover md:object-fill lg:object-fill xl:object-fill"
              src="/todo.png"
            />
          </div>
          <div className="p-4">
            <div className="text-xl font-medium text-gray-800 my-3">
              A Simple Todo List
            </div>
            <p className="text-gray-500 text-lg mb-3">
              a beautifully designed to-do list . Users can effortlessly add,
              filter, and delete tasks, ensuring better productivity.
            </p>
            <div className="flex gap-2 my-5">
              <Project3 />
              <Button
                children="Visit"
                onClick={() => window.open("https://todovictus.pages.dev/")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
