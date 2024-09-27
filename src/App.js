import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Categories />   {/* Añade el componente de categorías a la homepage */}
      <Products />     {/* Añade el componente de productos filtrables a la homepage */}
      <Footer />
    </div>
  );
}

export default App;