import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  User, 
  GraduationCap, 
  Code, 
  FolderOpen, 
  TrendingUp,
  Mail,
  MapPin,
  Github,
  Briefcase
} from "lucide-react";
import heroTechImage from "@/assets/hero-tech.jpg";
import computerTechImage from "@/assets/computer-tech.jpg";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

const HomePage = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50 shadow-floating">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Samuel Parkire
              </h1>
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                "Rightside"
              </Badge>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setOpenModal('about')}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
              >
                <User className="w-4 h-4" />
                About
              </button>
              <button
                onClick={() => setOpenModal('education')}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
              >
                <GraduationCap className="w-4 h-4" />
                Education
              </button>
              <button
                onClick={() => setOpenModal('skills')}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
              >
                <Code className="w-4 h-4" />
                Skills
              </button>
              <button
                onClick={() => setOpenModal('projects')}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
              >
                <FolderOpen className="w-4 h-4" />
                Projects
              </button>
              <button
                onClick={() => setOpenModal('experience')}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
              >
                <Briefcase className="w-4 h-4" />
                Experience
              </button>
              <button
                onClick={() => setOpenModal('goals')}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
              >
                <TrendingUp className="w-4 h-4" />
                Goals
              </button>
              <button
                onClick={() => setOpenModal('contact')}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenModal('about')}
              >
                <User className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenModal('education')}
              >
                <GraduationCap className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenModal('skills')}
              >
                <Code className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenModal('projects')}
              >
                <FolderOpen className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenModal('experience')}
              >
                <Briefcase className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenModal('goals')}
              >
                <TrendingUp className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenModal('contact')}
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 bg-gradient-primary min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${computerTechImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-green-400">
              Samuel Parkire Nkoitiko
            </h1>
            <p className="text-xl md:text-2xl text-primary-glow mb-2">"Rightside"</p>
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-8">
              <MapPin className="w-5 h-5 text-accent-blue" />
              <span>Narok, Kenya</span>
            </div>
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              Information Technology Student & Developer passionate about building scalable IT solutions 
              to solve social and economic challenges. Currently pursuing my Diploma at Zetech University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-lg text-primary-foreground shadow-glow transition-all duration-300 hover:scale-110"
                onClick={() => setOpenModal('contact')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary-glow hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                onClick={() => setOpenModal('projects')}
              >
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-accent-purple/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-blue/30 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent-pink/30 rounded-full blur-lg animate-float delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-accent-orange/20 rounded-full blur-xl animate-float delay-1500"></div>
        
        {/* Floating Bubbles */}
        <div className="bubble w-8 h-8 bg-purple-500/20 left-[10%]" style={{ animationDelay: '0s' }}></div>
        <div className="bubble w-12 h-12 bg-purple-400/15 left-[20%]" style={{ animationDelay: '2s' }}></div>
        <div className="bubble w-6 h-6 bg-purple-600/25 left-[30%]" style={{ animationDelay: '4s' }}></div>
        <div className="bubble w-10 h-10 bg-purple-500/20 left-[40%]" style={{ animationDelay: '1s' }}></div>
        <div className="bubble w-14 h-14 bg-purple-300/10 left-[50%]" style={{ animationDelay: '3s' }}></div>
        <div className="bubble w-8 h-8 bg-purple-600/20 left-[60%]" style={{ animationDelay: '5s' }}></div>
        <div className="bubble w-16 h-16 bg-purple-400/15 left-[70%]" style={{ animationDelay: '2.5s' }}></div>
        <div className="bubble w-6 h-6 bg-purple-500/25 left-[80%]" style={{ animationDelay: '4.5s' }}></div>
        <div className="bubble w-12 h-12 bg-purple-600/20 left-[90%]" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Additional floating bubbles for more effect */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-purple-500/30 rounded-full bubble-float"></div>
        <div className="absolute top-3/4 right-1/3 w-8 h-8 bg-purple-400/25 rounded-full bubble-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-purple-600/20 rounded-full bubble-float-slow"></div>
        <div className="absolute top-1/6 left-2/3 w-4 h-4 bg-purple-500/35 rounded-full bubble-float"></div>
        <div className="absolute bottom-1/4 left-1/2 w-12 h-12 bg-purple-300/15 rounded-full bubble-float-delayed"></div>
      </section>

      {/* Modals */}
      <Dialog open={openModal === 'about'} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <ScrollArea className="h-[90vh] max-h-[90vh] p-6">
            <About />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={openModal === 'education'} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <ScrollArea className="h-[90vh] max-h-[90vh] p-6">
            <Education />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={openModal === 'skills'} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <ScrollArea className="h-[90vh] max-h-[90vh] p-6">
            <Skills />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={openModal === 'projects'} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <ScrollArea className="h-[90vh] max-h-[90vh] p-6">
            <Projects />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={openModal === 'experience'} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <ScrollArea className="h-[90vh] max-h-[90vh] p-6">
            <Experience />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={openModal === 'goals'} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <ScrollArea className="h-[90vh] max-h-[90vh] p-6">
            <Goals />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={openModal === 'contact'} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <ScrollArea className="h-[90vh] max-h-[90vh] p-6">
            <Contact />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;