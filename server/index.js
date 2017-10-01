// @flow

const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { HOST, PORT } = require('./config');
const api = require('./routes/api');

const adapter = new FileSync('./db.json');
const db = low(adapter);

db.defaults({ transactions: [] }).write();

let app = express();

app = {
  ...app,
  db,
};

app.use(
  bodyParser.urlencoded({
    type: 'application/x-www-form-urlencoded',
    extended: false,
  }),
);
app.use(bodyParser.json({ type: 'application/json' }));

app.use('/api', api);

app.listen(
  PORT,
  HOST,
  err =>
    (err ? console.log('Server did not start.') : console.log(`Server listening on port ${PORT}`)),
);
