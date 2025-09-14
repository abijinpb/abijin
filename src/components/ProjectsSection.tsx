import { Folder, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <Card className="shadow-medium hover:shadow-strong transition-smooth animate-scaleIn max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Folder className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Projects Coming Soon
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Currently working on documenting and showcasing key network infrastructure 
                  projects and implementations. This section will be updated with detailed 
                  case studies and technical achievements.
                </p>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center justify-center gap-3">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span>MPLS Network Deployment Projects</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span>Enterprise VPN Implementations</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span>Network Automation Scripts</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span>Infrastructure Optimization Case Studies</span>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="hover:bg-gradient-primary hover:text-white transition-smooth"
                >
                  Stay Updated
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;