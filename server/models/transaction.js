class transaction {
  constructor(id, senderId, receiverId, amount, type, status) {
    this.id = id;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.amount = amount;
    this.type = type;
    this.status = status;
  }
}

module.exports = transaction;
