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

    const removeItemFromWishlist = (item) => {
        const newWishlist = [...wishlist];
        const index = newWishlist.indexOf(item);
        if (index > -1) {
            newWishlist.splice(index, 1);
        }
        setWishlist(newWishlist);
    }

    return (
        <WishlistContext.Provider value={{ wishlist, wishlistCount, setWishlist, setWishlistCount, removeItemFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };