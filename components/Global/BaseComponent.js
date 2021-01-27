import { React, Component } from 'react';
import Navigation from './Navigation';
import GlobalStyles from './GlobalStyles';
import { connect } from 'react-redux';
import signin from '../../redux/actions/authenticateAction';

class BaseComponent extends Component {

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        const userRef = localStorage.getItem('user');

        if(userRef) {
            const userRefToJSON = JSON.parse(userRef);
            
            this.props.dispatch(signin(userRefToJSON.data.id, userRefToJSON.data.password, userRefToJSON.data.exists));
        }
    }

    render() {
        return (
            <div>
                <GlobalStyles/>
                <Navigation/>
                <h1>{ this.props.user.id } 님 환영합니다!</h1>
                { this.props.children }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
}
  
export default connect(mapStateToProps)(BaseComponent);