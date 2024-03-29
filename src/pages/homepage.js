import { NavLink } from "react-router-dom"
import pencil from ".//../graphics/pencils.jpg"
import { ActiveLinkStyle } from ".//../helpers/helpers"
import { ProductCarousel } from "../Components/product-carousel-component";
import { product_db } from "../product-db";

export default function Homepage() {
  return (
      <main>
    <div className="banner-images">
        {product_db.map(product => product.inStock && ProductCarousel(product))}
    </div>

    <section className="cover-image">
        <img src={pencil} alt="pencils"/>
        <div className="text-over-media-center">
            <h4>The one stop shop for all your Pencil needs</h4>
            <div className="btn-container">
                <NavLink style={ActiveLinkStyle} to="/products"><button className="primary-btn">Shop Now</button></NavLink>
                <button className="secondary-btn">Blogs</button>
            </div>
        </div>
    </section>

    <br/>

    <section className="homepage-subgrid">

        <div className="grid-simplified grid-70-30">
            <div className="grid-left">
                <p>Check out the different types of sketching pencils</p>
                <div className="btn-container">
                    <NavLink style={ActiveLinkStyle} to="/product-filter/artists"><button className="primary-btn">Check it out</button></NavLink>
                </div>
            </div>
            <div className="grid-right">
                <img className="fill-img" src={pencil} alt="banner"/>
            </div>
        </div>

        <div className="grid-simplified grid-70-30">
            <div className="grid-left">
                <p>Check out the collection of coloured pencils</p>
                <div className="btn-container">
                    <NavLink style={ActiveLinkStyle} to="/product-filter/coloured"><button className="primary-btn">Check it out</button></NavLink>
                </div>
            </div>
            <div className="grid-right">
                <img className="fill-img" src={pencil} alt="banner"/>
            </div>
        </div>

    </section>
   </main>
  );
}