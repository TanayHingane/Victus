import React from "react";
import { Button } from "./button";
import { Badge } from "./badge";

const ProjectGrid = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 h-3/4 my-5">
        <div className="bg-neutral-100 rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="/dark-saas-landing-page.png"
            />
          </div>
          <div className="p-4">
            <div className="text-xl font-medium text-gray-800 my-3">Title</div>
            <p className="text-gray-500 text-lg mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non
              aliquam quam massa id lacus.
            </p>
            <div className="flex gap-2 mb-5">
              <Badge
                variant="destructive"
                children="Know More"
                className="h-9 px-4 py-2"
              />
              <Badge
                variant="destructive"
                children="Visit"
                className="h-9 px-4 py-2"
              />
            </div>
            <div className="flex gap-2 mb-1">
              <Button children="Know More" />
              <Button children="Visit" />
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="/dark-saas-landing-page.png"
            />
          </div>
          <div className="p-4">
            <div className="text-xl font-medium text-gray-800 my-3">Title</div>
            <p className="text-gray-500 text-lg mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non
              aliquam quam massa id lacus.
            </p>
            <div className="flex gap-2 mb-5">
              <Badge
                variant="destructive"
                children="Know More"
                className="h-9 px-4 py-2"
              />
              <Badge
                variant="destructive"
                children="Visit"
                className="h-9 px-4 py-2"
              />
            </div>
            <div className="flex gap-2 mb-1">
              <Button children="Know More" />
              <Button children="Visit" />
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="/dark-saas-landing-page.png"
            />
          </div>
          <div className="p-4">
            <div className="text-xl font-medium text-gray-800 my-3">Title</div>
            <p className="text-gray-500 text-lg mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non
              aliquam quam massa id lacus.
            </p>
            <div className="flex gap-2 mb-5">
              <Badge
                variant="destructive"
                children="Know More"
                className="h-9 px-4 py-2"
              />
              <Badge
                variant="destructive"
                children="Visit"
                className="h-9 px-4 py-2"
              />
            </div>
            <div className="flex gap-2 mb-1">
              <Button children="Know More" />
              <Button children="Visit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
