"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <main className="min-h-screen w-full flex flex-col  text-white bg-cover bg-center animate-bgMove" style={{ backgroundImage: "url('/backimage.jpg')" }}>
      {/* Navbar at top */}
      <Navbar />

      {/* Main content area that expands */}
      <div className="flex-grow flex flex-col items-center justify-start px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-blue-400 mb-6 mt-20">About Me</h1>

          <p className="text-lg leading-7 text-gray-300 mb-4">
            Hi, I'm <strong>Joylyn Gurure</strong>, a passionate and detail-oriented Junior Software Developer with 7 months of hands-on experience. I specialize in building responsive and dynamic web and mobile applications using modern technologies like React, React Native, and Node.js.
          </p>

          <p className="text-lg leading-7 text-gray-300 mb-4">
            I enjoy turning complex problems into simple, elegant solutions. My journey so far has involved working on real-world projects that required collaboration, adaptability, and continuous learning. I'm efficient, a quick learner, and always up for a challenge.
          </p>

          <p className="text-lg leading-7 text-gray-300 mb-4">
            Whether it's developing scalable APIs, creating clean UI interfaces, or optimizing performance, I always aim to write clean, maintainable code. I'm currently exploring backend frameworks like NestJS and cloud services to deepen my skills.
          </p>

          <p className="text-lg leading-7 text-gray-300 mb-8">
            Outside of coding, I’m a strong team player who values communication and continuous improvement. I'm excited about the future of tech and always looking for opportunities to grow and contribute.
          </p>

          <Link
            href="/joylynCv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition duration-300"
          >
            Download My CV
          </Link>
        </div>
      </div>

      {/* Footer pinned below */}
      <Footer />
    </main>
  );
};

export default About;
