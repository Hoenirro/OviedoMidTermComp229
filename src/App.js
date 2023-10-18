import React from 'react';
import './App.css';
import ShopForm from './ShopForm';
import NewProduct from './NewProduct';

function App() {
  return (
    <div className="App">
      <h1>New Shop</h1>
      <ShopForm />
      <h1>New Product</h1>
      <NewProduct />
    </div>
  );
}

export default App;
