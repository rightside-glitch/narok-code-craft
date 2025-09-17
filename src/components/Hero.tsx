import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTechImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroTechImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-primary opacity-80"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-rainbow bg-clip-text text-transparent animate-rainbow bg-300% hover:scale-105 transition-transform duration-300">
              Samuel Parkire Nkoitiko
            </h1>
            <p className="text-xl md:text-2xl text-primary-glow mb-2 animate-fade-in-up delay-200">
              "Rightside"
            </p>
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-8 animate-fade-in-up delay-300">
              <MapPin className="w-5 h-5 text-accent-blue animate-float" />
              <span>Narok, Kenya</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed animate-fade-in-up delay-400">
            Information Technology Student & Developer passionate about building scalable IT solutions 
            to solve social and economic challenges. Currently pursuing my Diploma at Zetech University.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-lg text-primary-foreground shadow-glow transition-all duration-300 hover:scale-110 animate-glow-pulse border-0"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary-glow hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow backdrop-blur-sm bg-card/20"
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
    </section>
  );
};

export default Hero;