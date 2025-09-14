import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import datacenterBg from "@/assets/datacenter-background.jpg";

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
        backgroundImage: `url(${datacenterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            ABIJIN PB
          </h1>
          <p className="text-xl lg:text-2xl text-corporate-blue-light mb-8 font-light leading-relaxed">
            Network Engineer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </section>
  );
};

export default HeroSection;