// src/Context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const totalAmount = cart.reduce((total, item) => {
        const price = parseFloat(item.price) || 0;
        const discountPercentage = parseFloat(item.discountPercentage) || 0;
        const discountedPrice = price - (price * discountPercentage / 100);
        return total + discountedPrice * item.quantity;
    }, 0);

    return (
        <CartContext.Provider
            value={{ cart, addItem, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount }}
        >
            {children}
        </CartContext.Provider>
    );
};
