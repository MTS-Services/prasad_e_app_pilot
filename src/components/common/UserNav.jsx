import logo from "../../assets/logo.png";
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
// import { useTranslation } from "react-i18next";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog & Research', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];
// const { t } = useTranslation();
  return (
    <nav className="bg-white shadow-sm">
      <div className="w-11/12 mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="navlogo" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="!text-gray-700 hover:text-green-500 transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <LanguageSwitcher/>

            {/* Download Button */}
            <button className="!bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Download App
            </button>
            <Link to={'/login'} className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Login
            </Link>
            {/* <button className="!bg-green-500 btn text-black w-full">{t("navigation.login")}</button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-500 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute z-50 w-full bg-white border-t border-gray-200">
          <div className="px-4 w-11/12 mx-auto pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block !text-gray-700 hover:text-green-500 transition-colors duration-200 text-base font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 z-50 border-t border-gray-200 space-y-3">
              {/* Language Selector Mobile */}
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-green-500 transition-colors duration-200 py-2"
              >
               
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <LanguageSwitcher/>

              {/* Download App Button Mobile */}
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-base font-medium transition-colors duration-200">
                Download App
              </button>
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}