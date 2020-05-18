import React from "react";
import { Button, Col, Row, Jumbotron, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DetailedFooter from '../components/DetailedFooter';

const Contact = () => (
    <div>
        <Header />

        <div class="pharm-background fixed-background container center column-dir after-heading">
            <Row className="my-container" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                <Col md={6} className="container center column-dir">
                    <h1>Please feel free to contact us with any questions or tell us how we can better serve you.</h1>
                    <div class="extra-margin">
                        <h6>Phone: (405) 436-0220</h6>
                        <h6>Email: info@pills2me.com</h6>
                    </div>

                </Col>
                <Col>
                    <Jumbotron style={{ width: "100%" }}>
                        <Form>
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
                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3"></Form.Control>
                            </Form.Group>
                            <Button variant="light" type="submit">
                                <Link to="/submission-complete">Submit</Link>
                            </Button>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
            <hr class="colored-line" />
            <DetailedFooter />
        </div>
    </div>
);

export default Contact;