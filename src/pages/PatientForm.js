import React from "react";
import { Button, Card, Form, Jumbotron, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const PatientForm = () => (
    <div>
        <Header />
        <Sidebar />
        <div class="pharm-background container center column-dir after-heading">
            <Jumbotron>
                <h2 class="jumbotron-title">Welcome Patients</h2>
                <Form>
                    <h6 class="subheading center-text">Our delivery service is 100% free of charge. We deliver your medications right to your doorstep. Our goal is to promote public health and social distancing practices to prevent further spread of coronavirus (COVID-19). </h6>
                    <h3 class="form">Personal Information</h3>
                    <Form.Row>
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="(###) ###-####" />
                    </Form.Group>
                    <Form.Group controlId="birthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date" placeholder="MM/DD/YYYY" />
                    </Form.Group>

                    <Form.Group controlId="address1">
                        <Form.Label>Delivery Address 1</Form.Label>
                        <Form.Control type="text" placeholder="ex. 123 Main St." />
                    </Form.Group>
                    <Form.Group controlId="address2">
                        <Form.Control type="text" placeholder="Address 2 (ex. apt #)" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="state">
                            <Form.Label>State/Province</Form.Label>
                            <Form.Control type="text" placeholder="State/Province" />
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="zip">
                            <Form.Label>Zip/Postal Code</Form.Label>
                            <Form.Control type="text" placeholder="Zip/Postal Code" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Country" />
                        </Form.Group>
                    </Form.Row>

                    <h3 class="form">Prescription Pickup Information</h3>

                    <Form.Group controlId="pharmacy">
                        <Form.Label>Pharmacy Name</Form.Label>
                        <Form.Control type="text" placeholder="Pharmacy Name" />
                    </Form.Group>
                    <Form.Group controlId="pharmacy-phone">
                        <Form.Label>Pharmacy Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="(XXX) XXX-XXXX" />
                    </Form.Group>

                    <Form.Group controlId="address1">
                        <Form.Label>Pharmacy Address 1</Form.Label>
                        <Form.Control type="text" placeholder="ex. 123 Main St." />
                    </Form.Group>
                    <Form.Group controlId="address2">
                        <Form.Control type="text" placeholder="Address 2 (ex. apt #)" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="state">
                            <Form.Label>State/Province</Form.Label>
                            <Form.Control type="text" placeholder="State/Province" />
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="zip">
                            <Form.Label>Zip/Postal Code</Form.Label>
                            <Form.Control type="text" placeholder="Zip/Postal Code" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Country" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="copay">
                        <Form.Label>Does your prescription have a copay?    </Form.Label>
                        <Form.Check inline label="Yes" type="radio" />
                        <Form.Check inline label="No" type="radio" />
                    </Form.Group>

                    <Form.Group controlId="notes">
                        <Form.Label>Additional Notes</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Please provide any additional notes to us that you would like us to know." />
                    </Form.Group>

                    <Form.Group controlId="ready">
                        <Form.Label>Is your prescription ready for pickup?</Form.Label>
                        <Form.Check inline label="Please check this only if your prescription is ready for pickup from your listed pharmacy." type="checkbox" />
                    </Form.Group>
                    <Form.Group>
                        <h3 class="form">Disclaimer</h3>
                        <Form.Check type="checkbox" label="““By submitting the form, you are authorizing one of our volunteers to pick up and deliver your medication(s). We will do our best to deliver their medications as fast as we can (same day), but cannot guarantee that in all cases due to circumstances that might arise beyond our control.”" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>How did you hear about us?</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Button variant="light" type="submit">
                        <Link to="/submission-complete">Submit</Link>
                    </Button>
                </Form>
            </Jumbotron>
            <Footer />
        </div>
    </div>
);

export default PatientForm;