import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abijinpb@gmail.com",
      link: "mailto:abijinpb@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8301071706",
      link: "tel:+918301071706",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Chennai, India",
      link: null,
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/abijinpb",
      link: "https://www.linkedin.com/in/abijinpb",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-corporate-gray-dark via-corporate-gray-dark to-corporate-blue-dark/20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-corporate-blue/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-corporate-blue-light/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-corporate-blue/25 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Let's discuss networking solutions, career opportunities, or technical collaborations. 
              I'm always interested in challenging projects and meaningful connections.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-corporate-blue-light/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-glow group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400 font-medium mb-1">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.label === "LinkedIn" ? "_blank" : undefined}
                            rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                            className="text-white hover:text-corporate-blue-light transition-all duration-300 flex items-center gap-2 group/link font-medium"
                          >
                            <span>{info.value}</span>
                            {info.label === "LinkedIn" && (
                              <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                            )}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;