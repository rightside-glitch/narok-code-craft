import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Samuel Parkire Nkoitiko
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              "Rightside"
            </p>
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-8">
              <MapPin className="w-5 h-5" />
              <span>Narok, Kenya</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
            Information Technology Student & Developer passionate about building scalable IT solutions 
            to solve social and economic challenges. Currently pursuing my Diploma at Zetech University.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;