import React, { Component } from 'react';
import Router from 'next/router';

export default class AuthenticationHOC extends Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidUpdate() {
		if(this.props.isLoggedIn) {
			alert('이미 로그인 된 회원입니다.');
		}
	}
	
	render() {
		return (
			<>
				{ this.props.children }
			</>
		)
	}
	
}