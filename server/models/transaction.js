// @flow

type Transaction = {
  id: string,
  senderId: number,
  receiverId: number,
  amount: number,
  type: string,
  status: string,
};
class transaction {
  id: string;
  senderId: number;
  receiverId: number;
  amount: number;
  type: string;
  status: string;

  constructor({ id, senderId, receiverId, amount, type, status }: Transaction) {
    this.id = id;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.amount = amount;
    this.type = type;
    this.status = status;
  }
}

module.exports = transaction;
