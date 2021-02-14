const sendNotification = (message, session, socket) => {
	socket.to(session.id).emit('alarm', {
		title: message.title,
		sender: message.sender
	});
}

module.exports = {
	sendNotification: sendNotification
};