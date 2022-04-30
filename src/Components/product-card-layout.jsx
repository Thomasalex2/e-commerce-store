import pencil from ".//../graphics/pencils.jpg"

export const ProductCardLayout = ({id, name, brand, description, price, rating, inStock, fastDelivery, isFeatured }) =>
(
    <div key={id} className="card-layout layout-vertical">
        <div className="badge-container">
            <div className="card-header">
                <div>
                    <img src={pencil} alt="pencil" />
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
            <div className="card-clickables">
                <div className="btn-container">
                    <button className="primary-btn" disabled={!inStock}>Add to Cart</button>
                    <button className="secondary-btn">Add to Wishlist</button>
                </div>
            </div>
        </div>
    </div>
)