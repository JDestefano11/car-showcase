"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary/80" />
      <div className="absolute inset-0 bg-hero-pattern mix-blend-overlay opacity-30" />
      
      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary/5 to-transparent opacity-50" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-8 lg:pb-12 relative z-10"> 
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-1 bg-secondary rounded-full"></div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-text">
                RENT A <span className="relative inline-block">
                  <span className="relative z-10">CAR</span>
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/30 rounded-full"></span>
                </span>
                <span className="block mt-2 text-secondary">
                  TODAY
                </span>
              </h1>
              
              <p className="mt-6 text-text-muted text-lg max-w-[500px] leading-relaxed backdrop-blur-sm bg-primary-light/10 p-4 rounded-lg">
                Experience the <span className="italic font-medium text-red-500">thrill</span> of the road with our premium performance vehicles.
                <span className="block mt-2 font-light">Unleash your journey. No limits. Pure driving excitement.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <CustomButton
                title="EXPLORE FLEET"
                containerStyles="bg-secondary text-text rounded-md hover:bg-secondary-light transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
                handleClick={handleScroll}
              />
            </div>

            {/* Rental Benefits */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              <div className="bg-gradient-to-br from-primary-light/90 to-primary-light/60 p-5 rounded-lg shadow-md backdrop-blur-sm hover:translate-y-[-3px] transition-transform duration-300">
                <p className="text-2xl font-bold text-secondary">24/7</p>
                <p className="text-text-muted text-sm">Premium Support</p>
              </div>
              <div className="bg-gradient-to-br from-primary-light/90 to-primary-light/60 p-5 rounded-lg shadow-md backdrop-blur-sm hover:translate-y-[-3px] transition-transform duration-300">
                <p className="text-2xl font-bold text-secondary">200+</p>
                <p className="text-text-muted text-sm">Performance Cars</p>
              </div>
              <div className="bg-gradient-to-br from-primary-light/90 to-primary-light/60 p-5 rounded-lg shadow-md backdrop-blur-sm hover:translate-y-[-3px] transition-transform duration-300">
                <p className="text-2xl font-bold text-secondary">ELITE</p>
                <p className="text-text-muted text-sm">Experience</p>
              </div>
            </div>
          </div>

          {/* Simple Vehicle Showcase */}
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Professional background behind the car */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {/* Modern geometric shape behind car */}
              <div className="absolute right-0 top-[10%] w-[80%] h-[80%] bg-secondary/5 rounded-l-[300px] backdrop-blur-sm"></div>
              <div className="absolute right-[5%] top-[15%] w-[70%] h-[70%] bg-accent/5 rounded-l-[250px] backdrop-blur-sm"></div>
              
              {/* Diagonal accent lines */}
              <div className="absolute right-[10%] top-[20%] w-[60%] h-[1px] bg-secondary/30 transform rotate-[15deg]"></div>
              <div className="absolute right-[10%] top-[30%] w-[50%] h-[1px] bg-secondary/20 transform rotate-[15deg]"></div>
              <div className="absolute right-[10%] top-[40%] w-[40%] h-[1px] bg-secondary/10 transform rotate-[15deg]"></div>
              
              {/* Subtle glow behind car */}
              <div className="absolute right-[25%] top-[30%] w-[30%] h-[40%] bg-gradient-radial from-secondary/10 to-transparent filter blur-xl"></div>
              
              {/* Professional tech elements */}
              <div className="absolute right-[15%] top-[25%] w-[20px] h-[20px] rounded-full"></div>
              <div className="absolute right-[25%] top-[20%] w-[10px] h-[10px] bg-secondary/20 rounded-full"></div>
              <div className="absolute right-[20%] bottom-[30%] w-[15px] h-[15px] rounded-full"></div>
              
              {/* Subtle brand pattern */}
              <div className="absolute right-[10%] bottom-[20%] w-[100px] h-[30px] bg-secondary/5 rounded-md backdrop-blur-sm flex items-center justify-center">

              </div>
            </div>
            
            {/* Simple vehicle display */}
            <div className="relative w-full h-full z-10">
              <Image
                src="/Camry.png"
                alt="Premium Performance Vehicle"
                fill
                className="object-contain object-center"
                priority
              />
              
            
              
              {/* Subtle reflection effect */}
              <div className="absolute bottom-[10%] left-0 right-0 mx-auto w-[50%] h-[2px] bg-gradient-to-r from-transparent via-secondary/10 to-transparent blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent shadow-glow" />
    </div>
  );
};

export default Hero;