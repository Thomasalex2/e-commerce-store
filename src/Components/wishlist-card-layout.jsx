
import { useWishlist } from "../contexts/wishlist-context"
import { useCart } from "../contexts/cart-context"


export const WishlistCardLayout = ({ id, name, image, brand, description, price, rating, inStock, fastDelivery }) => {
    
    const { removeItemFromWishlist } = useWishlist();
    const { cart, setCart } = useCart();

    const moveToCart = item => {
        removeItemFromWishlist(item)
        setCart(() => [...cart, item])
    } 

    return (
        <div key={id} className="card-layout layout-vertical">
            <div className="badge-container">
                <div className="card-header">
                    <div>
                        <img src={image} alt="product-image" />
                        <div>
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
                        <button className="primary-btn" onClick={() => moveToCart(name)}>Move to Cart</button>
                        <button className="secondary-btn" onClick={() => removeItemFromWishlist(name) }>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
};