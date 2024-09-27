import React from 'react';
import './Products.css';

const Products = ({ products, selectedCategory }) => {
  return (
    <section className="products">
      <h3>Productos {selectedCategory !== 'Todos' && `de ${selectedCategory}`}</h3>
      <div className="product-grid">
        {products.map((product, index) => (
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
