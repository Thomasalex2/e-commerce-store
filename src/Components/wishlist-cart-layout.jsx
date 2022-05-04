
import pencil from ".//../graphics/pencils.jpg"
import { useWishlist } from "../contexts/wishlist-context"


export const WishlistCardLayout = ({ id, name, brand, description, price, rating, inStock, fastDelivery }) => {
    
    const { removeItemFromWishlist } = useWishlist();
    
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
                </div>
                <div className="card-clickables">
                    <div className="btn-container">
                        <button className="primary-btn">Move to Cart</button>
                        <button className="secondary-btn" onClick={() => removeItemFromWishlist(name) }>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
};