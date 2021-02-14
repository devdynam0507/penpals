import { SEND_MESSAGE, RECEIVE_MESSAGE } from '../actions/messengerAction';

const defaultState = {
	amountOfMessage: 0,
	sendedMessage: 0,
};

const messengerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
				amountOfMessage: ++state.amountOfMessage
            };
		case RECEIVE_MESSAGE:
			return {
				...state,
				sendedMessage: ++state.sendedMessage
			}
        default:
            return state;
    }
}

export default messengerReducer;