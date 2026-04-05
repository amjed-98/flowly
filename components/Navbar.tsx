"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/constants";

function FlowlyMark() {
  return (
    <span className="inline-flex items-center gap-3 text-base font-semibold tracking-tight text-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="h-10 w-10 rounded-xl border border-white/15 bg-white/10 p-2"
        fill="none"
      >
        <path
          d="M11 26.5c4.5-7.4 9-11.1 18-13"
          stroke="url(#flowly-gradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M13 14h15.5M11.5 20h11"
          stroke="white"
          strokeOpacity="0.75"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="flowly-gradient" x1="11" y1="13.5" x2="29" y2="27">
            <stop stopColor="#818CF8" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
      </svg>
      Flowly
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link href="#top" aria-label="Flowly home">
          <FlowlyMark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#waitlist"
          className="inline-flex items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-400"
        >
          Get early access
        </Link>
      </div>
    </motion.header>
  );
}
