import React, { Component } from 'react';
import Router from 'next/router';

export default class AuthenticationHOC extends Component {
	
	constructor(props) {
		super(props);
	}
	
	componentWillUpdate() {
		if(this.props.isLoggedIn) {
			// Messenger Component로 이동.
			Router.push('/messenger');
		}
	}
	
	render() {
		return (
			<>
				{ !this.props.isLoggedIn ? 
					this.props.children : null
				}
			</>
		)
	}
	
}