import React, { useState } from "react";
import { Button, Col, Row, Jumbotron, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';




function Contact() {

    const [redirect, setRedirect] = useState(false);
    const [validated, setValidated] = useState(false);

    const sendEmail = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            e.preventDefault();
        } else {
            //setRedirect(true);
        }
        setValidated(true);

        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                setRedirect(true);
            }, (error) => {
                console.log(error.text);

            });
    }
    if (redirect) {
        return <Redirect to="/submission-complete" />;
    }

    return (
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
                            <Form noValidate validated={validated} onSubmit={sendEmail}>
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
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control required as="textarea" rows="3"></Form.Control>
                                </Form.Group>
                                <Button variant="light" type="submit">
                                    SUBMIT
                                    {/* <Link to="/submission-complete">Submit</Link> */}
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
}


export default Contact;