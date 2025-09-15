"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaArrowLeft, FaArrowRight, FaGlobe } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { MdMonitorHeart } from "react-icons/md";

// Project data with metadata: name, URL, images, and technologies used
const projectsData = [
  {
    name: "Fast Food Menu",
    url: "https://hamiparsa.github.io/Menu-Fast-Food/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic1.png",
      "https://github.com/HamiParsa/Menu-Fast-Food/raw/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic3.png",
      "https://github.com/HamiParsa/Menu-Fast-Food/raw/main/pic4.png",
      "https://github.com/HamiParsa/Menu-Fast-Food/raw/main/pic5.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Zustand",
        icon: <TbBrandRedux className="text-purple-600 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Movies",
    url: "https://imaginative-granita-28d88b.netlify.app/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic5.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Zustand",
        icon: <TbBrandRedux className="text-purple-600 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Game Zone",
    url: "https://68c0c2e45771a622f455eea7--game-zone1.netlify.app/",
    images: [
      "https://github.com/HamiParsa/Game-Zone/raw/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic4.png"
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Music Player",
    url: "https://hamiparsa.github.io/Music-Player/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Music-Player/main/pic1.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
    {
    name: "Kouman",
    url: "https://68c7cfef92baf200086bf1ff--kouman.netlify.app/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic5.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic6.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic7.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Zustand",
        icon: <TbBrandRedux className="text-purple-600 text-2xl sm:text-3xl" />,
      },
    ],
  },
];

function ProjectSlider({ project }) {
  const [current, setCurrent] = useState(0); // Current image index

  // Navigate to previous image (looping)
  const prev = () =>
    setCurrent((i) => (i - 1 + project.images.length) % project.images.length);

  // Navigate to next image (looping)
  const next = () => setCurrent((i) => (i + 1) % project.images.length);

  return (
    <div
      id="projects"
      className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
    >
      {/* Left Panel with title, technologies, and website link */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4 sm:gap-6">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          {project.name}
        </h3>

        {/* Technologies used */}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {project.tech.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:scale-110 transition-all shadow-lg"
            >
              {t.icon}
              <span className="text-sm sm:text-base">{t.name}</span>
            </div>
          ))}
        </div>

        {/* Button linking to the live project */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 hover:shadow-lg transition-all font-semibold text-white shadow-2xl text-sm sm:text-base"
        >
          <FaGlobe /> View Website
        </a>
      </div>

      {/* Right Panel with image slider */}
      <div className="w-full lg:w-2/3 relative rounded-2xl overflow-hidden shadow-2xl">
        <AnimatePresence initial={false} mode="wait">
          {/* Current project image with slide-in/out animation */}
          <motion.div
            key={current}
            className="relative w-full h-[240px] sm:h-[320px] lg:h-[480px] cursor-grab"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) next();
              if (info.offset.x > 100) prev();
            }}
          >
            <img
              src={project.images[current]}
              alt={`${project.name} screenshot ${current + 1}`}
              className="w-full h-full object-cover rounded-2xl pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>

        {/* Previous Button */}
        <button
          onClick={prev}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-black bg-white/70 hover:bg-pink-500/80 hover:text-white transition-all"
        >
          <FaArrowLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-black bg-white/70 hover:bg-purple-500/80 hover:text-white transition-all"
        >
          <FaArrowRight />
        </button>

        {/* Indicators (dots showing current image) */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {project.images.map((_, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                i === current
                  ? "w-4 sm:w-6 h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsShowcase() {
  return (
    <main className="mt-[100px] text-white min-h-screen p-4 sm:p-6 lg:p-8 space-y-12 sm:space-y-16 lg:space-y-20">
      {/* Section Title */}
      <h2 className="text-2xl flex justify-center sm:text-3xl lg:text-4xl font-bold">
        Projects Made with Love
        <MdMonitorHeart className="mt-1 ml-1" />
      </h2>

      {/* Render all projects */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {projectsData.map((p, i) => (
          <ProjectSlider project={p} key={i} />
        ))}
      </div>
    </main>
  );
}
