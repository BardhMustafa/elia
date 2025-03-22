import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/products';

const HomeProducts: React.FC = () => {
  const products = getProductsByCategory('home-products');
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Home Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of cleaning products, modern kitchens, luxury stairs, and decorative glass solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard
                id={product.id}
                category={product.category}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;