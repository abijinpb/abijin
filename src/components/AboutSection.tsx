import profilePhoto from "@/assets/profile-photo.png";
import datacenterBg from "@/assets/datacenter-background.jpg";

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-24 relative"
      style={{
        backgroundImage: `url(${datacenterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/75"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Content - Takes up 2/3 of the width */}
            <div className="lg:col-span-2">
              <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                <p className="text-xl font-semibold text-white mb-4">
                  Dynamic Network Engineer with over 4.6+ years of experience designing, deploying, 
                  and maintaining enterprise and carrier-grade networks.
                </p>
                
                <p>
                  Skilled with Huawei, Cisco, Nokia routers, MPLS, CEN, VPN provisioning, 
                  QoS enforcement, and advanced routing protocols. Recognized for excellence 
                  in Bharti Airtel's CSR Microwave Migration Project (Employee of the Month, Nov 2024).
                </p>
              </div>
            </div>
            
            {/* Profile Photo - Takes up 1/3 of the width */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-strong border-4 border-white/20">
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
      </div>
    </section>
  );
};

export default AboutSection;