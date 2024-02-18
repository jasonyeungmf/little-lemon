import star from '../images/star-svgrepo-com.svg';
import avatarBoy from '../images/avatar-boy-svgrepo-com.svg';
import avatarBoy2 from '../images/avatar-boy-svgrepo-com-2.svg';
import avatarGirl from '../images/avatar-girl-svgrepo-com.svg';
import avatarGirl2 from '../images/avatar-girl-svgrepo-com-2.svg';

function CustomersSay() {
    return(
        <div id='customersSay-container'>
            <article id="customersSay">
                <section className="customersSay-card">
                    <section className='section-star'>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                    </section>
                    <section className='section-profile'>  
                        <img className="img-avatar" src={avatarBoy} alt=""/>
                        <h3 className='cardTitle'>David</h3>
                    </section>
                    <p className='p-reviewText'>"I highly recommend this business."</p>
                </section>

                <section className="customersSay-card">
                    <section className='section-star'>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                    </section>
                    <section className='section-profile'>  
                        <img className="img-avatar" src={avatarBoy2} alt=""/>
                        <h3 className='cardTitle'>James</h3>
                    </section>
                    
                    <p className='p-reviewText'>"Their customer service is second to none."</p>
                </section>

                <section className="customersSay-card">
                    <section className='section-star'>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                    </section>
                    <section className='section-profile'>  
                        <img className="img-avatar" src={avatarGirl} alt=""/>
                        <h3 className='cardTitle'>Amelia</h3>
                    </section>
                    
                    <p className='p-reviewText'>"Pricing is fair and transparent - definitely value for money."</p>
                </section>

                <section className="customersSay-card">
                    <section className='section-star'>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                        <img className="img-star" src={star} alt=""/>
                    </section>
                    <section className='section-profile'>  
                        <img className="img-avatar" src={avatarGirl2} alt=""/>
                        <h3 className='cardTitle'>Emma</h3>
                    </section>
                    
                    <p className='p-reviewText'>"Their staff is not only friendly but also highly skilled."</p>
                </section>
            </article>
        </div>
    );
}

export default CustomersSay;