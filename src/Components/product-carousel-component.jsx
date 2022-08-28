import { NavLink } from "react-router-dom"

export const ProductCarousel = ({ name, image }) => {

    return (
        <div className="overlay-container">
            <NavLink to={`/products/${name}`}>
            <img className="carousel-img" src={image} alt={name} />
            <div className="overlay-text">
                <div className="overlay-heading">{name}</div>
            </div>
            </NavLink>
        </div>
    )
}