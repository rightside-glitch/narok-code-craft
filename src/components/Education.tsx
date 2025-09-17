import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

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
    <section className="h-screen flex items-center justify-center py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">
              Currently building a strong foundation in Information Technology
            </p>
          </div>
          
          <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Diploma in Information Technology</CardTitle>
                  <p className="text-muted-foreground text-lg">Zetech University</p>
                  <Badge className="mt-2 bg-primary/10 text-primary border-primary/20">
                    Currently Pursuing
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