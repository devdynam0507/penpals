import { React, Component } from 'react';
import MessengerForm from './Forms/MessengerForm';
import { connect } from 'react-redux';

class MessengerComponent extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {		
		return (
			<MessengerForm senderId={this.props.user.id}/>
		)
	}
	
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
}

export default connect(mapStateToProps)(MessengerComponent);