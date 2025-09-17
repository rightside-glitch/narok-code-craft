import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Monitor, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Bandwidth Tracking Dashboard",
      description: "A comprehensive dashboard for monitoring network bandwidth usage in real-time with live tracking capabilities and responsive UI/UX design.",
      technologies: ["React", "Firebase", "TailwindCSS", "Vercel"],
      features: [
        "Live bandwidth monitoring",
        "Real-time data updates",
        "Responsive design",
        "System documentation",
        "Firebase integration"
      ],
      icon: Monitor,
      status: "Deployed",
      type: "Full-Stack Web Application"
    },
    {
      title: "Group Java Assignment (Arrays & OOP)",
      description: "Collaborative Java project demonstrating advanced object-oriented programming concepts, data structures, and team development practices.",
      technologies: ["Java", "OOP", "Arrays", "Exception Handling"],
      features: [
        "Object-oriented design",
        "Inheritance implementation",
        "Polymorphism concepts",
        "Exception handling",
        "Team collaboration"
      ],
      icon: Users,
      status: "Completed",
      type: "Academic Project"
    }
  ];

  return (
    <section className="h-screen flex items-center justify-center py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground">
              Showcasing practical applications of my technical skills and collaborative abilities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <div className="flex gap-2">
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {project.status}
                          </Badge>
                          <Badge variant="outline">
                            {project.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;