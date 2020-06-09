import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import OpeningPage from './pages/OpeningPage';
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

import PopupMessage from './components/PopupMessage';
import Cookies from './components/Cookies';

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
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=SF+Pro+Display" />

		<Cookies message="We use cookies to understand our visitors and deliver our services in a better way. You are free to manage this through your browser settings at any time." />
		<PopupMessage message="We are deeply saddened by the recent events. Nobody deserves to die like George Floyd. Our
						hearts go out to his loved ones and everyone else affected by the recent events.
						#JusticeforGeorgeFloyd" />

		<Route path="/" exact component={OpeningPage} />
		<Route path="/patient-form" exact component={PatientForm} />
		<Route path="/driver-form" exact component={DriverForm} />
		<Route path="/submission-complete" exact component={Submitted} />
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
