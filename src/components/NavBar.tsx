"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PiLaptopThin } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [particles, setParticles] = useState<{ top: number; left: number; size: number; delay: number; color: string }[]>([]);

  useEffect(() => {
    const colors = ["#EC4899", "#8B5CF6", "#3B82F6", "#F59E0B", "#10B981"];
    setParticles(
      Array.from({ length: 15 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    );
  }, []);

  const menuItems = [
    { name: "About", href: "#about", icon: FcAbout },
    { name: "Projects", href: "#projects", icon: FaProjectDiagram },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Neon Glow Backplate */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-15 blur-3xl"></div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
            }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      {/* Container */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div
          className="flex items-center justify-between h-16 mt-4 px-6 rounded-full
          backdrop-blur-xl bg-black/70 border border-white/10 shadow-lg shadow-purple-500/40 relative"
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl flex font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative"
          >
            Hami Parsa
            <PiLaptopThin className="ml-1 mt-1.5 text-pink-400 animate-pulse" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {menuItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="relative font-semibold text-gray-200 transition duration-300 group"
                  >
                    <span className="flex items-center">
                      {item.name}
                      <Icon className="ml-2 text-lg text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                    </span>
                    <span
                      className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-full hover:bg-white/20 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden mx-4 mt-2 px-6 py-6 space-y-6 rounded-2xl
            backdrop-blur-xl bg-black/70 border border-white/10 shadow-xl relative overflow-hidden"
          >
            {menuItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center font-semibold text-gray-200 hover:text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name} <Icon className="ml-2 text-xl text-cyan-400" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
