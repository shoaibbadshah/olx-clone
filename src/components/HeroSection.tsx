"use client";
import React from "react";
import Typed from "react-typed";

type Props = {
  images: string;
};

const AboutSection = ({ images }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mx-0 px-4 sm:px-8 lg:px-16 items-center justify-center bg-gray-100">
      <div className="p-8">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-2xl">
            <Typed
              strings={[
                "Frontend Developer...",
                "Backend Developer...",
                "UI/UX Designer...",
              ]}
              typeSpeed={60}
              backSpeed={60}
              backDelay={1000}
              loop
            />
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesnt care if you live or die.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-red-700"
            >
              Collection
            </a>
          </div>
        </div>
      </div>
      <div className="p-8">
        <img
          src={images} // Use the 'images' prop as the image source
          alt=""
          className="w-full h-auto rounded-md sm:w-3/4 lg:w-3/4 float-right"
          style={{ height: "400px" }}
        />
      </div>
    </div>
  );
};

export default AboutSection;
