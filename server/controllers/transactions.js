const uuid = require('uuid/v1');
const Model = require('../models/transaction');

const transactions = (senderId, receiverId, amount) => {
  const newTransaction = new Model(
    uuid(),
    senderId,
    receiverId,
    parseInt(amount, 10),
    'transfer',
    'fetching',
  );
  return newTransaction;
};

module.exports = transactions;
