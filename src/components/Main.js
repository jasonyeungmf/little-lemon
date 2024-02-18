import Home from './Home.js';
import About from './About.js';
import Menu from './Menu.js';
import Reservations from './Reservations.js';
import Orderonline from './Orderonline.js';
import Login from './Login.js';
import ConfirmedBooking from './ConfirmedBooking.js'
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useEffect } from 'react';
import {fetchAPI, submitAPI} from './API.js'

export function initializeTimes(){
    const today = new Date();
    return fetchAPI(today);
    /*
    return( ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    */
}

export function updateTimes(state, action){
    if (action.type === 'DATE_IS_CHANGED') {
            //state.filter(time => time.id !== action.id)
            //state = state.filter(time => time.id !== "22:00")
            //return state;
            const date = new Date(action.bookedDate);
            return fetchAPI(date);
    }else{
        return state;
    }
}


function Main() {
    const [newAvailableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const navigate = useNavigate();
    function submitForm(formData){
        const isAvailableTime = submitAPI(formData);
        if (isAvailableTime) {
            navigate("/confirmedbooking",
            {state: {date: formData[0], time: formData[1], guest: formData[2], occassion: formData[3]}});
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/reservations" element={
                    <Reservations 
                        newAvailableTimes={newAvailableTimes} 
                        dispatch={dispatch}
                        submitForm={submitForm}
                    />}
                ></Route>
                <Route path="/orderonline" element={<Orderonline />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/confirmedbooking" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    );
}

export default Main;