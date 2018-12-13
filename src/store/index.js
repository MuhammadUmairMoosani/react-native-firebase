import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import { createLogger} from 'redux-logger';

const store = createStore(RootReducer,
    {},
    applyMiddleware(createLogger(), thunk)
    );
    
export default store;