const Router = require('express').Router;
const CreateTransaction = require('../../controllers/transactions');
const { HOST, PORT } = require('../../config');

// const LIFE_DRAIN = 1;
// const DAMAGE = 2;

const transactions = Router();

/**
 * @desc Create a new Transaction
 */
transactions.route('/').post((req, res) => {
  const senderId = req.body.from;
  const receiverId = req.body.to;
  const amount = req.body.amount;

  const newTransaction = CreateTransaction(senderId, receiverId, amount);

  try {
    req.app.db
      .get('transactions')
      .push(newTransaction)
      .write();
  } catch (e) {
    res.end(e);
  }

  const Location = `http://${HOST}:${PORT}/api/transactions/${newTransaction.id}`;
  res
    .header({ 'Content-Type': 'application/json', Location })
    .send({ type: newTransaction.type })
    .end();
});

/**
 * @desc Display the status of a certain transaction
 */
transactions.route('/:transactionId').get((req, res) => {
  const transactionId = req.params.transactionId;
  res
    .header({ 'Content-Type': 'application/json' })
    .send({
      transaction: {
        status: req.app.db
          .get('transactions')
          .find({ id: transactionId })
          .value().status,
      },
    })
    .end();
});

module.exports = transactions;
