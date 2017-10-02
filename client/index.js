const { getCharacters } = require('./api');

getCharacters().then(res => console.log(res.data.characters));
