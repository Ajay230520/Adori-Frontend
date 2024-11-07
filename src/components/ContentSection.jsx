// src/components/ContentSection.js
import React from 'react';

const ContentSection = ({ image, title, description }) => (
  <section className="flex flex-col md:flex-row items-center p-8">
    <div className="md:w-1/2">
      <img src={image} alt={title} className="rounded-lg shadow-lg" />
    </div>
    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 text-center md:text-left">
      <h2 className="text-5xl font-semibold goldman-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </section>
);

export default ContentSection;
