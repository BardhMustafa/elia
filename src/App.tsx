import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FoodBeverage from './pages/FoodBeverage';
import HomeProducts from './pages/HomeProducts';
import Construction from './pages/Construction';
import Cosmetics from './pages/Cosmetics';
import Contact from './pages/Contact';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import DigitalServices from './pages/DigitalServices';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital-services" element={<DigitalServices />} />
          <Route path="/food-beverage" element={<FoodBeverage />} />
          <Route path="/home-products" element={<HomeProducts />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:category/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;