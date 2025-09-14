import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Router, 
  Shield, 
  Settings, 
  HardDrive, 
  Search,
  Zap,
  Globe
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Routing Protocols",
      icon: <Router className="w-6 h-6" />,
      skills: ["BGP", "OSPF", "ISIS", "Static Routing"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Switching Technologies", 
      icon: <Network className="w-6 h-6" />,
      skills: ["VLAN", "STP", "EtherChannel", "Trunking (Dot1Q)"],
      color: "from-corporate-blue to-corporate-blue-dark"
    },
    {
      title: "VPN & Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["MPLS", "CEN", "VRF", "VPN (IPsec, SSL)"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Network Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["BMC Remedy", "Cisco BPA", "NIME", "ATOMS", "Infrasol", "Ciena EPT", "POINT"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Hardware Expertise",
      icon: <HardDrive className="w-6 h-6" />,
      skills: ["Huawei (HAT950B, CX600)", "Cisco (ASR920, ASR9K)", "Nokia (SAS-R, IXR-E)"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Diagnostics & Analysis",
      icon: <Search className="w-6 h-6" />,
      skills: ["Latency checks", "Ping", "Traceroute", "Packet flow analysis"],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-corporate-gray-dark via-corporate-gray-dark to-corporate-blue-dark/10 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-corporate-blue/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 border border-corporate-blue-light/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-corporate-blue/25 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Comprehensive expertise across multi-vendor network environments, 
              protocols, and enterprise-grade infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-corporate-blue-light/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-glow group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-white text-lg group-hover:text-corporate-blue-light transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-white/10 text-gray-300 hover:bg-corporate-blue/20 hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Expertise Section */}
          <div className="mt-16 text-center animate-fadeIn" style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-bold text-white mb-8">Core Specializations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-corporate-blue-light/30 transition-all duration-300 hover:transform hover:scale-105 group">
                <Globe className="w-8 h-8 text-corporate-blue-light mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-white font-semibold mb-2">Enterprise Networks</h4>
                <p className="text-gray-400 text-sm">Large-scale network design and deployment</p>
              </div>
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-corporate-blue-light/30 transition-all duration-300 hover:transform hover:scale-105 group">
                <Zap className="w-8 h-8 text-corporate-blue-light mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-white font-semibold mb-2">Performance Optimization</h4>
                <p className="text-gray-400 text-sm">QoS implementation and network tuning</p>
              </div>
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-corporate-blue-light/30 transition-all duration-300 hover:transform hover:scale-105 group">
                <Shield className="w-8 h-8 text-corporate-blue-light mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-white font-semibold mb-2">Network Security</h4>
                <p className="text-gray-400 text-sm">VPN provisioning and security protocols</p>
              </div>
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-corporate-blue-light/30 transition-all duration-300 hover:transform hover:scale-105 group">
                <Settings className="w-8 h-8 text-corporate-blue-light mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-white font-semibold mb-2">Multi-Vendor Integration</h4>
                <p className="text-gray-400 text-sm">Cisco, Nokia, Huawei equipment management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;