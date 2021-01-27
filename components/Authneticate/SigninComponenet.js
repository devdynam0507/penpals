import { React, Component } from 'react';
import { connect } from 'react-redux';
import SigninForm from './Forms/SigninForm';
import Router from 'next/router';
import signin from '../../redux/actions/authenticateAction';
import requestSigninAsPost from '../../server/asyncConnections/UserAsync';

class SigninComponenet extends Component {

    render() {
        return (
            <>
                <SigninForm onSubmit={ this.props.onSubmitSigninForm }/>
            </>
        )
    }

}

function onRequestComplete(isSuccess) {
    if(isSuccess) {
        Router.push('/');
    } else {
        alert('Authentication rejected..');
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitSigninForm: (data) => {
            const id = data.id;
            const password = data.password;
            
            requestSigninAsPost(id, password).then((res) => {
                const actionRes = dispatch(signin(res.data.identifier, res.data.password, res.data.exists));
                localStorage.setItem('user', JSON.stringify(actionRes));
                onRequestComplete(actionRes.data.exists);                
            });
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SigninComponenet);