// src/components/Hero.js
import React from 'react';

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
    {/* Background Video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="src/assets/Video/Cyberpunk _ Digital Fashion _ Future of Fashion.mp4"
      autoPlay
      muted
      loop
      playsInline
    />

    {/* Overlay Content */}
    <div className="relative z-10 text-center">
      <h1 className="text-6xl font-bold font-aeonik goldman-bold tracking-widest">ALDORI</h1>
      <p className="mt-4 text-xl">Bringing Unique Design to Life</p>
    </div>

    {/* Dark overlay for contrast */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </section>
);

export default Hero;
