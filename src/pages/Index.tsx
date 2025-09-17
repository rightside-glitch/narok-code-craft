import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Goals />
      <Contact />
    </div>
  );
};

export default Index;
