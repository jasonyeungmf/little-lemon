import Logo from '../images/Logo.svg';
import Nav from './Nav.js';
//import '../App.css';

function Header() {
    return (
        <header>
            <img id="img-logo" src={Logo} alt=""/>
            <Nav/>
        </header>
    );
}

export default Header;
