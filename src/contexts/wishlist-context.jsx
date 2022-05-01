import { createContext, useContext, useState } from 'react';
import { useEffect } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);

    const updateWishlist = () => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
        setWishlistCount(wishlist.length);
    }

    return (
        <WishlistContext.Provider value={{ wishlist, wishlistCount, setWishlist, setWishlistCount, updateWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };