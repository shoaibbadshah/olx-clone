"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BsFillTrashFill } from "react-icons/bs";

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
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      // Simulating a 2000 millisecond (2-second) delay before fetching data
      setTimeout(async () => {
        const response = await fetch(`http://localhost:8080/cart/${id}`);

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
      const response = await fetch("http://localhost:8080/orders", {
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

  return (
    <div className="container mx-auto">
      {product ? (
        <div
          key={product.id}
          className="p-6 mb-8 border bg-gray-50 dark:bg-gray-800 dark:border-gray-800"
        >
          <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
            <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
              <h2 className="font-bold text-gray-500 dark:text-gray-400">
                Product
              </h2>
            </div>
            <div className="hidden px-4 lg:block lg:w-2/12">
              <h2 className="font-bold text-gray-500 dark:text-gray-400">
                Details
              </h2>
            </div>
          </div>
          <div className="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
              <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="w-full px-4 mb-3 md:w-1/3">
                    <div className="w-full h-96 md:h-60 md:w-80">
                      <img
                        src={product.thumbnail}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden px-4 lg:block lg:w-2/12">
                <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                  {product.title}
                </h2>
                <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
                  {product.price}
                </p>

                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {product.description}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end ">
            <Link
              href="/checkout"
              className="rounded-md px-3.5 py-3.5 mr-4 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                Check Out
              </span>
            </Link>
            <button
              onClick={addToCart}
              className="relative rounded px-5 py-3.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Add To Orders Api</span>
            </button>
          </div>
        </div>
      ) : (
        <div
          className="flex justify-center my-20"
          aria-label="Loading..."
          role="status"
        >
          <svg
            className="h-12 w-12 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
        </div>
      )}
    </div>
  );
};

export default page;
