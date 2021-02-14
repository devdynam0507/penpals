import { React, Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { submit } from './Submit';

class MessengerForm extends Component {
	
	render() {
		const {
            handleSubmit,
            priestine, 
            submitting,
			senderId,
			socket,
        } = this.props;
		
		return (
			<form onSubmit={handleSubmit(submit)}>
				<label> 제목 </label>
				<Field name="title" type="text" placeholder="제목을 입력하세요." component="input"/>
				<label> 닉네임 </label>
				<Field name="name" type="text" component="input"/>
				<label> 메세지 </label>
				<Field name="message" type="textarea" component="input"/>
				<button type="submit" disabled={priestine || submitting }>랜덤 전송</button>
			</form>
		)
	}
	
}

export default reduxForm({
    form: 'MessengerForm'
})(MessengerForm);