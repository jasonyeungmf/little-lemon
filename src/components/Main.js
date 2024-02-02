import Home from './Home.js';
import About from './About.js';
import Menu from './Menu.js';
import Reservations from './Reservations.js';
import Orderonline from './Orderonline.js';
import Login from './Login.js';
import { Routes, Route } from "react-router-dom";
import { useReducer } from 'react';

function Main() {
    function initializeTimes(){
        return(
            [
                {id: "17:00", time: "17:00"},
                {id: "18:00", time: "18:00"},
                {id: "19:00", time: "19:00"},
                {id: "20:00", time: "20:00"},
                {id: "21:00", time: "21:00"},
                {id: "22:00", time: "22:00"},
            ]);
    }


    function updateTimes(state, action){
        if (action.type === 'FORM_IS_SUBMITTED') {
            //if (bookedTimesByDate.filter(x => x.bookedDate === action.bookedDate && x.bookedTime===action.bookedTime).length === 0) {
            //    bookedTimesByDate.push({bookedDate: action.bookedDate, bookedTime: action.bookedTime});
            //}
    
            return (
                state
            );
        }else if (action.type === 'DATE_IS_CHANGED') {
            //availableTimesByDate.forEach((element) => 
            //    availableTimes.filter(availableTime => element.bookedDate === action.date && availableTime.time !== element.bookedTime)
            //    );
                //state.filter(time => time.id !== action.id)
                //state.filter(time => time.id !== "22:00")
                return state;
        }else{
            return state;
        }
    }

    const [newAvailableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/reservations" element={<Reservations newAvailableTimes={newAvailableTimes} dispatch={dispatch} />}></Route>
                <Route path="/orderonline" element={<Orderonline />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </main>
    );
}

export default Main;