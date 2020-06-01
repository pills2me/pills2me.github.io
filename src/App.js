import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import OpeningPage from './pages/OpeningPage';
import SignUp from './pages/SignUp';
import PatientForm from './pages/PatientForm';
import DriverForm from './pages/DriverForm';
import Submitted from './pages/Submitted';
import About from './pages/About';
import News from './pages/News';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Partner from './pages/Partner';
import Team from './pages/Team';
import Pharmacy from './pages/PharmacyForm';

import Favicon from 'react-favicon';

const App = () => (
	<div className="center-text">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Comfortaa" />
		<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
		/>
		<link
			href="//db.onlinewebfonts.com/c/0b51833ff62e4af8acb5fd3e2bf59e97?family=SF+Pro+Display"
			rel="stylesheet"
			type="text/css"
		/>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=SF+Pro+Display" />
		<Route path="/" exact component={OpeningPage} />
		<Route path="/signup" exact component={SignUp} />
		<Route path="/patient-form" exact component={PatientForm} />
		<Route path="/driver-form" exact component={DriverForm} />
		<Route path="/submission-complete" exact component={Submitted} />
		<Route path="/login" exact component={SignUp} />
		<Route path="/about" exact component={About} />
		<Route path="/news" exact component={News} />
		<Route path="/donate" exact component={Donate} />
		<Route path="/contact" exact component={Contact} />
		<Route path="/team" exact component={Team} />
		<Route path="/partner" exact component={Partner} />
		<Route path="/pharmacy-form" exact component={Pharmacy} />
	</div>
);

export default App;
