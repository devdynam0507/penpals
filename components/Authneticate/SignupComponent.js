import React, { Component } from 'react';
import Router from 'next/router';
import SignupForm from './Forms/SignupForm';
import { connect } from 'react-redux';
import { isJoined } from '../../server/asyncConnections/UserAsync';

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
			<SignupForm handleSubmit={ this.props.onSubmitSignupForm } checkIdentifierOverlap={ this.props.checkIdentifierOverlap }/>
		)
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
        onSubmitSignupForm: (data) => {
            const id = data.id;
            const password = data.password;
			
			const isJoined = await isJoined(id).exists;
			
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);