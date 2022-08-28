import { useState, useReducer, useEffect } from "react"
import { useParams } from "react-router-dom";
import { product_db, product_categories } from "../product-db"
import { ProductCardLayout } from "../Components/product-card-layout"
import { SortReducer } from "../helpers/helpers"

export default function Products() {
    const { filter } = useParams();
    const [state, dispatch] = useReducer(SortReducer, product_db)
    const [priceFilter, setPriceFilter] = useState(5000);

    useEffect(() => {
        if (filter !== undefined) {
            switch (filter) {
                case "artists":
                    dispatch({ type: "FILTER_BY_CATEGORY", payload: "Artists' Pencils" })
                    break;
                case "coloured":
                    dispatch({ type: "FILTER_BY_CATEGORY", payload: "Coloured Pencils" })
                    break;
                default:
                    dispatch({ type: "FILTER_BY_CATEGORY", payload: "Show All" })
            }
        }
    }, [filter])

    return (
        <main>
            <article className="product-page">

                <section className="filters-panel">
                    <div className="filters-panel-container">
                        <h4>Sort By</h4>
                        <div>
                            <br />
                            <h5>Price</h5>
                            <input type="radio" value="low" name="sort" onClick={() => dispatch({ type: "SORT_BY_PRICE", payload: "low" })} />Low to High
                            <br />
                            <input type="radio" value="high" name="sort" onClick={() => dispatch({ type: "SORT_BY_PRICE", payload: "high" })} />High to Low
                        </div>
                        <div>
                            <br />
                            <h5>Rating</h5>
                            <input type="radio" value="low" name="sort" onClick={() => dispatch({ type: "SORT_BY_RATING", payload: "low" })} />Low to High
                            <br />
                            <input type="radio" value="high" name="sort" onClick={() => dispatch({ type: "SORT_BY_RATING", payload: "high" })} />High to Low
                        </div>
                        <br />
                        <h4>Filter By</h4>
                        <div className="slider-container">
                            <h5>Price</h5>
                            <input type="range" min="50" max="5000" defaultValue="5000" className="slider" id="price-range"
                                onChange={e => {
                                    setPriceFilter(e.target.value);
                                    dispatch({ type: "FILTER_BY_PRICE", payload: priceFilter });
                                }} />
                            <small>Price: {priceFilter}</small>
                        </div>
                        <br />
                        <div className="checkbox-container">
                            <h5>Availability</h5>
                            <input type="checkbox" value="in-stock" onClick={(e) => dispatch({ type: "FILTER_BY_STOCK", payload: e.target.checked })}></input> In stock
                            <br />
                            <input type="checkbox" value="fast-delivery" onClick={(e) => dispatch({ type: "FILTER_BY_DELIVERY", payload: e.target.checked })}></input> Fast Delivery
                        </div>
                        <br />
                        <div className="checkbox-container">
                            <h5>Category</h5>
                            {product_categories.map((category, index) => {
                                return (
                                    <div key={index}>
                                        <input type="radio" value={category} name="filterCategory" onChange={() => dispatch({ type: "FILTER_BY_CATEGORY", payload: category })} />
                                        <label htmlFor={category}>{category}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <br />
                        <div className="radio-btn-container">
                            <h5>Rating</h5>
                            {[5, 4, 3, 2, 1].map(rating => {
                                return (
                                    <div key={rating}>
                                        <input type="radio" value={rating} name="filterRating" onChange={() => dispatch({ type: "FILTER_BY_RATING", payload: rating })} />
                                        <label htmlFor={rating}>{"⭐".repeat(rating)}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <h4 className="product-page-title"> Browse the below products</h4>

                <section className="products-panel">
                    {state.map(product => ProductCardLayout(product))}
                </section>

            </article>
        </main>
    );
}