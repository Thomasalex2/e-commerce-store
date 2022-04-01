import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>
            <h1>404</h1>
            <h2>Whoops, you've arrived to an invalid page</h2>
            <Link to="/homepage">Go back to the homepage</Link>
        </div>
    )
}