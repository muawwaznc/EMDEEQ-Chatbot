const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  chatName: { type: String, required: true },
  chatCreatedTime: { type: Date, required: true, default: Date.now },
  chatCreatedBy: { type: String, required: true }
});

module.exports = mongoose.model('Chat', ChatSchema);
