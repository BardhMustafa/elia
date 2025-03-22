import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategorySectionProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  index: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, description, imageUrl, linkTo, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`py-16 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <Link 
              to={linkTo}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;