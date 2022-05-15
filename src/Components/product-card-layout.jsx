import { NavLink } from "react-router-dom"
import { useWishlist } from "../contexts/wishlist-context"
import { useCart } from "../contexts/cart-context"
import { ToastNotification } from "../Components/toast";

export const ProductCardLayout = ({ id, name, image, brand, description, price, rating, inStock, fastDelivery, isFeatured }) => {
    const { addItemToWishlist } = useWishlist();
    const { addItemToCart } = useCart();

    return (
        <div key={id} className="card-layout layout-vertical">
            <div className="badge-container">
                <NavLink to={`/products/${name}`}>
                    <div className="card-header">
                        <div>
                            <img src={image} alt="product" />
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
                </NavLink>
                <div className="card-clickables">
                    <div className="btn-container">
                        <button className="primary-btn" disabled={!inStock} onClick={() => addItemToCart(name)}>Add to Cart</button>
                        <button className="secondary-btn" onClick={() => addItemToWishlist(name)}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}