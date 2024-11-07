// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto text-center">
      <p>© {new Date().getFullYear()} Aldori. All rights reserved.</p>
      <nav className="flex justify-center space-x-4 mt-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
