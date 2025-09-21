import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-background">{/* Full page with black background */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              Detail-oriented and goal-driven developer with a passion for learning and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <User className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Personal Traits</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Introvert by nature but detail-oriented and goal-driven. Strong in self-learning 
                  and adapting to new tools and technologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Passion</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Passionate about building scalable IT solutions to solve real-world problems, 
                  particularly social and economic challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Approach</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Balances academics with self-driven IT projects, always seeking to learn 
                  and apply new technologies in practical ways.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;