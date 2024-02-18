import '../App.css';
import Hero from './Hero.js';
import Specials from './Specials.js';
import Chicago from './Chicago.js';
import CustomersSay from './CustomersSay.js';

function Home() {
    return (
        <>
            <Hero/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </>
    );
}

export default Home;