import { combineReducers } from 'redux';

import authenticateReducer from './modules/authenticateReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: authenticateReducer,
    form: formReducer
});

export default rootReducer;