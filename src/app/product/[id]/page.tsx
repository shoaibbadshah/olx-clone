"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
  brand: string;
  category: string;
  stock: string;
  rating: string;
  discountPercentage: string;
};

const page = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);


  const fetchProduct = async () => {
    try {
      setLoading(true);

      // Simulating a 2000 millisecond (2-second) delay before fetching data
      setTimeout(async () => {
        const response = await fetch(`/api/product/${id}`);

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data: Product = await response.json();

        setProduct(data);

        if (data && data.images.length > 0) {
          setSelectedImage(data.images[0]);
        }

        setLoading(false);
      }, 2000); // Simulated delay of 2000 milliseconds
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);


  const addToCart = async () => {
    try {
      setLoading(true);

      // Use product from state to add to cart
      const response = await fetch("http://localhost:8080/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product), // Add the current product to the cart
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      setProductsInCart([...productsInCart, product]); // Add the current product to the cart state
      setLoading(false);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setLoading(false);
    }
  };

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
    const index = product?.images.findIndex((img) => img === image) || 0;
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % (product?.images.length || 1);
    setSelectedImage(product?.images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + (product?.images.length || 1)) %
      (product?.images.length || 1);
    setSelectedImage(product?.images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const calculateDiscountedPrice = (
    price: number,
    discountPercentage: string
  ): string => {
    const discount = parseInt(discountPercentage);
    if (discount && !isNaN(discount)) {
      const discountValue = (price * discount) / 100;
      const discountedPrice = price - discountValue;
      return discountedPrice.toFixed(2); // Limit to two decimal places
    }
    return price.toString();
  };

  const generateStarRating = (rating) => {
    const numStars = parseInt(rating);
    const totalStars = 5;

    // Create an array to hold the JSX elements for stars
    let stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < numStars) {
        // For filled stars
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#FFA500" // Orange color for filled stars
            viewBox="0 0 16 16"
            className="w-5 mr-1 text-yellow-800 bi bi-star-fill"
          >
            <path
              fillRule="evenodd"
              d="M8 .293l1.94 4.431 5.487.399a1 1 0 0 1 .554 1.705l-4.142 3.793 1 5.426a1 1 0 0 1-1.457 1.054L8 13.347l-5.382 2.356a1 1 0 0 1-1.457-1.054l1-5.426L.019 6.828a1 1 0 0 1 .554-1.705l5.487-.399L8 .293zm0 2.33L6.308 5.227a1 1 0 0 1-.753.553l-4.132.3 3.084 2.823a1 1 0 0 1 .29.887l-.725 3.923 3.778-1.654a1 1 0 0 1 .952 0l3.778 1.654-.725-3.923a1 1 0 0 1 .29-.887l3.084-2.823-4.132-.3a1 1 0 0 1-.753-.553L8 2.623V2.62z"
            />
          </svg>
        );
      } else {
        // For outlined stars
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="#808080" // Gray color for outline stars
            viewBox="0 0 16 16"
            className="w-4 mr-1 text-yellow-800 bi bi-star"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 2.5l1.573 3.182 3.524.513a.694.694 0 0 1 .385 1.181l-2.551 2.341.605 3.268a.694.694 0 0 1-1.003.728L8 12.316l-3.134 1.372a.694.694 0 0 1-1.003-.728l.605-3.268-2.551-2.341a.694.694 0 0 1 .385-1.181l3.524-.513L8 2.5z"
            />
          </svg>
        );
      }
    }

    return <div className="flex">{stars}</div>;
  };

  const increaseQuantity = () => {
    if (quantity < parseInt(product.stock)) {
      setQuantity(quantity + 1);
    }
  };

  // Function to handle decreasing the quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="container">
      {product ? (
        <section className="py-10 font-poppins dark:bg-gray-800">
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex flex-wrap mb-24 -mx-4">
              <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                <div className="sticky top-0 overflow-hidden ">
                  <div className="relative mb-6 lg:mb-10 lg:h-96">
                    {selectedImage && (
                      <img
                        className="object-contain w-full lg:h-full"
                        src={selectedImage}
                        alt="Product Image"
                      />
                    )}
                    <button
                      className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                      onClick={prevImage}
                    >
                      {/* Left arrow */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L6.707 8l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                    </button>
                    <button
                      className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                      onClick={nextImage}
                    >
                      {/* Right arrow */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-wrap hidden -mx-2 md:flex">
                    {product.images.map((image, index) => (
                      <div className="w-1/2 p-2 sm:w-1/4" key={index}>
                        <a
                          className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                          href="#"
                          onClick={() => handleThumbnailClick(image)}
                        >
                          <img
                            className="object-contain w-full h-full lg:h-28"
                            src={image}
                            alt={`Thumbnail ${index}`}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="lg:pl-20">
                  <div className="mb-6 ">
                    <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                      <Link href="/"> New Product</Link>
                    </span>
                    <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                      <Link
                        href="/product"
                        className="text-blue-500 hover:text-red-600"
                      >
                        Home
                      </Link>{" "}
                      / {product.title}
                    </h2>

                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                      <span>
                        {calculateDiscountedPrice(
                          product.price,
                          product.discountPercentage
                        )}
                      </span>
                      <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                        {product.price}
                      </span>
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                      System Specs :
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                      <div className="p-3 lg:p-5 ">
                        <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                            <div className="w-full mb-4 md:w-2/5">
                              <div className="flex ">
                                <div>
                                  <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Brand
                                  </p>
                                  <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    {product.brand}
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="w-full mb-4 md:w-2/5">
                              <div className="flex ">
                                <div>
                                  <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Category
                                  </p>
                                  <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    {product.category}
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                              <div className="flex ">
                                <div>
                                  <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Stock
                                  </p>
                                  <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    {product.stock}
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                              <div className="flex ">
                                <div>
                                  <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Rating
                                  </p>
                                  <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                    <div className="mb-6">
                                      <div className="flex mb-4 mr-2 lg:mb-0">
                                        {generateStarRating(product.rating)}
                                      </div>
                                    </div>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                    <span className="text-base font-bold text-blue-900 dark:text-gray-400">
                      In Stock
                    </span>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-200">
                        => &nbsp;
                      <span className="text-gray-600 dark:text-gray-400">
                        {product.description}
                      </span>
                    </p>
                  </div>
                  <div className="mb-6 "></div>
                  <div className="flex flex-wrap items-center mb-6">
                    <div className="mb-4 mr-4 lg:mb-0">
                      <div className="w-28">
                        <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                          <button
                            onClick={decreaseQuantity}
                            className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300"
                          >
                            <span className="m-auto text-2xl font-thin">-</span>
                          </button>
                          <input
                            type="number"
                            value={quantity}
                            className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                            placeholder="1"
                          />
                          <button
                            onClick={increaseQuantity}
                            className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300"
                          >
                            <span className="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 lg:mb-0">
                      <button
                        onClick={toggleLike}
                        className={`flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 ${liked
                          ? "dark:text-gray-100 dark:border-blue-600 bg-blue-600 border-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:border-blue-500"
                          : "dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500"
                          }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                        </svg>
                      </button>
                    </div>
                    {loading ? (
                      <button
                        className="w-full px-4 py-3 text-center text-gray-400 bg-gray-300 border border-gray-400 cursor-not-allowed dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 hover:bg-gray-300 lg:w-1/2 rounded-xl"
                        disabled={loading}
                      >
                        Adding to Cart...
                      </button>
                    ) : (
                      <Link
                        href={'/cart'}
                        onClick={addToCart}
                        passHref
                        className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
                      >
                        Add to Cart
                      </Link>
                    )}

                  </div>
                  <div className="flex gap-4 mb-6">
                    <a
                      href="#"
                      className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex items-center justify-center h-screen">

          <div className="flex gap-4 flex-wrap justify-center">
            <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />

          </div>
        </div>
      )}
    </div>
  );
};

export default page;
