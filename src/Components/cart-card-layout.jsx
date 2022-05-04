
import pencil from ".//../graphics/pencils.jpg"
import { useWishlist } from "../contexts/wishlist-context"
import { useCart } from "../contexts/cart-context"


export const CartCardLayout = ({ id, name, brand, description, price, rating, inStock, fastDelivery }) => {
    
    const { removeItemFromCart } = useCart();
    const { wishlist, setWishlist } = useWishlist();

    const moveToWishlist = item => {
        removeItemFromCart(item)
        setWishlist(() => [...wishlist, item])
    } 

    return (
        <div key={id} className="card-layout layout-vertical">
            <div className="badge-container">
                <div className="card-header">
                    <div>
                        <img src={pencil} alt="pencils" />
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
                    <div className="quantity-container">
                        <button className="secondary-btn">-</button>
                        <input type="text" value="1" />
                        <button className="secondary-btn">+</button>
                    </div>
                </div>
                <div className="card-clickables">
                    <div className="btn-container">
                        <button className="primary-btn" onClick={() => removeItemFromCart(name)}>Remove from Cart</button>
                        <button className="secondary-btn" onClick={() => moveToWishlist(name)}>Move to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

