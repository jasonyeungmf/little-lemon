import React, { useState } from "react";
import exclamationMark from '../images/exclamation-mark-triangle-svgrepo-com.svg';

function BookingForm(props) {
    const today = new Date();//Fri Feb 16 2024 17:00:00 GMT-0700 (Mountain Standard Time)
    //const todayISOString = today.toISOString()//2024-02-08T18:54:38.273Z
    const today_yyyy_mm_dd = today.toISOString().slice(0, 10);//2024-02-08

    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    const maxDate_yyyy_mm_dd = maxDate.toISOString().slice(0, 10);//2024-02-08
    //console.log(maxDate_yyyy_mm_dd);

    const [date, setDate] = useState(today_yyyy_mm_dd);
    //const [time, setTime] = useState(props.newAvailableTimes[0]);
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState(1);
    //const [occasion, setOccasion] = useState("Birthday");
    const [occasion, setOccasion] = useState("");

    function handleDateChange(e){
        setDate(e.target.value); 
        props.dispatch({
            type: "DATE_IS_CHANGED",
            bookedDate: e.target.value,
        });
        //console.log(e.target.value);
        //console.log(new Date(e.target.value));
    }

    function handleTimeChanged(e){
        setTime(e.target.value);
    }

    function handleGuestChange(e){
        setGuest(e.target.value);
    }

    function handleOccasionChange(e){
        setOccasion(e.target.value);
    }

    const resetForm = () => {
        setDate(today_yyyy_mm_dd);
        //setTime(props.newAvailableTimes[0]);
        setTime("");
        setGuest(1);
        //setOccasion("Birthday");
        setOccasion("");
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData =[date, time, guest, occasion];
        props.submitForm(formData);
        resetForm();
      };

      const DateErrorMessage = () => {
        return (
            <div className="DivError">
                <img className="img-exclamationMark" src={exclamationMark} alt=""/>
                <p className="FieldError" >Please choose a date between today and the next 30th days</p>
            </div>
          
        );
      };

      const TimeErrorMessage = () => {
        return (
            <div className="DivError">
                <img className="img-exclamationMark" src={exclamationMark} alt=""/>
                <p className="FieldError" >Please choose a time period</p>
            </div>
          
        );
      };

      const GuestErrorMessage = () => {
        return (
            <div className="DivError">
                <img className="img-exclamationMark" src={exclamationMark} alt=""/>
                <p className="FieldError" >Please enter a number between 1 and 10</p>
            </div>
          
        );
      };

      const OccasionErrorMessage = () => {
        return (
            <div className="DivError">
                <img className="img-exclamationMark" src={exclamationMark} alt=""/>
                <p className="FieldError" >Please choose an occasion</p>
            </div>
          
        );
      };

      const isDateValid = () => { return(date >= today_yyyy_mm_dd && date <= maxDate_yyyy_mm_dd); };
      const isTimeValid = () => { return(time !== ""); };
      const isGuestValid = () => { return(guest >= 1 &&  guest <= 10); };
      const isOccasionValid = () => { return(occasion !== ""); };
      const isFormValid = () => { 
        return ( 
            isDateValid() && isTimeValid() && isGuestValid() && isOccasionValid
        ); 
      }; 

    return(
        <article className="articlePage">
            <h1 className='displayTitle'>Reservation</h1>
            <form name="bookingForm" onSubmit={(e) => handleSubmit(e)}>
                        <h2 className='cardTitle'>Book a table</h2>
                        <section className="Field" >
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => handleDateChange(e)}
                                placeholder={date}
                                min={today_yyyy_mm_dd}
                                max={maxDate_yyyy_mm_dd}
                                id="date"
                                name="date"
                                required
                            />
                        </section>
                        {!isDateValid() ? ( <DateErrorMessage /> ) : null} 

                        <section className="Field">
                            <label htmlFor="time">Time</label>
                            <select
                                value={time}
                                onChange={(e) => handleTimeChanged(e)}
                                id="time"
                                name="time"
                                required
                            >
                                {/**/}
                                <option value="">--Please choose an time period--</option>
                                {Array.isArray(props.newAvailableTimes) && props.newAvailableTimes.map((availableTime, index) => (
                                    <option key={index} value={availableTime}>{availableTime}</option>
                                ))}
                            </select>
                        </section>
                        {!isTimeValid() ? ( <TimeErrorMessage /> ) : null}

                        <section className="Field">
                            <label htmlFor="guest">Number of guests</label>
                            <input
                                type="number"
                                value={guest}
                                onChange={(e) => handleGuestChange(e)}
                                placeholder="1...10"
                                min="1"
                                max="10"
                                id="guest"
                                name="guest"
                                required
                            />
                        </section>
                        {!isGuestValid() ? ( <GuestErrorMessage /> ) : null}

                        <section className="Field">
                            <label htmlFor="occasion">Occasion</label>
                            <select
                                value={occasion}
                                onChange={(e) => handleOccasionChange(e)}
                                id="occasion"
                                name="occasion"
                                required
                            >
                                {/**/}
                                <option value="">--Please choose an occasion--</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Other">Other</option>
                            </select>
                        </section>
                        {!isOccasionValid() ? ( <OccasionErrorMessage /> ) : null}

                        <input 
                            type="submit"
                            id="bookingButton" 
                            name="bookingButton" 
                            value="Make Your reservation" 
                            disabled={!isFormValid()}
                            aria-label="On Click"
                        />
            </form>
        </article>
    );
}

export default BookingForm;