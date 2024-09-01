const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;
const API_KEY = 'bd8fdcf9f3b7d1ba5c8658cd13f1d888';

app.use(cors());

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        console.error(error);  // Log error for debugging
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    console.log(`Fetching weather for city: ${city}`);  // Debug log
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        console.log(`Response: ${JSON.stringify(response.data)}`);  // Debug log
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);  // Log the error
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
