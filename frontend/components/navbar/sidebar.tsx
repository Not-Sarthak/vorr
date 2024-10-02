"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  imageSrc: string;
  alt: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, imageSrc, alt }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div className="p-2">
        <div
          className={`flex justify-center my-2 ${isActive ? "bg-black p-2 rounded-md" : ""}`}
        >
          <Image src={imageSrc} alt={alt} width={24} height={24} />
        </div>
      </div>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <div
      className="hidden lg:flex flex-col h-screen justify-between py-4 min-w-16 bg-white border-opacity-80 shadow-sm"
      style={{
        background:
          "linear-gradient(180deg, #FEF3F7 0%, #EFEAF9 50%, #EBFDFE 100%)",
      }}
    >
      <Link href="/">
        <div className="flex justify-center">
          <Image
            src="/dashboard/dashboard-logo.svg"
            alt="Vorr Logo"
            width="26"
            height="26"
          />
        </div>
      </Link>
      <div>
        <NavItem
          href="/dashboard"
          imageSrc="/dashboard/home.svg"
          alt="Dashboard"
        />
        <NavItem
          href="/payouts"
          imageSrc="/dashboard/piggy-bank.svg"
          alt="Payouts"
        />
        <NavItem href="/script" imageSrc="/dashboard/api.svg" alt="Script" />
      </div>
      <div>
        <NavItem
          href="/settings"
          imageSrc="/dashboard/settings.svg"
          alt="Settings"
        />
        <NavItem href="/help" imageSrc="/dashboard/help.svg" alt="Help" />
      </div>
    </div>
  );
}
