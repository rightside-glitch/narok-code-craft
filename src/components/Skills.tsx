import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 85, description: "OOP, Arrays, Inheritance, Exception Handling" },
        { name: "JavaScript", level: 80, description: "ES6+, DOM Manipulation, Async Programming" },
        { name: "HTML", level: 90, description: "Semantic HTML, Accessibility" },
        { name: "CSS", level: 85, description: "Responsive Design, Flexbox, Grid" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: [
        { name: "React", level: 80, description: "Hooks, Context, Component Architecture" },
        { name: "TailwindCSS", level: 85, description: "Utility-first CSS, Responsive Design" },
        { name: "Framer Motion", level: 70, description: "Animations, Transitions" },
        { name: "ShadCN UI", level: 75, description: "Component Library, Design Systems" }
      ]
    },
    {
      title: "Databases & Deployment",
      icon: Database,
      skills: [
        { name: "Firebase", level: 75, description: "Realtime Database, Authentication" },
        { name: "Vercel", level: 80, description: "Deployment, CI/CD" }
      ]
    },
    {
      title: "Other Skills",
      icon: Wrench,
      skills: [
        { name: "System Documentation", level: 90, description: "Technical Writing, Process Documentation" },
        { name: "IT Consultancy", level: 70, description: "Fundamentals, Problem Analysis" },
        { name: "WordPress", level: 65, description: "Basics, Content Management" }
      ]
    }
  ];

  return (
    <section className="h-screen flex items-center justify-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;