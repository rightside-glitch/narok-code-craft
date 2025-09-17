import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Briefcase, Globe, TrendingUp } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      title: "Immediate Opportunities",
      icon: Briefcase,
      description: "Seeking ICT-related opportunities and open to any available roles while continuing my studies.",
      items: [
        "Remote project opportunities",
        "Freelancing engagements",
        "IT consultancy roles",
        "Part-time development work"
      ]
    },
    {
      title: "Professional Growth",
      icon: TrendingUp,
      description: "Focused on expanding technical skills and gaining practical experience in the field.",
      items: [
        "Master advanced Java concepts",
        "Deepen React and web development skills",
        "Learn cloud technologies",
        "Gain industry experience"
      ]
    },
    {
      title: "Long-term Vision",
      icon: Globe,
      description: "Building scalable IT solutions to address real-world social and economic challenges.",
      items: [
        "Develop unemployment solutions",
        "Create educational platforms",
        "Build community-focused applications",
        "Contribute to social impact projects"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Goals</h2>
            <p className="text-lg text-muted-foreground">
              Driven by purpose, focused on growth, and committed to making a positive impact
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                    <goal.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {goal.description}
                  </p>
                  
                  <div className="space-y-3">
                    {goal.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="bg-gradient-primary p-8 border-0 shadow-glow">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">Mission Statement</h3>
              </div>
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                To leverage technology as a force for positive change, creating innovative solutions 
                that bridge the gap between technical excellence and social impact, while continuously 
                growing as a developer and contributing to meaningful projects that benefit communities.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;