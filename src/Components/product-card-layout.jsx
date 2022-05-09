import { NavLink } from "react-router-dom"
import { useWishlist } from "../contexts/wishlist-context"
import { useCart } from "../contexts/cart-context"
import { ToastNotification } from "../Components/toast";

export const ProductCardLayout = ({ id, name, image, brand, description, price, rating, inStock, fastDelivery, isFeatured }) => {
    const { wishlist, setWishlist } = useWishlist();
    const { cart, setCart } = useCart();
    
    return (
        <NavLink to={`/products/${name}`}>
        <div key={id} className="card-layout layout-vertical">
            <div className="badge-container">
                <div className="card-header">
                    <div>
                        <img src={image} alt="image" />
                        <div>
                            {isFeatured && <span className="badge bdg-med bdg-orange">FEATURED</span>}
                            <h4>{name}</h4>
                            <small>by {brand}</small>
                        </div>
                    </div>
                    <p>{description}</p>
                    <p className="price-tag">Price: ₹{price}/-</p>
                    <small>⭐{rating}/5.0</small>
                    <br />
                    {inStock ? <small>✅ In Stock</small> : <small>❌ Out of Stock</small>}
                    <br />
                    {fastDelivery && <small>⚡Fast Delivery available</small>}
                </div>
                <div className="card-clickables">
                    <div className="btn-container">
                        <button className="primary-btn" disabled={!inStock} onClick={() => setCart([...cart, name])}>Add to Cart</button>
                        <button className="secondary-btn" onClick={() => setWishlist([...wishlist, name])}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
            </div>
        </NavLink>
    )
}