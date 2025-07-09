"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Projects", href: "/my-projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact Me", href: "/contact-me" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Optional: Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-5 z-50 flex justify-center px-4">
      {/* Desktop Navbar */}
      <div className="hidden md:flex group bg-transparent border border-white rounded-[20px] px-6 py-3 backdrop-blur-md">
        <ul className="flex space-x-6">
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

      {/* Mobile Hamburger (not shown on Home page) */}
      {pathname !== "/" && (
        <div className="md:hidden fixed top-5 right-5 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-3 border border-white rounded-full text-white backdrop-blur-md bg-[#060a17]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 right-5 left-5 bg-[#060a17] border border-white rounded-[20px] p-6 flex flex-col gap-4 text-white z-40 backdrop-blur-md shadow-lg">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`transition duration-200 ${
                  isActive
                    ? "text-blue-400 font-semibold underline underline-offset-4"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
