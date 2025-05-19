import React from 'react';
import { FlightbookingComp } from '../components/FlightbookingComp';

export const FlightBookingPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Book Your Flight</h1>
      <FlightbookingComp />
    </div>
  );
};
