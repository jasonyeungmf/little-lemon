import { Box, HStack, VStack } from "@chakra-ui/react";
import Logo from '../images/Asset 9@4x.png';
import { Routes, Route, Link } from "react-router-dom";
//import '../App.css';

function Footer() {
    return (
        <footer>
            <section className="section-footerLogo">
                <img id="img-footerLogo" src={Logo} alt=""/>
            </section>
            
            <section className="section-footerText">
                <h3 className='cardTitle'>Doormat navigation</h3>
                <ul className="ul-doormat">
                    <li className="li-doormat"><Link to="/" className="nav-item">Home</Link></li>
                    <li className="li-doormat"><Link to="/about" className="nav-item">About</Link></li>
                    <li className="li-doormat"><Link to="/menu" className="nav-item">Menu</Link></li>
                    <li className="li-doormat"><Link to="/reservations" className="nav-item">Reservations</Link></li>
                    <li className="li-doormat"><Link to="/orderonline" className="nav-item">Order online</Link></li>
                    <li className="li-doormat"><Link to="/login" className="nav-item">Login</Link></li>
                </ul>
            </section>

            <section className="section-footerText">
                <h3 className='cardTitle'>Contact</h3>
                <ul>
                    <li>Chicago USA</li>
                    <li>+1 234 56789</li>
                    <li>info@littlelemon.com</li>
                </ul>
            </section>

            <section className="section-footerText">
                <h3 className='cardTitle'>Social media</h3>
                <ul>
                    <li> <a href="https://www.facebook.com">Facebook</a> </li>
                    <li> <a href="https://www.twitter.com">Twitter</a> </li>
                    <li> <a href="https://www.youtube.com">Youtube</a> </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;