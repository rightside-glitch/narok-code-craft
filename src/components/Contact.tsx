import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Github, MessageSquare } from "lucide-react";
import contactTechImage from "@/assets/contact-tech.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Narok, Kenya",
      description: "Open to remote opportunities"
    },
    {
      icon: Mail,
      label: "Email",
      value: "Contact Available",
      description: "Professional inquiries welcome"
    },
    {
      icon: MessageSquare,
      label: "Availability",
      value: "Open to Opportunities",
      description: "Remote projects & freelancing"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", description: "View my code" },
    { icon: Linkedin, label: "LinkedIn", href: "#", description: "Professional network" },
    { icon: Mail, label: "Email", href: "#", description: "Get in touch" }
  ];

  return (
    <section className="h-screen flex items-center justify-center py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${contactTechImage})` }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              Ready to collaborate on your next project or discuss opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm always interested in discussing new opportunities, whether it's 
                  freelance projects, remote work, or collaboration on innovative ideas.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{info.label}</h4>
                        <p className="text-sm font-medium text-primary">{info.value}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Let's Collaborate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Whether you have a project in mind, need technical consultation, 
                  or want to explore partnership opportunities, I'd love to hear from you.
                </p>
                
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start border-primary/20 hover:bg-primary hover:text-primary-foreground"
                    >
                      <link.icon className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <p className="font-medium">{link.label}</p>
                        <p className="text-xs text-muted-foreground">{link.description}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-primary border-0 shadow-glow">
            <CardContent className="text-center p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                I'm currently available for freelance work, remote opportunities, 
                and collaborative projects. Let's discuss how we can work together 
                to bring your ideas to life.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;