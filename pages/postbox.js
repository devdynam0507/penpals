import PostboxComponent from '../components/Messenger/PostboxComponent';
import MessengerHOC from '../components/Messenger/MessengerHOC';
import BaseComponent from '../components/Global/BaseComponent';

export default function Postbox() {
	return (
		<BaseComponent>
			<MessengerHOC> <PostboxComponent/> </MessengerHOC>
		</BaseComponent>
	)
}