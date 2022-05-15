
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useWishlist } from "../contexts/wishlist-context"
import { useCart } from "../contexts/cart-context"
import { ToastContainer } from 'react-toastify';
import { ToastNotification } from "../Components/toast";


export const CartCardLayout = ({ id, name, image, brand, description, price, rating, inStock, fastDelivery }, qty) => {

    const { addItemToCart, removeItemFromCart, reduceQuantityFromCart } = useCart();
    const { wishlist, setWishlist } = useWishlist();
    const [quantity, setQuantity] = useState(qty);

    const moveToWishlist = item => {
        removeItemFromCart(item)
        const newWishlist = { ...wishlist }
        wishlist.hasOwnProperty(item) ? newWishlist[item]+=qty : newWishlist[item] = qty;
        setWishlist(() => newWishlist)
        ToastNotification("success", "Item moved to wishlist")
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
                            reduceQuantityFromCart(name)
                        }}><span className="material-icons">remove</span></button>
                        <p>{quantity}</p>
                        <button onClick={() => {
                            setQuantity(quantity + 1);
                            addItemToCart(name)
                        }}><span className="material-icons">add</span></button>
                    </div>
                </div>

                <div className="card-clickables">
                    <div className="btn-container">
                        <button className="primary-btn" onClick={() => removeItemFromCart(name)}>Remove from Cart</button>
                        <button className="secondary-btn" onClick={() => moveToWishlist(name)}>Move to Wishlist</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
};

