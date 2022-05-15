import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (item) => {
        const newCart = { ...cart }
        cart.hasOwnProperty(item) ? newCart[item]++ : newCart[item] = 1;
        setCart(() => newCart)
    }

    const reduceQuantityFromCart = (item) => {
        const newCart = { ...cart }
        newCart[item] > 1 ? newCart[item]-- : delete newCart[item];
        setCart(() => newCart)
    }
    const removeItemFromCart = (item) => {
        const newCart = { ...cart };
        delete newCart[item];
        setCart(() => newCart);
    }

    useEffect(() => {
        try {
            console.log("Cart Items: ", JSON.parse(localStorage.getItem("cartItems")))
            if (JSON.parse(localStorage.getItem("cartItems")) === null) {
                console.log("No Cart Items")
                throw Error;
            }
            setCart(JSON.parse(localStorage.getItem("cartItems")))
        } catch (error) {
            console.log("No Cart Items", error)
            const newCart = {};
            setCart(() => newCart);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cart));
        setCartCount(Object.keys(cart).length);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, cartCount, setCart, setCartCount, addItemToCart, reduceQuantityFromCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };