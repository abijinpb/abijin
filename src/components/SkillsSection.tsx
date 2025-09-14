import { Network, Router, Shield, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Routing Protocols",
      skills: ["BGP", "OSPF", "ISIS", "Static Routing"],
      color: "bg-blue-500",
    },
    {
      icon: <Router className="w-8 h-8" />,
      title: "Switching & Technologies",
      skills: ["VLAN", "STP", "EtherChannel", "Trunking (Dot1Q)", "MPLS", "CEN", "VRF"],
      color: "bg-green-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "VPN & Security",
      skills: ["IPsec", "SSL VPN", "L2/L3 VPN", "QoS", "Security ACLs"],
      color: "bg-purple-500",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Hardware",
      skills: ["BMC Remedy", "Cisco BPA", "NIME", "ATOMS", "Infrasol", "Ciena EPT"],
      color: "bg-orange-500",
    },
  ];

  const hardwareExpertise = [
    { brand: "Huawei", models: ["HAT950B", "CX600"] },
    { brand: "Cisco", models: ["ASR920", "ASR9K"] },
    { brand: "Nokia", models: ["SAS-R", "IXR-E"] },
  ];

  const diagnosticSkills = [
    "Latency checks", "Ping", "Traceroute", "Packet flow analysis",
    "Network Design", "Troubleshooting", "Layer 2/3 Protocols", "IP Services"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across networking protocols, enterprise hardware, 
              and industry-standard tools
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-smooth animate-slideUp group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 ${category.color} rounded-lg text-white group-hover:scale-110 transition-smooth`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hardware Expertise */}
          <div className="mb-12 animate-slideUp">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Hardware Expertise
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {hardwareExpertise.map((hardware, index) => (
                <Card 
                  key={index} 
                  className="shadow-soft hover:shadow-medium transition-smooth group"
                >
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-semibold mb-4 text-primary group-hover:text-accent transition-smooth">
                      {hardware.brand}
                    </h4>
                    <div className="space-y-2">
                      {hardware.models.map((model, modelIndex) => (
                        <Badge 
                          key={modelIndex} 
                          variant="outline" 
                          className="mr-2 hover:bg-accent hover:text-accent-foreground transition-smooth"
                        >
                          {model}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Diagnostic Skills */}
          <div className="animate-slideUp">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Diagnostic & Analysis Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {diagnosticSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  className="text-sm py-2 px-4 bg-gradient-primary hover:bg-gradient-secondary transition-smooth cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;