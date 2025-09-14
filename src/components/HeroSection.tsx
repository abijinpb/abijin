import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/profile-photo-new.png";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-corporate-blue/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-corporate-blue-light/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-corporate-blue/25 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                ABIJIN PB
              </h1>
              <h2 className="text-2xl lg:text-3xl text-corporate-blue-light mb-4 font-semibold">
                Network Engineer
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl">
                Delivering Reliable Networks Across Multi-Vendor Environments
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={downloadResume}
                  className="group shadow-strong hover:shadow-glow transition-all duration-300"
                >
                  <Download className="group-hover:animate-bounce" />
                  Download Resume
                </Button>
                <Button
                  variant="outline-hero"
                  size="lg"
                  onClick={scrollToContact}
                  className="group shadow-strong hover:shadow-glow transition-all duration-300"
                >
                  <Mail className="group-hover:scale-110 transition-smooth" />
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-40 scale-110 animate-pulse"></div>
                <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong border-4 border-white/20 hover:border-corporate-blue-light/50 transition-all duration-500">
                  <img
                    src={profilePhoto}
                    alt="ABIJIN PB - Professional Network Engineer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;