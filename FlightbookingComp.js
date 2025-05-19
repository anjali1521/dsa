import React, { useState } from 'react';

export const FlightbookingComp = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [passengers, setPassengers] = useState('');
  const [date, setDate] = useState('');
  const [flights, setFlights] = useState([]);

  const fetchFlights = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/flights?origin=${departure}&destination=${destination}&date=${date}&sortBy=price`
      );
      const flightData = await response.json();
      setFlights(flightData);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const handleFindFlights = () => {
    if (!departure || !destination || !date || !passengers) {
      alert('Please fill in all fields!');
      return;
    }
    fetchFlights();
  };

  return (
    <div className='bg-white w-[45%] rounded-xl shadow-sm ml-60'>
      {/* Heading */}
      <div className='p-2'>
        <p className='font-semibold ml-10 text-sm '>
          Book Cheap <span className='text-yellow-400'>Flights</span>
        </p>
      </div>

      {/* One Way / Round Way */}
      <div className='flex bg-black text-white justify-center py-1'>
        <div className='flex'>
          <input
            className='text-white'
            type='radio'
            id='oneway'
            name='trip'
            value='oneway'
          />
          <p className='text-xs ml-1'>One Way</p>
        </div>
        <div className='flex ml-2'>
          <input
            className='text-white'
            type='radio'
            id='roundway'
            name='trip'
            value='roundway'
          />
          <p className='text-xs'>Round Way</p>
        </div>
      </div>

      {/* Form Inputs */}
      <div className='p-4 space-y-1.5'>
        <div>
          <label className='block font-medium mb-1 text-xs' htmlFor='departure'>
            Departure:
          </label>
          <input
            id='departure'
            type='text'
            placeholder='City'
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className='w-full p-1 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-yellow-400'
          />
        </div>

        <div>
          <label
            className='block font-medium mb-1 text-xs'
            htmlFor='destination'
          >
            Destination:
          </label>
          <input
            id='destination'
            type='text'
            placeholder='City'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className='w-full p-1 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-yellow-400'
          />
        </div>

        <div>
          <label
            className='block font-medium mb-1 text-xs'
            htmlFor='passengers'
          >
            Passengers:
          </label>
          <input
            id='passengers'
            type='number'
            placeholder='Count'
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className='w-full p-1 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-yellow-400'
          />
        </div>

        <div>
          <label className='block font-medium mb-1 text-xs' htmlFor='calendar'>
            Date:
          </label>
          <input
            id='calendar'
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='w-full p-1 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-yellow-400'
          />
        </div>
      </div>

      {/* Find Flight Button */}
      <div className='p-2'>
        <button
          className='w-full bg-yellow-400 text-white font-medium py-1.5 text-xs rounded hover:bg-yellow-500 transition'
          onClick={handleFindFlights}
        >
          Find Flights
        </button>
      </div>

      {/* Flight Results */}
      <div className='p-4'>
        {flights.length > 0 ? (
          flights.map((flight, index) => (
            <div
              key={index}
              className='bg-gray-100 p-3 mb-2 rounded shadow text-black'
            >
              <p>
                <strong>Airline:</strong> {flight.airline}
              </p>
              <p>
                <strong>Flight:</strong> {flight.flightNumber}
              </p>
              <p>
                <strong>Departure:</strong> {flight.departure}
              </p>
              <p>
                <strong>Arrival:</strong> {flight.arrival}
              </p>
              <p>
                <strong>Price:</strong> ₹{flight.price}
              </p>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>No flights found</p>
        )}
      </div>
    </div>
  );
};
