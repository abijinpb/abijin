import { Award, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Description */}
            <div className="lg:col-span-2 space-y-6 animate-slideUp">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dynamic Network Engineer with over 4 years of experience in designing, 
                deploying, and maintaining enterprise and carrier-grade networks. Adept 
                in multi-vendor environments (Huawei, Cisco, Nokia), MPLS & CEN configurations, 
                VPN provisioning, QoS enforcement, and advanced routing protocols.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proven track record in resolving connectivity issues, scaling infrastructure, 
                and ensuring SLA compliance. Recognized for excellence in Bharti Airtel's 
                CSR Microwave Migration Project (Employee of the Month, Nov 2024).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about network optimization, automation, and staying current 
                with emerging technologies in the telecommunications industry.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="space-y-4 animate-slideUp">
              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Chennai, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Experience</h3>
                      <p className="text-muted-foreground">4.6+ Years</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Recognition</h3>
                      <p className="text-muted-foreground">Employee of the Month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;