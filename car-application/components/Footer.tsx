"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-blue-100 text-white py-12 lg:py-16 mt-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24 2xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-10 gap-x-8 xl:gap-12 2xl:gap-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-5 items-center text-center sm:items-start sm:text-left mx-auto sm:mx-0 w-full max-w-xs">
            <Link href="/" className="flex items-center justify-center sm:justify-start">
              <h1 className="text-2xl font-bold">
                GearUp
              </h1>
            </Link>
            <p className="text-gray-200 text-base leading-relaxed">
              Experience premium performance vehicles with our elite car rental service. Drive in style, comfort, and luxury.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left xl:pl-8 mx-auto sm:mx-0 w-full max-w-xs">
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>
            <ul className="text-gray-200 space-y-3">
              <li><Link href="#" className="hover:text-secondary-orange transition-colors">Vehicles</Link></li>
              <li><Link href="#" className="hover:text-secondary-orange transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-secondary-orange transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-secondary-orange transition-colors">Catalog</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left xl:pl-4 mx-auto sm:mx-0 w-full max-w-xs">
            <h3 className="text-xl font-bold mb-5">Follow Us</h3>
            <p className="text-gray-200 text-sm mb-3">Stay connected for updates.</p>
            <div className="flex justify-center sm:justify-start space-x-3 mt-2">
              <Link href="#" className="bg-primary-blue-200 p-2 rounded-full text-white hover:bg-secondary-orange transition-colors">
                <FaInstagram size={16} />
              </Link>
              <Link href="#" className="bg-primary-blue-200 p-2 rounded-full text-white hover:bg-secondary-orange transition-colors">
                <FaTwitter size={16} />
              </Link>
              <Link href="#" className="bg-primary-blue-200 p-2 rounded-full text-white hover:bg-secondary-orange transition-colors">
                <FaFacebook size={16} />
              </Link>
              <Link href="#" className="bg-primary-blue-200 p-2 rounded-full text-white hover:bg-secondary-orange transition-colors">
                <FaLinkedin size={16} />
              </Link>
            </div>
          </div>
          
          {/* Newsletter - Far Right */}
          <div className="flex flex-col items-center text-center sm:items-start xl:pl-4 mx-auto sm:mx-0 w-full max-w-xs">
            <h3 className="text-xl font-bold mb-5">Stay Updated</h3>
            <p className="text-gray-200 text-sm mb-3">
              Subscribe for exclusive deals and updates.
            </p>
            <form className="flex flex-col w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-secondary-orange text-white placeholder-white/70 text-sm"
                required
              />
              <button 
                type="submit" 
                className="mt-3 bg-[#E53E3E] text-white px-4 py-2.5 rounded-md hover:bg-[#C53030] transition-all font-medium text-sm"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-300 mt-2">
              By subscribing, you agree to our <Link href="#" className="text-secondary-orange hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>

        {/* Privacy Policy & Terms */}
        <div className="mt-12 border-t border-primary-blue-300/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p className="text-center mb-4 md:mb-0">&copy; {new Date().getFullYear()} GearUp. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="hover:text-secondary-orange transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary-orange transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-secondary-orange transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
