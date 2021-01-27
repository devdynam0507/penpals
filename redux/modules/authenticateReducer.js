import { SIGNIN, REQUEST_SIGNIN, FAILURE_SIGNIN } from '../actions/authenticateAction';

const defaultState = {
    isLoggedIn: false,
    fetchingUpdate: false,
    user: {}
};

const authenticateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_SIGNIN:
            return {
                ...state,
                fetchingUpdate: true
            };
        case SIGNIN:
            return {
                ...state,
                fetchingUpdate: false,
                isLoggedIn: true,
                user: action.data
            };
        case FAILURE_SIGNIN:
            return {
                ...state,
                fetchingUpdate: false
            };
        default:
            return state;
    }
}

export default authenticateReducer;