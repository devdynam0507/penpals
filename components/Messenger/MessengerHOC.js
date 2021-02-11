import React, { Component } from 'react';

export default class MessengerHOC extends Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidUpdate() {
		
	}
	
	render() {
		return (
			<>
				{ this.props.children }
			</>
		)
	}
	
}