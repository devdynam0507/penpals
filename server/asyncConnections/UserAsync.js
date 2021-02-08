import axios from 'axios';

export const requestSigninAsPost = async (username, password) => {
    const response = await axios.post('/api/auth/signin', {
        identifier: username,
        password: password 
    })
     .catch((error) => {
         console.log(error);
    })

    return response;
};

export const handleSignout = async (user) => {
	axios.post('/api/auth/signout', {
		user: user
	});
}

export const isJoined = async (identifier) => {
	return await axios.get('/api/auth/user', {
		params: {
			identifier: identifier
		}
	});
}