const uuid = require('uuid/v1');
const Model = require('../models/transaction');

const transactions = (senderId, receiverId) => {
  const newTransaction = new Model(uuid(), senderId, receiverId);
  return newTransaction;
};

module.exports = transactions;
