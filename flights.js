const express = require("express");
const axios = require("axios");

const router = express.Router();

// Quick Sort implementation for flight prices
function quickSort(arr, key) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = arr.slice(1).filter((item) => item[key] <= pivot[key]);
  const right = arr.slice(1).filter((item) => item[key] > pivot[key]);

  return [...quickSort(left, key), pivot, ...quickSort(right, key)];
}

// Endpoint to fetch and sort flights
router.get("/", async (req, res) => {
  const { origin, destination, date, sortBy = "price" } = req.query;

  if (!origin || !destination || !date) {
    return res.status(400).json({ error: "Missing required parameters." });
  }

  try {
    // Replace with your flight data API endpoint
    const response = await axios.get("https://api.aviationstack.com/v1/flights?access_key=a459a43287a357ba5cc1da7f3fa0e5d3", {
      params: { origin, destination, date },
      headers: { Authorization: `a459a43287a357ba5cc1da7f3fa0e5d3` },
    });

    let flights = response.data.flights; // Adapt this based on API response format
    flights = quickSort(flights, sortBy);

    // Limit results to 10 for performance
    res.json(flights.slice(0, 10));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch flight data." });
  }
});

module.exports = router;
