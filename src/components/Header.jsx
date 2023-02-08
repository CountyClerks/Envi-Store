import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <Link to="/" className="header-title">Home</Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/artwork">Artwork</Link>
                    </li>
                </ul>
            </nav>
            <button type="button" className="cart-button"></button>
        </header>
    )
}