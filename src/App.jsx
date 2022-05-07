import { useEffect } from "react"
import { Outlet, NavLink } from "react-router-dom";
import { ActiveLinkStyle } from "./helpers/helpers"
import { useWishlist } from "./contexts/wishlist-context";
import { useCart } from "./contexts/cart-context";

function App() {

    const { wishlistCount, setWishlist } = useWishlist();
    const { cartCount, setCart } = useCart();

    useEffect(() => {
        try {
            console.log(JSON.parse("Wishlist Items: ", localStorage.getItem("wishlistItems")))
            if (JSON.parse(localStorage.getItem("cartItems")) === null) {
                throw Error;
            }
            setWishlist(JSON.parse(localStorage.getItem("wishlistItems")))
        } catch (error) {
            console.log("No Wishlist Items")
            setWishlist(() => []);
        }
    }, []);

    useEffect(() => {
        try {
            console.log("Cart Items: ", JSON.parse(localStorage.getItem("cartItems")))
            if (JSON.parse(localStorage.getItem("cartItems")) === null) {
                throw Error;
            }
            setCart(JSON.parse(localStorage.getItem("cartItems")))
        } catch (error) {
            console.log("No Cart Items")
            setCart(() => []);
        }
    }, []);

    return (
        <div>
            <nav className="nav-bar">
                <div className="nav-elements-left">
                    <button className="nav-btn-style"><span className="material-icons">menu</span></button>
                    <NavLink style={ActiveLinkStyle} to="/homepage"><h4>The Pencil Store</h4></NavLink>
                </div>
                <div className="nav-elements-right">
                    <NavLink style={ActiveLinkStyle} to="/products"><h5>All Products</h5></NavLink>
                    <div className="nav-search-container">
                        <button className="nav-btn-style"><span className="material-icons">search</span></button>
                        <input type="text" className="nav-search" placeholder="Type to search" />
                    </div>
                    <button className="nav-btn-style"><span className="material-icons">account_circle</span></button>
                    <NavLink style={ActiveLinkStyle} to="/wishlist" className="nav-btn-style">
                        <div className="badge-container">
                            <span className="material-icons">star_rate</span>
                            {wishlistCount > 0 ? <span className="badge bdg-small bdg-orange">{wishlistCount}</span> : null}
                        </div>
                    </NavLink>
                    <NavLink style={ActiveLinkStyle} to="/cart" className="nav-btn-style">
                        <div className="badge-container">
                            <span className="material-icons">shopping_cart</span>
                            {cartCount > 0 ? <span className="badge bdg-small bdg-orange">{cartCount}</span> : null}
                        </div>
                    </NavLink>
                    <NavLink style={ActiveLinkStyle} to="/login" className="nav-btn-style">Login</NavLink>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
