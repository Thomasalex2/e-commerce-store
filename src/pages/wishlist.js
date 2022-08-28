import { useWishlist } from "../contexts/wishlist-context";
import { WishlistCardLayout } from "../Components/wishlist-card-layout";
import { product_db } from "../product-db";

export default function Wishlist() {
    const { wishlist } = useWishlist();

    const productsInWishlist = [];
    product_db.forEach(product => {
        if (Object.keys(wishlist).includes(product.name)) {
            productsInWishlist.push(product);
        }
    });

    return (
        <main>
            <h4 className="heading-center">My Wishlist</h4>
            {productsInWishlist.length === 0 ? <h5 className="heading-center">No Items in your Wishlist!</h5> : null}
            <section className="products-panel">
                {productsInWishlist.map(product => <WishlistCardLayout value={{ product: product, qty: wishlist[product.name] }} />)}
            </section>
        </main>
    );
}