"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        {/* Logo on the left */}
        <div className="flex-shrink-0 -ml-6 sm:-ml-12 xl:-ml-20">
          <Link href="/" className="block">
            <h1 className="text-2xl font-bold text-text animate-pulse">
              CarHub
            </h1>
          </Link>
        </div>

        {/* Navigation links centered */}
        <div className="flex-grow flex justify-center">
          <div className="flex gap-8">
            <Link 
              href="/" 
              className="text-text-muted hover:text-secondary transition-colors font-medium text-base relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/catalog" 
              className="text-text-muted hover:text-secondary transition-colors font-medium text-base relative group"
            >
              Catalog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-text-muted hover:text-secondary transition-colors font-medium text-base relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Sign in button on the right */}
        <div className="flex-shrink-0 mr-0 sm:mr-0 xl:mr-[-3rem]">
          <button className="custom-btn bg-secondary hover:bg-secondary-light text-text px-4 py-1.5 text-sm rounded-full font-medium transition-colors duration-300 flex-shrink-0 shadow-button hover:shadow-button-hover">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
