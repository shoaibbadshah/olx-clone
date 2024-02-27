// components/LocationDropdown.tsx
import React, { useState } from "react";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface Location {
  id: number;
  name: string;
}

const locations: Location[] = [
  { id: 1, name: "Karachi" },
  { id: 2, name: "Lahore" },
  { id: 3, name: "Islamabad" },
  { id: 4, name: "Rawalpindi" },
  // Add more locations as needed
];

const LocationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const handleLocationChange = (location: Location) => {
    setSelectedLocation(location);
    setIsOpen(false); // Close the dropdown when a location is selected
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <div className="flex items-center border rounded-xl overflow-hidden">
        <FaLocationDot style={{ width: "30px", height: "20px" }} />
        <input
          type="text"
          value={selectedLocation ? selectedLocation.name : ""}
          readOnly
          placeholder="Pakistan"
          onClick={toggleDropdown}
          className=" text-black p-2 w-40 rounded-l-xl cursor-pointer bg-opacity-100"
        />
        <button
          onClick={toggleDropdown}
          className=" text-black p-2 rounded-r-xl cursor-pointer bg-opacity-50"
        >
          <FaChevronDown
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full items-center justify-center bg-slate-300 border border-gray-300 rounded-md shadow-lg bg-opacity-100">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => handleLocationChange(location)}
              className=" flex w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              {location.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
