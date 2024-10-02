"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar: React.FC = () => {
  const [position, setPosition] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [activeTab, setActiveTab] = useState<number | null>(null);

  const sections = ["hero", "about", "how"];

  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = sections.map((section) => {
        const el = document.getElementById(section);
        if (!el) return { id: section, top: 0 };
        const rect = el.getBoundingClientRect();
        return { id: section, top: rect.top };
      });

      const currentSection = sectionPositions.reduce((acc, curr) => {
        return Math.abs(curr.top) < Math.abs(acc.top) ? curr : acc;
      });

      const sectionIndex = sections.indexOf(currentSection.id);
      if (sectionIndex !== activeTab) {
        setActiveTab(sectionIndex);
        const ref = document.getElementById(`tab-${sectionIndex}`);
        if (ref) {
          const { width } = ref.getBoundingClientRect();
          setPosition({
            left: ref.offsetLeft,
            width,
            opacity: 1,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
        setActiveTab(null);
      }}
      className="relative mx-auto flex w-fit rounded-xl bg-[#F6F6F6] p-1"
    >
      <Tab
        index={0}
        setPosition={setPosition}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        section="hero"
      >
        Hero
      </Tab>
      <Tab
        index={1}
        setPosition={setPosition}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        section="about"
      >
        About
      </Tab>
      <Tab
        index={2}
        setPosition={setPosition}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        section="how"
      >
        How
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  index: number;
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
  setActiveTab: React.Dispatch<React.SetStateAction<number | null>>;
  activeTab: number | null;
  section: string; // Section to scroll to
}

const Tab: React.FC<TabProps> = ({
  index,
  children,
  setPosition,
  setActiveTab,
  activeTab,
  section,
}) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      id={`tab-${index}`}
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });

        setActiveTab(index);
      }}
      onClick={() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`relative z-10 block cursor-pointer px-4 py-2 ${
        activeTab === index ? "text-offwhite" : "text-light-gray"
      }`}
    >
      {children}
    </li>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-10 rounded-xl bg-black"
    />
  );
};
