import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState({});
    const [wishlistCount, setWishlistCount] = useState(0);

    const addItemToWishlist = (item) => {
        const newWishlist = { ...wishlist }
        wishlist.hasOwnProperty(item) ? newWishlist[item]++ : newWishlist[item] = 1;
        setWishlist(() => newWishlist)
    }

    const reduceQuantityFromWishlist = (item) => {
        const newWishlist = { ...wishlist }
        newWishlist[item] > 1 ? newWishlist[item]-- : delete newWishlist[item];
        setWishlist(() => newWishlist)
    }

    const removeItemFromWishlist = (item) => {
        const newWishlist = { ...wishlist };
        delete newWishlist[item]
        setWishlist(() => newWishlist);
    }

    useEffect(() => {
        try {
            console.log("Wishlist Items: ", JSON.parse(localStorage.getItem("wishlistItems")))
            if (JSON.parse(localStorage.getItem("wishlistItems")) === null) {
                throw Error;
            }
            setWishlist(JSON.parse(localStorage.getItem("wishlistItems")))
        } catch (error) {
            console.log("No Wishlist Items", error)
            const newWishlist = {};
            setWishlist(() => newWishlist);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
        setWishlistCount(Object.keys(wishlist).length);
    }, [wishlist]);

    return (
        <WishlistContext.Provider value={{ wishlist, wishlistCount, setWishlist, setWishlistCount, removeItemFromWishlist, addItemToWishlist, reduceQuantityFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };