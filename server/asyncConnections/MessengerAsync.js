import axios from 'axios';
import UserBuisness from '../db/userBuisnessLogic';

export const sendMessageAsync = async (message, socket) => {
	axios.post('/api/messenger/send', {
		message: message
	})
	.then((res) => {
		if(res.data.success) {
			const messages = res.data.messages;
			
			socket.emit('messages', messages);
		}
	});
}