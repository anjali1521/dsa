require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();

const API_KEY = process.env.AVIATIONSTACK_API_KEY;

app.get('/api/flights', async (req, res) => {
  const { origin, destination } = req.query;
  if (!origin || !destination) {
    return res.status(400).json({ error: 'Missing origin or destination' });
  }

  try {
    const url = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${origin.toUpperCase()}&arr_iata=${destination.toUpperCase()}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.data) {
      return res.status(404).json({ error: 'No flight data found' });
    }

    // Limit results and map relevant info
    const flights = data.data.slice(0, 5).map(flight => ({
      airline: flight.airline.name,
      flightNumber: flight.flight.iata,
      departure: flight.departure.scheduled,
      arrival: flight.arrival.scheduled,
      origin: flight.departure.iata,
      destination: flight.arrival.iata,
      status: flight.flight_status,
    }));

    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch flight data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
