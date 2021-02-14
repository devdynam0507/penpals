const Notification = require('./notification');
const NotificationCache = require('./notificationCache');

const bindSocket = (app) => {	
	const _express = require('express');
	const _app = _express();
	
	const _http = require('http').Server(_app);	
	const io = require('socket.io')(_http, {
		cors: {
			credentials: true,
			origin: [
				'https://penpal-vafhi.run.goorm.io',
				'https://penpal-sock.run.goorm.io',
			],
		}
	});	
		
	io.on('connection', (socket) => {
	
		socket.on('user', (username) => {
			if(username !== 'guest') {
				const session = NotificationCache.createSession(socket.id, username);
				NotificationCache.insertSession(session);
			} 
		});
		
		socket.on('messages', (messages) => {			
			messages.forEach((message) => {
				const session = NotificationCache.getSession(message.receiverId);
								
				if(session !== undefined) {
					Notification.sendNotification(message, NotificationCache.getSession(message.receiverId), io);
				}
			});
		});
		
		socket.on('disconnect', () => {
			NotificationCache.removeSession(socket.id);
			console.log('disconnect');
		})
	})
	
  _app.all('*', (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	  
      next();
  })
	
  _http.listen(3003);
}

module.exports = {
	bindSocket: bindSocket
};
