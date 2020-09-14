import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Button, Form, Jumbotron, Col } from 'react-bootstrap';
import '../style.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import firebase from '../Firebase';

const dbRef = firebase.database();
const userRef = dbRef.ref('drivers');

const ctform =
	'https://docs.google.com/forms/u/0/d/e/1FAIpQLScwwvFBTWeY7Gl6jcASqWPxK-lVXaLba0FXeoc5GDTGdR9s6A/formResponse';

const nvform =
	'https://docs.google.com/forms/u/0/d/e/1FAIpQLScMUu4z1MpR6pyQHTmc8dPnq9waGisEthw_4TPpqiuOl4IMag/formResponse';

const ilform =
	'https://docs.google.com/forms/u/0/d/e/1FAIpQLSclxIfwlqwzloJrNNFZL2w8vZo9Ki7y2JOXZYi7VzpTDGtlWA/formResponse';

const formVals = [
	'',
	'entry.82345234',
	'entry.1477261172',
	'entry.185618432',
	'entry.11580172',
	'entry.1011352520',
	'entry.2088614360',
	'entry.461554111',
	'entry.755080364',
	'entry.1238202128',
	'entry.1259681042',
	'entry.1313889894',
	'entry.93040506',
	'entry.1429598282'
];

class DriverForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			validated: false,
			firstName: ' ',
			lastName: ' ',
			availability: '',
			miles: '',
			notes: '',
			city: '',
			email: '',
			phone: '',
			state: '',
			street: '',
			street2: '',
			zip: '',
			hearaboutus: '',
			stateSelector: '',
			formSelector: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// HANDLERS FOR THE FORM INPUTS

	firstNameHandler = (event) => {
		this.setState({ firstName: event.target.value });
	};
	lastNameHandler = (event) => {
		this.setState({ lastName: event.target.value });
	};
	availabilityHandler = (event) => {
		this.setState({ availability: event.target.value });
	};
	milesHandler = (event) => {
		this.setState({ miles: event.target.value });
	};
	notesHandler = (event) => {
		this.setState({ notes: event.target.value });
	};
	cityHandler = (event) => {
		this.setState({ city: event.target.value });
	};
	emailHandler = (event) => {
		this.setState({ email: event.target.value });
	};
	phoneHandler = (event) => {
		this.setState({ phone: event.target.value });
	};
	stateHandler = (event) => {
		this.setState({ state: event.target.value });
	};
	streetHandler = (event) => {
		this.setState({ street: event.target.value });
	};
	street2Handler = (event) => {
		this.setState({ street2: event.target.value });
	};
	zipHandler = (event) => {
		this.setState({ zip: event.target.value });
	};
	hearHandler = (event) => {
		this.setState({ hearaboutus: event.target.value });
	};

	handleSubmit(e) {
		const form = e.currentTarget;
		// check the validity of the form (all filled)
		if (form.checkValidity() === false) {
			e.stopPropagation();
			e.preventDefault();
		} else {
			// variables for the user data
			var name = this.state.firstName + ' ' + this.state.lastName;
			// var birthday = this.state.birthday;
			var availability = this.state.availability;
			var miles = this.state.miles;
			var notes = this.state.notes;
			var city = this.state.city;
			var email = this.state.email;
			var phone = this.state.phone;
			var state = this.state.state;
			var street = this.state.street + ', ' + this.state.street2;
			var zip = this.state.zip;
			var hearaboutus = this.state.hearaboutus;

			// sign in anonymously
			firebase.auth().signInAnonymously().catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorMessage);
			});
			console.log('User Anonymously Signed In');

			// make sure the user exists to prevent error messages
			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					var userid = user.uid;
					console.log(userid);

					// push the user data to the database
					userRef.push({
						city: city,
						email: email,
						id: userid,
						name: name,
						phone: phone,
						state: state,
						street: street,
						zip: zip,
						availability: availability,
						miles: miles,
						notes: notes,
						hearaboutus: hearaboutus
					});
				} else {
					// User is signed out.
					// ...
					console.log('no user');
				}
				// ...
			});
			this.setState({ redirect: true });
		}
		this.setState({ validated: true });
	}

	formHandler() {
		if (this.state.stateSelector == '') {
			return (
				<div className="container column-dir center">
					<h3 className="form-subheading center-text">Please Select Your State</h3>
					<div>
						<Button
							className="donation-btn"
							variant="light"
							onClick={() => this.setState({ stateSelector: 'Connecticut', formSelector: ctform })}
						>
							Connecticut
						</Button>
						<Button
							className="donation-btn"
							variant="light"
							onClick={() => this.setState({ stateSelector: 'Nevada', formSelector: nvform })}
						>
							Nevada
						</Button>
						<Button
							className="donation-btn"
							variant="light"
							onClick={() => this.setState({ stateSelector: 'Illinois', formSelector: ilform })}
						>
							Illinois
						</Button>
					</div>
				</div>
			);
		} else {
			return (
				<Form noValidate action={this.state.formSelector} validated={this.state.validated}>
					<h3 className="form-subheading">Personal Information</h3>
					<Form.Row>
						<Form.Group as={Col} controlId="name">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								name={formVals[1]}
								required
								onChange={this.firstNameHandler}
								type="name"
								placeholder="First Name"
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="lastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								name={formVals[2]}
								required
								onChange={this.lastNameHandler}
								type="name"
								placeholder="Last Name"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							name={formVals[3]}
							required
							onChange={this.emailHandler}
							type="email"
							placeholder="Email"
						/>
					</Form.Group>

					<Form.Group controlId="phone">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							name={formVals[4]}
							required
							onChange={this.phoneHandler}
							type="tel"
							placeholder="(###) ###-####"
						/>
					</Form.Group>

					<Form.Group controlId="address1">
						<Form.Label>Address 1</Form.Label>
						<Form.Control
							name={formVals[5]}
							required
							onChange={this.streetHandler}
							type="text"
							placeholder="ex. 123 Main St."
						/>
					</Form.Group>
					<Form.Group controlId="address2">
						<Form.Control
							name={formVals[6]}
							type="text"
							onChange={this.street2Handler}
							placeholder="Address 2 (ex. apt #)"
						/>
					</Form.Group>
					<Form.Row>
						<Form.Group as={Col} controlId="city">
							<Form.Label>City</Form.Label>
							<Form.Control
								name={formVals[7]}
								required
								onChange={this.cityHandler}
								type="text"
								placeholder="City"
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="state">
							<Form.Label>State</Form.Label>
							<Form.Control
								name={formVals[8]}
								required
								onChange={this.stateHandler}
								type="text"
								placeholder="State"
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="zip">
							<Form.Label>Zip/Postal Code</Form.Label>
							<Form.Control
								name={formVals[9]}
								required
								type="text"
								onChange={this.zipHandler}
								placeholder="Zip/Postal Code"
							/>
						</Form.Group>
					</Form.Row>

					<h3 className="form-subheading">Driver Information</h3>

					<Form.Group controlId="milesTravel">
						<Form.Label>How many miles are you willing to travel?</Form.Label>
						<Form.Control
							name={formVals[10]}
							required
							onChange={this.milesHandler}
							type="text"
							placeholder="ex. 10 miles"
						/>
					</Form.Group>
					{/* <Form.Group controlId="availability">
						<Form.Label>What days and times are you available?</Form.Label>
						<Form.Control
							name={formVals[11]}
							required
							onChange={this.availabilityHandler}
							as="textarea"
							rows="3"
							placeholder="ex. Fridays 9AM-4PM"
						/>
					</Form.Group> */}
					<Form.Group controlId="notes">
						<Form.Label>Additional Notes</Form.Label>
						<Form.Control
							name={formVals[12]}
							as="textarea"
							rows="3"
							onChange={this.notesHandler}
							placeholder="Please provide any additional notes to us that you would like us to know."
						/>
					</Form.Group>

					<Form.Group>
						<h3 className="form-subheading">Instructions</h3>
						<Form.Text>Please read the follow instructions that we ask for drivers: </Form.Text>
						<Form.Text>1. Use the pharmacy drive through if one is available.</Form.Text>
						<Form.Text>2. Call the patient before you arrive at their residence.</Form.Text>
						<Form.Text>
							3. Ring the bell or knock on the door, leave the meds in front of the door, stay back at
							least 6 feet and watch the patient take the package before you leave.
						</Form.Text>
						<Form.Text>4. Please use hand sanitizer and wash your hands as often as possible.</Form.Text>
						<Form.Text>
							5. Follow all{' '}
							<a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">COVID-19 guidelines</a>{' '}
							provided by the CDC{' '}
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="instructionsCheck">
						<Form.Check
							name="entry.1069442594_sentinel"
							required
							type="checkbox"
							label="Please check this box when you have read and understood our instructions."
						/>
					</Form.Group>
					<Form.Group>
						<h3 className="form-subheading">Disclaimer</h3>
						<Form.Text>Terms and Conditions: </Form.Text>
						<Form.Text>
							As a Pills2Me driver, I attest that I have an active car insurance policy and Pill2Me is
							not liable for any accidents that might occur while driving for Pills2Me. I
							will follow the CDC guidelines on Covid-19 prevention and allow and practice social
							distancing at all times while interacting with the patients and at the pharmacy.{' '}
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="instructionsCheck">
						<Form.Check
							name="entry.1914461429_sentinel"
							required
							type="checkbox"
							label="“By submitting this form, I attest that I am at least 18 years old and below the age of 65 years and have no symptoms or risk factors of Covid-19 per the CDC guidelines. I have also read and accept the terms and conditions above.”"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>How did you hear about us?</Form.Label>
						<Form.Control name={formVals[13]} onChange={this.hearHandler} required type="text" />
					</Form.Group>

					<Button variant="light" type="submit">
						SUBMIT
					</Button>
				</Form>
			);
		}
	}

	//onSubmit={this.handleSubmit.bind(this)}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/submission-complete" />;
		} else {
			return (
				<div>
					<Header />
					<div className="pharm-background background-form container center column-dir after-heading">
						<Jumbotron>
							<h2 className="jumbotron-title comfortaa">Welcome Drivers</h2>
							{this.formHandler()}
						</Jumbotron>
						<Footer />
					</div>
				</div>
			);
		}
	}
}

export default DriverForm;
