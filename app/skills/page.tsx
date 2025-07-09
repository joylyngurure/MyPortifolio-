"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SkillsMarquee from "@/components/SkillsMarquee";

export default function SkillsPage() {
  return (
    <main className="min-h-screen w-screen flex flex-col bg-[#060a17]">
      <Navbar />

      {/* Page Content */}
      <div
        className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-cover bg-center animate-bgMove"
        style={{ backgroundImage: "url('/backimage.jpg')" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-6 text-center">
          My Skills
        </h1>

        <div className="w-full max-w-6xl">
          <SkillsMarquee />
        </div>
      </div>

      <Footer />
    </main>
  );
}
