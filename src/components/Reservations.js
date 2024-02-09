import BookingForm from './BookingForm.js';

function Reservations(props) {

    return(
        <BookingForm 
            newAvailableTimes={props.newAvailableTimes}
            dispatch={props.dispatch}
            submitForm={props.submitForm}
        />
    );
}

export default Reservations;