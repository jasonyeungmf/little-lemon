import { Box, HStack, VStack } from "@chakra-ui/react";
import Logo from '../images/Asset 9@4x.png';
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
                    <li className="li-doormat"><a href="https://www.w3schools.com">Home</a></li>
                    <li className="li-doormat"><a href="https://www.w3schools.com">About</a></li>
                    <li className="li-doormat"><a href="https://www.w3schools.com">Menu</a></li>
                    <li className="li-doormat"><a href="https://www.w3schools.com">Reservations</a></li>
                    <li className="li-doormat"><a href="https://www.w3schools.com">Order online</a></li>
                    <li className="li-doormat"><a href="https://www.w3schools.com">Login</a></li>
                </ul>
            </section>

            <section className="section-footerText">
                <h3 className='cardTitle'>Contact</h3>
                <ul>
                    <li>Chicago USA</li>
                    <li>+1 888 8888888</li>
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