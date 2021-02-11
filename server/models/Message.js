const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: String,
    sender: String,
    published_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('message', MessageSchema);