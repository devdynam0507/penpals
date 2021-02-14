import socketio from 'socket.io-client';
let socket = null;

const load = () => {
	if(socket === null) {
		socket = socketio.connect('https://penpal-sock.run.goorm.io/', {
			withCredentials: true,
			extraHeaders: {
				"my-custom-header": "abcd"
			}
		});
	}
}

load();

socket.on('alarm', (data) => {
	if(typeof window !== 'undefined') {
		alert("[ 메세지가 도착했습니다! ]\n제목:" + data.title + "\n" + "보낸사람: " + data.sender);
	}
});

if(!socket.connected) {
	console.log('Failed connected to server socket');
} else {
	console.log('Successfully connected to server socket');
}

export { socket };