"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SearchInput() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKeyDown = (event: any) => {
    if (
      (event.ctrlKey && event.key === "k") || 
      (event.metaKey && event.key === "k")
    ) {
      event.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleClose = (event: any) => {
    if (event.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keydown", handleClose);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keydown", handleClose);
    };
  }, []);

  return (
    <>
      <div className="hidden lg:block relative rounded-lg border-2 border-[#EEEEEE]">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F6F6F6] text-sm rounded-md pl-8 pr-2 py-1.5"
        />
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <Image src="/dashboard/search.svg" alt="Search" width="12" height="12" />
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <Image
            src="/dashboard/command-cmd-k.svg"
            alt="Command + K"
            width="18"
            height="9"
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-lg w-1/2 max-w-lg p-10">
            <input
              type="text"
              placeholder="Type a command or search..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <div className="mt-4">
              {/* Content Goes Here */}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-4 font-instrument text-black text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}