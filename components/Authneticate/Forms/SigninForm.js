import { React, Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SigninForm extends Component {
    
    render() {
        const {
            handleSubmit,
            priestine, 
            submitting
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="id"
                    type="text"
                    component="input"
                    placeholder="아이디를 입력하세요."
                />
                <Field
                    name="password"
                    type="password"
                    component="input"
                    placeholder="비밀번호를 입력하세요."
                />
                <button type="submit">send</button>
            </form>
        )
    }

}

export default reduxForm({
    form: 'SigninForm'
})(SigninForm);