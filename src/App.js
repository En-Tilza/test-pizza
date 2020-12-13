import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Employees from 'pages/Employees';
import Employee from 'pages/Employee';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'styles/general.scss';


import { useLocalStorage } from "hooks/useLocalStorage";



const getEmployees = async () => {
    return await new Promise((resolve, reject) => {
        fetch('./api/employees.json', {
            method: 'GET'
        }).then(resp => {
            if (resp.status == 200) {
                resolve(resp.json());
            } else {
                reject(Error('didn\'t load successfully; error code:' + resp.statusText));
            }
        })
    })
}



const App = () => {
    const [data, setData] = useLocalStorage('employees');
    const item = window.localStorage.getItem('employees');

    useState(() => {
        const awaitEmployees = async () => {
            const store = item ? JSON.parse(item) : await getEmployees();
            setData(store);
        };

        awaitEmployees();
    });
    return (
        <Router>
            <div className="page-wrapper">
                <Header />

                <Switch>
                    <Route path="/employee">
                        <Employee />
                    </Route>

                    <Route path="/">
                        <Employees />
                    </Route>
                </Switch>
            </div>

            <Footer />
        </Router>
    );
}


export default App;