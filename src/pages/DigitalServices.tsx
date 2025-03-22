import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Search, TrendingUp, Globe, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalServices: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps",
        "API Integration"
      ]
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-600" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive digital experiences.",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Design Systems",
        "User Research"
      ]
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "SEO Optimization",
      description: "Strategic SEO services to improve your visibility and rankings in search engines.",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "Content Strategy",
        "Performance Optimization"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to grow your online presence.",
      features: [
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "PPC Advertising",
        "Analytics & Reporting"
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Web Consulting",
      description: "Expert guidance for your digital transformation and online strategy.",
      features: [
        "Digital Strategy",
        "Technology Consulting",
        "Project Management",
        "Performance Optimization",
        "Security Audits"
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Mobile Solutions",
      description: "Mobile-first development and optimization for the modern web.",
      features: [
        "Mobile-First Design",
        "Cross-Platform Development",
        "App Performance",
        "Mobile UX Design",
        "Progressive Enhancement"
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Digital Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your digital presence with our comprehensive suite of web development, design, and marketing solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
              <p className="text-blue-100">
                Let's discuss how our digital services can help grow your business.
              </p>
            </div>
            <Link 
              to="/contact"
              className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalServices;