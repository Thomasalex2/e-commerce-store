import { Outlet, NavLink } from "react-router-dom";
import { ActiveLinkStyle } from "./helpers/helpers"
import { useWishlist } from "./contexts/wishlist-context";
import { useCart } from "./contexts/cart-context";

function App() {

    const { wishlistCount } = useWishlist();
    const { cartCount } = useCart();

    return (
        <div>
            <nav className="nav-bar">
                <div className="nav-elements-left">
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
