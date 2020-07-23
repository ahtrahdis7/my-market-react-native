import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            //as per the provided API
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}