import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
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

//=======================================================================
test('test for Rendering the static text', () => {
  render(
      <BookingForm newAvailableTimes={initializeTimes()}/>
  );

expect(screen.getByText("Book a table")).toBeInTheDocument();
expect(screen.getByDisplayValue("Birthday")).toBeInTheDocument();
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
  const handleSubmit = jest.fn();
  function submitForm(formData){

  }
  render(
      <BookingForm 
        newAvailableTimes={initializeTimes()}
        submitForm={submitForm}
      />
  );

  const submitButton = screen.getByText("Make Your reservation");
  const bookingForm = screen.getByRole("form");
  bookingForm.onsubmit = handleSubmit;
  fireEvent.click(submitButton);
  expect(handleSubmit).toHaveBeenCalled();
});




