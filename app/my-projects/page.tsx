"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "MariMusha Mobile App",
    description: "A mobile app for sending and receiving money.",
    image: "/projects/musha.webp",
    link: "https://play.google.com/store/apps/details?id=com.mapepaprosper.marimushamobile&hl=en",
  },
  {
    title: "R5 Mobile App",
    description:
      "A mobile app for church members to access sermons, events, and connect with the R5 community.",
    image: "/projects/church.webp",
    link: "https://play.google.com/store/apps/details?id=com.mapepaprosper.r5churchmobile",
  },
  {
    title: "Rota",
    description:
      "A mobile app designed to manage and organize shift schedules for caregiving workers. It streamlines rota planning, enables real-time updates.",
    image: "/projects/rota.webp",
    link: "https://play.google.com/store/apps/details?id=com.mapepaprosper.elmsrotamanagement",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col  text-white bg-cover bg-center animate-bgMove" style={{ backgroundImage: "url('/backimage.jpg')" }}>
      <Navbar />

      {/* Page content */}
      <div className="flex-grow px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-12 py-20">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

function ProjectCard({
  title,
  description,
  image,
  link,
  index,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      }}
      className="w-[360px] h-[400px] bg-white/10 border border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-md transition-all duration-300"
    >
      <div className="relative w-full h-[220px] bg-white">
        <Image
          src={image}
          alt={`${title} Image`}
          width={360}
          height={500}
          unoptimized
          priority
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <Link
          href={link}
          target="_blank"
          className="text-sm text-blue-400 hover:underline"
        >
          View Project →
        </Link>
      </div>
    </motion.div>
  );
}
