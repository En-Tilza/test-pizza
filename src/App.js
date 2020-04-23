import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// pages
import Header from './pages/header/header';
import Footer from './pages/footer/footer';
import Home from './pages/main-page/main-page';
import Employees from './pages/employees/employees';
import Employe from './pages/employe/employe';



function App() {
	return (
		<Router>
			<div className="page-wrapper">
				<Header />

				<Switch>
					<Route path="/employees">
						<Employees />
					</Route>

					<Route path="/employe">
						{/* <Employe /> */}
					</Route>

					<Route path="/">
						{/* <Home /> */}
					</Route>
				</Switch>
			</div>

			<Footer />
		</Router>
	)
}

export default App