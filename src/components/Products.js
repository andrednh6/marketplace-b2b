import React, { useState } from 'react';
import './Products.css';

const allProducts = [
  { name: 'Cemento Portland', price: 20, category: 'Cemento', imageUrl: '/images/cemento-producto.jpg' },
  { name: 'Ladrillo Rojo', price: 0.5, category: 'Ladrillos', imageUrl: '/images/ladrillo-producto.jpg' },
  { name: 'Acero Corrugado', price: 50, category: 'Acero', imageUrl: '/images/acero-producto.jpg' },
  { name: 'Ladrillo Hueco', price: 0.7, category: 'Ladrillos', imageUrl: '/images/ladrillo-hueco.jpg' },
  // Agrega más productos según necesites
];

const categories = ['Todos', 'Cemento', 'Ladrillos', 'Acero'];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === 'Todos') {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <section className="products">
      <h3>Productos</h3>
      
      {/* Sistema de filtro */}
      <div className="filter-container">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lista de productos */}
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h4>{product.name}</h4>
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
