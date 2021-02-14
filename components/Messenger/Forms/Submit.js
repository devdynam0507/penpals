import Router from 'next/router';
import { sendMessageAsync } from '../../../server/asyncConnections/MessengerAsync';
import { socket } from '../../../socketClient/client';

export const submit = (values, dispatch, props) => {
	const title = values.title;
	const message = values.message;
	const name = values.name;
	const senderId = props.senderId;

	sendMessageAsync({
		title: title,
		message: message,
		sender: name,
		senderId: senderId
	}, socket);
	
	Router.back();
}