"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
type Props = {}

const Carousel = (props: Props) => {
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (

        <div className="mx-auto mb-6 rounded-2xl lg:max-w-screen-2xl">
            <Slider {...settings}>
                <div>
                    <img
                        src='https://tpc.googlesyndication.com/simgad/13114092391113397674'

                        alt="Image 1"
                        className="w-full object-fill rounded-md"
                        style={{ height: "30vh" }}
                    />
                </div>
                <div>
                    <img
                        src='https://images.olx.com.pk/thumbnails/419294598-800x600.webp'
                        alt="Image 2"
                        className="w-full object-fill rounded-md"
                        style={{ height: "30vh" }}
                    />
                </div>
                <div>
                    <img
                        src='https://tpc.googlesyndication.com/simgad/13114092391113397674'
                        alt="Image 3"
                        className="w-full object-fill rounded-md"
                        style={{ height: "30vh" }}
                    />
                </div>
                <div>
                    <img
                        src='https://images.olx.com.pk/thumbnails/419294598-800x600.webp'

                        alt="Image 4"
                        className="w-full object-fill rounded-md"
                        style={{ height: "30vh" }}
                    />
                </div>
            </Slider>
        </div>
  )
}

export default Carousel