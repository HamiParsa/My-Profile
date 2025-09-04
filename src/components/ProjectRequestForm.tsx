"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

export default function ContactForm() {
  // State for form inputs
  const [form, setForm] = useState({ name: "", email: "", number: "", message: "" });

  // State for success/error status message
  const [status, setStatus] = useState("");

  // Function to send email via EmailJS
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_97usflj",    // EmailJS service ID
        "template_m9immuc",   // EmailJS template ID
        form,                 // Form data
        "q1s3x3DSUxpAVErUh"   // EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setForm({ name: "", email: "", number: "", message: "" }); // Reset form
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <div
      id="contact"
      className="text-white max-w-3xl mt-[150px] mx-auto p-8 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200"
    >
      {/* Form Title */}
      <h2 className="text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
        Contact Us
      </h2>

      {/* Contact Form */}
      <form onSubmit={sendEmail} className="flex flex-col gap-6">
        {/* Name Field */}
        <div className="relative group">
          <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-xl group-hover:text-pink-500 transition-all duration-300" />
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-4 text-white pl-12 rounded-2xl bg-white/10 placeholder-gray-400 text-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 w-full"
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative group">
          <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-xl group-hover:text-purple-500 transition-all duration-300" />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-4 pl-12 rounded-2xl bg-white/10 placeholder-gray-400 text-white text-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 w-full"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="relative group">
          <FaPhone className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-xl group-hover:text-indigo-500 transition-all duration-300" />
          <input
            type="tel"
            placeholder="Your Number"
            value={form.number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
            className="p-4 pl-12 rounded-2xl bg-white/10 placeholder-gray-400 text-white text-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 w-full"
            required
          />
        </div>

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

      {/* Custom Animation for Gradient Title */}
      <style>
        {`
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 8s ease infinite;
          }
          @keyframes gradient-x {
            0% {background-position:0% 50%}
            50% {background-position:100% 50%}
            100% {background-position:0% 50%}
          }
        `}
      </style>
    </div>
  );
}
