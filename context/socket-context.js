import React from 'react';
import socketio from 'socket.io-client';
const socket = socketio.connect('https://penpal-sock.run.goorm.io/', {
	withCredentials: true,
	extraHeaders: {
		"my-custom-header": "abcd"
	}
});

if(!socket.connected) {
	console.log('Failed connected to server socket');
} else {
	console.log('Successfully connected to server socket');
}

socket.on('alarm', (data) => {
	alert("제목:" + data.title + "\n" + "보낸사람: " + data.sender);
})

export const SocketContext = React.createContext(socket);