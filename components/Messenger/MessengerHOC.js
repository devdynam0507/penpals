import { React, Component } from 'react';
import Router from 'next/router';

export default class MessengerHOC extends Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidUpdate() {
		if(!this.props.isLoggedIn) {
			Router.push('/signin');
		}
	}
	
	render() {
		const children = this.props.children; 
		console.log(children);
		return (
			<>
				{ children }
			</>
		)
	}
	
}