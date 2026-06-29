"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px]
        flex items-center justify-between px-6 py-4 rounded-2xl z-[1000]
        backdrop-blur-xl border border-white/10 hover:shadow-[#4f7cff]/10
        ${scrolled ? "bg-black/60 shadow-xl py-3" : "bg-white/5"}
      `}
    >
      <div className="text-2xl font-bold text-white">
        M Farhan{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-[#4f7cff] text-transparent bg-clip-text">
          Ahmed
        </span>
      </div>
      <ul
        className={`
          md:flex gap-10 list-none text-white
          ${menuOpen ? "flex flex-col absolute top-20 left-0 w-full bg-gray-900 p-6 rounded-2xl" : "hidden md:flex"}
        `}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative transition-colors duration-300
                ${
                  active === link.href
                    ? "text-cyan-400 after:w-full"
                    : "text-white"
                }
                hover:text-cyan-400
                after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2
                after:h-[3px] after:bg-gradient-to-r after:from-cyan-400 after:to-[#4f7cff]
                after:rounded-full after:transition-all
                after:w-0 hover:after:w-full
              `}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="md:hidden mt-4">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-cyan-400 to-[#4f7cff] hover:shadow-lg hover:shadow-[#4f7cff]/30"
          >
            Resume -&gt;
          </Link>
        </li>
      </ul>
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-cyan-400 to-[#4f7cff] hover:shadow-lg hover:shadow-[#4f7cff]/30"
      >
        Resume -&gt;
      </Link>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5"
      >
        <span
          className={`h-[3px] w-7 bg-white rounded transition ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-[3px] w-7 bg-white rounded transition ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[3px] w-7 bg-white rounded transition ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
    </motion.nav>
  );
}
