import React, { useState, Component } from "react";
import { Redirect } from 'react-router';
import { Button, Form, Jumbotron, Col } from 'react-bootstrap'
import '../style.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { validate } from "@babel/types";

const SPREADSHEET_ID = '1WkYBh37IZnmuUDh8epugi-8L1jb3SrgeyzXAibLvF80';
const CLIENT_ID = '753856903731-16nb653ojn76ov85t0cn6epivvd3ie09.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCFgGKis8GVZMWcP2uGLhwe1vk1_pUmBVg';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const gapi = window.gapi;

// const [redirect, setRedirect] = useState(false);
// const [validated, setValidated] = useState(false);

class Pharmacy extends Component {

    state = {
        redirect: false,
        validated: false,
    }

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this); //to tie the form's callback to this class
    }

    componentDidMount() { //called automatically by React
        this.handleClientLoad();
    }

    handleClientLoad = () => { //initialize the Google API
        gapi.load('client:auth2', this.initClient);
    }

    initClient() {
        gapi.client.init({
            'apiKey': API_KEY,
            'clientId': CLIENT_ID,
            'scope': SCOPE,
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        }).then(function () {
            gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
            this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    }
    updateSignInStatus(isSignedIn) {
        if (isSignedIn) {
            console.log("hello");
        }
    }


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

    onFormSubmit(submissionValues) {

        const params = {
            // The ID of the spreadsheet to update.
            spreadsheetId: SPREADSHEET_ID,
            // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
            range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
            // How the input data should be interpreted.
            valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
            // How the input data should be inserted.
            insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
        };

        console.log(params);

        const valueRangeBody = {
            'majorDimension': 'ROWS', //log each entry as a new row (vs column)
            'values': [
                ["anna1", "zhang1"]
            ] //convert the object's values to an array
        };

        let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
        request.then(function (response) {
            // TODO: Insert desired response behaviour on submission
            console.log(response.result);
            this.redirect = true;
        }, function (reason) {
            console.error('error: ' + reason.result.error.message);
        });
    }

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


    // handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     // check validity
    //     // if (form.checkValidity() === false) {
    //     //     event.stopPropagation();
    //     //     event.preventDefault();
    //     // } else {
    //     // submit to google spreadsheets
    //     const params = {
    //         spreadsheetId: SPREADSHEET_ID,
    //         range: 'Sheet1',
    //         valueInputOption: 'RAW',
    //         insertDataOption: 'INSERT_ROWS',
    //     }

    //     const valueRangeBody = {
    //         'majorDimension': 'ROWS',
    //         'values': [
    //             "Anna1",
    //             "Zhang1"
    //         ]
    //     }

    //     let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    //     request.then(function (response) {
    //         // TODO: Insert desired response behaviour on submission
    //         console.log(response.result);
    //     }, function (reason) {
    //         console.error('error: ' + reason.result.error.message);
    //     });



    //     //}
    //     //setValidated(true);



    // };

    render() {
        if (this.redirect) {
            return <Redirect to="/submission-complete" />
            // validated={validated}
        }

        return (

            <div>
                <Header />
                <div class="pharm-background container center column-dir after-heading">
                    <Jumbotron>
                        <h2 class="jumbotron-title">Welcome Pharmacies</h2>
                        <Form id="form" noValidate validated={this.validated} onSubmit={this.onFormSubmit}>
                            <h3 class="form">Pharmacy Information</h3>
                            <Form.Group controlId="name">
                                <Form.Label>Pharmacy Name</Form.Label>
                                <Form.Control required type="name" placeholder="First Name" />
                            </Form.Group>
                            {/* 
                            <Form.Group controlId="email">
                                <Form.Label>Pharmacy Email</Form.Label>
                                <Form.Control required type="email" placeholder="Email" />
                            </Form.Group>
    
                            <Form.Group controlId="phone">
                                <Form.Label>Pharmacy Phone Number</Form.Label>
                                <Form.Control required type="tel" placeholder="(###) ###-####" />
                            </Form.Group>
    
                            <Form.Group controlId="address1">
                                <Form.Label>Pharmacy Address</Form.Label>
                                <Form.Control required type="text" placeholder="ex. 123 Main St." />
                            </Form.Group>
                            <Form.Group controlId="address2">
                                <Form.Control type="text" placeholder="Address 2 (ex. apt #)" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required type="text" placeholder="City" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="zip">
                                    <Form.Label>Zip/Postal Code</Form.Label>
                                    <Form.Control required type="text" placeholder="Zip/Postal Code" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="country">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control required type="text" placeholder="Country" />
                                </Form.Group>
                            </Form.Row>
    
                            <h3 class="form">Pharmacy Owner Information</h3>
    
                            <Form.Group controlId="ownerName">
                                <Form.Label>Pharmacy Owner's Name</Form.Label>
                                <Form.Control required type="text" placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group controlId="ownerPhone">
                                <Form.Label>Pharmacy Owner's Phone Number</Form.Label>
                                <Form.Control required type="tel" placeholder="(###) ###-####" />
                            </Form.Group>
                            <Form.Group controlId="ownerEmail">
                                <Form.Label>Pharmacy Owner's Email</Form.Label>
                                <Form.Control required type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="notes">
                                <Form.Label>Additional Notes</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Please provide any additional notes to us that you would like us to know." />
                            </Form.Group> */}


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
