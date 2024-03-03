// Importing necessary modules and styles
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "./Category";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import Image from "next/image";

// Defining the type for the props
type Props = {};

// Carousel component
const Carousel = (props: Props) => {
  // Settings for the Slider component
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    lazyLoad: "progressive",
  };

  // JSX structure for the Carousel component
  return (
    <div className="flex flex-col mb-8 rounded-2xl">
      {/* Placeholder div (you may customize this part) */}
      <div className="items-center hidden pl-2 ml-auto mr-8 lg:flex lg:ml-0 lg:mr-0"></div>

      {/* Slider component with images */}
      <Slider {...settings}>
        <div>
          <Image
            alt="image1"
            src={image1}
            className="w-full object-fill rounded-md"
            style={{ height: "30vh" }}
          />
        </div>
        <div>
          <Image
            alt="image1"
            src={image2}
            className="w-full object-fill rounded-md"
            style={{ height: "30vh" }}
          />
        </div>
        <div>
          <Image
            alt="image1"
            src={image3}
            className="w-full object-fill rounded-md"
            style={{ height: "30vh" }}
          />
        </div>
        <div>
          <Image
            alt="image1"
            src={image4}
            className="w-full object-fill rounded-md"
            style={{ height: "30vh" }}
          />
        </div>
      </Slider>

      {/* Category component (you may customize this part) */}
      <div className="category mt-1 pt-4">
        <Category />
      </div>
    </div>
  );
};

// Exporting the Carousel component
export default Carousel;
