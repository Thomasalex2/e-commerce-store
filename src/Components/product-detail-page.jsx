import { useParams, useNavigate} from "react-router-dom";
import { product_db } from "../product-db";
import { useWishlist } from "../contexts/wishlist-context"
import { useCart } from "../contexts/cart-context"
import { ToastContainer } from 'react-toastify';

export const ProductDetail = () => {
    const { productName } = useParams();
    const { addItemToWishlist } = useWishlist();
    const { addItemToCart } = useCart();
    const navigate = useNavigate();

    const { name, image, brand, description, feature_points, price, rating, inStock, fastDelivery } = product_db.filter((current) => current.name === productName)[0];

    return (
        <>
            <button onClick={() => navigate(-1)} class="round-btn"><span className="material-icons">arrow_back</span><p>Back</p></button>
            <div className="product-detail-page">
                <img className="product-page-img" src={image} alt="product" />
                <div className="product-details">
                    <h4>{name}</h4>
                    <small>by {brand}</small>
                    <p>{description}</p>
                    <ul>
                        {feature_points.map((current) => <li key={current}>{current}</li>)}
                    </ul>
                    <p className="price-tag">Price: ₹{price}/-</p>
                    <small>⭐{rating}/5.0</small>
                    <br />
                    {inStock ? <small>✅ In Stock</small> : <small>❌ Out of Stock</small>}
                    <br />
                    {fastDelivery && <small>⚡Fast Delivery available</small>}
                    <div className="btn-container">
                        <button className="primary-btn" disabled={!inStock} onClick={() => addItemToCart(name)}>Add to Cart</button>
                        <button className="secondary-btn" onClick={() => addItemToWishlist(name)}>Add to Wishlist</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    )
}