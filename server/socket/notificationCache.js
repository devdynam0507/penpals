const userSessionCache = new Map();

const createSession = (id, username) => {
	return {
		id: id,
		username: username
	}
}

const insertSession = (session) => {
	userSessionCache.set(session.username, session);
}

const getSession = (username) => {
	return userSessionCache.get(username);
}

const removeSession = (sessionId) => {
	userSessionCache.forEach((value, key, mapObject) => {
		const session = value;
		let isBreak = false;
		
		if(session !== undefined && session.id === sessionId) {
			userSessionCache.delete(key);
			isBreak = true;
		}
		
		return isBreak;
	})
}

const createMessage = (title, sender, session) => {
	return {
		title: title,
		sender: sender,
	};
}

const insertMessage = (receiver, message) => {
	userNotificationCache.set(receiver, message);
}

const getMessage = (receiver) => {
	return userNotificationCache.get(receiver);
}

module.exports = {
	createSession: createSession,
	insertSession: insertSession,
	getSession: getSession,
	removeSession: removeSession,
	createMessage: createMessage,
	insertMessage: insertMessage,
	getMessage: getMessage,
	createSession: createSession,
}
