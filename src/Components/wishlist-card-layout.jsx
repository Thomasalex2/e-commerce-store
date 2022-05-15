
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useWishlist } from "../contexts/wishlist-context"
import { useCart } from "../contexts/cart-context"
import { ToastContainer } from 'react-toastify';
import { ToastNotification } from "../Components/toast";


export const WishlistCardLayout = ({ id, name, image, brand, description, price, rating, inStock, fastDelivery }, qty) => {

    const { addItemToWishlist, removeItemFromWishlist, reduceQuantityFromWishlist } = useWishlist();
    const { cart, setCart } = useCart();
    const [quantity, setQuantity] = useState(qty);

    const moveToCart = item => {
        removeItemFromWishlist(item)
        const newCart = { ...cart }
        newCart.hasOwnProperty(item) ? newCart[item] += qty : newCart[item] = qty;
        setCart(() => newCart)
        ToastNotification("success", "Item moved to cart")
    }

    return (
        <div key={id} className="card-layout layout-vertical">
            <div className="badge-container">
                <div className="card-header">
                    <NavLink to={`/products/${name}`}>
                        <div>
                            <img src={image} alt="product" />
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
                    </NavLink>
                    <div className="quantity-container">
                        <button onClick={() => {
                            setQuantity(quantity - 1);
                            reduceQuantityFromWishlist(name)
                        }}><span className="material-icons" onClick={() => {
                            setQuantity(quantity - 1);
                            reduceQuantityFromWishlist(name)
                        }}>remove</span></button>
                        <p>{quantity}</p>
                        <button onClick={() => {
                            setQuantity(quantity + 1);
                            addItemToWishlist(name)
                        }}><span className="material-icons">add</span></button>
                    </div>
                </div>

                <div className="card-clickables">
                    <div className="btn-container">
                        <button className="primary-btn" onClick={() => moveToCart(name)}>Move to Cart</button>
                        <button className="secondary-btn" onClick={() => removeItemFromWishlist(name)}>Remove</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
};