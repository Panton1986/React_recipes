import { Link } from "react-router-dom";

function Header() {
    return <nav className="blue lighten-1">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React SPA App</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/movie/456">Movies</Link></li>
                </ul>
            </div>
        </nav>
};

export {Header}