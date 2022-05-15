import { NavLink } from "react-router-dom"

export const ProductCarousel = ({ name, image }) => {

    return (
        <div class="overlay-container">
            <NavLink to={`/products/${name}`}>
            <img class="carousel-img" src={image} alt={name} />
            <div class="overlay-text">
                <div class="overlay-heading">{name}</div>
            </div>
            </NavLink>
        </div>
    )
}