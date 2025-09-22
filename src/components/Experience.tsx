import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import computerTechImage from "@/assets/computer-tech.jpg";

const Experience = () => {
  const experiences = [
    {
      title: "IT Support Specialist",
      company: "Tech Solutions Kenya",
      location: "Narok, Kenya",
      duration: "Full-time • Current",
      period: "2024 - Present",
      responsibilities: [
        "Hardware and software maintenance for enterprise systems",
        "Network configuration and troubleshooting using CCNA expertise",
        "System documentation and technical support",
        "Graphic design for company marketing materials",
        "End-user support and training"
      ],
      skills: ["CCNA", "Hardware Maintenance", "Software Maintenance", "Graphic Design", "Technical Support"]
    },
    {
      title: "Junior IT Technician",
      company: "Digital Hub Solutions",
      location: "Narok, Kenya", 
      duration: "Full-time",
      period: "2023 - 2024",
      responsibilities: [
        "Computer assembly and repair services",
        "Software installation and system optimization",
        "Network setup and maintenance",
        "Customer technical support",
        "Documentation of IT procedures"
      ],
      skills: ["Hardware Assembly", "System Optimization", "Network Setup", "Customer Support"]
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${computerTechImage})` }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">Work Experience</h2>
            <p className="text-lg text-muted-foreground">
              Professional IT roles and contributions to the technology sector
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-md border-primary/20 shadow-floating hover:shadow-glow-lg transition-all duration-500 hover:scale-105 animate-scale-in" style={{animationDelay: `${index * 300}ms`}}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{experience.title}</CardTitle>
                      <p className="text-xl text-muted-foreground mb-2">{experience.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                      <Badge className="mt-3 bg-primary/10 text-primary border-primary/20">
                        {experience.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                      <div className="space-y-2">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <div key={respIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Skills Applied</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
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

export default Experience;