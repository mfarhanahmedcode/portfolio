"use client";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid lg:grid-cols-2 justify-center items-center max-w-[80%] max-lg:my-40 gap-20 m-auto"
    >
      <div className="flex flex-col text-center items-center lg:text-left lg:items-start justify-center gap-4 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center justify-center space-x-2"
        >
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <Badge
            variant={"outline"}
            className="text-[#3B82F6] text-xs border-[#3B82F6]/30"
          >
            Available for Work
            <span className="max-md:hidden">
              • Freelance • Remote Opportunities
            </span>
          </Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-[64px] font-bold"
        >
          Hello, I'm{" "}
          <span className="block bg-gradient-to-r from-cyan-400 to-[#4f7cff] text-transparent bg-clip-text">
            Farhan Ahmed
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl">Nice to meet you!</p>
          <p className="text-xl">I build Modern Web Experiences.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 items-center justify-center"
        >
          <Button className="px-6 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-[#4f7cff] hover:shadow-lg hover:shadow-[#4f7cff]/30">
            <Link href="/">View My Work</Link>
          </Button>
          <Button className="px-6 py-5 rounded-full bg-[#4f7cff26]/30 border-white text-[#A0A0A0] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 transition-all duration-200 hover:shadow-lg hover:shadow-[#4f7cff]/30">
            <Link href="/">Get in Touch</Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-4 pt-2"
        >
          <span className="text-xs text-[#A0A0A0] uppercase tracking-widest">
            Find me on
          </span>
          <div className="flex items-center gap-3">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/mfarhanahmedcode",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/muhammad-farhan-ahmed-dev/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=farhanahmed.code@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#1a212b] border border-[#4f7cff26] text-[#A0A0A0] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className=""
      >
        <Image
          src="/images/character.webp"
          alt="hero img"
          height={800}
          width={800}
        />
      </motion.div>
    </section>
  );
}
