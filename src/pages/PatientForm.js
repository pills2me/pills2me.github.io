import React, { Component } from "react";
import { Button, Form, Jumbotron, Col } from 'react-bootstrap'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import firebase from '../Firebase';
import { thisExpression } from "@babel/types";

const dbRef = firebase.database();
const userRefDrugs = dbRef.ref('drugs');
const userRefPatients = dbRef.ref('patients');


const ctForm = [];

class PatientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            validated: false,
            firstName: " ",
            lastName: " ",
            notes: "",
            birthday: " ",
            city: "",
            email: "",
            phone: "",
            state: "",
            street: "",
            street2: "",
            zip: "",
            hearaboutus: "",
            pharm: "",
            pharmCity: "",
            pharmPhone: "",
            pharmState: "",
            pharmStreet1: "",
            pharmStreet2: "",
            pharmZip: "",
            copay: false,
            stateSelector: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // HANDLERS FOR THE FORM INPUTS

    firstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    lastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    birthdayHandler = (event) => {
        this.setState({ birthday: event.target.value });
    }
    notesHandler = (event) => {
        this.setState({ notes: event.target.value });
    }
    cityHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    emailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    phoneHandler = (event) => {
        this.setState({ phone: event.target.value });
    }
    stateHandler = (event) => {
        this.setState({ state: event.target.value });
    }
    streetHandler = (event) => {
        this.setState({ street: event.target.value });
    }
    street2Handler = (event) => {
        this.setState({ street2: event.target.value });
    }
    zipHandler = (event) => {
        this.setState({ zip: event.target.value });
    }
    hearHandler = (event) => {
        this.setState({ hearaboutus: event.target.value });
    }
    pharmHandler = (event) => {
        this.setState({ pharm: event.target.value });
    }
    pharmCityHandler = (event) => {
        this.setState({ pharmCity: event.target.value });
    }
    pharmPhoneHandler = (event) => {
        this.setState({ pharmPhone: event.target.value });
    }
    pharmStateHandler = (event) => {
        this.setState({ pharmState: event.target.value });
    }
    pharmStateHandler = (event) => {
        this.setState({ pharmState: event.target.value });
    }
    pharmStreet1Handler = (event) => {
        this.setState({ pharmStreet1: event.target.value });
    }
    pharmStreet2Handler = (event) => {
        this.setState({ pharmStreet2: event.target.value });
    }
    pharmZipHandler = (event) => {
        this.setState({ pharmZip: event.target.value });
    }
    copayHandler = (event) => {
        this.setState({ copay: !this.state.copay });
    }

    handleSubmit(e) {
        const form = e.currentTarget;
        // check the validity of the form (all filled)
        if (form.checkValidity() === false) {
            e.stopPropagation();
            e.preventDefault();
        } else {
            // variables for the user data
            var name = this.state.firstName + " " + this.state.lastName;
            var birthday = this.state.birthday;
            var notes = this.state.notes;
            var city = this.state.city;
            var email = this.state.email;
            var phone = this.state.phone;
            var state = this.state.state;
            var street = this.state.street + ", " + this.state.street2;
            var zip = this.state.zip;
            var hearaboutus = this.state.hearaboutus;
            var pharm = this.state.pharm;
            var pharmCity = this.state.pharmCity;
            var pharmPhone = this.state.pharmPhone;
            var pharmState = this.state.pharmState;
            var pharmStreet = this.state.pharmStreet1 + ", " + this.state.pharmStreet2;
            var pharmZip = this.state.pharmZip;
            var copay = this.state.copay;

            // sign in anonymously
            firebase.auth().signInAnonymously().catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
            console.log("User Anonymously Signed In");

            // make sure the user exists to prevent error messages
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var userid = user.uid;
                    console.log(userid);

                    // push the user data to the patients node in the database
                    userRefPatients.push({
                        city: city,
                        birthday: birthday,
                        email: email,
                        id: userid,
                        name: name,
                        phone: phone,
                        state: state,
                        street: street,
                        zip: zip,
                        notes: notes,
                        hearaboutus: hearaboutus
                    });

                    // push the user data to the drugs node in the database
                    userRefDrugs.push({
                        city: city,
                        copay: copay,
                        birthday: birthday,
                        email: email,
                        id: userid,
                        name: name,
                        phone: phone,
                        state: state,
                        street: street,
                        zip: zip,
                        notes: notes,
                        hearaboutus: hearaboutus,
                        pharmacy: pharm,
                        pharmacyCity: pharmCity,
                        pharmacyPhone: pharmPhone,
                        pharmacyState: pharmState,
                        pharmacyStreet: pharmStreet,
                        pharmacyZip: pharmZip,
                        completed: false,
                    });


                } else {
                    // User is signed out.
                    // ...
                    console.log("no user");
                }
                // ...




            })
            this.setState({ redirect: true });
        }
        this.setState({ validated: true });

    }

    formHandler() {
        if (this.state.stateSelector == "") {
            return (
                <div className="container column-dir center">
                    <h3 className="form-subheading center-text" >Please Select Your State</h3>
                    <div>
											<Button
												className="donation-btn"
												variant="light"
												onClick={() => this.setState({ stateSelector: "Connecticut"})}
											>
												Connecticut
											</Button>
											<Button
												className="donation-btn"
												variant="light"
												onClick={() => this.setState({ stateSelector: "Nevada"})}
											>
												Nevada
											</Button>
											<Button
												className="donation-btn"
												variant="light"
												onClick={() => this.setState({ stateSelector: "Illinois"})}
											>
												Illinois
											</Button>
										</div>
                </div>
            );
        } else {
            return (
            <div>
                <h3 className="form-subheading">Personal Information</h3>
            <Form.Row>
                <Form.Group as={Col} controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                    name="entry.1148577921"
                        required
                        type="text"
                        placeholder="First name"
                        onChange={this.firstNameHandler}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="entry.2018158473" required onChange={this.lastNameHandler} type="text" placeholder="Last Name" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control name="entry.2136730629" required onChange={this.emailHandler} type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="entry.1588733925" required onChange={this.phoneHandler} type="tel" placeholder="(###) ###-####" />
            </Form.Group>
            <Form.Group controlId="birthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control name="entry.1566583663" required onChange={this.birthdayHandler} type="date" placeholder="MM/DD/YYYY" />
            </Form.Group>

            <Form.Group controlId="address1">
                <Form.Label>Delivery Address 1</Form.Label>
                <Form.Control name="entry.2047640905" required onChange={this.streetHandler} type="text" placeholder="ex. 123 Main St." />
            </Form.Group>
            <Form.Group controlId="address2">
                <Form.Control  name="entry.105694119" type="text" onChange={this.street2Handler} placeholder="Address 2 (ex. apt #)" />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control name="entry.1449622927" required onChange={this.cityHandler} type="text" placeholder="City" />
                </Form.Group>
                <Form.Group as={Col} controlId="state">
                    <Form.Label>State/Province</Form.Label>
                    <Form.Control name="entry.2066035813" required onChange={this.stateHandler} type="text" placeholder="State/Province" />
                </Form.Group>
                <Form.Group as={Col} controlId="zip">
                    <Form.Label>Zip/Postal Code</Form.Label>
                    <Form.Control name="entry.567153649" required onChange={this.zipHandler} type="text" placeholder="Zip/Postal Code" />
                </Form.Group>

            </Form.Row>
            <h3 className="form-subheading">Prescription Pickup Information</h3>

            <Form.Group controlId="pharmacy">
                <Form.Label>Pharmacy Name</Form.Label>
                <Form.Control name="entry.334302613" required onChange={this.pharmHandler} type="text" placeholder="Pharmacy Name" />
            </Form.Group>
            <Form.Group controlId="pharmacy-phone">
                <Form.Label>Pharmacy Phone Number</Form.Label>
                <Form.Control name="entry.961570699" required onChange={this.pharmPhoneHandler} type="tel" placeholder="(XXX) XXX-XXXX" />
            </Form.Group>

            <Form.Group controlId="address1">
                <Form.Label>Pharmacy Address 1</Form.Label>
                <Form.Control name="entry.1130267675" required onChange={this.pharmStreet1Handler} type="text" placeholder="ex. 123 Main St." />
            </Form.Group>
            <Form.Group controlId="address2">
                <Form.Control name="entry.1454592168" onChange={this.pharmStreet2Handler} type="text" placeholder="Address 2 (ex. apt #)" />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control name="entry.1882273497" required onChange={this.pharmCityHandler} type="text" placeholder="City" />
                </Form.Group>
                <Form.Group as={Col} controlId="state">
                    <Form.Label>State/Province</Form.Label>
                    <Form.Control name="entry.934622981" required onChange={this.pharmStateHandler} type="text" placeholder="State/Province" />
                </Form.Group>
                <Form.Group as={Col} controlId="zip">
                    <Form.Label>Zip/Postal Code</Form.Label>
                    <Form.Control name="entry.501020162" required onChange={this.pharmZipHandler} type="text" placeholder="Zip/Postal Code" />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="copay">
                <Form.Label>Does your prescription have a copay? If yes, please include how much your copay is    </Form.Label>
                <Form.Control name="entry.712556072" required  type="text" placeholder="Yes or No" />
                {/* <Form.Check required inline checked={this.state.copay} onClick={this.copayHandler} label="Yes" type="radio" />
                <Form.Check required inline checked={!this.state.copay} onClick={this.copayHandler} label="No" type="radio" /> */}
            </Form.Group>

            <Form.Group controlId="notes">
                <Form.Label>Additional Notes</Form.Label>
                <Form.Control name="entry.416985133" as="textarea" onChange={this.notesHandler} rows="3" placeholder="Please provide any additional notes to us that you would like us to know." />
            </Form.Group>

            <Form.Group controlId="ready">
                <Form.Label>Is your prescription ready for pickup?</Form.Label>
                <Form.Check required inline label="Please check this only if your prescription is ready for pickup from your listed pharmacy." type="checkbox" />
            </Form.Group>
            <Form.Group>
                <h3 className="form-subheading">Disclaimer</h3>
                <Form.Check required type="checkbox" label="By submitting the form, you are authorizing one of our volunteers to pick up and deliver your medication(s). We will do our best to deliver their medications as fast as we can (same day), but cannot guarantee that in all cases due to circumstances that might arise beyond our control." />
            </Form.Group>
            <Form.Group>
                <Form.Label>How did you hear about us?</Form.Label>
                <Form.Control name="entry.619637477" required onChange={this.hearHandler} type="text"></Form.Control>
            </Form.Group>
            <Button variant="light" type="submit">
                SUBMIT
                {/* <Link to="/submission-complete">SUBMIT</Link> */}

            </Button>
            </div>
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
                            <h2 className="jumbotron-title comfortaa">Welcome Patients</h2>
                            <Form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSev69qaNCRzJEmvH1QqRjd2H8IvtU4MwrTJN_-oo8v0pgAudg/formResponse" noValidate validated={this.state.validated} >
                                <h6 className="center-text" style={{marginBottom: '20px'}}>Our delivery service is 100% free of charge. We deliver your medications right to your doorstep. Our goal is to promote public health and social distancing practices to prevent further spread of coronavirus (COVID-19). </h6>
                                <h6 className="center-text bold">We do not deliver controlled medications at this time</h6>
                                {this.formHandler()}
                            </Form>
                        </Jumbotron>
                        <Footer />
                    </div>
                </div >

            );
        }

    }





}


export default PatientForm;
