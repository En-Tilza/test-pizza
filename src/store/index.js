import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';  
import thunk from 'redux-thunk';

import employees from './employees/reducer';


const rootReducer = combineReducers({ store: employees });




const makeStore = (initialState = {}) => {
    let store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );

    return store;
}


export let store = makeStore();