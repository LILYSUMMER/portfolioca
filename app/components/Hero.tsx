"use client";

import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#faf9f7]">
      {/* Subtle vertical rule */}
      <div
        className="absolute top-0 right-0 w-px h-full bg-[#d6d0c8] opacity-60"
        style={{ right: "18%" }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 right-8 md:right-16 lg:right-24 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-[#8a8880]"
        />
        <span
          className="text-[10px] tracking-[0.25em] uppercase text-[#8a8880]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Scroll
        </span>
      </motion.div>

      {/* Top: Category label + index */}
      <div className="px-8 md:px-16 lg:px-24 pt-36 flex items-start justify-between">
        <motion.p
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xs tracking-[0.25em] uppercase text-[#8a8880]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Visual Presentation Associate
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-right"
        >
          <p
            className="text-xs tracking-[0.2em] uppercase text-[#8a8880] mb-1"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Portfolio
          </p>
          <p
            className="text-xs tracking-[0.2em] uppercase text-[#8a8880]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            2024 — 2026
          </p>
        </motion.div>
      </div>

      {/* Bottom: Main content */}
      <div className="px-8 md:px-16 lg:px-24 pb-20">
        {/* Main headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[clamp(4rem,10vw,10rem)] leading-none tracking-tight text-[#1a1a18]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Sooryun
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            custom={0.7}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[clamp(4rem,10vw,10rem)] leading-none tracking-tight text-[#1a1a18] italic"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Yoon
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
          className="w-16 h-px bg-[#8a8880] mb-8"
        />

        {/* Subtitle and tagline */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.p
            custom={1.0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-sm md:text-base tracking-[0.1em] uppercase text-[#2c2c2a]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Visual Presentation &amp; Spatial Design
          </motion.p>

          <motion.p
            custom={1.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-sm text-[#8a8880] max-w-sm leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontStyle: "italic" }}
          >
            Bridging Fine Arts, Sculpture, and Retail Merchandising with a Maker&apos;s Mindset.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
