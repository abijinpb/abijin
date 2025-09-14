const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-24 bg-gradient-to-br from-corporate-gray-dark via-corporate-gray-dark to-corporate-blue-dark/20 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-corporate-blue/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-corporate-blue-light/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-corporate-blue/25 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-12">
            {/* Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-lg text-gray-300 leading-relaxed space-y-6 animate-fade-in">
                <p className="text-xl lg:text-2xl font-semibold text-white mb-6 leading-relaxed">
                  Dynamic Network Engineer with 4.6+ years of experience designing, deploying, 
                  and maintaining enterprise and carrier-grade networks.
                </p>
                
                <p className="text-lg lg:text-xl leading-relaxed">
                  Skilled in Huawei, Cisco, and Nokia routers, MPLS/CEN, VPN provisioning, 
                  QoS enforcement, and advanced routing protocols. Recognized for excellence 
                  in Bharti Airtel's CSR Microwave Migration Project (Employee of the Month, Nov 2024).
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-corporate-blue-light/30 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-3xl font-bold text-corporate-blue-light mb-2">4.6+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-corporate-blue-light/30 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-3xl font-bold text-corporate-blue-light mb-2">3</div>
                    <div className="text-gray-300">Major Vendors</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-corporate-blue-light/30 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-3xl font-bold text-corporate-blue-light mb-2">1</div>
                    <div className="text-gray-300">Employee of Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;