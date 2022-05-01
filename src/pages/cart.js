import pencil from ".//../graphics/pencils.jpg"

export default function Cart() {
  return (
   <article className="cart-page">

        <section className="checkout-panel">
            <h4 className="checkout-title">Final Price Details</h4>
            <p className="checkout-labels">Price: </p>
            <p className="checkout-values">₹3046</p>
            <p className="checkout-labels">Discounts:</p>
            <p className="checkout-values">₹200</p>
            <p className="checkout-labels checkout-final-amount">Total Amount: </p>
            <p className="checkout-values">₹2846</p>
            <p className="checkout-note">You will save ₹200 for this order!</p>
            <button className="primary-btn">Checkout and place order</button>
        </section>

        <h4 className="page-title">Items inside your Cart (4)</h4>
        
        <section className="products-panel">

            <div className="card-layout layout-vertical">
                <div className="badge-container">
                    <div className="card-header">
                        <div>
                            <img src={pencil} alt="pencils"/>
                            <div>
                                <h4>Drawing Pencils</h4>
                                <small>by Faber-Castell</small>
                            </div>
                        </div>
                        <p> Description of the special features of the pencil</p>
                        <p className="price-tag">Price: ₹699/-</p>
                        <div className="quantity-container">
                            <button className="secondary-btn">-</button>
                            <input type="text" value="1"/>
                            <button className="secondary-btn">+</button>
                        </div>
                    </div>
                    <div className= "card-clickables">
                        <div className="btn-container">
                            <button className="primary-btn">Remove from Cart</button>
                            <button className="secondary-btn">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-layout layout-vertical">
                <div className="badge-container">
                    <div className="card-header">
                        <div>
                            <img src={pencil} alt="pencils"/>
                            <div>
                                <h4>Shading Pencils</h4>
                                <small>by Faber-Castell</small>
                            </div>
                        </div>
                        <p> Description of the special features of the pencil</p>
                        <p className="price-tag">Price: ₹599/-</p>
                        <div className="quantity-container">
                            <button className="secondary-btn">-</button>
                            <input type="text" value="1"/>
                            <button className="secondary-btn">+</button>
                        </div>
                    </div>
                    <div className= "card-clickables">
                        <div className="btn-container">
                            <button className="primary-btn">Remove from Cart</button>
                            <button className="secondary-btn">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-layout layout-vertical">
                <div className="badge-container">
                    <div className="card-header">
                        <div>
                            <img src={pencil} alt="pencils"/>
                            <div>
                                <h4>Sketch Pencils</h4>
                                <small>by Faber-Castell</small>
                            </div>
                        </div>
                        <p> Description of the special features of the pencil</p>
                        <p className="price-tag">Price: ₹649/-</p>
                        <div className="quantity-container">
                            <button className="secondary-btn">-</button>
                            <input type="text" value="1"/>
                            <button className="secondary-btn">+</button>
                        </div>
                    </div>
                    <div className= "card-clickables">
                        <div className="btn-container">
                            <button className="primary-btn">Remove from Cart</button>
                            <button className="secondary-btn">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-layout layout-vertical">
                <div className="badge-container">
                    <div className="card-header">
                        <div>
                            <img src={pencil} alt="pencils"/>
                            <div>
                                <h4>Creators' Pencil Set</h4>
                                <small>by Faber-Castell</small>
                            </div>
                        </div>
                        <p> Description of the special features of the pencil</p>
                        <p className="price-tag">Price: ₹1099/-</p>
                        <div className="quantity-container">
                            <button className="secondary-btn">-</button>
                            <input type="text" value="1"/>
                            <button className="secondary-btn">+</button>
                        </div>
                    </div>
                    <div className= "card-clickables">
                        <div className="btn-container">
                            <button className="primary-btn">Remove from Cart</button>
                            <button className="secondary-btn">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </article>
  );
}