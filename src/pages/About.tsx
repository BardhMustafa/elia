import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Award, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our international trade expertise and business development services.
          </p>
        </motion.div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Besim Mustafa" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2 p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Dr. Besim Mustafa</h2>
              <p className="text-gray-600 mb-6">
                As an experienced professional in international trade, Dr. Besim Mustafa represents a diverse portfolio of premium products, connecting businesses with high-quality goods for various markets worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                With extensive knowledge of the Balkan market and strong business networks, Dr. Mustafa provides valuable support for companies looking to expand their presence in Kosovo and the broader Balkan region.
              </p>
              <div className="flex items-center text-blue-600">
                <Globe className="h-5 w-5 mr-2" />
                <span>International Trade Expert</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Trade</h3>
              <p className="text-gray-600">
                Extensive experience in international trade, connecting businesses across borders with premium products for diverse markets.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Representing only high-quality products that meet international standards and certifications for excellence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Networks</h3>
              <p className="text-gray-600">
                Strong connections with key buyers, retailers, and distributors throughout Kosovo and the Balkan region.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="md:flex items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Expand Your Business in the Balkan Region</h2>
              <p className="mb-4">
                Looking to enter the growing Balkan market? We provide comprehensive support for international producers and manufacturers seeking to expand their presence in Kosovo and the broader Balkan region.
              </p>
              <div className="flex items-center mb-2">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-300" />
                <span>Market entry strategy and business development</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-300" />
                <span>Local partnerships and distribution networks</span>
              </div>
            </div>
            <div className="md:w-1/4 text-center">
              <Link 
                to="/contact" 
                className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;