import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: "Household Appliances" },
  { id: 2, name: "Cars" },
  { id: 3, name: "Bikes" },
  { id: 4, name: "Toys" },
  // Add more categories as needed
];

const CategoryDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setIsOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Listen for clicks outside the dropdown to close it
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left"
      ref={dropdownRef}
    >
      <button
        onClick={dropMenu}
        type="button"
        id="options-menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`py-2 px-4  focus:outline-none rounded-md font-bold transition-colors duration-300 ${
          isOpen ? "text-blue-600" : "text-slate-700"
        }`}
      >
        {selectedCategory ? selectedCategory.name : "All Categories"}
        <FaChevronDown
          className={`transform transition-transform inline-block ml-2 text-slate-700 duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-96 z-10 left-0 mt-2 rounded-md p-6 bg-gray-200 shadow-xl">
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="mb-4"
              >
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`text-gray-600 hover:text-blue-600 focus:outline-none ${
                    selectedCategory?.id === category.id ? "font-bold" : ""
                  }`}
                >
                  {category.name}
                </button>
              </div>
            ))}
          </div>
          {/* Additional content based on selected category */}
          {selectedCategory && (
            <div className="mt-4">
              {/* Add content specific to the selected category */}
              <p className="text-gray-600">
                Content for {selectedCategory.name}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
