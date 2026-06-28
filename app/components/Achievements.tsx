"use client";
import { motion } from "motion/react";
import { Code2, Zap, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const stats = [
  { value: "12+", label: "Projects Built", icon: Code2, color: "#3B82F6" },
  { value: "10+", label: "Technologies Learned", icon: Zap, color: "#22C55E" },
  {
    value: "200+",
    label: "GitHub Contributions",
    icon: FaGithub,
    color: "#F59E0B",
  },
  { value: "500+", label: "Learning Hours", icon: Clock, color: "#8B5CF6" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#161b22] px-12 py-28 w-full">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-7xl m-auto flex flex-col gap-5 items-start justify-center"
      >
        <div className="uppercase font-bold text-sm bg-gradient-to-r from-cyan-400 to-[#4f7cff] text-transparent bg-clip-text">
          Achievements
          <h2 className="text-4xl font-bold text-white">Numbers that matter</h2>
        </div>
        <div className="w-full flex flex-col items-center justify-between pt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-20">
            {stats.map(({ value, label, icon: Icon, color }) => (
              <div
                key={label}
                className="py-8 px-16 bg-[#4f7cff26]/30 border border-[#2A2A2A] rounded-2xl text-center hover:border-[#3B82F6]/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}25`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div
                  className="text-4xl font-bold text-white mb-1.5"
                  style={{ color }}
                >
                  {value}
                </div>
                <div className="text-[#A0A0A0] text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
