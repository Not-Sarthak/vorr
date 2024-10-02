
"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutDesktop() {
  const BoxRef = useRef(null);
  const ContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const Box = BoxRef.current;
    const Container = ContainerRef.current;

    gsap.fromTo(
      Box,
      { y: 0, x: 0 },
      {
        y: 662,
        x: -856,
        ease: "power1.in",
        scrollTrigger: {
          trigger: Container,
          start: "top top",
          end: "+=300",
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
      <div className="bg-[#F7F9FD] min-h-screen flex justify-center items-center relative px-8">
        <div
          className="w-full flex bg-gradient-to-r from-[#FEF3F7] via-[#EFEAF9]/80 to-transparent py-20 rounded-lg"
          ref={ContainerRef}
        >
          <div className="w-1/2 flex justify-center">
            <div className="flex flex-col gap-8 items-start max-w-[520px]">
              <h2 className="text-[#111111] text-[32px] font-medium font-['Instrument Sans'] leading-[38.40px]">
                What exactly does Vorr do?
              </h2>
              <div
                className={`text-[16px] leading-[24px] ${
                  isHovered ? "text-[#6F6F6F]/60" : "text-[#6F6F6F]"
                } transition-colors duration-300 whitespace-nowrap`}
              >
                Good question.
                <br />
                Vorr transforms idle browser power into revenue for websites.
                <br />
                It enables site owners to mine ORE tokens using visitors&apos; spare
                computing resources.
                <br />
                This process occurs in the background, providing a seamless
                alternative to ads.
                <br />
                <br />
                With Vorr, websites can monetise traffic efficiently while
                preserving user experience on your product.
              </div>
              <div className="border-b border-dashed border-[#CCCCCC] w-full my-2"></div>
              <div
                className={`text-[16px] leading-[24px] ${
                  isHovered ? "text-[#6F6F6F]" : "text-[#6F6F6F]/60"
                } transition-colors duration-300 whitespace-nowrap`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="underline">Explain to me like I&apos;m five</div>
                <br />
                Picture a lemonade stand where customers don&apos;t pay with money.
                <br />
                Instead, while they enjoy their lemonade, their presence helps
                the stand make coins out of thin air.
                <br />
                Magical right? That&apos;s how Vorr works for websites.
                <br />
                <br />
                When you visit, your computer quietly helps the site earn
                special internet money,
                <br />
                all while you enjoy the content without any annoying ads.
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-end absolute -bottom-10 right-48">
            <div className="relative">
              <Image
                src="/mobile-dashboard.svg"
                alt="mobile-dashboard"
                width={300}
                height={600}
                className="object-contain"
                ref={BoxRef}
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
