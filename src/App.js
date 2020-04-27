import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import Header from 'components/header';
import Footer from 'components/footer';
import PageWrapper from 'components/page-wrapper';
import Home from 'pages/main-page';
import Employees from 'pages/employees';
import Employe from 'pages/employe';



function App() {
	return (
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
	)
}

export default App