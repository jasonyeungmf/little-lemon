import { useLocation } from "react-router-dom";

function ConfirmedBooking(props){
  const location = useLocation();
    return (
        <article className="articlePage">
          <section className="articleContent">
            <h1 className="displayTitle">Successfully booked a table</h1>
            <p className="articleText">
              Your reservation has been confirmed, and will be sent out by email with all the details as below.<br/>
              Date:             {location.state.date};<br/>
              Time:             {location.state.time};<br/>
              Number of guests: {location.state.guest};<br/>
              Occassion:        {location.state.occassion};<br/>
              Thank you!
            </p>
          </section>
        </article>
      );
}

export default ConfirmedBooking;