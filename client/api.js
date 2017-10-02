const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:3030/api';

const getCharacters = () => axios.get('/characters');

module.exports = { getCharacters };
