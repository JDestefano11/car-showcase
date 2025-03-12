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
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-8 lg:pb-12"> {/* Increased top padding */}
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
              <CustomButton
                title="Book Now"
                containerStyles="bg-transparent text-text rounded-md border-2 border-accent hover:bg-accent/10 transition-colors"
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

           {/* Car Image Section with decorative shapes */}
           <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Decorative shape behind car */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {/* Base shape - oval platform */}
              <div className="absolute bottom-[15%] w-[85%] h-[25%] bg-gradient-to-r from-secondary/40 via-accent/50 to-secondary/40 rounded-[50%] filter blur-md transform rotate-[-2deg]"></div>
              
              {/* Dynamic background shapes */}
              <div className="absolute w-[70%] h-[60%] bg-secondary/25 rounded-tr-[70%] rounded-bl-[70%] filter blur-lg transform rotate-12 translate-x-[-5%]"></div>
              <div className="absolute w-[60%] h-[50%] bg-accent/30 rounded-tl-[60%] rounded-br-[60%] filter blur-lg transform rotate-[-8deg] translate-x-[10%]"></div>
              
              {/* Highlight accent */}
              <div className="absolute top-[30%] right-[30%] w-[20%] h-[15%] bg-white/20 rounded-full filter blur-md"></div>
            </div>
            <div className="relative w-full h-full z-10">
              <Image
                src="/Camry.png"
                alt="Rental Car"
                fill
                className="object-contain object-center"
                priority
              />
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