import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-corporate-gray-dark/95 backdrop-blur-md shadow-strong" : "bg-black/20 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-white cursor-pointer hover:text-corporate-blue-light transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("hero")}
          >
            ABIJIN PB
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-corporate-blue-light transition-all duration-300 relative group py-2 px-3 rounded-md hover:bg-white/10"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-blue-light transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-corporate-blue-light transition-all duration-300 p-2 rounded-md hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-corporate-gray-dark/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-white hover:text-corporate-blue-light hover:bg-white/10 rounded-md transition-all duration-300 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;