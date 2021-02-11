import { React, Component } from 'react';
import { connect } from 'react-redux';
import SigninForm from './Forms/SigninForm';
import Router from 'next/router';
import { signin } from '../../redux/actions/authenticateAction';
import { requestSigninAsPost } from '../../server/asyncConnections/UserAsync';
import Link from 'next/link';

class SigninComponenet extends Component {

    render() {
        return (
            <>
                <SigninForm onSubmit={ this.props.onSubmitSigninForm }/>
				<Link href="signup">
					<a> 회원이 아니신가요? </a>						
				</Link>
            </>
        )
    }

}

function onRequestComplete(isSuccess) {
    if(isSuccess) {
        Router.back();
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
				if(res.data.exists) {
					const actionRes = dispatch(signin(res.data.identifier, res.data.password, res.data.exists));
					localStorage.setItem('user', JSON.stringify(actionRes));	
				}
				
                onRequestComplete(res.data.exists);               
            });
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SigninComponenet);