"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#060a17] text-white py-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Joylyn Gurure. All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/joylyngurure"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-80 transition"
          >
            <Image
              src="/github.webp"
              alt="GitHub"
              width={32}
              height={32}
              className="rounded-full bg-white"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/joylyn-kudzai-gurure-533758256/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition"
          >
            <Image
              src="/linked.jpg"
              alt="LinkedIn"
              width={32}
              height={32}
              className="rounded-full"
            />
          </a>

          <a
            href="https://m.facebook.com/joylyn.que/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:opacity-80 transition"
          >
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={50}
              height={50}
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
