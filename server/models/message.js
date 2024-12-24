const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  response: { type: String, required: true },
  messageTime: { type: Date, required: true, default: Date.now },
  chatId: { type: String, required: true }
});

module.exports = mongoose.model('Message', MessageSchema);