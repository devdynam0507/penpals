const MessageModel = require('../models/Message');

const createMessage = (title, message, sender, senderId) => {
	return {
		title: title,
		message: message,
		sender: sender,
		senderId: senderId
	};
}

// ! Receiver 추가해야함.
const insertMessage = (message, callback) => {
	const query = {
		...message
	};
	
	MessageModel.create(query, (err, message) => {
		callback({ success: err == null });
	});
}

const insertMessages = (messages, callback) => {
	const query = {
		...messages
	};
	
	MessageModel.insertMany(query, () => {
		callback({ success: true });
	})
}

module.exports = {
	insertMessage: insertMessage,
	insertMessages: insertMessages,
	createMessage: createMessage,
}