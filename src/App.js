import { Outlet, Link, NavLink } from "react-router-dom";
import { ActiveLinkStyle } from "./helpers/helpers"

function App() {

  return (
    <div>
    <nav class="nav-bar">
        <div class="nav-elements-left">
          <button class="nav-btn-style"><span class="material-icons">menu</span></button>
          <NavLink style={ActiveLinkStyle} to="/homepage"><h4>The Pencil Store</h4></NavLink>
        </div>
        <div class="nav-elements-right">
          <NavLink style={ActiveLinkStyle} to="/products"><h5>All Products</h5></NavLink>
            <div class="nav-search-container">
                <button class="nav-btn-style"><span class="material-icons">search</span></button>
                <input type="text" class="nav-search" placeholder="Type to search"/>
            </div>
            <button class="nav-btn-style"><span class="material-icons">account_circle</span></button>
            <NavLink style={ActiveLinkStyle} to="/wishlist" class="nav-btn-style"><span class="material-icons">star_rate</span></NavLink>
            <NavLink style={ActiveLinkStyle} to="/cart" class="nav-btn-style"><span class="material-icons">shopping_cart</span></NavLink>
            <NavLink style={ActiveLinkStyle} to="/login" class="nav-btn-style">Login</NavLink>
            
        </div>
    </nav>
      <Outlet />
    </div>
  );
}

export default App;
