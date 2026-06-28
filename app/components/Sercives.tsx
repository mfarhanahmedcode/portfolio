"use client";
import { motion } from "motion/react";
import {
  Globe,
  Monitor,
  Layout,
  LayoutDashboard,
  Smartphone,
  Code2,
} from "lucide-react";

const services = [
  {
    name: "Landing Pages",
    description:
      "High-converting landing pages that make strong first impressions and drive action.",
    icon: Globe,
  },
  {
    name: "Business Websites",
    description:
      "Professional websites that build credibility and communicate your brand effectively.",
    icon: Monitor,
  },
  {
    name: "Portfolio Websites",
    description:
      "Clean, elegant portfolios that showcase your work and tell your story.",
    icon: Layout,
  },
  {
    name: "Dashboard UI",
    description:
      "Data-rich dashboards with intuitive navigation and clear information hierarchy.",
    icon: LayoutDashboard,
  },
  {
    name: "Responsive Websites",
    description:
      "Pixel-perfect layouts that work flawlessly on every device and screen size.",
    icon: Smartphone,
  },
  {
    name: "Frontend Development",
    description:
      "Modern React and Next.js applications built with performance and accessibility in mind.",
    icon: Code2,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-12 py-28 w-full">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-7xl m-auto flex flex-col gap-5 items-start justify-center"
      >
        <div>
          <span className="uppercase font-bold text-sm bg-gradient-to-r from-cyan-400 to-[#4f7cff] text-transparent bg-clip-text">
            What I Offer
          </span>

          <h2 className="text-4xl font-bold text-white">Services</h2>
        </div>
        <div>
          <p>
            From concept to deployment — I handle the full frontend experience.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                className="p-6 bg-[#4f7cff26]/30 border border-[#2A2A2A] rounded-2xl hover:border-[#3B82F6]/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
                key={index}
              >
                <span className="feature-icon bg-[#3B82F6]/10 group-hover:bg-[#3B82F6]/30">
                  <Icon />
                </span>
                <h3 className="text-white text-xl mb-3">{item.name}</h3>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
