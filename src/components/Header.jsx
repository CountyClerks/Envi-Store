import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <Link to="/Envi-Store/" className="header-title">Home</Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/Envi-Store/artists">Artists</Link>
                    </li>
                </ul>
            </nav>
            <Link to="/Envi-Store/cart">
                <button type="button" className="cart-button"></button>
            </Link>
        </header>
    )
}