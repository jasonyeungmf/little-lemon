//import '../App.css';
import { Routes, Route, Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className="ul-nav">
                <li className="li-nav"><Link to="/" className="nav-item">Home</Link></li>
                <li className="li-nav"><Link to="/about" className="nav-item">About</Link></li>
                <li className="li-nav"><Link to="/menu" className="nav-item">Menu</Link></li>
                <li className="li-nav"><Link to="/reservations" className="nav-item">Reservations</Link></li>
                <li className="li-nav"><Link to="/orderonline" className="nav-item">Order online</Link></li>
                <li className="li-nav"><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;