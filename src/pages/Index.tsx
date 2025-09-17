import SlideContainer from "@/components/SlideContainer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";

const Index = () => {
  const slides = [
    {
      id: "hero",
      title: "Welcome",
      component: <Hero />
    },
    {
      id: "about",
      title: "About Me",
      component: <About />
    },
    {
      id: "education",
      title: "Education",
      component: <Education />
    },
    {
      id: "skills",
      title: "Technical Skills",
      component: <Skills />
    },
    {
      id: "projects",
      title: "Projects",
      component: <Projects />
    },
    {
      id: "goals",
      title: "Career Goals",
      component: <Goals />
    },
    {
      id: "contact",
      title: "Contact",
      component: <Contact />
    }
  ];

  return <SlideContainer slides={slides} />;
};

export default Index;
