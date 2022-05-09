import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState({});
    const [wishlistCount, setWishlistCount] = useState(0);
    useEffect(() => updateWishlist(), [wishlist]);

    const updateWishlist = () => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
        setWishlistCount(Object.keys(wishlist).length);
    }

    const addItemToWishlist = (item) => {
        const newWishlist = { ...wishlist }
        wishlist.hasOwnProperty(item) ? newWishlist[item]++ : newWishlist[item] = 1;
        setWishlist(() => newWishlist)
    }

    const removeItemFromWishlist = (item) => {
        const newWishlist = { ...wishlist };
        delete newWishlist[item]
        console.log("Check: ", newWishlist)
        setWishlist(() => newWishlist);
    }

    return (
        <WishlistContext.Provider value={{ wishlist, wishlistCount, setWishlist, setWishlistCount, removeItemFromWishlist, addItemToWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };