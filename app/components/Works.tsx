"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Project {
  id: number;
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  span: "tall" | "wide" | "square";
}

const projects: Project[] = [
  {
    id: 1,
    index: "01",
    category: "Prop Building & Sculpture",
    title: "Crafted Objects, Refined Forms",
    description:
      "Hand-fabricated sculptural props that blur the line between art object and display fixture. Each piece is built with precision, material intelligence, and an eye for luxury context.",
    tags: ["Sculpture", "Prop Fabrication", "Mixed Media"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    span: "tall",
  },
  {
    id: 2,
    index: "02",
    category: "Spatial Design & Installation",
    title: "Immersive Environments at Scale",
    description:
      "Large-scale physical booth installations designed for Epispace — transforming raw architecture into curated brand worlds through light, material, and spatial flow.",
    tags: ["Spatial Design", "Installation Art", "Brand Environments"],
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&q=85",
    span: "wide",
  },
  {
    id: 3,
    index: "03",
    category: "Visual Merchandising & 3D Concepts",
    title: "Three-Dimensional Brand Storytelling",
    description:
      "Concept-driven VM layouts and 3D spatial arrangements that translate brand narrative into physical retail experience — balancing editorial restraint with commercial impact.",
    tags: ["Visual Merchandising", "3D Concepts", "Retail Design"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85",
    span: "square",
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const aspectMap = {
    tall: "aspect-[3/4]",
    wide: "aspect-[16/10]",
    square: "aspect-[4/3]",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div
        className={`relative ${aspectMap[project.span]} overflow-hidden bg-[#e8e2d9] mb-6 cursor-pointer`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-700 ${
            hovered ? "scale-105 grayscale-0" : "scale-100 grayscale"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-[#1a1a18]/70 flex flex-col justify-end p-8"
        >
          <p
            className="text-[10px] tracking-[0.25em] uppercase text-[#e8e2d9] mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            {project.category}
          </p>
          <p
            className="text-lg text-white leading-snug mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] tracking-[0.15em] uppercase border border-[#e8e2d9]/60 text-[#e8e2d9] px-2 py-1"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Index badge */}
        <div className="absolute top-5 left-5">
          <span
            className="text-xs tracking-[0.15em] text-white/70"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            {project.index}
          </span>
        </div>
      </div>

      {/* Card meta */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="text-[10px] tracking-[0.2em] uppercase text-[#8a8880] mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            {project.category}
          </p>
          <h3
            className="text-xl md:text-2xl text-[#1a1a18] leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            {project.title}
          </h3>
        </div>

        <motion.div
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1 shrink-0 text-[#8a8880] text-lg"
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

export default function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="works" className="py-28 md:py-40 bg-[#f4f0eb]">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Section header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="text-xs tracking-[0.25em] uppercase text-[#8a8880] mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              02 — Selected Works
            </motion.p>

            <motion.h2
              custom={0.1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="text-[clamp(2rem,4vw,3.5rem)] leading-tight text-[#1a1a18]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Craft, Space,
              <br />
              <span className="italic">and Visual Form</span>
            </motion.h2>
          </div>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="text-sm text-[#8a8880] max-w-xs leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontStyle: "italic" }}
          >
            A selection of projects spanning sculpture, installation, and commercial visual design.
          </motion.p>
        </div>

        {/* Project grid — editorial masonry-inspired layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="md:col-span-1">
            <ProjectCard project={projects[0]} delay={0} />
          </div>

          <div className="md:col-span-1 md:mt-24">
            <ProjectCard project={projects[1]} delay={0.1} />
          </div>

          <div className="md:col-span-2 md:max-w-2xl">
            <ProjectCard project={projects[2]} delay={0.2} />
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-[#d6d0c8] text-center"
        >
          <p
            className="text-sm text-[#8a8880]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontStyle: "italic" }}
          >
            Additional portfolio materials available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
