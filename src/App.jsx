import { Outlet, Link, NavLink } from "react-router-dom";
import { ActiveLinkStyle } from "./helpers/helpers"

function App() {

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
                <input type="text" className="nav-search" placeholder="Type to search"/>
            </div>
            <button className="nav-btn-style"><span className="material-icons">account_circle</span></button>
            <NavLink style={ActiveLinkStyle} to="/wishlist" className="nav-btn-style"><span className="material-icons">star_rate</span></NavLink>
            <NavLink style={ActiveLinkStyle} to="/cart" className="nav-btn-style"><span className="material-icons">shopping_cart</span></NavLink>
            <NavLink style={ActiveLinkStyle} to="/login" className="nav-btn-style">Login</NavLink>
            
        </div>
    </nav>
      <Outlet />
    </div>
  );
}

export default App;
