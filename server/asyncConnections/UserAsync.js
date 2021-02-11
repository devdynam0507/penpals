import axios from 'axios';
import { encrypt } from '../security/securityHash';

export const requestSigninAsPost = async (username, password) => {
	console.log(password);
    const response = await axios.post('/api/auth/signin', {
        identifier: username,
        password: encrypt(password.trim())
    })
     .catch((error) => {
         console.log(error);
    })

    return response;
};

export const handleSignout = async (user, onSignout) => {
	const userReference = localStorage.getItem('user');
	
	if(userReference) {
		axios.post('/api/auth/signout', {
			identifier: user.identifier
		});	
		
		localStorage.removeItem('user');
		onSignout();
	}
}

export const requestSignupAsPost = async (id, password) => {
	console.log(password);
	const res = await axios.post('api/auth/signup', {
		identifier: id,
		password: encrypt(password.trim()),
	})
	
	return res;
}

export const isJoined = async (identifier) => {
	return await axios.get('/api/auth/user', {
		params: {
			identifier: identifier
		}
	});
}