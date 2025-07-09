"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const topRowSkills = [
  { name: "React", logo: "/skills/react.svg" },
  { name: "Next.js", logo: "/skills/next.png" },
  { name: "TypeScript", logo: "/skills/typescript.png" },
  { name: "Tailwind CSS", logo: "/skills/tailwind.png" },
  { name: "Git", logo: "/skills/git.png" },
  { name: "Canva", logo: "/skills/canv.webp" },
];

const bottomRowSkills = [
  { name: "Node.js", logo: "/skills/node.png" },
  { name: "NestJS", logo: "/skills/nest.jpg" },
  { name: "PostgreSQL", logo: "/skills/postgres.jpg" },
  { name: "Jira", logo: "/skills/jira.svg" },
  { name: "Postman", logo: "/skills/postman.png" },
  { name: "Figma", logo: "/skills/figma.avif" },
  { name: "Expo", logo: "/skills/expo.png" },
];

const softSkills = [
  "Hard Worker",
  "Detail-Oriented",
  "Efficient",
  "Teamwork",
  "Adapt Quickly",
  "Good Communication",
  "Problem Solver",
];

function SkillRow({
  skills,
  direction,
}: {
  skills: typeof topRowSkills;
  direction: "left" | "right";
}) {
  return (
    <motion.div
      className="flex items-center gap-6 whitespace-nowrap"
      animate={{ x: direction === "left" ? ["80%", "-80%"] : ["-80%", "80%"] }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {skills.map((skill, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center bg-white/10 border border-white/20 backdrop-blur-md rounded-xl shadow-md p-3 w-[100px] hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={skill.logo}
            alt={skill.name}
            width={70}
            height={70}
            className="object-contain mb-1"
          />
          <span className="text-[#13f7fe] text-xs font-medium text-center">
            {skill.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

function SoftSkillsRow() {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4">
      {softSkills.map((skill, index) => (
        <div
          key={index}
          className="text-white border border-white/30 bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 text-sm font-medium hover:scale-105 transition-transform duration-300"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <div className="w-full overflow-hidden py-10 flex flex-col items-center gap-10">
      <SkillRow skills={topRowSkills} direction="left" />
      <SkillRow skills={bottomRowSkills} direction="right" />
      <SoftSkillsRow />
    </div>
  );
}
