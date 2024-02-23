import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

type Props = {};

const Cards = (props: Props) => {
  return (
    <>
      <section className="flex items-center bg-white lg:h-screen dark:bg-gray-800">
        <div className="p-4 mx-auto max-w-screen-xl">
          <div className="mb-20 text-center">
            <h1 className="mb-4 text-3xl font-bold dark:text-white">
              Testimonials
            </h1>
          </div>
          <div className="flex ">
            <Swiper
              loop={true}
              spaceBetween={24}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 48,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              pagination={{
                dynamicBullets: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <div className="grid flex-wrap grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-1 lg:grid-cols-4">
                <SwiperSlide>
                  <div className="relative mb-10 border-b-4 border-blue-500 ">
                    <div className="z-20 pt-8 pb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute top-0 left-0 w-20 h-20 opacity-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                      <div className="text-center">
                        <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                          <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4"></div>
                          <img
                            className="object-cover w-full h-full rounded-md"
                            src="https://i.postimg.cc/wj9DLCJj/yunming-wang-G9f4-Enb8-XVM-unsplash.jpg"
                            alt=""
                          />
                          <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4"></div>
                        </div>
                      </div>
                      <p className="mb-4 text-base leading-7 text-gray-400">
                        Keep on jumping to get the most of the jump rope
                        exercise. It will help you to increase your bone density
                        as well
                      </p>
                      <h2 className="text-lg font-bold leading-9 text-black dark:text-white">
                        Allyson Smith
                      </h2>
                      <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                        Chief Editor
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative mb-10 border-b-4 border-blue-500 ">
                    <div className="z-20 pt-8 pb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute top-0 left-0 w-20 h-20 opacity-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                      <div className="text-center">
                        <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                          <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4"></div>
                          <img
                            className="object-cover w-full h-full rounded-md"
                            src="https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg"
                            alt=""
                          />
                          <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4"></div>
                        </div>
                      </div>
                      <p className="mb-4 text-base leading-7 text-gray-400">
                        Keep on jumping to get the most of the jump rope
                        exercise. It will help you to increase your bone density
                        as well
                      </p>
                      <h2 className="text-lg font-bold leading-9 text-black dark:text-white">
                        Gap Bezoz
                      </h2>
                      <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                        Administrator
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative mb-10 border-b-4 border-blue-500 ">
                    <div className="z-20 pt-8 pb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute top-0 left-0 w-20 h-20 opacity-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                      <div className="text-center">
                        <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                          <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4"></div>
                          <img
                            className="object-cover w-full h-full rounded-md"
                            src="https://i.postimg.cc/jqBdNPpg/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"
                            alt=""
                          />
                          <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4"></div>
                        </div>
                      </div>
                      <p className="mb-4 text-base leading-7 text-gray-400">
                        Keep on jumping to get the most of the jump rope
                        exercise. It will help you to increase your bone density
                        as well
                      </p>
                      <h2 className="text-lg font-bold leading-9 text-black dark:text-white">
                        Watson Gems
                      </h2>
                      <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                        Administrator
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative mb-10 border-b-4 border-blue-500 ">
                    <div className="z-20 pt-8 pb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute top-0 left-0 w-20 h-20 opacity-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                      <div className="text-center">
                        <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                          <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4"></div>
                          <img
                            className="object-cover w-full h-full rounded-md"
                            src="https://i.postimg.cc/gk8KvyTN/ehsan-ahmadi-vs-Wy6nchc-Os-unsplash.jpg"
                            alt=""
                          />
                          <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4"></div>
                        </div>
                      </div>
                      <p className="mb-4 text-base leading-7 text-gray-400">
                        Keep on jumping to get the most of the jump rope
                        exercise. It will help you to increase your bone density
                        as well
                      </p>
                      <h2 className="text-lg font-bold leading-9 text-black dark:text-white">
                        Stephan Kings
                      </h2>
                      <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                        Chief Director
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      <style jsx>{`
        /* Adjust card width for mobile screens */
        @media screen and (max-width: 700px) {
          .flex {
            width: 400px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
};

export default Cards;
