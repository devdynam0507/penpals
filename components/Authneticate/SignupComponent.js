import React, { Component } from 'react';
import Router from 'next/router';
import SignupForm from './Forms/SignupForm';
import { signup } from '../../redux/actions/authenticateAction';
import { connect } from 'react-redux';
import { isJoined, requestSignupAsPost } from '../../server/asyncConnections/UserAsync';

class SignupComponent extends Component {
	
	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		const userObjectSize = Object.keys(this.props.user).length;
		
		if(this.props.isLoggedIn) {
			alert('이미 로그인 된 회원입니다.');
			Router.push('/')
		}
	}
	
	render() {
		return (
			<>
				<SignupForm onSubmit={ this.props.onSubmitSignupForm }/>
			</>
		)
	}
	
}

const onRequestComplete = (success) => {
	if(success) {
		Router.push('/');
	} else {
		alert('Signup rejected');
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
        onSubmitSignupForm: async (data) => {
            const id = data.id;
            const password = data.password;
			
			if(id == undefined || password == undefined) {
				alert(JSON.stringify(data));
			} else {
				alert(id);
				requestSignupAsPost(id, password).then((res) => {
					onRequestComplete(res.data.success);
				});	
			}
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);