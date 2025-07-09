"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Projects", href: "/my-projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact Me", href: "/contact-me" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-10 z-50 flex justify-center">
      <div className="group relative bg-transparent border border-white rounded-[20px] px-6 py-3 backdrop-blur-md">
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition duration-200 ${
                    isActive
                      ? "text-blue-400 font-semibold underline underline-offset-4"
                      : "text-white hover:text-blue-300"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
