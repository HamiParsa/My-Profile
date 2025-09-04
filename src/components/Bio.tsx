"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLaptopCode,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { GiChessKing } from "react-icons/gi";
import { TbBrandRedux } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Bio() {
  // List of skills with icons
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-amber-300" /> },
    { name: "React", icon: <FaReact className="text-blue-900" /> },
    { name: "Next", icon: <RiNextjsFill /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Zustand", icon: <TbBrandRedux className="text-purple-600" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="text-blue-500" /> },
  ];

  // Mounted check for client-only rendering
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Motion values for parallax tilt effect
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  const rotateY = useTransform(motionX, (val) => val);
  const rotateX = useTransform(motionY, (val) => -val);

  // Track mouse position to update tilt
  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      motionX.set(x);
      motionY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted, motionX, motionY]);

  // Generate floating particles once on client
  const [particles, setParticles] = useState<{ top: number; left: number }[]>([]);
  useEffect(() => {
    if (!mounted) return;
    setParticles(
      Array.from({ length: 40 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
      }))
    );
  }, [mounted]);

  return (
    <div id="about" className="relative min-h-screen font-bricolage overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 animate-bgGradient"></div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-white rounded-full opacity-30 absolute"
            style={{ top: `${p.top}%`, left: `${p.left}%` }}
            animate={{
              y: [`0%`, `${Math.random() * 50 - 25}%`, `0%`],
              x: [`0%`, `${Math.random() * 50 - 25}%`, `0%`],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-center mt-36 px-6 lg:px-0 gap-16">
        {/* Text section with intro and skills */}
        <div className="text-gray-100 max-w-lg flex flex-col gap-6 z-10 relative">
          <h1 className="flex items-center gap-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-textGradient">
            Im Hami Parsa
            <GiChessKing className="text-yellow-400 text-4xl animate-bounce" />
          </h1>

          <h2 className="text-2xl flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
            Front End Developer <FaLaptopCode className="text-indigo-400 text-2xl" />
          </h2>

          <hr className="border-gray-800" />

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 bg-gray-800/40 hover:bg-gray-700/60 px-4 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-purple-500/70"
              >
                {skill.icon}
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile image with parallax tilt and glowing layers */}
        <motion.div
          className="relative w-80 h-80 lg:w-96 lg:h-96 perspective z-10"
          style={{ rotateX, rotateY }}
          animate={{ y: ["0%", "-3%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          {/* Neon glow layers */}
          <div className="absolute inset-0 rounded-2xl blur-3xl opacity-60 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-glow1"></div>
          <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40 bg-gradient-to-r from-purple-400 via-pink-400 to-pink-600 animate-glow2"></div>
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-30 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-glow3"></div>

          <Image
            src="https://github.com/HamiParsa/My-Profile/blob/main/public/image.png"
            width={400}
            height={400}
            alt="Hami Parsa"
            className="relative rounded-2xl shadow-2xl border border-gray-800"
          />
        </motion.div>
      </div>

      {/* Bio paragraph */}
      <p className="text-white text-center mt-[300px] max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
        Hi, Im <span className="font-bold text-pink-500">Hami Parsa</span> — a <span className="text-indigo-400 font-semibold">passionate Front-End Developer</span> dedicated to crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-bold">modern, interactive, and visually stunning</span> web experiences.
        <br /><br />
        I transform ideas into <span className="text-purple-400 font-semibold">user-friendly websites</span> using <span className="text-yellow-400 font-bold">HTML, CSS, JavaScript</span>, <span className="text-blue-500 font-bold">React</span>, and <span className="text-indigo-400 font-bold">Next.js</span>.
        <br /><br />
        Always learning, always improving — I strive to build projects that combine <span className="text-pink-400 font-semibold">beautiful design</span> with <span className="text-purple-500 font-semibold">high performance</span>.
        <br /><br />
        Lets collaborate and create <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold">something extraordinary</span> together!
      </p>

      {/* Custom animations and styles */}
      <style jsx>{`
        .perspective { perspective: 1000px; }

        @keyframes glow1 {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes glow2 {
          0% { background-position: 100% 0%; }
          50% { background-position: 0% 100%; }
          100% { background-position: 100% 0%; }
        }
        @keyframes glow3 {
          0% { background-position: 50% 0%; }
          50% { background-position: 50% 100%; }
          100% { background-position: 50% 0%; }
        }

        .animate-glow1 { background-size: 200% 200%; animation: glow1 6s ease-in-out infinite; }
        .animate-glow2 { background-size: 200% 200%; animation: glow2 8s ease-in-out infinite; }
        .animate-glow3 { background-size: 200% 200%; animation: glow3 10s ease-in-out infinite; }

        @keyframes bgGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bgGradient { background-size: 200% 200%; animation: bgGradient 20s ease infinite; }

        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-textGradient { background-size: 200% 200%; animation: textGradient 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
