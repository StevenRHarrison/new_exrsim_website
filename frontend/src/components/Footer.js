import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-exrsim-gray border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex flex-col">
                <img src="EXRSIM_Small.jpg" alt="EXRSIM Logo" />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Canada's exercise/real world build and ICS emergency response platform, empowering organizations 
              to prepare for and respond to critical incidents with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-exrsim-orange transition-colors">About EXRSIM</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-exrsim-orange transition-colors">Features</Link></li>
              <li><Link to="/sectors" className="text-gray-400 hover:text-exrsim-orange transition-colors">Industries</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-exrsim-orange transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-exrsim-orange transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sectors</h3>
            <ul className="space-y-2">
              <li><Link to="/sectors" className="text-gray-400 hover:text-exrsim-orange transition-colors">Energy & Utilities</Link></li>
              <li><Link to="/sectors" className="text-gray-400 hover:text-exrsim-orange transition-colors">Transportation</Link></li>
              <li><Link to="/sectors" className="text-gray-400 hover:text-exrsim-orange transition-colors">Natural or Man-made</Link></li>
              <li><Link to="/sectors" className="text-gray-400 hover:text-exrsim-orange transition-colors">Government</Link></li>
              <li><Link to="/sectors" className="text-gray-400 hover:text-exrsim-orange transition-colors">Healthcare</Link></li>
              <li><Link to="/sectors" className="text-gray-400 hover:text-exrsim-orange transition-colors">Industry</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-exrsim-orange" />
                <span className="text-gray-400">Toronto, Ontario, Canada</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-exrsim-orange" />
                <span className="text-gray-400">Winnipeg, Manitoba, Canada</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-exrsim-orange" />
                <span className="text-gray-400">+1 (416) 555-EXRSIM</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-exrsim-orange" />
                <span className="text-gray-400">info@exrsim.ca</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EXRSIM Emergency Preparedness Exercise Builder and Incident Command Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;