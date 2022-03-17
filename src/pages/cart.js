import pencil from ".//../graphics/pencils.jpg"

export default function Cart() {
  return (
   <article class="cart-page">

        <section class="checkout-panel">
            <h4 class="checkout-title">Final Price Details</h4>
            <p class="checkout-labels">Price: </p>
            <p class="checkout-values">₹3046</p>
            <p class="checkout-labels">Discounts:</p>
            <p class="checkout-values">₹200</p>
            <p class="checkout-labels checkout-final-amount">Total Amount: </p>
            <p class="checkout-values">₹2846</p>
            <p class="checkout-note">You will save ₹200 for this order!</p>
            <button class="primary-btn">Checkout and place order</button>
        </section>

        <h4 class="page-title">Items inside your Cart (4)</h4>
        
        <section class="products-panel">

            <div class="card-layout layout-vertical">
                <div class="badge-container">
                    <div class="card-header">
                        <div>
                            <img src={pencil} alt="pencils"/>
                            <div>
                                <h4>Drawing Pencils</h4>
                                <small>by Faber-Castell</small>
                            </div>
                        </div>
                        <p> Description of the special features of the pencil</p>
                        <p class="price-tag">Price: ₹699/-</p>
                        <div class="quantity-container">
                            <button class="secondary-btn">-</button>
                            <input type="text" value="1"/>
                            <button class="secondary-btn">+</button>
                        </div>
                    </div>
                    <div class= "card-clickables">
                        <div class="btn-container">
                            <button class="primary-btn">Remove from Cart</button>
                            <button class="secondary-btn">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-layout layout-vertical">
                <div class="badge-container">
                    <div class="card-header">
                        <div>
                            <img src={pencil} alt="pencils"/>
                            <div>
                                <h4>Shading Pencils</h4>
                                <small>by Faber-Castell</small>
                            </div>
                        </div>
                        <p> Description of the special features of the pencil</p>
                        <p class="price-tag">Price: ₹599/-</p>
                        <div class="quantity-container">
                            <button class="secondary-btn">-</button>
                            <input type="text" value="1"/>
                            <button class="secondary-btn">+</button>
                        </div>
                    </div>
                    <div class= "card-clickables">
                        <div class="btn-container">
                            <button class="primary-btn">Remove from Cart</button>
                            <button class="secondary-btn">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-layout layout-vertical">
                <div class="badge-container">
                    <div class="card-header">
                        <div>
                            <img src={pencil} alt="pencils"/>
                            <div>
                                <h4>Sketch Pencils</h4>
                                <small>by Faber-Castell</small>
                            </div>
                        </div>
                        <p> Description of the special features of the pencil</p>
                        <p class="price-tag">Price: ₹649/-</p>
                        <div class="quantity-container">
                            <button class="secondary-btn">-</button>
                            <input type="text" value="1"/>
                            <button class="secondary-btn">+</button>
                        </div>
                    </div>
                    <div class= "card-clickables">
                        <div class="btn-container">
                            <button class="primary-btn">Remove from Cart</button>
                            <button class="secondary-btn">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-layout layout-vertical">
                <div class="badge-container">
                    <div class="card-header">
                        <div>
                            <img src={pencil} alt="pencils"/>
                            <div>
                                <h4>Creators' Pencil Set</h4>
                                <small>by Faber-Castell</small>
                            </div>
                        </div>
                        <p> Description of the special features of the pencil</p>
                        <p class="price-tag">Price: ₹1099/-</p>
                        <div class="quantity-container">
                            <button class="secondary-btn">-</button>
                            <input type="text" value="1"/>
                            <button class="secondary-btn">+</button>
                        </div>
                    </div>
                    <div class= "card-clickables">
                        <div class="btn-container">
                            <button class="primary-btn">Remove from Cart</button>
                            <button class="secondary-btn">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </article>
  );
}