"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE },
  }),
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 md:py-40 bg-[#faf9f7]">
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
          01 — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <motion.h2
              custom={0.1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-[#1a1a18] mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Maker. Designer.
              <br />
              <span className="italic">Visual Storyteller.</span>
            </motion.h2>

            <motion.div
              custom={0.2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="w-10 h-px bg-[#8a8880] mb-10"
            />

            <motion.p
              custom={0.3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-base text-[#2c2c2a] leading-[1.9] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              With a BFA in Sculpture and an MFA in Art &amp; Technology, I bring a rare intersection
              of fine art sensibility and technical making skills to the world of visual
              merchandising and spatial design.
            </motion.p>

            <motion.p
              custom={0.4}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-base text-[#2c2c2a] leading-[1.9] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              My work lives at the edge of craft and concept — from hand-built props and sculptural
              installations to large-scale physical booths and immersive retail environments. I
              approach every spatial challenge with the precision of a sculptor and the eye of an
              editor.
            </motion.p>

            <motion.p
              custom={0.5}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-base text-[#8a8880] leading-[1.9]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontStyle: "italic" }}
            >
              Currently seeking a Visual Presentation Associate role where craft,
              storytelling, and luxury aesthetics converge.
            </motion.p>

            {/* Credentials */}
            <motion.div
              custom={0.6}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { label: "Education", value: "BFA in Sculpture\nMFA in Art & Technology" },
                { label: "Focus", value: "Prop Building\nSpatial & 3D Design" },
                { label: "Location", value: "Vancouver, BC\nCanada" },
                { label: "Availability", value: "Open to Opportunities\n2026" },
              ].map((item) => (
                <div key={item.label} className="border-t border-[#d6d0c8] pt-4">
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase text-[#8a8880] mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm text-[#1a1a18] leading-relaxed whitespace-pre-line"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            custom={0.15}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] bg-[#e8e2d9] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80"
                alt="Sooryun Yoon — Visual Presentation Artist"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1a1a18]/5" />
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-center justify-between">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-[#8a8880]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Sooryun Yoon
              </p>
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-[#8a8880]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Vancouver, BC
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 w-24 h-24 border border-[#d6d0c8] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
