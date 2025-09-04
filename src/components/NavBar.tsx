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
    <nav className="fixed text-white top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-xl border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="text-2xl flex font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Hami Parsa
              <PiLaptopThin className="text-white mt-1.5 ml-1" />
            </Link>
          </motion.div>

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
                  <Link href={item.href} className="nav-link flex items-center">
                    {item.name} <Icon className="ml-2 text-xl" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 px-6 py-6 space-y-6 shadow-md rounded-b-2xl"
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
                    className="nav-link flex items-center"
                    onClick={() => setIsOpen(false)} // Close menu after clicking
                  >
                    {item.name} <Icon className="ml-2 text-xl" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extra Styles */}
      <style jsx>{`
        .nav-link {
          position: relative;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease-in-out;
        }
        .nav-link:hover {
          background: linear-gradient(to right, #6366f1, #a855f7, #ec4899);
          -webkit-background-clip: text;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 3px;
          width: 0;
          border-radius: 2px;
          background: linear-gradient(to right, #6366f1, #a855f7, #ec4899);
          transition: width 0.35s ease-in-out;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
