import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { Provider } from 'react-redux';
import { createStore } from 'redux';


// js
import makeRequest from './components/scripts/make-request';


function reducer(state = {}, action) {
    if( action.type === 'add' ) {
        return state = {
            ...state,
            employees: action.employees
        }
    } 
    return state
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


async function collection() {
	let request = {
        method: 'GET',
        employees: {
            url: '/api/employees.json'
        }
    }

	let json = await makeRequest(request.method, request.employees.url, {}, true);

    let employees = JSON.parse(json);

    store.dispatch({ type: 'add', employees: employees });
}
collection();



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
