import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="relative h-[30vh] lg:h-[50vh] pt-32 w-full font-instrument flex flex-col justify-between items-center">
      <div className="flex flex-col justify-center items-center h-[30vh] lg:h-[50vh] w-full relative">
        <Image
          src="/vorr.svg"
          alt="vorr"
          width={800}
          height={800}
          className="absolute hidden lg:flex"
        />
        <Image
          src="/vorr.svg"
          alt="vorr"
          width={400}
          height={400}
          className="absolute lg:hidden flex"
        />
      </div>

      <div className="bg-black w-full min-h-[5vh] font-instrument lg:min-h-[12vh] flex items-center justify-between px-4 lg:px-20 text-white">
        <a
          href="https://x.com/mine_vorr"
          target="_blank"
          className="flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
          @mine_vorr
        </a>
        <div>© 2024</div>
      </div>
    </footer>
  );
};
