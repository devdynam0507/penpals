import { SIGNIN, SIGNOUT, GET_AUTH } from '../actions/authenticateAction';

const defaultState = {
    isLoggedIn: false,
    fetchingUpdate: false,
    user: {}
};

const authenticateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                fetchingUpdate: false,
                isLoggedIn: true,
                user: action.data
            };
		case SIGNOUT:
			return {
				...state,
				fetchingUpdate: false,
				isLoggedIn: false,
				user: {}
			}
		case GET_AUTH:
			return {
				...state,
			}
        default:
            return state;
    }
}

export default authenticateReducer;