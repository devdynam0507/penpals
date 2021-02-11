import MessengerComponent from '../components/Messenger/MessengerComponent';
import MessengerHOC from '../components/Messenger/MessengerHOC';
import BaseComponent from '../components/Global/BaseComponent';

export default function Messenger() {
	return (
		<BaseComponent>
			<MessengerHOC> <MessengerComponent/> </MessengerHOC>
		</BaseComponent>
	)
}