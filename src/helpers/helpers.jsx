import { product_db } from "../product-db"

export const ActiveLinkStyle = (params) => {
    return {
        color: params.isActive ? "#cbd5e1" : "",
    };
}

const FilterByCategory = (product, category) => product.category === category;
const FilterByRating = (product, rating) => product.rating >= rating;
const FilterByPrice = (product, price) => product.price <= price;
const FilterByStock = (product) => product.inStock === true;
const FilterByDelivery = (product) => product.fastDelivery === true;

export const SortReducer = (state, action) => {
    let newState = [...state];
    switch (action.type) {
        case "SORT_BY_PRICE":
            return action.payload === "low" ? newState.sort((a, b) => a.price - b.price) : newState.sort((a, b) => b.price - a.price);
        case "SORT_BY_RATING":
            return action.payload === "low" ? newState.sort((a, b) => a.rating - b.rating) : newState.sort((a, b) => b.rating - a.rating);
        case "FILTER_BY_CATEGORY":
            return action.payload !== "Show All" ? product_db.filter(product => FilterByCategory(product, action.payload)) : product_db;
        case "FILTER_BY_RATING":
            return product_db.filter(product => FilterByRating(product, action.payload));
        case "FILTER_BY_PRICE":
            return product_db.filter(product => FilterByPrice(product, action.payload));
        case "FILTER_BY_STOCK":
            return action.payload === true ? newState.filter(product => FilterByStock(product)) : product_db;
        case "FILTER_BY_DELIVERY":
            return action.payload === true ? newState.filter(product => FilterByDelivery(product)) : product_db;
        default:
            return newState;
    }
}