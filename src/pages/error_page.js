import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>
            <h1 className="heading-center">404</h1>
            <h2 className="heading-center">Whoops, you've arrived to an invalid page</h2>
            <Link to="/homepage"><h5 className="heading-center">Go back to the homepage</h5></Link>
        </div>
    )
}