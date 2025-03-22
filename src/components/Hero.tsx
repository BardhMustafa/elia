import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Global Business & Digital Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connecting businesses with premium products and cutting-edge digital solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/digital-services" 
              className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Explore Digital Services
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-blue-700 border border-white px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;