"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a18] border-t border-[#2c2c2a] py-10">
      <div className="px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-[10px] tracking-[0.2em] uppercase text-[#8a8880]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          © {year} Sooryun Yoon. All rights reserved.
        </p>

        <p
          className="text-[10px] tracking-[0.2em] uppercase text-[#8a8880]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Visual Presentation &amp; Spatial Design
        </p>

        <div className="flex items-center gap-6">
          {["Email", "LinkedIn"].map((item) => (
            <a
              key={item}
              href={item === "Email" ? "mailto:sooryunca@gmail.com" : "#"}
              className="text-[10px] tracking-[0.2em] uppercase text-[#8a8880] hover:text-[#faf9f7] transition-colors duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
