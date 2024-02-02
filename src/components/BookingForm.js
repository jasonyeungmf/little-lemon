import React, { useState } from "react";


function BookingForm(props) {
    
    let today = new Date().toISOString().slice(0, 10)
    const [date, setDate] = useState(today);
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const clearForm = () => {
        setDate(today);
        setTime("17:00");
        setGuests(1);
        setOccasion("Birthday");
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation was made!"+"\ndate="+e.target.date.value+
        "\ntime="+e.target.time.value+
        "\nguests="+e.target.guests.value+
        "\noccasion="+e.target.occasion.value);
        console.log(e.target.date.value);
        console.log(e.target.time.value);
        console.log(e.target.guests.value);
        console.log(e.target.occasion.value);
        props.dispatch({ type:"FORM_IS_SUBMITTED", bookedDate:e.target.date.value, bookedTime:e.target.time.value});
        //clearForm();
      };

    return(
        <>
            <form onSubmit={handleSubmit}>
                        <h2>Book a table</h2>
                        <section className="Field">
                            <label htmlFor="res-date">Choose date<sup>*</sup> </label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => {setDate(e.target.value);
                                    props.dispatch({ type:"DATE_IS_CHANGED", bookedDate: e.target.value });}}
                                placeholder={today}
                                min={today}
                                id="res-date"
                                name="date"
                            />
                        </section>

                        <section className="Field">
                            <label htmlFor="res-time">Choose time<sup>*</sup></label>
                            <select
                                value={time}
                                onChange={(e) => {setTime(e.target.value);}}
                                placeholder={time}
                                id="res-time"
                                name="time"
                            >
                            {props.newAvailableTimes.map((availableTime) => (
                                <option key={availableTime.id}>{availableTime.time}</option>
                            ))}
                            </select>
                        </section>

                        <section className="Field">
                            <label htmlFor="guests">Number of guests<sup>*</sup></label>
                            <input
                                type="number"
                                value={guests}
                                onChange={(e) => {setGuests(e.target.value);}}
                                placeholder="1"
                                min="1"
                                max="10"
                                id="guests"
                                name="guests"
                            />
                        </section>

                        <section className="Field">
                            <label htmlFor="occasion">Occasion<sup>*</sup></label>
                            <select
                                value={occasion}
                                onChange={(e) => {setOccasion(e.target.value);}}
                                id="occasion"
                                name="occasion"
                            >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </section>

                        <input type="submit" value="Make Your reservation"></input>
            </form>
        </>
    );
}

export default BookingForm;