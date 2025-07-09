"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#060a17] relative">
      {/* Background image container */}
      <div
  className="flex items-center justify-center flex-grow bg-cover bg-center animate-bgMove"
  style={{ backgroundImage: "url('/backimage.jpg')" }}
>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-20 md:px-40  gap-20 z-[10]">
          {/* Left content */}
          <div className="flex flex-col gap-5 max-w-[650px]">
            <h1 className="text-[40px] md:text-[50px] text-white font-semibold leading-tight">
              Hi, I`m Joylyn Gurure
              <br />
              <span className="text-transparent bg-clip-text bg-blue-500">
                Junior Software Developer
              </span>
            </h1>

            <p className="text-gray-200 hidden md:block">
              I’m a creative and dedicated developer focused on building engaging, responsive web experiences.
            </p>

            <div className="flex-col md:flex-row hidden md:flex gap-5">
              <Link
                href="/about"
                className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
              >
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                About
              </Link>

              <Link
                href="/skills"
                className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
              >
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                Skills
              </Link>

              <Link
                href="/my-projects"
                className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
              >
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                My Projects
              </Link>

              <Link
                href="/contact-me"
                className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
              >
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                Contact Me
              </Link>
            </div>
          </div>

         
          <div className="w-[350px] h-[350px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-lg">
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

     
      {/* <div className="fixed bottom-10 right-5 flex flex-col gap-5 md:hidden z-50">
        <Link
          href="/skills"
          className="rounded-[20px] bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Projects
        </Link>

        <Link
          href="/contact-me"
          className="rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact Me
        </Link>
      </div> */}

      <Footer />
    </main>
  );
}
