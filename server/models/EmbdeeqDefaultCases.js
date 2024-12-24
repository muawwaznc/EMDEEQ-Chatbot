const mongoose = require('mongoose');

const EmdeeqDefaultCasesSchema = new mongoose.Schema({
    condition: { type: String, required: true, unique: true },
    response: { type: String, required: true },
});

module.exports = mongoose.model('EmdeeqDefaultCases', EmdeeqDefaultCasesSchema);
