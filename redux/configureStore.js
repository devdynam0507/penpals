import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const configureStore = () => {
    const logger = createLogger();
    const enhancer = compose(applyMiddleware(logger));
    
    return createStore(rootReducer, enhancer);
}

const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;