"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    image: "/images/ai-textbook.webp",
    name: "Physical AI & Robotics Platform",
    description:
      "AI-assisted educational platform for exploring robotics and Physical AI concepts through interactive frontend design.",
    highlights: [
      "Responsive UI",
      "Interactive sections",
      "Modern dark theme",
      "Smooth animations",
    ],
    tags: ["Next.js", "Tailwind", "Responsive Design"],
    live: "https://physical-ai-humanoid-robotics-textb-five-sable.vercel.app/",
    github:
      "https://github.com/Farhan569/Physical-AI---Humanoid-Robotics-Textbook",
  },
  {
    image: "/images/portfolio.webp",
    name: "Portfolio Website",
    description:
      "Modern portfolio website focused on responsive layouts, clean UI, and frontend performance.",
    highlights: [
      "Responsive design",
      "Reusable components",
      "Smooth transitions",
      "Project showcase",
    ],
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    live: "https://m-farhan-ahmed.vercel.app/",
    github: "https://github.com/Farhan569/my-portfolio",
  },
  {
    image: "/images/password-strength-analyzer.webp",
    name: "Password Strength Analyzer",
    description:
      "Interactive password checker with real-time strength validation and visual feedback.",
    highlights: [
      "Real-time validation",
      "Visual indicators",
      "Responsive UI",
      "User-friendly design",
    ],
    tags: ["Python", "Streamlit", "Validation"],
    live: "https://02-password-strenght--meterpassword-strenght--rqpmaw.streamlit.app/",
    github:
      "https://github.com/Farhan569/python-assignments/tree/main/02_password_strenght-_meter",
  },
  {
    image: "/images/car-gallery.webp",
    name: "Responsive Car Gallery",
    description:
      "Modern car showcase gallery with responsive layouts and interactive hover effects.",
    highlights: [
      "Responsive grid",
      "Hover animations",
      "Clean layout",
      "Mobile-friendly",
    ],
    tags: ["HTML", "CSS", "Responsive Design"],
    live: "https://cars-gallery-website.vercel.app/",
    github: "https://github.com/Farhan569/Cars_Gallery_Website",
  },
];

export default function Project() {
  return (
    <section id="projects" className="bg-[#161b22] px-12 py-28 w-full">
      <motion.div className="w-full max-w-7xl m-auto flex flex-col gap-5 items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="uppercase font-bold text-sm bg-gradient-to-r from-cyan-400 to-[#4f7cff] text-transparent bg-clip-text">
            Featured Work
          </span>

          <h2 className="text-4xl font-bold text-white">Projects I've built</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p>A selection of projects showcasing my frontend skills.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden p-4 bg-[#4f7cff26]/30 border border-[#2A2A2A] rounded-2xl hover:border-[#3B82F6]/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
            >
              <div className="relative w-full h-52">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <h3 className="text-xl sm:text-2xl wrap-break-words font-semibold text-white group-hover:text-[#3B82F6]">
                  {item.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {item.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  <Link
                    href={item.live}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#3B82F6] text-white text-sm font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </Link>
                  <Link
                    href={item.github}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[#4f7cff26]/30 border border-white text-[#A0A0A0] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 transition-all duration-200 hover:shadow-lg hover:shadow-[#4f7cff]/30"
                  >
                    <FaGithub />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
