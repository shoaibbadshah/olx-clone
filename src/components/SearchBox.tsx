import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // You can perform the search or any other action here
    console.log("Search query:", searchQuery);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex items-center justify-between outline outline-1 outline-offset-0 outline-cyan-300 border ${isFocused ? 'border-blue-800' : 'border-gray-300'}` rounded-xl overflow-hidden"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search"
        className="p-2 w-full rounded-l-xl  text-black bg-opacity-50 focus:outline-none"
      />
      <button
        type="submit"
        className="p-2   transparent"
      >
        <FaSearch
          style={{
            color: "black",
            background: "transparent",
            width: "20",
            height: "20",
          }}
        />
      </button>
    </form>
  );
};

export default SearchBox;
