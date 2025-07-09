"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col bg-[#060a17] bg-cover bg-center animate-bgMove relative"
      style={{ backgroundImage: "url('/backimage.jpg')" }}
    >
      {/* Content container: flex-grow to push footer down */}
      <div className="flex-grow flex flex-col justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 sm:px-10 md:px-20 lg:px-40 gap-10 md:gap-20 z-[10] py-10 md:py-0">
          {/* Left content + buttons */}
          <div className="flex flex-col gap-5 max-w-[650px] text-center md:text-left w-full md:w-auto">
            <h1 className="text-[32px] sm:text-[36px] md:text-[50px] text-white font-semibold leading-tight">
              Hi, I&apos;m Joylyn Gurure
              <br />
              <span className="text-transparent bg-clip-text bg-blue-500">
                Junior Software Developer
              </span>
            </h1>

            <p className="text-gray-200 text-sm sm:text-base">
              I&apos;m a creative and dedicated developer focused on building engaging, responsive web experiences.
            </p>

            {/* Desktop buttons */}
            <div className="hidden md:flex flex-nowrap gap-5 flex-wrap md:flex-nowrap">
              {[
                { label: "About", href: "/about" },
                { label: "Skills", href: "/skills" },
                { label: "My Projects", href: "/my-projects" },
                { label: "Contact Me", href: "/contact-me" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-base text-white text-center whitespace-nowrap"
                >
                  <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile buttons inside same container */}
            <div className="flex flex-col md:hidden gap-4 items-center mt-6">
              {[
                { label: "About", href: "/about" },
                { label: "Skills", href: "/skills" },
                { label: "My Projects", href: "/my-projects" },
                { label: "Contact Me", href: "/contact-me" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-full max-w-[300px] rounded-[20px] bg-white/10 border border-white px-5 py-3 text-white text-center"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/joy.jpeg"
              alt="Joylyn Gurure"
              width={350}
              height={350}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Footer pinned at bottom */}
      <Footer />
    </main>
  );
}
