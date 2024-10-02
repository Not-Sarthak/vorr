"use client";
import React from "react";
import Image from "next/image";

export function How() {

  return (
    <div className="bg-[#F7F9FD] w-full min-h-screen flex flex-col gap-10 lg:flex-row justify-center items-center px-8 py-4">
        <div className="w-full lg:w-1/2 flex justify-center items-end">
          <Image
            src="/mobile.svg"
            alt="mobile-dashboard"
            width={600}
            height={1200}
            className="object-contain lg:hidden flex"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4 lg:gap-10 justify-center">
          <div className="flex items-center gap-4">
            <div className="w-32 border-b-2 border-dashed border-[#CCCCCC] hidden lg:flex" />
            <div className="text-center text-[#111111] text-[32px] font-medium leading-[38.40px]">
              How it works
            </div>
            <div className="w-32 border-b-2 border-dashed border-[#CCCCCC] hidden lg:flex" />
          </div>
          <div className="flex flex-col items-center gap-[1px] text-[#6F6F6F] font-instrument">
            <div className="w-full flex items-center gap-8 lg:gap-14 bg-gradient-to-r from-[#f6efff] to-[#f1f8ff] rounded-t-lg p-4 lg:p-6">
              <div className="w-10">
                <Image src="/one.svg" alt="1" width={28} height={28} className="hidden lg:flex"/>
                <Image src="/one.svg" alt="1" width={20} height={20} className="lg:hidden flex"/>
              </div>
              <p>Sign up for a Vorr account using your wallet.</p>
            </div>

            <div className="w-full flex items-center gap-8 lg:gap-14 bg-gradient-to-r from-[#f6efff] to-[#f1f8ff] p-4 lg:p-6">
              <div className="w-10">
                <Image src="/two.svg" alt="1" width={40} height={40} />
              </div>{" "}
              <p>
                Paste given code snippet into your <code>&lt;script&gt;</code>{" "}
                tag
              </p>
            </div>

            <div className="w-full flex items-center gap-8 lg:gap-14 bg-gradient-to-r from-[#f6efff] to-[#f1f8ff] rounded-b-lg p-4 lg:p-6">
              <div className="w-10">
                <Image src="/three.svg" alt="1" width={40} height={40} />
              </div>{" "}
              <p>Sit back and observe your earning dashboard</p>
            </div>
          </div>
        </div>
      </div>
  );
}
