// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import img1 from "/assets/Products/AI Designer-Two-color hooded sweatshirt logo mockup.png";
import img2 from '/assets/Products/AI Designer-Minimalist baseball cap _ sun hat _ logo mockup.png';
import img3 from  '/assets/Products/AI Designer-Halloween children wearing T-shirt vi logo mockup renderings.png';
import img4 from "/assets/Products/AI Designer-Two-color paper bag tote bag logo mockup、.png";
import ContentSection from '../components/ContentSection';
import GridSection from '../components/GridSection';
import Footer from '../components/Footer';

const Home = () => (
  <div>

    <Hero />
    <VideoSection />
    <ContentSection
      image= {img4} 
      title="Unique Design"
      description="Explore our innovative designs crafted to perfection."
    />
    <GridSection
      items={[
        { image: img1, title: 'Luce di Moda', description: 'Illuminate your wardrobe with ultra-light, breathable fabrics that offer a luxurious feel. Designed for effortless elegance and a radiant look.' },
        { image: img2, title: 'Stile Unico', description: 'Discover limited-edition pieces with curated patterns and textures, crafted to make a statement. Perfect for those who value unique, artistic fashion.' },
        { image:img3 , title: 'Fresco Urbano', description: 'Bring a fresh, urban edge to your look with modern, breathable materials that balance comfort and style effortlessly.' },
      ]}
    />
    <Footer />
  </div>
);

export default Home;
