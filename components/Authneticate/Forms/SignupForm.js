import { React, Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignupForm extends Component {
	
	state = {
		isIdentifierOverlap: true
	};
	
	render() {
        const {
            handleSubmit,
            priestine, 
            submitting,
			checkIdentifierOverlap
        } = this.props;
		const { isIdentifierOverlap } = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="id"
                    type="text"
                    component="input"
                    placeholder="아이디를 입력하세요."
					onInput={ checkIdentifierOverlap(this, this.state) }
                />
                <Field
                    name="password"
                    type="password"
                    component="input"
                    placeholder="비밀번호를 입력하세요."
                />
                <button type="submit">회원가입</button>
            </form>
        )
    }
	
}

export default reduxForm({
    form: 'SignupForm'
})(SignupForm);