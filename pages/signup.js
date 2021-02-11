import SignupComponent from '../components/Authneticate/SignupComponent';
import AuthenticationHOC from '../components/Authneticate/AuthenticationHOC';
import BaseComponent from '../components/Global/BaseComponent';

export default function Signup() {
	return (
		<BaseComponent>
			<AuthenticationHOC>
				<SignupComponent/>
			</AuthenticationHOC>
		</BaseComponent>
	);
}