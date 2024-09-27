import React from 'react';
import './Categories.css';

const categories = ['Todos', 'Cemento', 'Ladrillos', 'Acero'];

const Categories = ({ onCategorySelect }) => {
  return (
    <section className="categories">
      <h3>Categorías Principales</h3>
      <div className="category-list">
        {categories.map((category, index) => (
          <button
            key={index}
            className="category-item"
            onClick={() => onCategorySelect(category)}  // Al hacer clic, se selecciona la categoría
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
