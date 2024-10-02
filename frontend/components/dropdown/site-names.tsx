"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex bg-black text-[#EAEAEA] py-1.5 px-4 gap-2 rounded-lg text-sm items-center font-instrument hover:cursor-pointer"
        onClick={toggleDropdown}
      >
        www.pump.fun
        <Image
          src={isOpen ? "/dashboard/upward-arrow.svg" : "/dashboard/downward_arrow.svg"}
          alt={isOpen ? "Upward Arrow" : "Downward Arrow"}
          width="9"
          height="9"
        />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 bg-black rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#EAEAEA] hover:bg-gray-700 rounded-lg"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#EAEAEA] hover:bg-gray-700 rounded-lg"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#EAEAEA] hover:bg-gray-700 rounded-lg"
            >
              Option 3
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}