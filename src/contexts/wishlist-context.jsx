import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);
    useEffect(() => updateWishlist(), [wishlist]);

    const updateWishlist = () => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
        setWishlistCount(wishlist.length);
    }

    return (
        <WishlistContext.Provider value={{ wishlist, wishlistCount, setWishlist, setWishlistCount}}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };