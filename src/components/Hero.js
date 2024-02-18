import { Link } from "react-router-dom";
import restauranfood from '../images/restauranfood.jpg';

function Hero() {
    return(
        <article id="hero">
                <section id="section-heroText">
                    <section id='section-heroTitle'>
                        <h1 className='displayTitle'>Little Lemon</h1>
                        <h2 className='subTitle'>Chicago</h2>
                    </section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/reservations"><button id="button-reserve" type="button">Reserve a Table</button></Link>
                </section>
                
                <section id="section-heroImg">
                    <img className="img-hero" src={restauranfood} alt=""/>
                </section>
        </article>
    );
}

export default Hero;