"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-[100px] bg-gray-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Animated Glowing Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-30 animate-gradientSlow blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Copyright */}
        <p className="text-gray-300 text-center md:text-left hover:text-white transition-all duration-300 text-lg md:text-base font-semibold">
          &copy; {new Date().getFullYear()} Hami Parsa. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-8">
          <a
            href="https://github.com/hamiparsa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:shadow-lg hover:shadow-pink-500/60"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/hami-parsa-146ba437a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-125 hover:shadow-lg hover:shadow-blue-500/60"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://t.me/hamiparsa_chanel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:shadow-lg hover:shadow-purple-400/60"
          >
            <FaTelegramPlane size={32} />
          </a>
        </div>
      </div>

      {/* Bottom Gradient Line with Glow */}
      <div className="mt-10 h-1 w-3/4 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradientFast shadow-2xl shadow-pink-500/50"></div>

      {/* Extra Floating Glow Circles */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-pink-500/30 rounded-full blur-3xl animate-floatSlow"></div>
      <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl animate-floatSlow delay-2000"></div>

      <style jsx>{`
        @keyframes gradientSlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradientFast {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        .animate-gradientSlow {
          background-size: 200% 200%;
          animation: gradientSlow 25s ease infinite;
        }
        .animate-gradientFast {
          background-size: 200% 200%;
          animation: gradientFast 6s ease infinite;
        }
        .animate-floatSlow {
          animation: floatSlow 10s ease-in-out infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
}
