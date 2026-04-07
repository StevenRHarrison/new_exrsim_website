import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Scenarios', path: '/scenarios' },
    { name: 'Features', path: '/features' },
    // { name: 'Case Studies', path: '/case-studies' },
    // { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <img src="EXRSIM_Small.jpg" alt="EXRSIM Logo" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-exrsim-orange transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="btn-primary text-white px-6 py-2 rounded-lg font-medium"
            >
              Request Demo
            </Link>
          </div> */}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-800">
            <div className="py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-300 hover:text-exrsim-orange transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block btn-primary text-white px-6 py-2 rounded-lg font-medium text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;