"use client";
import { motion } from "motion/react";
import { Lightbulb, Code2, BookOpen, Smartphone, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const features = [
  {
    title: "Problem Solver",
    description:
      "I break complex challenges into elegant, maintainable solutions.",
    icon: Lightbulb,
  },
  {
    title: "Frontend Developer",
    description:
      "Crafting pixel-perfect interfaces with modern web technologies.",
    icon: Code2,
  },
  {
    title: "Continuous Learner",
    description: "Always exploring new tools, patterns, and best practices.",
    icon: BookOpen,
  },
  {
    title: "Responsive Design",
    description:
      "Every pixel works seamlessly across all devices and screen sizes.",
    icon: Smartphone,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#161b22] px-12 py-28 w-full">
      <div className="w-full max-w-7xl m-auto flex flex-col gap-5 items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col"
        >
          <div>
            <span className="uppercase font-bold text-sm bg-gradient-to-r from-cyan-400 to-[#4f7cff] text-transparent bg-clip-text">
              About Me
            </span>
            <h2 className="text-4xl font-bold text-white">
              Turning ideas into
            </h2>
          </div>
        </motion.div>
        <div className=" grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="text-white text-xl font-semibold leading-relaxed">
              digital experiences
            </div>
            <p>
              I'm a frontend developer passionate about building modern,
              responsive, and user-friendly web applications. I enjoy turning
              ideas into polished digital experiences.
            </p>
            <p>
              Every project I take on is an opportunity to combine technical
              precision with thoughtful design — writing clean code that scales
              and interfaces that delight users.
            </p>
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
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="feature-card p-6 group" key={index}>
                  <span className="feature-icon bg-[#3B82F6]/10 group-hover:bg-[#3B82F6]/30">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-white text-xl mb-3">{item.title}</h3>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
