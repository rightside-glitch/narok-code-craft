import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Heart, 
  Target, 
  GraduationCap, 
  BookOpen, 
  Code, 
  Database, 
  Globe, 
  FolderOpen, 
  Github, 
  ExternalLink,
  Briefcase,
  TrendingUp,
  Users,
  Mail,
  MapPin,
  Linkedin
} from "lucide-react";
import heroTechImage from "@/assets/hero-tech.jpg";
import educationTechImage from "@/assets/education-tech.jpg";
import skillsTechImage from "@/assets/skills-tech.jpg";
import projectsTechImage from "@/assets/projects-tech.jpg";
import goalsTechImage from "@/assets/goals-tech.jpg";
import contactTechImage from "@/assets/contact-tech.jpg";

const HomePage = () => {
  const skills = [
    { name: "Java", level: "Intermediate", icon: Code },
    { name: "JavaScript", level: "Intermediate", icon: Code },
    { name: "React", level: "Intermediate", icon: Globe },
    { name: "HTML/CSS", level: "Advanced", icon: Globe },
    { name: "Firebase", level: "Beginner", icon: Database },
    { name: "TailwindCSS", level: "Intermediate", icon: Globe }
  ];

  const projects = [
    {
      title: "Real-Time Bandwidth Tracking Dashboard",
      description: "Built using React + Firebase, deployed on Vercel with live bandwidth tracking and responsive UI/UX.",
      technologies: ["React", "Firebase", "TailwindCSS", "Vercel"]
    },
    {
      title: "Group Java Assignment",
      description: "Applied inheritance, polymorphism, arrays, and exception handling in a team-based Java program.",
      technologies: ["Java", "OOP", "Exception Handling"]
    }
  ];

  const focusAreas = [
    "Object-Oriented Programming (Java)",
    "Arrays & Data Structures",
    "Inheritance & Polymorphism",
    "Exception Handling",
    "GUI Development",
    "Real-time Systems"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroTechImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-rainbow bg-clip-text text-transparent animate-rainbow bg-300%">
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
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary-glow hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {/* About Card */}
            <Card className="bg-card/90 backdrop-blur-md border-primary/20 shadow-floating hover:shadow-glow-lg transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
                style={{ backgroundImage: `url(${heroTechImage})` }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <User className="w-6 h-6 text-primary" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                    <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Personal Traits</h4>
                      <p className="text-sm text-muted-foreground">Introvert, detail-oriented, and goal-driven with strong self-learning abilities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                    <Heart className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Passion</h4>
                      <p className="text-sm text-muted-foreground">Building technology solutions that address real-world social and economic challenges.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                    <Target className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Approach</h4>
                      <p className="text-sm text-muted-foreground">Balancing academic excellence with hands-on project development and continuous learning.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="bg-card/90 backdrop-blur-md border-primary/20 shadow-floating hover:shadow-glow-lg transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
                style={{ backgroundImage: `url(${educationTechImage})` }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Diploma in Information Technology</h3>
                  <p className="text-muted-foreground mb-2">Zetech University</p>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Currently Pursuing</Badge>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold">Focus Areas</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {focusAreas.slice(0, 4).map((area, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{area}</span>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground mt-2">+ {focusAreas.length - 4} more areas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="bg-card/90 backdrop-blur-md border-primary/20 shadow-floating hover:shadow-glow-lg transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
                style={{ backgroundImage: `url(${skillsTechImage})` }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Code className="w-6 h-6 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Projects Card */}
            <Card className="bg-card/90 backdrop-blur-md border-primary/20 shadow-floating hover:shadow-glow-lg transition-all duration-500 hover:scale-105 relative overflow-hidden lg:col-span-2">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
                style={{ backgroundImage: `url(${projectsTechImage})` }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <FolderOpen className="w-6 h-6 text-primary" />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="p-4 bg-secondary/30 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Goals Card */}
            <Card className="bg-card/90 backdrop-blur-md border-primary/20 shadow-floating hover:shadow-glow-lg transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
                style={{ backgroundImage: `url(${goalsTechImage})` }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Career Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                    <Briefcase className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Immediate Goals</h4>
                      <p className="text-sm text-muted-foreground">Seeking ICT opportunities, remote projects, and freelancing while studying.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                    <Users className="w-5 h-5 text-accent-purple mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Long-term Vision</h4>
                      <p className="text-sm text-muted-foreground">Build scalable IT solutions to solve social and economic challenges.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-card/90 backdrop-blur-md border-primary/20 shadow-floating hover:shadow-glow-lg transition-all duration-500 hover:scale-105 relative overflow-hidden lg:col-span-2">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
                style={{ backgroundImage: `url(${contactTechImage})` }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Mail className="w-6 h-6 text-primary" />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      I'm always open to discussing new opportunities, collaborating on projects, 
                      or just having a conversation about technology and innovation.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span>Narok, Kenya</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button className="bg-gradient-primary hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button variant="outline" className="hover:scale-105 transition-all duration-300">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </Button>
                    <Button variant="outline" className="hover:scale-105 transition-all duration-300">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;