import Home from './Home.js';
import About from './About.js';
import Menu from './Menu.js';
import Reservations from './Reservations.js';
import Orderonline from './Orderonline.js';
import Login from './Login.js';
import { Routes, Route, Link } from "react-router-dom";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/reservations" element={<Reservations />}></Route>
                <Route path="/orderonline" element={<Orderonline />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </main>
    );
}

export default Main;