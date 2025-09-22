import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";
import educationTechImage from "@/assets/education-tech.jpg";

const Education = () => {
  const focusAreas = [
    "Object-Oriented Programming (Java)",
    "Arrays & Data Structures",
    "Inheritance & Polymorphism",
    "Exception Handling",
    "GUI Development",
    "Real-time Systems",
    "System Documentation"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-background relative overflow-hidden">{/* Full page with black background */}
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${educationTechImage})` }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">Education</h2>
            <p className="text-lg text-muted-foreground">
              Currently building a strong foundation in Information Technology
            </p>
          </div>
          
          <Card className="bg-card/90 backdrop-blur-md border-primary/20 shadow-floating hover:shadow-glow-lg transition-all duration-500 hover:scale-105 animate-scale-in">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Diploma in Information Technology</CardTitle>
                  <p className="text-muted-foreground text-lg">Zetech University</p>
                  <Badge className="mt-2 bg-green-500/10 text-green-400 border-green-500/20">
                    Completed
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">Focus Areas</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {focusAreas.map((area, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg border border-border"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Projects include:</strong> Real-time systems development, comprehensive system documentation, 
                    Java-based assignments with team collaboration, and practical application of OOP concepts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;