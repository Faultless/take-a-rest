const fs = require('fs');
const { requestString, parseString } = require('../client/util');
const { FETCH_MULTIPLE, FETCH_ONE } = require('../client/config');

const axios = {
  get: url =>
    new Promise((resolve, reject) => {
      const reqString = requestString(url);

      const { reqType, fileName } = parseString(reqString);
      console.log(fileName);
      try {
        const data = fs.readFileSync(`./client/mockData/${fileName}.json`);
        resolve(JSON.parse(data));
      } catch (error) {
        reject({ error: 'Bad Request.' });
      }
    }),
};

module.exports = axios;
