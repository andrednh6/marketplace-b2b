import React from 'react';

const featuredProducts = [
  { name: 'Cemento Portland', price: '$20', imageUrl: '/images/cemento-producto.jpg' },
  { name: 'Ladrillo Rojo', price: '$0.5', imageUrl: '/images/ladrillo-producto.jpg' },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h3>Productos Destacados</h3>
      <div className="product-list">
        {featuredProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
