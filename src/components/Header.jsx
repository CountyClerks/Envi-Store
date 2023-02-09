import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <Link to="/" className="header-title">Home</Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/artists">Artists</Link>
                    </li>
                </ul>
            </nav>
            <Link to="/cart">
                <button type="button" className="cart-button"></button>
            </Link>
        </header>
    )
}