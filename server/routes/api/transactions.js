const Router = require('express').Router;
const CreateTransaction = require('../../controllers/transactions');

// const LIFE_DRAIN = 1;
// const DAMAGE = 2;

const transactions = Router();

transactions.route('/').post((req, res) => {
  /**
   * Check headers and body for type of transaction
   */
  const senderId = req.body.from;
  const receiverId = req.body.to;

  const newTransaction = CreateTransaction(senderId, receiverId);

  try {
    req.app.db
      .get('transactions')
      .push(newTransaction)
      .write();
  } catch (e) {
    res.end(e);
  }
  res.end('Transaction successful');
});

module.exports = transactions;
