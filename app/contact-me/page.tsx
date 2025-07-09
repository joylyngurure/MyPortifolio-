"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function ContactPage() {
  const email = "quegurure16@gmail.com"; 
  const whatsappNumber = "263788735065"; 

  return (
    <main className="min-h-screen w-full flex flex-col text-white bg-cover bg-center animate-bgMove" style={{ backgroundImage: "url('/backimage.jpg')" }}>
      <Navbar />

      {/* Content area fills available space */}
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-blue-400 mb-12">Contact Me</h1>

        <p className="text-gray-300 text-center max-w-xl mb-8 text-lg">
          I'm always open to discussing new opportunities, collaborations, or even a quick tech chat! 
          Feel free to reach out to me via email or WhatsApp — I’ll get back to you as soon as I can.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <a
            href={`mailto:${email}`}
            className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg transition duration-300"
          >
            Email Me
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg transition duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </main>
  );
}
