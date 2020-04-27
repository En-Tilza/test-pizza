import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/index';
import { addEmployees } from 'store/employees/actions';

import makeRequest from 'services/make-request';


import App from 'App';
import * as serviceWorker from 'serviceWorker';



async function getEmployees() {
	let request = {
        method: 'GET',
        employees: {
            url: '/api/employees.json'
        }
    }

	let json = await makeRequest(request.method, request.employees.url, {}, true);

    let employees = JSON.parse(json);

    store.dispatch(addEmployees(employees));
}

getEmployees();

store.subscribe(() => {
    // console.log(store.getState())
})


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
