"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Category from "./Category";
type Props = {};

const Carousel = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,

    slidesToScroll: 1,
    lazyLoad: "progressive",
  };

  return (
    <div className=" flex flex-col mb-8 rounded-2xl ">
      <div className="items-center hidden pl-2 ml-auto mr-8 lg:flex lg:ml-0 lg:mr-0"></div>
      <Slider {...settings}>
        <div>
          <img
            src="https://tpc.googlesyndication.com/simgad/13114092391113397674"
            alt="Image 1"
            className="w-full object-fill rounded-md"
            style={{ height: "30vh" }}
          />
        </div>
        <div>
          <img
            src="https://images.olx.com.pk/thumbnails/419294598-800x600.webp"
            alt="Image 2"
            className="w-full object-fill rounded-md"
            style={{ height: "30vh" }}
          />
        </div>
        <div>
          <img
            src="https://tpc.googlesyndication.com/simgad/13114092391113397674"
            alt="Image 3"
            className="w-full object-fill rounded-md"
            style={{ height: "30vh" }}
          />
        </div>
        <div>
          <img
            src="https://images.olx.com.pk/thumbnails/419294598-800x600.webp"
            alt="Image 4"
            className="w-full object-fill rounded-md"
            style={{ height: "30vh" }}
          />
        </div>
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
