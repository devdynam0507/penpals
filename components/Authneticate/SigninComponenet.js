import { React, Component } from 'react';
import { connect } from 'react-redux';
import SigninForm from './Forms/SigninForm';
import requestSigninPost from '../../server/asyncConnections/UserAsync';
import Router from 'next/router';

class SigninComponenet extends Component {

    onReceiveFromServer(response) {
        console.log("onReceiveFromServer json string:" + JSON.stringify(response));
        console.log("onReceiveFromServer exists:" + response.data.exists);
        
        if(!response.data.exists) {
            alert('Id, pw가 일치하지 않습니다.');
        } else {
            Router.push('/');
        }
    }

    submitSigninForm = (data) => {
        const id = data.id;
        const password = data.password;

        requestSigninPost(id, password, this.onReceiveFromServer);
    }

    render() {
        return (
            <SigninForm onSubmit={this.submitSigninForm}/>
        )
    }

}

export default connect()(SigninComponenet);