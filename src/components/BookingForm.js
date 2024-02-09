import React, { useState } from "react";


function BookingForm(props) {
    const today = new Date();//Fri Feb 16 2024 17:00:00 GMT-0700 (Mountain Standard Time)
    //const todayISOString = today.toISOString()//2024-02-08T18:54:38.273Z
    const today_yyyy_mm_dd = today.toISOString().slice(0, 10);//2024-02-08
    const [date, setDate] = useState(today_yyyy_mm_dd);
    const [time, setTime] = useState(props.newAvailableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

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

    function handleGuestsChange(e){
        setGuests(e.target.value);
    }

    function handleOccasionChange(e){
        setOccasion(e.target.value);
    }

    const resetForm = () => {
        setDate(today_yyyy_mm_dd);
        setTime(props.newAvailableTimes[0]);
        setGuests(1);
        setOccasion("Birthday");
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        const string="Reservation was made!"+
        "\ndate="+date+
        "\ntime="+time+
        "\nguests="+guests+
        "\noccasion="+occasion;
        alert(string);

        //const formData = [e.target.date.value, e.target.time.value, e.target.guests.value, e.target.occasion.value];
        console.log(date,time,guests,occasion);
        const formData =[date, time, guests, occasion];
        props.submitForm(formData);
        resetForm();
      };

    return(
        <>
            <form name="bookingForm" onSubmit={(e) => handleSubmit(e)}>
                        <h2>Book a table</h2>
                        <section className="Field">
                            <label htmlFor="date">Choose date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => handleDateChange(e)}
                                placeholder={date}
                                min={today_yyyy_mm_dd}
                                id="date"
                                name="date"
                            />
                        </section>

                        <section className="Field">
                            <label htmlFor="time">Choose time</label>
                            <select
                                value={time}
                                onChange={(e) => handleTimeChanged(e)}
                                placeholder={time}
                                id="time"
                                name="time"
                            >
                                {Array.isArray(props.newAvailableTimes) && props.newAvailableTimes.map((availableTime, index) => (
                                    <option key={index} value={availableTime}>{availableTime}</option>
                                ))}
                            </select>
                        </section>

                        <section className="Field">
                            <label htmlFor="guests">Number of guests</label>
                            <input
                                type="number"
                                value={guests}
                                onChange={(e) => handleGuestsChange(e)}
                                placeholder="1"
                                min="1"
                                max="10"
                                id="guests"
                                name="guests"
                            />
                        </section>

                        <section className="Field">
                            <label htmlFor="occasion">Occasion</label>
                            <select
                                value={occasion}
                                onChange={(e) => handleOccasionChange(e)}
                                id="occasion"
                                name="occasion"
                            >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </section>

                        <input type="submit" name="bookingButton" value="Make Your reservation"/>
            </form>
        </>
    );
}

export default BookingForm;