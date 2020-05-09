import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from 'store/index';



import Header from 'components/header';
import Footer from 'components/footer';
import PageWrapper from 'components/page-wrapper';
import Home from 'pages/main-page';
import Employees from 'pages/employees';
import Employe from 'pages/employe';
import { addEmployees } from 'store/employees/actions';

import makeRequest from 'services/make-request';



class App extends Component {
	componentDidMount() {
		this.getEmployees();
	}

	async getEmployees() {
		let request = {
			method: 'GET',
			employees: {
				url: '/api/employees.json'
			}
		}
	
		let employees = await makeRequest(request.method, request.employees.url);

		store.dispatch(addEmployees(employees));
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<PageWrapper>
						<Header />
	
						<Switch>
							<Route path="/employees">
								<Employees />
							</Route>
	
							<Route path="/employee">
								<Employe />
							</Route>
	
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</PageWrapper>
	
					<Footer />
				</Router>
			</Provider>
		)
	}
}

export default App