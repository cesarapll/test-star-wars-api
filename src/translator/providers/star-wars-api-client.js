const axios = require('axios')

const starWarsApiClient = axios.create({
    baseURL: 'https://swapi.py4e.com/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

module.exports = starWarsApiClient;
