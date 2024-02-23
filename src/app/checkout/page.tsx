"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  description: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletedProduct, setDeletedProduct] = useState<number | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/orders");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleOrderNow = async (productId: number) => {
    try {
      const response = await fetch(
        `http://localhost:8080/orders/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete item from orders");
      }

      // Update products after successful deletion (optional)
      const updatedProducts = products.filter((item) => item.id !== productId);
      setProducts(updatedProducts);
      setDeletedProduct(productId);
    } catch (error) {
      console.error("Error removing item from orders:", error);
    }
  };

  return (
    <main className="mx-auto max-w-screen-2xl px-4 sm:px-6">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Products
        </h1>
      </div>

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <div className="lg:col-span-3">
            {isLoading ? (
              <p className="flex justify-center">
                <div className="flex flex-row space-x-4">
                  <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
                </div>
              </p>
            ) : (
              products.map((product) => (
                <div key={product.id}>
                  {deletedProduct !== product.id && (
                    <div className="border rounded-lg mb-4">
                      <div className="flex">
                        <img
                          src={product.thumbnail}
                          alt=""
                          className="w-96 h-80"
                        />
                        <div className="w-full px-6 mb-10 mt-10 lg:w-1/2 lg:mb-0">
                          <div className="pl-4 mb-6 border-l-4 border-blue-500">
                            <h1 className="mt-2 text-xl font-black text-gray-700 md:text-2xl dark:text-gray-300">
                              {product.title}
                            </h1>
                          </div>
                          <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                            {product.description}
                          </p>
                          <p className="mb-6 text-base font-medium text-gray-900">
                            Price: ${product.price}
                          </p>

                          <button
                            onClick={() => handleOrderNow(product.id)}
                            className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                          >
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                              Order Now
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      {deletedProduct !== null && (
        <section className="flex items-center bg-white font-poppins dark:bg-gray-800">
          <div className="justify-center flex-1 px-6 py-6 mx-auto lg:py-16 md:px-7">
            <div className="max-w-xl p-8 mx-auto border rounded-md bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-900 dark:border-gray-900 dark:bg-gray-900">
              <p className="mb-8 text-2xl font-medium text-gray-700 dark:text-gray-400">
                {deletedProduct} Your Product Id
              </p>
              <h2 className="mb-4 text-4xl font-extrabold tracking-wide dark:text-gray-300">
                Thank You For Your Order!
              </h2>
              <p className="mb-6 text-lg font-medium text-gray-500 dark:text-gray-500">
                Please send us an email for more product details.
              </p>
              <div className="flex flex-wrap mb-6">
                <input
                  className="w-full px-4 py-4 mb-4 text-sm text-gray-900 border border-blue-100 rounded-md dark:border-gray-700 focus:outline-none focus:ring-2 dark:focus:ring-1 focus:ring-blue-600 dark:focus:ring-gray-600 focus:border-transparent bg-gray-50 lg:mr-3 dark:placeholder-gray-400 dark:text-gray-300 dark:bg-gray-800 md:mb-0 md:w-1/2"
                  type="email"
                  placeholder="Type your e-mail"
                />
                <button className="inline-flex justify-center w-full px-4 py-4 text-sm font-semibold text-gray-100 bg-blue-600 rounded-md shadow md:w-1/3 md:ml-2 dark:bg-blue-500 focus:outline-none dark:hover:bg-blue-600 focus:ring-2 dark:focus:ring-0 focus:ring-offset-2 dark:focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-blue-400 focus:ring-blue-500">
                  Go Search
                </button>
              </div>
              <Link
                href="/product"
                className="text-blue-500 hover:underline dark:text-blue-400 hover:text-blue-700"
              >
                Go back shopping
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Products;
