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
            <CardContent className="p-8">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  MPLS Backbone Lab – OSPF + iBGP + eBGP (EVE-NG)
                </h3>
                <div className="mb-6">
                  <img 
                    src="https://raw.githubusercontent.com/abijinpb/mpls-service-provider-lab/main/mpls-lab-configurations.png"
                    alt="MPLS Lab Topology"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-medium"
                  />
                </div>
              </div>

              <div className="text-left max-w-3xl mx-auto space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Description:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    A service-provider style MPLS backbone lab built in <strong>EVE-NG</strong> with Cisco IOS. 
                    It connects two customer networks via PE / P core routers using:
                  </p>
                  <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-1 ml-4">
                    <li><strong>OSPF</strong> for the core IGP</li>
                    <li><strong>eBGP</strong> between customer and provider</li>
                    <li><strong>iBGP</strong> among provider edges</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Highlights:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Designed full MPLS-style topology with 7 routers + 2 switches</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Configured OSPF, eBGP, and iBGP</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Verified customer site-to-site reachability via ping, traceroute, and route checks</span>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground mb-4">📂 <strong>Project Files on GitHub:</strong></p>
                  <Button 
                    variant="default"
                    className="bg-gradient-primary hover:shadow-medium transition-smooth"
                    onClick={() => window.open('https://github.com/abijinpb/mpls-service-provider-lab', '_blank')}
                  >
                    👉 View Repository
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;