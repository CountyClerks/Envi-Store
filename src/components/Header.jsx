import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <Link to="/">Home</Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/artwork">Artwork</Link>
                    </li>
                    <li>
                        <Link to="/artists">Artists</Link>
                    </li>
                </ul>
            </nav>
            <button type="button" className="cart-button"></button>
        </header>
    )
}