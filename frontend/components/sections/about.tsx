"use client";
import React, { useState } from "react";
import Image from "next/image";

export function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="bg-[#F7F9FD] min-h-screen flex justify-center items-center relative px-8">
        <div className="w-full flex bg-gradient-to-r from-[#FEF3F7] via-[#EFEAF9]/80 to-transparent py-20 rounded-lg">
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="flex flex-col justify-center gap-8 px-4 lg:w-3/4 items-center lg:items-start">
              <h2 className="text-[#111111] text-[20px] lg:text-[32px] font-medium font-instrument">
                What exactly does Vorr do?
              </h2>
              <div
                className={`text-[16px] lg:leading-[24px] ${
                  isHovered ? "text-[#6F6F6F]/60" : "text-[#6F6F6F]"
                } transition-colors duration-300 lg:whitespace-nowrap flex flex-col gap-2 justify-center`}
              >
                <div>Good question.</div>
                <div>
                  {" "}
                  Vorr transforms idle browser power into revenue for websites.
                </div>
                <div>
                  {" "}
                  It enables site owners to mine ORE tokens using visitors&apos;
                  spare computing resources.
                </div>
                <div>
                  This process occurs in the background, providing a seamless
                  alternative to ads.
                </div>
                <br />
                <div>
                  With Vorr, websites can monetise traffic efficiently while
                  preserving user experience on your product.
                </div>
              </div>
              <div className="border-b border-dashed border-[#CCCCCC] w-full my-2"></div>
              <div
                className={`text-[16px] leading-[24px] ${
                  isHovered ? "text-[#6F6F6F]" : "text-[#6F6F6F]/60"
                } transition-colors duration-300 lg:whitespace-nowrap flex flex-col gap-2 justify-center`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="underline">Explain to me like I&apos;m five</div>
                <div>
                  Picture a lemonade stand where customers don&apos;t pay with money.
                </div>
                <div>
                  Instead, while they enjoy their lemonade, their presence helps
                  the stand make coins out of thin air.
                </div>
                <div> Magical right? That&apos;s how Vorr works for websites.</div>
                <br />
                <div>
                  When you visit, your computer quietly helps the site earn
                  special internet money,
                </div>
                <div>
                  {" "}
                  all while you enjoy the content without any annoying ads.
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 lg:flex hidden justify-end items-end absolute -bottom-10 right-48">
            <div className="relative">
              <Image
                src="/mobile-dashboard.svg"
                alt="mobile-dashboard"
                width={300}
                height={600}
                className="object-contain"
              />
              <div className="absolute top-[35%] -left-[25%]">
                <Image
                  src="/visitor.svg"
                  alt="visitor"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-[10%] -right-[25%]">
                <Image
                  src="/owner.svg"
                  alt="owner"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
