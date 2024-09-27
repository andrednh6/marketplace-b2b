import React from 'react';

const categories = [
  { name: 'Cemento', imageUrl: '/images/cemento.jpg' },
  { name: 'Ladrillos', imageUrl: '/images/ladrillos.jpg' },
  { name: 'Acero', imageUrl: '/images/acero.jpg' },
  // Más categorías
];

const Categories = () => {
  return (
    <section className="categories">
      <h3>Categorías Principales</h3>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.imageUrl} alt={category.name} />
            <h4>{category.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
