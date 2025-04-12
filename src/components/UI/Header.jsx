import React, { useState } from "react";
import { Laptop, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md font-[Montserrat] font-semibold w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Home and About Us */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className="text-gray-900 hover:text-blue-600 lg:mx-20 lg:px-5 md:px-0 transition-colors backdrop-blur"
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-gray-900 hover:text-blue-600 transition-colors bg-white/10 backdrop-blur"
            >
              About Us
            </NavLink>
          </div>

          {/* Centered Logo */}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <Laptop className="h-8 w-8 text-blue-900" />
              <span className="ml-2 text-xl font-bold text-blue-900">LinkLabel</span>
            </div>
          </div>

          {/* Right Side: Services and Contact Us */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/services" 
              className="text-gray-900 hover:text-blue-600 transition-colors"
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-gray-900 hover:text-blue-600 lg:px-20 md:px-0 transition-colors"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 font-[Montserrat] font-semibold space-y-2 sm:px-3">
              <NavLink
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;