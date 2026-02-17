const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
    res.render('form');
});

// Form submission
app.post('/submit', async (req, res) => {
    const formData = {
        name: req.body.name,
        message: req.body.message
    };

    try {
        const response = await axios.post('http://backend:5000/submit', formData);
        res.send(response.data);
    } catch (error) {
        res.send("Error communicating with backend");
    }
});

app.listen(3000, () => {
    console.log('Frontend running on port 3000');
});
