"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const [particles, setParticles] = useState<{ top: number; left: number; xOffset: number; delay: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        xOffset: Math.random() * 300 - 150,
        delay: Math.random() * 10,
      }))
    );
  }, []);

  return (
    <footer className="relative mt-[150px] text-white pt-20 pb-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 opacity-30 animate-gradientSlow blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-50 blur-md -z-10"></div>

          <motion.h1 whileHover={{ scale: 1.05 }} className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
            Hami Parsa
          </motion.h1>

          <div className="flex gap-10">
            {[
              { icon: <FaGithub size={32} />, link: "https://github.com/hamiparsa", color: "hover:shadow-pink-500/60" },
              { icon: <FaLinkedin size={32} />, link: "https://www.linkedin.com/in/hami-parsa-146ba437a/", color: "hover:shadow-blue-500/60" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 5 }}
                className={`text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:shadow-lg ${item.color}`}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-gray-300 font-medium text-center md:text-right text-lg">
            © {new Date().getFullYear()} Hami Parsa. All Rights Reserved.
          </motion.p>
        </motion.div>
      </div>

      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} viewport={{ once: true }} className="mt-14 h-1 w-2/3 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.8)]"></motion.div>

      <div className="absolute -top-16 left-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl animate-floatSlow"></div>
      <div className="absolute bottom-0 right-10 w-52 h-52 bg-purple-500/30 rounded-full blur-3xl animate-floatSlow delay-2000"></div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/70"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [-20, -100], x: p.xOffset }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: p.delay }}
            style={{ top: `${p.top}%`, left: `${p.left}%` }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes gradientSlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        .animate-gradientSlow { background-size: 200% 200%; animation: gradientSlow 30s ease infinite; }
        .animate-floatSlow { animation: floatSlow 12s ease-in-out infinite; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </footer>
  );
}
