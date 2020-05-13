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


const App = () => (
	<div class="center-text">
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Comfortaa" />
		<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

		<Route path="/" exact component={OpeningPage} />
		<Route path="/signup" exact component={SignUp} />
		<Route path="/patient-form" exact component={PatientForm} />
		<Route path="/driver-form" exact component={DriverForm} />
		<Route path="/submission-complete" exact component={Submitted} />
		<Route path="/login" exact component={SignUp} />
		<Route path="/about" exact component={About} />
		<Route path="/news" exact component={News} />
	</div>
)

export default App;