"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to add background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`w-full absolute z-50 transition-all duration-300 ${scrolled ? 'bg-primary-dark/80 backdrop-blur-md shadow-lg' : ''}`}>
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        {/* Logo on the left */}
        <div className="flex-shrink-0 z-50 flex items-center">
          <Link href="/" className="block" onClick={closeMenu}>
            <h1 className="text-2xl font-bold text-text animate-pulse">
              GearUp
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation links centered - hidden on mobile */}
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex gap-8">
            <Link 
              href="/" 
              className="text-text-muted hover:text-secondary transition-colors font-medium text-base relative group"
            > 
              Vehicles
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/catalog" 
              className="text-text-muted hover:text-secondary transition-colors font-medium text-base relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-text-muted hover:text-secondary transition-colors font-medium text-base relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Sign in button on the right - hidden on mobile */}
        <div className="hidden md:block flex-shrink-0 mr-0 sm:mr-0 xl:mr-[-3rem] z-50">
          <button className="custom-btn bg-secondary hover:bg-secondary-light text-text px-4 py-1.5 text-sm rounded-full font-medium transition-colors duration-300 flex-shrink-0 shadow-button hover:shadow-button-hover">
            Sign Up
          </button>
        </div>
        
        {/* Mobile Menu Hamburger Button */}
        <button 
          className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center group"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center">
            <span className={`w-6 h-0.5 bg-text transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-text transition-all duration-300 mt-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-text transition-all duration-300 mt-1.5 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-primary-dark/95 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-500 z-40 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-8 -mt-20">
          {/* Mobile Navigation Links */}
          <Link 
            href="/" 
            className="text-text hover:text-secondary transition-all duration-300 text-3xl font-bold relative overflow-hidden group"
            onClick={closeMenu}
          >
            <span className="relative z-10">Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/catalog" 
            className="text-text hover:text-secondary transition-all duration-300 text-3xl font-bold relative overflow-hidden group"
            onClick={closeMenu}
          >
            <span className="relative z-10">Vehicles</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/about" 
            className="text-text hover:text-secondary transition-all duration-300 text-3xl font-bold relative overflow-hidden group"
            onClick={closeMenu}
          >
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-500 group-hover:w-full"></span>
          </Link>
          
          {/* Mobile Sign Up Button */}
          <div className="mt-8">
            <button 
              className="bg-secondary hover:bg-secondary-light text-text px-8 py-3 text-lg rounded-md font-medium transition-all duration-300 shadow-button hover:shadow-button-hover transform hover:scale-105"
              onClick={closeMenu}
            >
              Sign Up
            </button>
          </div>
          
          {/* Mobile Menu Decorative Elements */}
          <div className="absolute top-1/4 -left-20 w-40 h-40 bg-secondary/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-secondary/10 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <div className="flex gap-3">
              <span className="w-2 h-2 bg-secondary/50 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-secondary/50 rounded-full animate-pulse animation-delay-200"></span>
              <span className="w-2 h-2 bg-secondary/50 rounded-full animate-pulse animation-delay-400"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
