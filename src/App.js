import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';

const allProducts = [
  { name: 'Cemento Portland', price: 20, category: 'Cemento', imageUrl: '/images/cemento-producto.jpg' },
  { name: 'Ladrillo Rojo', price: 0.5, category: 'Ladrillos', imageUrl: '/images/ladrillo-producto.jpg' },
  { name: 'Acero Corrugado', price: 50, category: 'Acero', imageUrl: '/images/acero-producto.jpg' },
  { name: 'Ladrillo Hueco', price: 0.7, category: 'Ladrillos', imageUrl: '/images/ladrillo-hueco.jpg' },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtrar productos por categoría seleccionada
  const filteredProducts = selectedCategory === 'Todos'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="App">
      <Header />
      <Hero />
      {/* Pasar el método de cambio de categoría a Categories */}
      <Categories onCategorySelect={handleCategoryChange} />
      {/* Pasar los productos filtrados y la categoría seleccionada a Products */}
      <Products products={filteredProducts} selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
}

export default App;