"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#1a1a18] text-[#faf9f7] py-28 md:py-40"
    >
      <div className="px-8 md:px-16 lg:px-24">
        {/* Section label */}
        <motion.p
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-xs tracking-[0.25em] uppercase text-[#8a8880] mb-16"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          03 — Contact
        </motion.p>

        {/* Main headline */}
        <motion.h2
          custom={0.1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-[clamp(2.5rem,6vw,6rem)] leading-tight text-[#faf9f7] mb-16 max-w-4xl"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Let&apos;s create something{" "}
          <span className="italic text-[#e8e2d9]">beautiful</span> together.
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="w-full h-px bg-[#2c2c2a] mb-16"
        />

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {[
            {
              label: "Email",
              value: "sooryunca@gmail.com",
              href: "mailto:sooryunca@gmail.com",
            },
            {
              label: "Phone",
              value: "672-994-2453",
              href: "tel:+16729942453",
            },
            {
              label: "Location",
              value: "Vancouver, BC\nCanada",
              href: null,
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={0.3 + i * 0.1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="border-t border-[#2c2c2a] pt-6"
            >
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-[#8a8880] mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-base text-[#e8e2d9] hover:text-white transition-colors duration-300 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  {item.value}
                </a>
              ) : (
                <p
                  className="text-base text-[#e8e2d9] leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          custom={0.6}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="/Sooryun_Yoon_Harry_Rosen_Application.pdf"
            download="Sooryun_Yoon_Harry_Rosen_Application.pdf"
            className="inline-flex items-center gap-4 bg-[#faf9f7] text-[#1a1a18] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#e8e2d9] transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Download Resume
            <span className="text-base">↓</span>
          </a>

          <a
            href="mailto:sooryunca@gmail.com"
            className="text-xs tracking-[0.2em] uppercase text-[#8a8880] hover:text-[#faf9f7] transition-colors duration-300 border-b border-[#2c2c2a] hover:border-[#8a8880] pb-0.5"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Send a Message →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
