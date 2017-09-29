const Router = require('express').Router;
const characters = require('./characters');
const character = require('./character');
const transactions = require('./transactions');

const api = Router();

api.use('/characters', characters);
api.use('/character', character);
api.use('/transactions', transactions);

module.exports = api;
