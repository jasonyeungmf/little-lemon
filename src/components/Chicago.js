import marioAdrianA from '../images/Mario and Adrian A.jpg';
import marioAdrianB from '../images/Mario and Adrian b.jpg';

function Chicago(){
    return(
        <article id="chicago">
                <section id="section-chicagoText">
                    <section id='section-chicagoTitle'>
                        <h1 className='displayTitle'>Little Lemon</h1>
                        <h2 className='subTitle'>Chicago</h2>
                    </section>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    
                </section>
                <section id="section-chicagoImg">
                    <img className="img-chicago" src={marioAdrianA} alt=""/>
                    <img className="img-chicago" src={marioAdrianB} alt=""/>
                </section>
        </article>
    );
}

export default Chicago;