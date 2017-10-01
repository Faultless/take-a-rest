// @flow

const uuid = require('uuid/v1');
const Model = require('../models/transaction');

const transactions = (senderId: number, receiverId: number, amount: number): Model => {
  const newTransaction = new Model({
    id: uuid(),
    senderId,
    receiverId,
    amount: parseInt(amount, 10),
    type: 'transfer',
    status: 'fetching',
  });
  return newTransaction;
};

module.exports = transactions;
