import { useCart } from "../contexts/cart-context";
import { CartCardLayout } from "../Components/cart-card-layout";
import { product_db } from "../product-db";
import { useEffect } from "react";

export default function Cart() {
    
    const { cart } = useCart();

    // useEffect(() => console.log("Refreshed"), [cart]);

    const productsInCart = [];
    product_db.forEach(product => {
        if (Object.keys(cart).includes(product.name)) {
            productsInCart.push(product);
        }
    });

    const showEmptyCartPage = () => {
        return (
            <>
                <h4 className="heading-center"> My Cart</h4>
                <h5 className="heading-center">No Items in your Cart!</h5>
            </>
        )
    }

    const showCartDetails = () => {

        const totalItemPrice = () => {
            let totalItemPrice = 0;
            productsInCart.forEach(product => {
                totalItemPrice += parseInt(product.price) * cart[product.name];
            });
            return totalItemPrice;
        }

        const shippingRate = () => totalItemPrice() > 500 ? 0 : 40;
        const getTaxes = () => (totalItemPrice() * 0.18).toFixed(2);
        const getDiscounts = () => 200
        const getTotalPrice = () => (parseFloat(totalItemPrice()) + parseFloat(shippingRate()) + parseFloat(getTaxes()) - parseFloat(getDiscounts())).toFixed(2);

        return (
            <>
                <article className="cart-page">
                    <h4 className="page-title">Items inside your Cart ({productsInCart.length})</h4>
                    <section className="checkout-panel">
                        <h4 className="checkout-title">Summary</h4>
                        <p className="checkout-labels">Price: </p>
                        <p className="checkout-values">₹{totalItemPrice()}</p>
                        <p className="checkout-labels">Shipping:</p>
                        <p className="checkout-values">{shippingRate() === 0 ? <>Free Delivery</> : <>₹{shippingRate()}</>}</p>
                        <p className="checkout-labels">Taxes:</p>
                        <p className="checkout-values">₹{getTaxes()}</p>
                        <p className="checkout-labels">Discounts:</p>
                        <p className="checkout-values">₹{getDiscounts()}</p>
                        <p className="checkout-labels checkout-final-amount">Total Amount: </p>
                        <p className="checkout-values">₹{getTotalPrice()}</p>
                        <p className="checkout-note">You will save ₹{getDiscounts()} for this order!</p>
                        <button className="primary-btn">Checkout and place order</button>
                        <br/>
                        <p className="checkout-labels">Discount Code</p>
                        <div className="discount-box-container">
                            <input className="small-input-field" type="text" placeholder="Enter your code here" />
                            <button className="primary-btn">Apply</button>
                        </div>
                    </section>
                    <section className="products-panel">
                        {productsInCart.map(product => <CartCardLayout value={{ product:product, qty:cart[product.name] }} />)}
                    </section>
                </article>
            </>
        )
    }

    return (
        <div>
            {productsInCart.length === 0 ? showEmptyCartPage() : showCartDetails()}
        </div>
    );
}