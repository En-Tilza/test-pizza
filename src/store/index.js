import {
    createStore,
    combineReducers
} from 'redux';  

import employees from './employees/reducer';


const rootReducer = combineReducers({ employees });



const makeStore = (initialState = {}) => {
    let store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}


export let store = makeStore();