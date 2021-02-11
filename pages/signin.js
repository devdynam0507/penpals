import SigninComponent from '../components/Authneticate/SigninComponent';
import AuthenticationHOC from '../components/Authneticate/AuthenticationHOC';
import BaseComponent from '../components/Global/BaseComponent';

export default function Signin() {
    return (
		<BaseComponent>
			<AuthenticationHOC>
				<SigninComponent/>
			</AuthenticationHOC>
		</BaseComponent>
    )
}