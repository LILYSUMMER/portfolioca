"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf9f7]/90 backdrop-blur-md border-b border-[#d6d0c8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-20 lg:px-32 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className="text-[#1a1a18] text-lg tracking-widest uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.2em" }}
        >
          SY
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.15em] uppercase text-[#8a8880] hover:text-[#1a1a18] transition-colors duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:block text-xs tracking-[0.15em] uppercase border border-[#1a1a18] text-[#1a1a18] px-5 py-2 hover:bg-[#1a1a18] hover:text-[#faf9f7] transition-all duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="block w-5 h-px bg-[#1a1a18]" />
          <span className="block w-3 h-px bg-[#1a1a18]" />
        </div>
      </div>
    </motion.header>
  );
}
