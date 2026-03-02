

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axbtt7a", 
        "template_1ziboq3", 
        form.current,
        "Rz7W9pVF0HdDryNNL" 
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "light", // Changed to light
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "light", // Changed to light
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight">GET IN TOUCH</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-600 mt-6 text-lg font-medium max-w-2xl">
          I’m always excited to discuss scalable web solutions and system design. Feel free to reach out for opportunities, collaborations, or just a quick tech chat!
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="mt-4 w-full max-w-lg bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="name@example.com"
              required
              className="w-full p-4 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              required
              className="w-full p-4 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              required
              className="w-full p-4 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
            <textarea
              name="message"
              placeholder="How can I help you?"
              rows="4"
              required
              className="w-full p-4 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
            />
          </div>
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;