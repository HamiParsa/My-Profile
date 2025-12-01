"use client";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaUser, FaPhone, FaCommentDots, FaTimes } from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", number: "", message: "" });
  const [showModal, setShowModal] = useState(false);
  const [particles, setParticles] = useState<{ top: number; left: number; size: number; delay: number; color: string }[]>([]);

  useEffect(() => {
    const colors = ["#EC4899", "#8B5CF6", "#3B82F6", "#F59E0B", "#10B981"];
    setParticles(
      Array.from({ length: 30 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    );
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send("service_97usflj", "template_m9immuc", form, "q1s3x3DSUxpAVErUh")
      .then(
        () => {
          setForm({ name: "", number: "", message: "" });
          setShowModal(true);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <div className="relative max-w-3xl mt-[150px] mx-auto p-8 backdrop-blur-xl bg-black/60 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">

      {/* Neon Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-60 animate-floatSlow"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
        Contact Me
      </h2>

      {/* Form */}
      <form onSubmit={sendEmail} className="flex flex-col gap-6">
        {[
          { key: "name", placeholder: "Your Name", type: "text", icon: FaUser, color: "pink" },
          { key: "number", placeholder: "Your Number", type: "tel", icon: FaPhone, color: "indigo" },
        ].map((field) => (
          <div key={field.key} className="relative group">
            <field.icon className={`absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-xl group-hover:text-${field.color}-400 transition-all duration-300`} />
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
              className={`w-full p-4 pl-12 rounded-2xl bg-white/10 text-white placeholder-gray-400 text-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-${field.color}-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.6)] transition-all duration-300`}
              required
            />
          </div>
        ))}

        {/* Message */}
        <div className="relative group">
          <FaCommentDots className="absolute top-4 left-4 text-gray-400 text-xl group-hover:text-pink-500 transition-all duration-300" />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-4 pl-12 rounded-2xl bg-white/10 text-white placeholder-gray-400 text-lg shadow-inner h-44 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:shadow-[0_0_20px_rgba(236,72,153,0.7)] transition-all duration-300"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="relative overflow-hidden px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl font-extrabold text-white text-lg shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-30"
        >
          Send Message
        </button>
      </form>

      {/* Modal for Success */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative max-w-md w-full p-8 rounded-3xl backdrop-blur-xl bg-black/60 shadow-2xl border border-white/20">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-gradient-x">
              ✅ Message Sent
            </h3>
            <p className="text-gray-200 mb-6">Your message has been successfully sent. I will get back to you shortly!</p>
            <button
              className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl font-bold text-white shadow-2xl hover:scale-105 transform transition-all duration-300"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
