import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Services from "@/app/components/Sercives";
import Projects from "@/app/components/Projects";
import Achievements from "@/app/components/Achievements";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Achievements />
    </main>
  );
}
