import React, { Component } from 'react';
import Navigation from './Navigation';
import GlobalStyles from './GlobalStyles';
import { connect } from 'react-redux';
import { signin } from '../../redux/actions/authenticateAction';

class BaseComponent extends Component {

	// 서버사이드 렌더링이라 localStorage를 render()에서 쓸수가 없음.
	// render가 완료된 후 LifeCycle API를 이용하여 authentication 정보 로드
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
		// 모든 자식들에게 props로 user 정보를 넘겨줌.
		// 자식 컴포넌트에선 props로 받아서 유저정보 접근 가능
		// BaseComponent에서 redux로 유저정보 패치받음 line:43
		const child = React.cloneElement(this.props.children, { user: this.props.user });
		
        return (
            <div>
                <GlobalStyles/>
                <Navigation/>
				{ child }
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