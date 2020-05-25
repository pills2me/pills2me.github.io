import React, { useState } from "react";
import { Redirect } from 'react-router';
import { Button, Form, Jumbotron, Col } from 'react-bootstrap'
import '../style.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const SPREADSHEET_ID = '1WkYBh37IZnmuUDh8epugi-8L1jb3SrgeyzXAibLvF80';
const CLIENT_ID = '753856903731-16nb653ojn76ov85t0cn6epivvd3ie09.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCFgGKis8GVZMWcP2uGLhwe1vk1_pUmBVg';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

function Pharmacy() {
    const [redirect, setRedirect] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        // check validity
        if (form.checkValidity() === false) {
            event.stopPropagation();
            event.preventDefault();
        } else {
            // submit to google spreadsheets
            const params = {
                range: 'Sheet1'
            }




            setRedirect(true);
        }
        setValidated(true);



    };


    if (redirect) {
        return <Redirect to="/submission-complete" />;
    }
    return (

        <div>
            <Header />
            <div class="pharm-background container center column-dir after-heading">
                <Jumbotron>
                    <h2 class="jumbotron-title">Welcome Pharmacies</h2>
                    <Form id="form" noValidate validated={validated} onSubmit={handleSubmit}>
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
};

export default Pharmacy;