import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:abijinpb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-semibold text-white mb-8">
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

            {/* Contact Form */}
            <div className="animate-fadeIn" style={{ animationDelay: '400ms' }}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-corporate-blue-light/30 transition-all duration-500 hover:shadow-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Send a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-300 font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-corporate-blue-light focus:ring-corporate-blue-light/20"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-300 font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-corporate-blue-light focus:ring-corporate-blue-light/20"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-gray-300 font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-2 min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-corporate-blue-light focus:ring-corporate-blue-light/20"
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full group shadow-strong hover:shadow-glow transition-all duration-300"
                    >
                      <Send className="group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;