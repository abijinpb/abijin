import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Bharti Airtel Ltd",
      position: "Network Engineer",
      duration: "Nov 2022 – Present",
      location: "Chennai, India",
      type: "Full-time",
      achievements: [
        "Deployed new network nodes in MPLS and CEN using BGP/ISIS/BFD protocols",
        "Managed Huawei, Cisco, Nokia routers for L2/L3 provisioning across 3-tier architecture",
        "Configured VPNs (L2/L3), IPv4/IPv6, QoS policies, and circuit migrations",
        "Executed 1G–10G upgrades, port expansions, MTU tuning, VRF creation",
        "Developed SOPs and MOPs for critical implementations and change management",
        "Employee of the Month (Nov 2024) for CSR Microwave Migration Project excellence"
      ],
    },
    {
      company: "MRV Infotech India Pvt Ltd",
      position: "VSAT & ATM Network Engineer",
      duration: "Mar 2021 – Jun 2022",
      location: "Kochi, India",
      type: "Full-time",
      achievements: [
        "Installed and maintained HUGHES VSAT modems for banks and maritime networks",
        "Led ATM cabling projects across multiple sites with <10% SLA breach",
        "Diagnosed and resolved VSAT connectivity issues, ensuring 24/7 uptime",
        "Oversaw preventive maintenance and rapid issue escalation for banking networks"
      ],
    },
    {
      company: "JC Technosoft Pvt Ltd",
      position: "Desktop Support Engineer",
      duration: "Mar 2019 – Oct 2019",
      location: "Bangalore, India",
      type: "Full-time",
      achievements: [
        "Delivered comprehensive desktop support with 95% SLA compliance",
        "Managed Active Directory tasks: user creation, password resets, access rights",
        "Maintained inventory of IT assets using ticketing systems like BMC Remedy",
        "Collaborated with network and server teams for efficient issue resolution"
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Progressive career growth in network engineering with increasing responsibilities 
              and technical expertise
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-smooth animate-slideUp group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Company Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-lg font-medium text-primary mb-2">
                        {exp.position}
                      </p>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="lg:w-2/3">
                      <h4 className="text-lg font-semibold mb-4 text-foreground">
                        Key Achievements & Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex} 
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education & Certification */}
          <div className="mt-16 grid md:grid-cols-2 gap-6 animate-slideUp">
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Education</h3>
                <div className="space-y-2">
                  <p className="font-medium text-primary">ITI – Computer Networking</p>
                  <p className="text-muted-foreground">Govt. Industrial Training Institute, Quilandy</p>
                  <p className="text-sm text-muted-foreground">2014 – 2016</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Certification</h3>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Cisco Certified Network Associate (CCNA)</p>
                  <p className="text-muted-foreground">Routing & Switching</p>
                  <Badge className="bg-gradient-primary">Certified</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;