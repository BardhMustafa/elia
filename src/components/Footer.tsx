import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Layers } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Layers className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Elia Partnerships</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for international trade and digital solutions.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:eliashpkpr@gmail.com" className="hover:text-blue-400">eliashpkpr@gmail.com</a>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:+38344149953" className="hover:text-blue-400">+383 44 149 953</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/digital-services" className="text-gray-300 hover:text-blue-400">Digital Services</Link>
              </li>
              <li>
                <Link to="/food-beverage" className="text-gray-300 hover:text-blue-400">Food & Beverage</Link>
              </li>
              <li>
                <Link to="/home-products" className="text-gray-300 hover:text-blue-400">Home Products</Link>
              </li>
              <li>
                <Link to="/construction" className="text-gray-300 hover:text-blue-400">Construction</Link>
              </li>
              <li>
                <Link to="/cosmetics" className="text-gray-300 hover:text-blue-400">Cosmetics</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Digital Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/digital-services" className="text-gray-300 hover:text-blue-400">Web Development</Link>
              </li>
              <li>
                <Link to="/digital-services" className="text-gray-300 hover:text-blue-400">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/digital-services" className="text-gray-300 hover:text-blue-400">SEO Optimization</Link>
              </li>
              <li>
                <Link to="/digital-services" className="text-gray-300 hover:text-blue-400">Digital Marketing</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <div className="flex items-start text-gray-300">
              <MapPin className="h-5 w-5 mr-2 mt-1" />
              <p>Kosovo and the Balkan Region</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Elia Partnerships. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;