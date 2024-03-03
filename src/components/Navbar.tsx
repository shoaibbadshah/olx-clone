"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBuilding, FaCar, FaChevronDown } from "react-icons/fa";
import logo from "../assets/olx_logo.png";
import Image from "next/image";
import LocationDropdown from "./LocationdropDown";
import SearchBox from "./SearchBox";
import CategoryDropdown from "./CategoryDropdown";
import { useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const { user, signOut } = useUser();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  interface EmailAddress {
    profileImageUrl: string;
  }

  interface User {
    primaryEmailAddress?: EmailAddress;
    fullName?: string;
  }

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
      {user ? (
        <>
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
                    borderRadius: "50%",
                    padding: "5px",
                    filter: "brightness(120%)",
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
                    borderRadius: "50%",
                    padding: "5px",
                    filter: "brightness(120%)",
                  }}
                />
                <h3 className="ml-1 font-bold text-xl">Building</h3>
              </div>
            </nav>

            <nav className="container flex items-center  mx-auto py-4">
              <div className="location w-1/4">
                <LocationDropdown />
              </div>
              <div className="search w-2/4">
                <SearchBox />
              </div>
              <div className="user-info flex  flex-1/4 ml-4 items-center justify-between">
                <div className="username flex flex-col items-center justify-center font-bold">
                  {user.primaryEmailAddress && (
                    <Image
                      src={user.primaryEmailAddress.profileImageUrl}
                      alt="Profile"
                      className="profile-photo"
                    />
                  )}

                  <span className="user-name">{user.fullName}</span>
                </div>
                <button className="bg-transparent ml-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-4 py-0 border border-blue-500 hover:border-transparent rounded-2xl">
                  <SignOutButton />
                </button>
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
          </div>
        </>
      ) : (
        <div className="sign-in flex item-center justify-center">
          <h1>please sign in to continue...</h1>
        </div>
      )}
    </section>
  );
};

export default Navbar;
