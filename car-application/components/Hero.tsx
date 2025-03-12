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
      {/* Enhanced Background Elements - Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 to-transparent opacity-70" />
      <div className="absolute inset-0 bg-hero-pattern mix-blend-overlay opacity-60" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-8 lg:pb-12"> 
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-text">
              RENT A CAR
              <span className="block mt-2 text-secondary">TODAY</span>
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-[500px] leading-relaxed">
              Quality cars at affordable prices. 
              Easy booking, flexible terms, and great service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <CustomButton
                title="View Cars"
                containerStyles="bg-secondary text-text rounded-md hover:bg-secondary-light transition-colors"
                handleClick={handleScroll}
              />
            </div>

            {/* Rental Benefits */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary-light/90 to-primary-light/60 p-5 rounded-lg shadow-md border-l-2 border-secondary/40 backdrop-blur-sm hover:translate-y-[-3px] transition-transform duration-300">
                <p className="text-2xl font-bold text-secondary animate-pulse">24/7</p>
                <p className="text-text-muted text-sm">Support</p>
              </div>
              <div className="bg-gradient-to-br from-primary-light/90 to-primary-light/60 p-5 rounded-lg shadow-md border-l-2 border-secondary/40 backdrop-blur-sm hover:translate-y-[-3px] transition-transform duration-300 animation-delay-200">
                <p className="text-2xl font-bold text-secondary animate-pulse">100+</p>
                <p className="text-text-muted text-sm">Cars</p>
              </div>
              <div className="bg-gradient-to-br from-primary-light/90 to-primary-light/60 p-5 rounded-lg shadow-md border-l-2 border-secondary/40 backdrop-blur-sm hover:translate-y-[-3px] transition-transform duration-300 animation-delay-400">
                <p className="text-2xl font-bold text-secondary animate-pulse">$50</p>
                <p className="text-text-muted text-sm">Per Day</p>
              </div>
            </div>
          </div>

           {/* Professional Vehicle Showcase */}
           <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Professional display platform */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {/* Elegant base platform */}
              <div className="absolute bottom-[15%] w-[85%] h-[20%] bg-gradient-to-r from-secondary/30 via-accent/40 to-secondary/30 rounded-[50%] filter blur-sm"></div>
              
              {/* Subtle professional background elements */}
              <div className="absolute w-[75%] h-[65%] bg-secondary/15 rounded-[50%] filter blur-lg"></div>
              <div className="absolute w-[65%] h-[55%] bg-accent/20 rounded-[50%] filter blur-lg"></div>
              
              {/* Professional lighting effect */}
              <div className="absolute top-[25%] right-[25%] w-[30%] h-[20%] bg-white/10 rounded-full filter blur-md"></div>
            </div>
            {/* Vehicle display with professional presentation */}
            <div className="relative w-full h-full z-10">
              <Image
                src="/Camry.png"
                alt="Premium Rental Vehicle"
                fill
                className="object-contain object-center"
                priority
              />
              {/* Professional vehicle highlight */}
              <div className="absolute bottom-[10%] left-0 right-0 text-center text-sm text-text-muted font-light opacity-80">
                <p>Toyota Camry • Premium Sedan • Excellent Fuel Economy</p>
              </div>
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