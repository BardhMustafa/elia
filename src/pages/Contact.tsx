import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch to discuss potential collaboration opportunities and expand your business in the Balkan region.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Dr. Besim Mustafa</h3>
                <p className="text-gray-600 mb-4">
                  International Trade and Business Development Expert
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium">Email</p>
                    <a href="mailto:eliashpkpr@gmail.com" className="text-gray-600 hover:text-blue-600">
                      eliashpkpr@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium">WhatsApp</p>
                    <a href="tel:+38344149953" className="text-gray-600 hover:text-blue-600">
                      +383 44 149 953
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium">Region</p>
                    <p className="text-gray-600">
                      Kosovo and the Balkan Region
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Business Expansion Services</h2>
              <p className="mb-4">
                If your company is looking to expand and sell products in Kosovo and the Balkans, we would be happy to discuss potential collaboration opportunities.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✅</span>
                  <span>Market entry strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✅</span>
                  <span>Distribution channel development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✅</span>
                  <span>Regulatory compliance support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✅</span>
                  <span>Business representation</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;