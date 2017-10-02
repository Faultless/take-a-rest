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

const app = express();

app.db = db;

app.use(
  bodyParser.urlencoded({
    type: 'application/x-www-form-urlencoded',
    extended: true,
  }),
);
app.use(bodyParser.json({ type: 'application/json' }));

app.use((req, res, next) => {
  const validType = req.accepts('application/x-www-form-urlencoded', 'application/json');
  res.header({ 'Content-Type': 'application/json' });
  if (validType === undefined) {
    res
      .status(406)
      .json({ reason: 'Please send proper JSON data' })
      .end();
  }
  next();
});

app.use('/api', api);

app.listen(
  PORT,
  HOST,
  err =>
    (err ? console.log('Server did not start.') : console.log(`Server listening on port ${PORT}`)),
);
