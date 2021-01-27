import axios from 'axios';

export default async function requestSigninAsPost(username, password) {
    const response = await axios.post('/api/auth/signin', {
        identifier: username,
        password: password 
    })
     .catch((error) => {
         console.log(error);
    })

    return response;
};