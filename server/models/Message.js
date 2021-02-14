const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	title: String,
    message: String,
    sender: String,
	senderId: String,
	receiverId: String,
    published_date: { type: Date, default: Date.now }
});

module.exports = mongoose.models.message || mongoose.model('message', MessageSchema);