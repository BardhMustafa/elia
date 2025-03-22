import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import { getCategories } from '../data/products';
import { ArrowRight, Globe, Building, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const categories = getCategories();
  
  return (
    <div>
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Welcome to Global Trade Portfolio
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              As an experienced professional in international trade, Dr. Besim Mustafa represents a diverse portfolio of premium products, connecting businesses with high-quality goods for various markets.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
              <p className="text-gray-600 mb-4">
                Connecting businesses across borders with premium products for diverse international markets.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diverse Portfolio</h3>
              <p className="text-gray-600 mb-4">
                Representing a wide range of high-quality products across multiple industries and sectors.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600 mb-4">
                All products meet international quality standards and certifications for excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Product Categories */}
      {categories.map((category, index) => (
        <CategorySection
          key={category.id}
          title={category.title}
          description={category.description}
          imageUrl={category.imageUrl}
          linkTo={`/${category.id}`}
          index={index}
        />
      ))}
      
      {/* Balkan Region Expansion */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Expand Your Business in the Balkan Region
              </motion.h2>
              <motion.p 
                className="text-lg mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                As an experienced professional in international trade and business development, Dr. Besim Mustafa is actively seeking partnerships with producers and manufacturers interested in expanding their market presence in Kosovo and the broader Balkan region.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-3">We can support your entry into this dynamic market by:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span>Identifying reliable distribution channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span>Connecting with key buyers and retailers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span>Handling local business regulations and market requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✅</span>
                    <span>Providing trade representation and negotiation support</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Business partnership" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;