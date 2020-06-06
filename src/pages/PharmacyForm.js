import React, { useState, Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, Jumbotron, Col } from 'react-bootstrap';
import '../style.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { validate } from '@babel/types';

import firebase from '../Firebase';

const dbRef = firebase.database();
const userRef = dbRef.ref('pharmacies');

// const SPREADSHEET_ID = '1WkYBh37IZnmuUDh8epugi-8L1jb3SrgeyzXAibLvF80';
// const CLIENT_ID = '753856903731-16nb653ojn76ov85t0cn6epivvd3ie09.apps.googleusercontent.com';
// const API_KEY = 'AIzaSyCFgGKis8GVZMWcP2uGLhwe1vk1_pUmBVg';
// const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
// const gapi = window.gapi;

// const [redirect, setRedirect] = useState(false);
// const [validated, setValidated] = useState(false);

class Pharmacy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			validated: false,
			name: ' ',
			city: '',
			email: '',
			phone: '',
			state: '',
			street: '',
			street2: '',
			zip: '',
			notes: '',
			ownerName: '',
			ownerEmail: '',
			ownerPhone: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	nameHandler = (event) => {
		this.setState({ name: event.target.value });
	};
	emailHandler = (event) => {
		this.setState({ email: event.target.value });
	};
	phoneHandler = (event) => {
		this.setState({ phone: event.target.value });
	};
	street1Handler = (event) => {
		this.setState({ street1: event.target.value });
	};
	street2Handler = (event) => {
		this.setState({ street2: event.target.value });
	};
	cityHandler = (event) => {
		this.setState({ city: event.target.value });
	};
	stateHandler = (event) => {
		this.setState({ state: event.target.value });
	};
	zipHandler = (event) => {
		this.setState({ zip: event.target.value });
	};
	ownerNameHandler = (event) => {
		this.setState({ ownerName: event.target.value });
	};
	ownerEmailHandler = (event) => {
		this.setState({ ownerEmail: event.target.value });
	};
	ownerPhoneHandler = (event) => {
		this.setState({ ownerPhone: event.target.value });
	};
	notesHandler = (event) => {
		this.setState({ notes: event.target.value });
	};

	handleSubmit(e) {
		const form = e.currentTarget;
		// check the validity of the form (all filled)
		if (form.checkValidity() === false) {
			e.stopPropagation();
			e.preventDefault();
		} else {
			// variables for the user data
			var name = this.state.name;
			var notes = this.state.notes;
			var city = this.state.city;
			var email = this.state.email;
			var phone = this.state.phone;
			var state = this.state.state;
			var street = this.state.street1 + ', ' + this.state.street2;
			var zip = this.state.zip;
			var ownerName = this.state.ownerName;
			var ownerEmail = this.state.ownerEmail;
			var ownerPhone = this.state.ownerPhone;

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
						notes: notes,
						ownerEmail: ownerEmail,
						ownerName: ownerName,
						ownerPhone: ownerPhone
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
		// add this back if you want it not to add to the spreadsheet anymore
		// e.preventDefault();
	}

	// onSubmit={this.handleSubmit.bind(this)}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/submission-complete" />;
		}

		return (
			<div>
				<Header />
				<div className="pharm-background container center column-dir after-heading">
					<Jumbotron>
						<h2 className="jumbotron-title comfortaa">Welcome Pharmacies</h2>
						<Form
							id="form"
							noValidate
							validated={this.state.validated}
							action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfsTyI34qYJ_P3AAXPLDa1CpSzSkCYdEAgvLQyZfHEfaSMpsw/formResponse"
						>
							<h3 className="form">Pharmacy Information</h3>
							<Form.Group controlId="name">
								<Form.Label>Pharmacy Name</Form.Label>
								<Form.Control
									required
									onChange={this.nameHandler}
									type="name"
									placeholder="First Name"
									name="entry.1919240927"
								/>
							</Form.Group>

							<Form.Group controlId="email">
								<Form.Label>Pharmacy Email</Form.Label>
								<Form.Control
									required
									onChange={this.emailHandler}
									name="entry.1833673625"
									type="email"
									placeholder="Email"
								/>
							</Form.Group>

							<Form.Group controlId="phone">
								<Form.Label>Pharmacy Phone Number</Form.Label>
								<Form.Control
									required
									onChange={this.phoneHandler}
									type="tel"
									name="entry.914882574"
									placeholder="(###) ###-####"
								/>
							</Form.Group>

							<Form.Group controlId="street1">
								<Form.Label>Pharmacy Address</Form.Label>
								<Form.Control
									required
									name="entry.948646695"
									onChange={this.street1Handler}
									type="text"
									placeholder="ex. 123 Main St."
								/>
							</Form.Group>
							<Form.Group controlId="street2">
								<Form.Control
									type="text"
									name="entry.262837512"
									onChange={this.street2Handler}
									placeholder="Address 2 (ex. apt #)"
								/>
							</Form.Group>
							<Form.Row>
								<Form.Group as={Col} controlId="city">
									<Form.Label>City</Form.Label>
									<Form.Control
										required
										onChange={this.cityHandler}
										name="entry.1254947905"
										type="text"
										placeholder="City"
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="state">
									<Form.Label>State</Form.Label>
									<Form.Control
										required
										onChange={this.stateHandler}
										type="text"
										name="entry.23067813"
										placeholder="State"
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="zip">
									<Form.Label>Zip/Postal Code</Form.Label>
									<Form.Control
										required
										onChange={this.zipHandler}
										type="text"
										name="entry.1084243126"
										placeholder="Zip/Postal Code"
									/>
								</Form.Group>
							</Form.Row>

							<h3 className="form">Pharmacy Owner Information</h3>

							<Form.Group controlId="ownerName">
								<Form.Label>Pharmacy Owner's Name</Form.Label>
								<Form.Control
									required
									onChange={this.ownerNameHandler}
									type="text"
									name="entry.631529005"
									placeholder="Full Name"
								/>
							</Form.Group>

							<Form.Group controlId="ownerEmail">
								<Form.Label>Pharmacy Owner's Email</Form.Label>
								<Form.Control
									required
									onChange={this.ownerEmailHandler}
									type="email"
									placeholder="Email"
									name="entry.55116056"
								/>
							</Form.Group>
							<Form.Group controlId="ownerPhone">
								<Form.Label>Pharmacy Owner's Phone Number</Form.Label>
								<Form.Control
									required
									onChange={this.ownerPhoneHandler}
									type="tel"
									placeholder="(###) ###-####"
									name="entry.2129667208"
								/>
							</Form.Group>
							<Form.Group controlId="notes">
								<Form.Label>Additional Notes</Form.Label>
								<Form.Control
									as="textarea"
									name="entry.585748486"
									rows="3"
									onChange={this.notesHandler}
									placeholder="Please provide any additional notes to us that you would like us to know."
								/>
							</Form.Group>

							<Button variant="light" type="submit">
								SUBMIT
								{/* <Link to="/submission-complete">Submit</Link> */}
							</Button>
						</Form>
					</Jumbotron>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Pharmacy;

// componentDidMount() { //called automatically by React
//     this.handleClientLoad();
// }

// handleClientLoad = () => { //initialize the Google API
//     gapi.load('client:auth2', this.initClient);
// }

// initClient() {
//     gapi.client.init({
//         'apiKey': API_KEY,
//         'clientId': CLIENT_ID,
//         'scope': SCOPE,
//         'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//     }).then(function () {
//         gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
//         this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//     });
// }
// updateSignInStatus(isSignedIn) {
//     if (isSignedIn) {
//         console.log("hello");
//     }
// }

// initClient = () => { //provide the authentication credentials you set up in the Google developer console
//     gapi.client.init({
//         'apiKey': API_KEY,
//         'clientId': CLIENT_ID,
//         'scope': SCOPE,
//         'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//     }).then(() => {
//         // gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
//         // this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//         // setRedirect(true);
//     });
// }

// onFormSubmit(submissionValues) {

//     const params = {
//         // The ID of the spreadsheet to update.
//         spreadsheetId: SPREADSHEET_ID,
//         // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
//         range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
//         // How the input data should be interpreted.
//         valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
//         // How the input data should be inserted.
//         insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
//     };

//     console.log(params);

//     const valueRangeBody = {
//         'majorDimension': 'ROWS', //log each entry as a new row (vs column)
//         'values': [
//             ["anna1", "zhang1"]
//         ] //convert the object's values to an array
//     };

//     let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
//     request.then(function (response) {
//         // TODO: Insert desired response behaviour on submission
//         console.log(response.result);
//         this.redirect = true;
//     }, function (reason) {
//         console.error('error: ' + reason.result.error.message);
//     });
// }

// constructor(props) {
//     super(props);

//     this.handleSubmit = this.handleSubmit.bind(this);
// }

// componentDidMount() {

//     this.handleClientLoad();
// }

// handleClientLoad() {
//     gapi.load('client:auth2', this.initClient);
// }

// initClient = () => {
//     gapi.client.init({
//         'apiKey': API_KEY,
//         'clientId': CLIENT_ID,
//         'scope': SCOPE,
//         'discoveryDocs': ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
//     }).then(() => {
//         gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
//         this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//     });
// }
