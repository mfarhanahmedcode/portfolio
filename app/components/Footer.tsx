import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="px-12 w-full border-t border-[#4f7cff26]">
      <div className="w-full max-w-7xl m-auto">
        <div className="flex max-lg:flex-col justify-center items-center lg:justify-between py-12 gap-8">
          <div className="text-2xl font-bold text-white">
            M Farhan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-[#4f7cff] text-transparent bg-clip-text">
              Ahmed
            </span>
          </div>

          <ul
            className={`
          flex gap-2 lg:gap-10 list-none text-sm
        `}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative transition-colors duration-300
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
          </ul>
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
        </div>
        <div className="flex max-lg:flex-col justify-center text-center lg:justify-between border-t border-[#4f7cff26] py-12 text-xs md:text-sm">
          <div>
            &copy; {currentYear} Muhammed Farhan Ahmed. All rights reserved.
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 animate-pulse" />
            <span>in React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
