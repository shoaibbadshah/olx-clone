"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBuilding, FaCar, FaChevronDown } from "react-icons/fa";
import logo from "../assets/olx_logo.png";
import Image from "next/image";
import LocationDropdown from "./LocationdropDown";
import SearchBox from "./SearchBox";
import CategoryDropdown from "./CategoryDropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="shadow-lg font-poppins dark:bg-gray-800">
      <div className=" px-4 mx-auto">
        <nav className="flex items-center p-3  rounded-2x ">
          <div className="mx-4">
            <div className="relative inline-block mr-2  rounded-full overflow-hidden">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Olx Logo"
                  height={80}
                  width={50}
                  className="rounded-full cursor-pointer"
                  style={{ filter: "brightness(0%)" }}
                />
              </Link>
            </div>
          </div>

          <div className="car_icon flex items-center hover:text-blue-500 cursor-pointer">
            <FaCar
              style={{
                height: "40px",
                width: "40px",
                background:
                  "linear-gradient(180deg, rgba(0, 47, 52, .16), rgba(0, 47, 52, .01) 81.77%, rgba(0, 47, 52, .01))",
                borderRadius: "50%", // Make it round
                padding: "5px", // Add padding for a brighter effect
                filter: "brightness(120%)", // Brighten the icon
              }}
            />
            <h3 className="ml-1 font-bold text-xl">Motors</h3>
          </div>

          <div className="building_icon flex items-center ml-4 hover:text-blue-500 cursor-pointer">
            <FaBuilding
              style={{
                height: "40px",
                width: "40px",
                background:
                  "linear-gradient(180deg, rgba(0, 47, 52, .16), rgba(0, 47, 52, .01) 81.77%, rgba(0, 47, 52, .01))",
                borderRadius: "50%", // Make it round
                padding: "5px", // Add padding for a brighter effect
                filter: "brightness(120%)", // Brighten the icon
              }}
            />
            <h3 className="ml-1 font-bold text-xl">Building</h3>
          </div>
        </nav>

        <nav className="container flex items-center mx-auto py-4">
          <div className="location w-1/3">
            <LocationDropdown />
          </div>
          <div className="search w-2/3">
            <SearchBox />
          </div>
          <div className="login_btn w-1/3 ml-4">
            <Link
              href="/sign-in"
              className="text-xl font-bold underline hover:text-gray-800 "
            >
              login
            </Link>
          </div>
        </nav>
        <nav>
          <div className="nav flex  align-center flex-row justify-start">
            <div className="cat_dropdown ">
              <CategoryDropdown />
            </div>
            <div className="">
              <button
                className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 hover:text-blue-800 hover:border-blue-300 lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>

            <ul
              className={`hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex ${
                open ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/product"
                  className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Sidebar */}

        <div
          className={`absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md dark:bg-gray-800 bg-blue-50 w-80 lg:hidden lg:transform-none lg:relative ${
            open
              ? "ease-in-opacity-100 translate-x-0"
              : "ease-out opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex justify-between px-5 py-2">
            <Link
              className="text-2xl font-bold dark:text-gray-400"
              href="#"
            >
              Logo
            </Link>
            <button
              className="rounded-md hover:text-blue-300 lg:hidden dark:text-gray-400"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <ul className="px-5 text-left mt-7">
            <li className="pb-3">
              <Link
                href="/"
                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li className="pb-3">
              <Link
                href="/about"
                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
              >
                About us
              </Link>
            </li>

            <li className="pb-3">
              <Link
                href="/product"
                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
              >
                Product
              </Link>
            </li>
            <li className="pb-3">
              <Link
                href="/"
                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
              >
                Cart
              </Link>
            </li>
          </ul>
          <div className="flex items-center lg:hidden mt-7">
            <div className="flex px-6 py-2 border border-gray-700 rounded-full dark:border-gray-400">
              <input
                type="text"
                className="w-full border-0 outline-none pr-4 text-sm text-gray-700 bg-blue-50 dark:text-gray-400 dark:bg-gray-800 placeholder-text-100"
                placeholder="search..."
              />
              <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-700">
                <span className="mr-1 ml-2">Go</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
