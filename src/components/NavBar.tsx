"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PiLaptopThin } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about", icon: FcAbout },
    { name: "Projects", href: "#projects", icon: FaProjectDiagram },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Container */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div
          className="flex items-center justify-between h-16 mt-4 px-6 rounded-full
          backdrop-blur-xl border border-white/20 shadow-lg shadow-purple-500/20"
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl flex font-extrabold 
              bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
              bg-clip-text text-transparent"
          >
            Hami Parsa
            <PiLaptopThin className="ml-1 mt-1.5 text-pink-400" />
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
                      <Icon className="ml-2 text-lg text-cyan-400 group-hover:text-pink-400 transition-colors" />
                    </span>
                    <span
                      className="absolute left-0 -bottom-1 h-[2px] w-0 
                      bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                      transition-all duration-500 group-hover:w-full"
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
            bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20
            backdrop-blur-xl border border-white/20 shadow-xl"
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
                    className="flex items-center font-semibold text-gray-200 
                      hover:text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text"
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
