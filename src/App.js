import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
    <nav class="nav-bar">
        <div class="nav-elements-left">
          <button class="nav-btn-style"><span class="material-icons">menu</span></button>
          <Link to="/homepage"><h4>The Pencil Store</h4></Link>
        </div>
        <div class="nav-elements-right">
          <Link to="/products"><h5>All Products</h5></Link>
            <div class="nav-search-container">
                <button class="nav-btn-style"><span class="material-icons">search</span></button>
                <input type="text" class="nav-search" placeholder="Type to search"/>
            </div>
            <button class="nav-btn-style"><span class="material-icons">account_circle</span></button>
            <Link to="/cart" class="nav-btn-style"><span class="material-icons">shopping_cart</span></Link>
            <Link to="/wishlist" class="nav-btn-style"><span class="material-icons">star_rate</span></Link>
            <Link to="/login" class="nav-btn-style">Login</Link>
        </div>
    </nav>
      <Outlet />
    </div>
  );
}

export default App;
