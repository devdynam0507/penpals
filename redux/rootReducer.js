import { combineReducers } from 'redux';

import authenticateReducer from './modules/authenticateReducer';
import messengerReducer from './modules/messengerReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: authenticateReducer,
	messenger: messengerReducer,
    form: formReducer
});

export default rootReducer;