// src/components/GridSection.js
import PropTypes from 'prop-types';
import React from 'react';

const GridSection = ({ items }) => (
  <section className="py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white p-6 shadow-md rounded-md">

          <img src={item.image} alt={item.title} className="mb-4 rounded" />
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

// Define PropTypes for the component
GridSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GridSection;
