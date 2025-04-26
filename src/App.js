import React from 'react';
import ProductCard from './Components/ProductCard/ProductCard';

function App() {
  return (
   <ProductCard product_name="Product 1" product_price="$10" isAvailable={true} />
  );
}

export default App;
