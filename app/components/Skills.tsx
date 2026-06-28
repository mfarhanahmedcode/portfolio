"use client";
import { motion } from "motion/react";

const skills = [
  {
    name: "HTML5",
    description: "Semantic structure & accessible markup",
    icon: "🌐",
    level: 82,
  },
  {
    name: "CSS3",
    description: "Responsive layouts, animations & modern UI",
    icon: "🎨",
    level: 78,
  },
  {
    name: "JavaScript",
    description: "ES6+, DOM manipulation & async logic",
    icon: "⚡",
    level: 72,
  },
  {
    name: "TypeScript",
    description: "Type-safe scalable frontend development",
    icon: "🔷",
    level: 58,
  },
  {
    name: "React",
    description: "Component architecture & state management",
    icon: "⚛️",
    level: 74,
  },
  {
    name: "Next.js",
    description: "SSR, routing & modern fullstack workflows",
    icon: "▲",
    level: 65,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling for rapid UI building",
    icon: "🌊",
    level: 80,
  },
  {
    name: "Framer Motion",
    description: "Smooth animations & interactive experiences",
    icon: "✨",
    level: 55,
  },
  {
    name: "Git",
    description: "Version control & collaborative workflows",
    icon: "🌿",
    level: 68,
  },
  {
    name: "Figma",
    description: "UI design systems & developer handoff",
    icon: "🖌️",
    level: 68,
  },
];

function SkillCard({ name, icon, description, level }: (typeof skills)[0]) {
  return (
    <div className="p-6 bg-[#4f7cff26]/30 border border-[#2A2A2A] rounded-2xl hover:border-[#3B82F6]/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
      <div className="flex items-start justify-between mb-4">
        <span className="text-2xl">{icon}</span>
        <span className="text-xs font-medium text-[#3B82F6] bg-[#3B82F6]/10 px-2.5 py-1 rounded-full">
          {level}%
        </span>
      </div>
      <h4 className="text-white font-semibold text-base mb-1">{name}</h4>
      <p className="text-[#A0A0A0] text-xs leading-relaxed mb-4">
        {description}
      </p>
      <div className="h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-12 py-28 w-full">
      <div className="w-full max-w-7xl m-auto flex flex-col gap-5 items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="uppercase font-bold text-sm bg-gradient-to-r from-cyan-400 to-[#4f7cff] text-transparent bg-clip-text">
            Tech Stack
          </span>

          <h2 className="text-4xl font-bold text-white">
            Technologies I work with
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p>Tools and languages I use to bring ideas to life.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-12"
        >
          {skills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
