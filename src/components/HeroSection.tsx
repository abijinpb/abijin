import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Abijin_PB_Resume.pdf";
    link.download = "Abijin_PB_NetworkEngineer_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fadeIn">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              ABIJIN PB
            </h1>
            <p className="text-xl lg:text-2xl text-corporate-blue-light mb-8 font-light leading-relaxed">
              Dynamic Network Engineer specializing in multi-vendor environments, 
              MPLS/CEN, and advanced routing protocols.
            </p>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              4.6+ years of experience designing, deploying, and maintaining 
              enterprise and carrier-grade networks with expertise in Huawei, 
              Cisco, and Nokia systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                onClick={downloadResume}
                className="group"
              >
                <Download className="group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button
                variant="outline-hero"
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                <Mail className="group-hover:scale-110 transition-smooth" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-scaleIn">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-110"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong border-4 border-white/20">
                <img
                  src={profilePhoto}
                  alt="ABIJIN PB - Network Engineer"
                  className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;