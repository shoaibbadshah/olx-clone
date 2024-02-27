import React, { useState } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "../app/about", label: "About" },
  { href: "../app/product", label: "Product" },
  { href: "../app/cart", label: "Cart" },
];

const ThirdNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex lg:hidden">
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
      <ul
        className={`hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex ${
          open ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="items-center hidden pl-2 ml-auto mr-8 lg:flex lg:ml-0 lg:mr-0">
        <div className="flex px-6 py-2 border border-gray-700 rounded-full dark:border-gray-400">
          <input
            type="text"
            className="w-full pr-4 text-sm text-gray-700 border-0 outline-none bg-white dark:text-gray-400 dark:bg-gray-800 placeholder-text-100"
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
  );
};

export default ThirdNav;
