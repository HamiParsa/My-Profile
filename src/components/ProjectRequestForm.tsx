"use client";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", number: "", message: "" });
  const [status, setStatus] = useState("");
  const [particles, setParticles] = useState<{ top: number; left: number; delay: number }[]>([]);

  // ===============================
  // Generate particles on client only
  // ===============================
  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send("service_97usflj", "template_m9immuc", form, "q1s3x3DSUxpAVErUh")
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setForm({ name: "", email: "", number: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <div id="contact" className="relative max-w-3xl mt-[150px] mx-auto p-8 backdrop-blur-lg bg-black/50 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
      {/* Background Neon Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {particles.map((p, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-50 animate-floatSlow"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Form Title */}
      <h2 className="text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
        Contact Me
      </h2>

      {/* Contact Form */}
      <form onSubmit={sendEmail} className="flex flex-col gap-6">
        {[
          { placeholder: "Your Name", value: form.name, icon: FaUser, key: "name", type: "text", color: "pink" },
          { placeholder: "Your Email", value: form.email, icon: FaEnvelope, key: "email", type: "email", color: "purple" },
          { placeholder: "Your Number", value: form.number, icon: FaPhone, key: "number", type: "tel", color: "indigo" },
        ].map((field) => (
          <div key={field.key} className="relative group">
            <field.icon className={`absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-xl group-hover:text-${field.color}-400 transition-all duration-300`} />
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
              className={`p-4 pl-12 rounded-2xl bg-white/10 placeholder-gray-400 text-white text-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-${field.color}-500 transition-all duration-300 w-full`}
              required
            />
          </div>
        ))}

        {/* Message Field */}
        <div className="relative group">
          <FaCommentDots className="absolute top-4 left-4 text-gray-400 text-xl group-hover:text-pink-500 transition-all duration-300" />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="p-4 pl-12 rounded-2xl bg-white/10 placeholder-gray-400 text-white text-lg shadow-inner h-44 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="relative overflow-hidden px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl font-extrabold text-white text-lg shadow-2xl transform transition-transform duration-300 hover:scale-105 before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-30"
        >
          Send Message
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <p className="mt-6 text-center text-white font-semibold">{status}</p>
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
