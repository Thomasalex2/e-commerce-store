import pencil from ".//../graphics/pencils.jpg"
import { useState, useReducer } from "react"
import { product_db, product_categories } from "../product-db"
import { ProductCardLayout } from "../Components/product-card-layout"
import { SortReducer } from "../helpers/helpers"

export default function Cart() {

    const [state, dispatch] = useReducer(SortReducer, product_db)
    const [priceFilter, setPriceFilter] = useState(5000);

    return (
        <main>
            <article class="product-page">

                <section class="filters-panel">
                    <div class="filters-panel-container">
                        <h4>Sort By</h4>
                        <div>
                            <br />
                            <h5>Price</h5>
                            <input type="radio" value="low" name="sortPrice" onClick={() => dispatch({ type: "SORT_BY_PRICE", payload: "low" })} />Low to High
                            <br />
                            <input type="radio" value="high" name="sortPrice" onClick={() => dispatch({ type: "SORT_BY_PRICE", payload: "high" })} />High to Low
                        </div>
                        <br />
                        <h4>Filter By</h4>
                        <div class="slider-container">
                            <h5>Price</h5>
                            <input type="range" min="50" max="5000" defaultValue="5000" class="slider" id="price-range"
                                onChange={e => {
                                    setPriceFilter(e.target.value);
                                    dispatch({ type: "FILTER_BY_PRICE", payload: priceFilter });
                                }} />
                            <small>Price: {priceFilter}</small>
                        </div>
                        <br />
                        <div class="checkbox-container">
                            <h5>Availability</h5>
                            <input type="checkbox" value="in-stock" onClick={(e) => dispatch({ type: "FILTER_BY_STOCK", payload: e.target.checked })}></input> In stock
                            <br />
                            <input type="checkbox" value="fast-delivery" onClick={(e) => dispatch({ type: "FILTER_BY_DELIVERY", payload: e.target.checked })}></input> Fast Delivery
                        </div>
                        <br />
                        <div class="checkbox-container">
                            <h5>Category</h5>
                            {product_categories.map((category, index) => {
                                return (
                                    <div key={index}>
                                        <input type="radio" value={category} name="filterCategory" onChange={() => dispatch({ type: "FILTER_BY_CATEGORY", payload: category })} />
                                        <label for={category}>{category}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <br />
                        <div class="radio-btn-container">
                            <h5>Rating</h5>
                            {[5, 4, 3, 2, 1].map(rating => {
                                return (
                                    <div key={rating}>
                                        <input type="radio" value={rating} name="filterRating" onChange={() => dispatch({ type: "FILTER_BY_RATING", payload: rating })} />
                                        <label for={rating}>{rating + " " + "⭐".repeat(rating)}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <h4 class="product-page-title"> Browse the below products</h4>

                <section class="products-panel">
                    {state.map(product => ProductCardLayout(product))}
                </section>

            </article>
        </main>
    );
}