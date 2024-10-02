import React from "react";
import BlackButton from "../buttons/black-button";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <>
      {/* Desktop Version */}
      <section className="lg:flex z-10 items-center justify-between px-8 py-16 md:px-32 md:py-32 font-instrument hidden h-full">
        <div className="flex flex-col gap-5 w-1/2">
          <div className="text-[#111111] text-4xl font-medium font-instrument leading-[43px]">
            Earn from your website footfall, without annoying ads
          </div>
          <div className="text-[#6f6f6f] text-xl font-instrument leading-tight">
            Mine $ORE with your website visitors
          </div>
          <Link href="/dashboard">
            <BlackButton options={{ particle: "/gray-logo.svg" }}>
              <button className="px-4 py-2 w-40 rounded-lg bg-black text-white text-sm font-medium flex items-center justify-center gap-2">
                Get Started!
              </button>
            </BlackButton>
          </Link>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden z-10 flex flex-col items-center justify-end h-[calc(100vh-100px)] px-8 py-4 font-instrument">
        <div className="text-[#111111] text-center text-2xl font-medium font-instrument leading-[28.80px] mb-4">
          Earn from your
          <br />
          website footfall,
          <br />
          without annoying ads
        </div>
        <div className="text-[#6f6f6f] text-base text-center font-instrument leading-tight mb-6">
          Mine $ORE with your website visitors
        </div>
        <Link href="/dashboard">
        <BlackButton options={{ particle: "/gray-logo.svg" }}>
          <button className="px-6 py-2 w-full max-w-[240px] rounded-lg bg-black text-white text-sm font-medium flex items-center justify-center gap-2">
            Get Started!
          </button>
        </BlackButton>
        </Link>
      </section>
    </>
  );
};
