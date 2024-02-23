"use client";
import Link from "next/link";

const Data = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 993,

    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 1111,

    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,

    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 300,

    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="grid m-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {Data.map((item) => (
        <div
          key={item.id}
          className="mt-56 bg-white rounded-xl shadow dark:bg-gray-700 transition duration-500 hover:shadow-2xl"
        >
         
          <div className="relative z-20 pb-4 group">
            <Link href="/product">
              <div className="relative block h-64 mb-4 -mt-56 overflow-hidden rounded -top-full ">
                <img
                  className="object-cover w-96 h-full transition-all group-hover:scale-110"
                  src={item.thumbnail}
                  alt=""
                />
                <div className="absolute flex flex-col top-4 right-4">
                  <a href="#" className="flex items-center">
                    <div className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded dark:bg-gray-700 dark:text-white group-hover:translate-x-0 wishlist hover:bg-blue-200 dark:hover:bg-blue-600 group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="flex items-center">
                    <div className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded dark:bg-gray-700 dark:text-white group-hover:translate-x-0 wishlist hover:bg-blue-200 dark:hover:bg-blue-600 group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-cart2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <a href="#" className="flex justify-between mx-3">
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {item.title.substring(0, 15)}
                </h2>
                <p className="mb-3 text-lg font-bold text-blue-500 dark:text-blue-300 ">
                  <span>{item.price}</span>
                </p>
              </a>

              <p className=" text-lg mx-2 font-bold text-gray-600 dark:text-blue-300 ">
                <span>{item.description.substring(0, 60)}</span>
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
