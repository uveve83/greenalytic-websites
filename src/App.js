import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Mobika from './pages/Mobika';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/mobika" element={<Mobika />} />
      </Routes>
    </BrowserRouter>
  );
}
