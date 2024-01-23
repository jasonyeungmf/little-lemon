import '../App.css';
import restauranfood from '../images/restauranfood.jpg';
import greekSalad from '../images/greek salad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemonDessert from '../images/lemon dessert.jpg';
import delivery from '../images/delivery-svgrepo-com.svg';

function Home() {
    return (
        <main>
            <section id="hero">
                <section id="section-heroText">
                    <section id='section-heroTitle'>
                        <h1 className='displayTitle'>Little Lemon</h1>
                        <h2 className='subTitle'>Chicago</h2>
                    </section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button id="button-reserve" type="button">Reserve a Table</button>
                </section>
                <section id="section-heroImg">
                    <img className="img-hero" src={restauranfood} alt=""/>
                </section>
            </section>

            <section id="highlight">
                <section id="highlight-title">
                    <h1 className='sectionTitle'>This week specials!</h1>
                    <button id="button-onlinemenu" type="button">Online Menu</button>
                </section>
                <section id="highlight-card">
                    <article className='article-highlightFood'>
                        <img className="img-restauranfood" src={greekSalad} alt=""/>
                        <section className='section-cardTitle'>
                            <h3 className='cardTitle'>Greek salad</h3>
                            <h5 className='priceText'>$12.99</h5>
                        </section>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                        </p>
                        <section className='section-orderAdelivery'>
                            {/* <button id="button-orderAdelivery" type="button">Order a delivery</button> */}

                            <a className='callAction' href="http://localhost:3000/">Order a delivery</a>
                            <img className="img-delivery" src={delivery} height={32} alt=""/>
                        </section>
                    </article>
                    <article className='article-highlightFood'>
                        <img className="img-restauranfood" src={bruchetta} alt=""/>
                        <section className='section-cardTitle'>
                            <h3 className='cardTitle'>Bruchetta</h3>
                            <h5 className='priceText'>$5.99</h5>
                        </section>
                        <p>
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.

                        </p>
                        <section className='section-orderAdelivery'>
                            {/* <button id="button-orderAdelivery" type="button">Order a delivery</button> */}
                            <a className='callAction' href="http://localhost:3000/">Order a delivery</a>
                            <img className="img-delivery" src={delivery} height={32} alt=""/>
                        </section>
                    </article>
                    
                    <article className='article-highlightFood'>
                        <img className="img-restauranfood" src={lemonDessert} alt=""/>
                        <section className='section-cardTitle'>
                            <h3 className='cardTitle'>Lemon Dessert</h3>
                            <h5 className='priceText'>$5.00</h5>
                        </section>
                        <p>
                            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.  
                        </p>
                        <section className='section-orderAdelivery'>
                            {/* <button id="button-orderAdelivery" type="button">Order a delivery</button> */}
                            <a className='callAction' href="http://localhost:3000/">Order a delivery</a>
                            <img className="img-delivery" src={delivery} height={32} alt=""/>
                        </section>
                    </article>
                </section>
            </section>
        </main>
    );
}

export default Home;