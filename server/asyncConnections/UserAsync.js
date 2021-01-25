 import axios from 'axios';

 export default function requestSigninAsPost(username, password, callback) {
     axios.post('/api/auth/signin', {
        identifier: username,
        password: password 
    })
     .then((response) => {
        console.log("res:: " + response);
        callback(response);
     })
     .catch((error) => {
         console.log(error);
     })
 };