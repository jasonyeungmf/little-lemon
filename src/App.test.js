import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from './App';
import BookingForm from './components/BookingForm.js';
import {initializeTimes, updateTimes} from './components/Main.js';
//import ErrorBoundary from './ErrorBoundary.js'

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

describe('Booking form', () => {
  //=======================================================================
  test('test for Rendering the static text', () => {
    render(
        <BookingForm newAvailableTimes={initializeTimes()}/>
    );

  expect(screen.getByText("Book a table")).toBeInTheDocument();
  expect(screen.getByText("Birthday")).toBeInTheDocument();
  expect(screen.getByText("Make Your reservation")).toBeInTheDocument();
  });


  //=======================================================================
  test('test for the initializeTimes function', () => {
    render(
        <BookingForm 
          newAvailableTimes={initializeTimes()}
        />
    );
    const string = screen.getAllByText(/:00/);
    expect(string[0]).toBeInTheDocument();
  });

  //=======================================================================
  test('test for the updateTimes function', () => {
    //expect(updateTimes(initializeTimes(), {type: "DATE_IS_CHANGED"})).toStrictEqual(initializeTimes());
    const newAvailableTimes = updateTimes(initializeTimes(), {type: "DATE_IS_CHANGED", bookedDate: new Date()})
    render(
        <BookingForm 
          newAvailableTimes={newAvailableTimes} 
        />
    );
    const string = screen.getAllByText(/:00/);
    expect(string[0]).toBeInTheDocument();
  });


  //=======================================================================
  test('test for if BookingForm can be submitted', () => {
    function initializeTimes(){ return( ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]); }
    const handleSubmit = jest.fn();
    function submitForm(formData){}
    render(
        <BookingForm 
          newAvailableTimes={initializeTimes()}
          submitForm={submitForm}
        />
    );
    const timeInput = screen.getByLabelText(/Time/);
    fireEvent.change(timeInput, { target: { value: "17:00" } });
    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: "Birthday" } });

    const submitButton = screen.getByText("Make Your reservation");
    const bookingForm = screen.getByRole("form");
    bookingForm.onsubmit = handleSubmit;
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
  });

  
});


//*************************************************************************************************
describe('HTML5 validation', () => {
  //Date
  test('test for Date input field', async () => {
    function initializeTimes(){ return( ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]); }
    function submitForm(formData){}
    function dispatch(){}
    const today = new Date().toISOString().slice(0, 10);
    let maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 30);
    const maxDate_yyyy_mm_dd = maxDate.toISOString().slice(0, 10);//2024-02-08

    render(
        <BookingForm 
          newAvailableTimes={initializeTimes()}
          submitForm={submitForm}
          dispatch={dispatch}
        />
    );

    const dateInput = screen.getByLabelText(/Date/);
    //validate attributes
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("min", today);
    expect(dateInput).toHaveAttribute("max", maxDate_yyyy_mm_dd);
    //test by invalid states
    fireEvent.change(dateInput, { target: { value: "yyyy-mm-dd" } });
    expect(dateInput).toBeInvalid();
    fireEvent.change(dateInput, { target: { value: "2000-01-01" } });
    expect(dateInput).toBeInvalid();
    fireEvent.change(dateInput, { target: { value: "9999-01-01" } });
    expect(dateInput).toBeInvalid();
    //test by valid states
    fireEvent.change(dateInput, { target: { value: today } });
    expect(dateInput).not.toBeInvalid();
    fireEvent.change(dateInput, { target: { value: maxDate_yyyy_mm_dd } });
    expect(dateInput).not.toBeInvalid();

  });
  
  //Number of guests
  test('test for Number of guests input field', async () => {
    function initializeTimes(){ return( ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]); }
    function submitForm(formData){}
    function dispatch(){}
    const today = new Date().toISOString().slice(0, 10);
    let maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 30);
    const maxDate_yyyy_mm_dd = maxDate.toISOString().slice(0, 10);//2024-02-08

    render(
        <BookingForm 
          newAvailableTimes={initializeTimes()}
          submitForm={submitForm}
          dispatch={dispatch}
        />
    );
    const guestInput = screen.getByLabelText(/Number of guests/);
    //validate attributes
    expect(guestInput).toHaveAttribute("required");
    expect(guestInput).toHaveAttribute("type", "number");
    expect(guestInput).toHaveAttribute("min", "1");
    expect(guestInput).toHaveAttribute("max", "10");
    //test by invalid states
    fireEvent.change(guestInput, { target: { value: null } });
    expect(guestInput).toBeInvalid();
    fireEvent.change(guestInput, { target: { value: "number" } });
    expect(guestInput).toBeInvalid();
    fireEvent.change(guestInput, { target: { value: 0 } });
    expect(guestInput).toBeInvalid();
    fireEvent.change(guestInput, { target: { value: 11 } });
    expect(guestInput).toBeInvalid();
    //test by valid states
    fireEvent.change(guestInput, { target: { value: 1 } });
    expect(guestInput).not.toBeInvalid();
    fireEvent.change(guestInput, { target: { value: 10 } });
    expect(guestInput).not.toBeInvalid();

  });
});

//*************************************************************************************************
describe('JavaScript validation functions', () => {
  test('test for input field by invalid state', () => {
    function initializeTimes(){ return( ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]); }
    function submitForm(formData){}
    function dispatch(){}
    //invalid state(value)
    const pastDate = "2000-01-01";
    const time = "";
    const guest = 0;
    const occasion = "";

    render(
        <BookingForm 
          newAvailableTimes={initializeTimes()}
          submitForm={submitForm}
          dispatch={dispatch}
        />
    );

    //Date(2000-01-01)
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: pastDate } });
    expect(screen.getByText("Please choose a date between today and the next 30th days")).toBeInTheDocument();

    //Time(empty value)
    const timeInput = screen.getByLabelText(/Time/);
    fireEvent.change(timeInput, { target: { value: time } });
    expect(screen.getByText("Please choose a time period")).toBeInTheDocument();

    //Number of guests(0)
    const guestInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestInput, { target: { value: guest } });
    expect(screen.getByText("Please enter a number between 1 and 10")).toBeInTheDocument();

    //Occassion(empty value)
    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: occasion } });
    expect(screen.getByText("Please choose an occasion")).toBeInTheDocument();
    
    //Submit button
    const submitButton = screen.getByText("Make Your reservation");
    expect(submitButton).toBeDisabled();
  });

  //=======================================================================
  test('test for input field by valid state', () => {
    function initializeTimes(){ return( ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]); }
    function submitForm(formData){}
    function dispatch(){}
    //valid state(value)
    const today = new Date().toISOString().slice(0, 10);
    const time = "17:00";
    const guest = 1;
    const occasion = "Birthday";

    render(
        <BookingForm 
          newAvailableTimes={initializeTimes()}
          submitForm={submitForm}
          dispatch={dispatch}
        />
    );

    //Date(today)
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: today } });

    //Time("17:00")
    const timeInput = screen.getByLabelText(/Time/);
    fireEvent.change(timeInput, { target: { value: time } });

    //Number of guests(1)
    const guestInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestInput, { target: { value: guest } });

    //Occassion("Birthday")
    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: occasion } });
    
    //Submit button
    const submitButton = screen.getByText("Make Your reservation");
    expect(submitButton).not.toBeDisabled();
  });
});