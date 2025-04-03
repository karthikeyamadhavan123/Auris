import { Headset, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from 'framer-motion'

interface NavigationLink {
  name: string;
  path: string;
}

interface CTAButton {
  label: string;
  href: string;
}

interface AuthButton {
  label: string;
  variant: "primary" | "secondary";
  path:string
}

interface NavbarProps {
  logo: string;
  navigationLinks: NavigationLink[];
  activePath?: string;
  ctaButton?: CTAButton;
  authButtons?: AuthButton[];
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  navigationLinks,
  activePath,
  ctaButton,
  authButtons,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo on left side */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-8 w-auto md:h-10 transition-transform hover:scale-105" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation Links - Centered on md screens */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex space-x-6">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `
                    relative px-1 py-2 text-sm font-medium whitespace-nowrap
                    ${isActive || activePath === link.path 
                      ? "text-blue-600" 
                      : "text-gray-600 hover:text-gray-900"}
                    after:content-[''] after:absolute after:bottom-0 after:left-0 
                    after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
                    ${isActive || activePath === link.path 
                      ? "after:w-full" 
                      : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Side Actions (CTA and Auth Buttons) */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA Button - Only show on lg screens and up */}
            {ctaButton && (
              <Link
                to={ctaButton.href}
                className="hidden lg:flex items-center space-x-1.5 group md:flex"
              >
                <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <Headset className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                  {ctaButton.label}
                </span>
              </Link>
            )}

            {/* Desktop Auth Buttons - Only show on lg screens and up */}
            {authButtons && (
              <div className="hidden lg:flex space-x-3">
                {authButtons.map((button, index) => (
                  <Link
                    key={index}
                    to={button.path}
                    className={`
                      px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap
                      ${
                        button.variant === "primary"
                          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                          : "text-blue-600 border border-blue-600 hover:bg-blue-50"
                      }
                    `}
                  >
                    {button.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Menu Button - Show on screens smaller than md */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 cursor-pointer" />
              ) : (
                <Menu className="h-6 w-6 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slides from right */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween' }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 md:hidden"
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 px-4 pt-2 pb-4 space-y-2 overflow-y-auto">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={toggleMobileMenu}
                className={({ isActive }) => `
                  block px-4 py-3 rounded-lg text-base font-medium 
                  ${
                    isActive || activePath === link.path
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="px-4 py-6 border-t border-gray-200 space-y-4">
            {ctaButton && (
              <Link
                to={ctaButton.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="p-1.5 rounded-full bg-blue-50">
                  <Headset className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-base font-medium text-gray-700">
                  {ctaButton.label}
                </span>
              </Link>
            )}

            {authButtons && (
              <div className="space-y-3">
                {authButtons.map((button, index) => (
                  <Link
                    key={index}
                    to={button.path}
                    className={`
                      block w-full px-4 py-3 rounded-lg text-base font-medium text-center transition-colors
                      ${
                        button.variant === "primary"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "text-blue-600 border border-blue-600 hover:bg-blue-50"
                      }
                    `}
                  >
                    {button.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;