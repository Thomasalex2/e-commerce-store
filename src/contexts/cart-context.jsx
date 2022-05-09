import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => updateCart(), [cart]);

    const updateCart = () => {
        localStorage.setItem('cartItems', JSON.stringify(cart));
        setCartCount(cart.length);
    }

    const removeItemFromCart = (item) => {
        const newCart = [...cart];
        const index = newCart.indexOf(item);
        if (index > -1) {
            newCart.splice(index, 1);
        }
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ cart, cartCount, setCart, setCartCount, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };