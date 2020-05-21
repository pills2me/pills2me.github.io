import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Button, Card, Form, Jumbotron, Col } from 'react-bootstrap'
import '../style.css';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function DriverForm() {
    const [redirect, setRedirect] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            event.preventDefault();
        } else {
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
                    <h2 class="jumbotron-title">Welcome Drivers</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <h3 class="form">Personal Information</h3>
                        <Form.Row>
                            <Form.Group as={Col} controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required type="name" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required type="text" placeholder="Last Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required type="tel" placeholder="(###) ###-####" />
                        </Form.Group>

                        <Form.Group controlId="address1">
                            <Form.Label>Address 1</Form.Label>
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

                        <h3 class="form">Driver Information</h3>

                        <Form.Group controlId="milesTravel">
                            <Form.Label>How many miles are you willing to travel?</Form.Label>
                            <Form.Control required type="text" placeholder="ex. 10 miles" />
                        </Form.Group>
                        <Form.Group controlId="availability">
                            <Form.Label>What days and times are you available?</Form.Label>
                            <Form.Control required as="textarea" rows="3" placeholder="ex. Fridays 9AM-4PM" />
                        </Form.Group>
                        <Form.Group controlId="notes">
                            <Form.Label>Additional Notes</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Please provide any additional notes to us that you would like us to know." />
                        </Form.Group>

                        <Form.Group>
                            <h3 class="form">Instructions</h3>
                            <Form.Text>Please read the follow instructions that we ask for drivers: </Form.Text>
                            <Form.Text>1. Use the pharmacy drive through if one is available.</Form.Text>
                            <Form.Text>2. Call the patient before you arrive at their residence.</Form.Text>
                            <Form.Text>3. Ring the bell or knock on the door, leave the meds in front of the door, stay back at least 6 feet and watch the patient take the package before you leave.</Form.Text>
                            <Form.Text>4. Please use hand sanitizer and wash your hands as often as possible.</Form.Text>
                            <Form.Text>5. Follow all <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">COVID-19 guidelines</a> provided by the CDC </Form.Text>

                        </Form.Group>

                        <Form.Group controlId="instructionsCheck">
                            <Form.Check required type="checkbox" label="Please check this box when you have read and understood our instructions." />
                        </Form.Group>
                        <Form.Group>
                            <h3 class="form">Disclaimer</h3>
                            <Form.Text>Terms and Conditions: </Form.Text>
                            <Form.Text>As a volunteer driver, I attest that I have an active car insurance policy and Pill2Me is not liable for any accidents that might occur while carrying out volunteer activities. I will follow the CDC guidelines on Covid-19 prevention and allow and practice social distancing at all times while interacting with the patients and at the pharmacy. </Form.Text>

                        </Form.Group>

                        <Form.Group controlId="instructionsCheck">
                            <Form.Check required type="checkbox" label="“By submitting this form, I attest that I am at least 18 years old and below the age of 65 years and have no symptoms or risk factors of Covid-19 per the CDC guidelines. I have also read and accept the terms and conditions above.”" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>How did you hear about us?</Form.Label>
                            <Form.Control required type="text"></Form.Control>
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
};

export default DriverForm;