// src/App.jsx
import React from 'react';
import { CartProvider } from './Context/CartContext';
import CartPage from './Components/CartPage';
import CartItems from './Components/CartItems';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <CartProvider>
      <div>
        <CartPage />
        {/* <CartItems /> */}
      </div>
    </CartProvider>
  );
};

export default App;
