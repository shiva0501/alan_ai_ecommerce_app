import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from "./context/CartContext";
import "tailwindcss/tailwind.css";

ReactDOM.render(
    <CartProvider>
        <App />
    </CartProvider>,
     document.getElementById('root')
);