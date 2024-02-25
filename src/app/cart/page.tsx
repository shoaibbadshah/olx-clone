"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  stock: number;
  rating: string;
  discountPercentage: string;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [loading, setLoading] = useState<boolean>(true);

  const increaseQuantity = (productId: number) => {
    if (
      quantities[productId] <
      cartItems.find((item) => item.id === productId)?.stock
    ) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: (prevQuantities[productId] || 0) + 1,
      }));
    }
  };

  const decreaseQuantity = (productId: number) => {
    if (quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: (prevQuantities[productId] || 0) - 1,
      }));
    }
  };

  const removeFromCart = async (productId: number) => {
    try {
      const response = await fetch(`http://localhost:8080/cart/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete item from cart");
      }

      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        // Simulate a delay for demonstration purposes (2 seconds)
        setTimeout(async () => {
          const response = await fetch("http://localhost:8080/cart");
          if (!response.ok) {
            throw new Error("Failed to fetch cart items");
          }
          const cartData: Product[] = await response.json();
          setCartItems(cartData);
          const initialQuantities: { [key: number]: number } = {};
          cartData.forEach((product) => {
            initialQuantities[product.id] = 1;
          });
          setQuantities(initialQuantities);
          setLoading(false); // Set loading to false after data is fetched
        }, 2000); // Simulated delay of 2 seconds
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setLoading(false); // Set loading to false if there's an error
      }
    };
    fetchCartItems();
  }, []);

  if (loading) {
    return (
      <p className="flex justify-center text-center my-52">
        <div className="grid grid-cols-4 gap-16 -ml-10 -mt-10">
          <div className="relative">
            <div className="w-12 h-12 rounded-full absolute border-8 border-solid border-gray-200"></div>
            <div className="w-12 h-12 rounded-full animate-spin absolute border-8 border-solid border-green-500 border-t-transparent shadow-md"></div>
          </div>
        </div>
      </p>
    );
  }

  const calculateDiscountedPrice = (
    price: number,
    discountPercentage: string
  ): number => {
    const discount = parseInt(discountPercentage);
    if (discount && !isNaN(discount)) {
      const discountValue = (price * discount) / 100;
      const discountedPrice = price - discountValue;
      return parseFloat(discountedPrice.toFixed(2));
    }
    return price;
  };

  const calculateSubtotal = (
    price: number,
    discountPercentage: string,
    productId: number
  ): number => {
    const quantity = quantities[productId] || 1;
    const discountedPrice = calculateDiscountedPrice(price, discountPercentage);
    return parseFloat((discountedPrice * quantity).toFixed(2)); // Limit decimal places to 2
  };

  return (
    <div className="container mx-auto">
      {cartItems.map((product) => (
        <div
          key={product.id}
          className="p-6 mb-8 border bg-gray-50 dark:bg-gray-800 dark:border-gray-800"
        >
          <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
            <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
              <h2 className="font-bold text-gray-500 dark:text-gray-400">
                Product name
              </h2>
            </div>
            <div className="hidden px-4 lg:block lg:w-2/12">
              <h2 className="font-bold text-gray-500 dark:text-gray-400">
                Price
              </h2>
            </div>
            <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
              <h2 className="font-bold text-gray-500 dark:text-gray-400">
                Quantity
              </h2>
            </div>
            <div className="w-auto px-4 text-right md:w-1/6 lg:w-1/12 ">
              <h2 className="font-bold text-gray-500 dark:text-gray-400">
                Subtotal
              </h2>
            </div>
          </div>
          <div className="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
              <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="w-full px-4 mb-3 md:w-1/3">
                    <div className="w-full h-96 md:h-24 md:w-24">
                      <img
                        src={product.thumbnail}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 px-4">
                    <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                      {product.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="hidden px-4 lg:block lg:w-2/12">
                <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
                  {product.price}
                </p>
                <b>
                  %
                  <span className="text-xs text-gray-500 line-through dark:text-gray-400">
                    {product.discountPercentage}
                  </span>
                </b>
              </div>
              <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300"
                  >
                    <span className="m-auto text-2xl font-thin">-</span>
                  </button>
                  <input
                    type="number"
                    value={quantities[product.id] || 1}
                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                    placeholder="1"
                    readOnly
                  />
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div className="w-auto px-4 text-right md:w-1/6 lg:w-1/12 ">
                <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
                  {calculateSubtotal(
                    parseFloat(product.price),
                    product.discountPercentage,
                    product.id
                  )}
                </p>
              </div>
              <div className="w-auto px-4 text-right md:w-1/6 lg:w-1/12 ">
                <p
                  onClick={() => removeFromCart(product.id)}
                  className="text-lg font-bold text-blue-500 dark:text-gray-400 cursor-pointer"
                >
                  <BsFillTrashFill className="w-5 h-5 text-orange-700" />
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end ">
            <Link
              href={`/cart/${product.id}`}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Confirm Now
              </span>
            </Link>
          </div>
        </div>
      ))}
      <div className="flex flex-wrap justify-between">
        <div className="w-full px-4 mb-4 lg:w-1/2 ">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-700 dark:text-gray-400">
              Apply Coupon
            </span>
            <input
              type="text"
              className="w-full px-8 py-4 font-normal placeholder-gray-400 border lg:flex-1 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-400 dark:bg-gray-800"
              placeholder="x304k45"
              required
            />
            <button className="inline-block w-full px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md lg:w-32 hover:bg-blue-600">
              Apply
            </button>
          </div>
        </div>
        <div className="w-full px-4 mb-4 lg:w-1/2 ">
          <div className="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-gray-50 md:p-8">
            <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">
              Order Summary
            </h2>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
              <span className="text-gray-700 dark:text-gray-400">Subtotal</span>
              <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
                {cartItems
                  .reduce((acc, product) => {
                    return (
                      acc +
                      calculateSubtotal(
                        parseFloat(product.price),
                        product.discountPercentage,
                        product.id
                      )
                    );
                  }, 0)
                  .toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between pb-4 mb-4 ">
              <span className="text-gray-700 dark:text-gray-400 ">
                Shipping
              </span>
              <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">
                Free
              </span>
            </div>
            <div className="flex items-center justify-between pb-4 mb-4 ">
              <span className="text-gray-700 dark:text-gray-400">
                Order Total
              </span>
              <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
                {cartItems
                  .reduce((acc, product) => {
                    return (
                      acc +
                      calculateSubtotal(
                        parseFloat(product.price),
                        product.discountPercentage,
                        product.id
                      )
                    );
                  }, 0)
                  .toFixed(2)}
              </span>
            </div>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">
              We offer:
            </h2>
            <div className="flex items-center gap-2 mb-4 ">
              <a href="#">
                <img
                  src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                  alt=""
                  className="object-cover h-16 w-26"
                />
              </a>
              <a href="#">
                <img
                  src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                  alt=""
                  className="object-cover h-16 w-26"
                />
              </a>
              <a href="#">
                <img
                  src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                  alt=""
                  className="object-cover h-16 w-26"
                />
              </a>
            </div>
            <div className="flex items-center justify-center ">
              <Link
                href="/checkout"
                className="relative inline-block text-lg group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Check Out</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
