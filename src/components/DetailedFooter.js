import React, { Component } from "react";
import { Button, Card, Form, Jumbotron, Col, Row } from 'react-bootstrap'
import "../style.css";

class Footer extends Component {
    render() {
        return (
            <div class="container detailed-footer">
                <Row className="container between">
                    <Col md={3} className="container column-dir center">
                        <h4>CONTACT US</h4>
                        <div class="">
                            <p>Email: <a class="section-link" href="mailto:info@pills2me.com">info@pills2me.com</a> </p>
                            <p>Toll-free Number: 800-475-7488</p>
                        </div>

                    </Col>
                    <Col md={6} >
                        <h4>CONNECT AND FOLLOW</h4>
                        <div class="container space">
                            <a href="https://www.facebook.com/pills2me/" target="_blank" style={{ fontSize: "40px" }} class="container center fa fa-facebook"></a>
                            <a href="https://twitter.com/" target="_blank" style={{ fontSize: "40px" }} class="container center fa fa-twitter"></a>
                            <a href="https://www.instagram.com/pills2me/" target="_blank" style={{ fontSize: "40px" }} class="container center fa fa-instagram"></a>
                            <a href="https://www.linkedin.com/company/pills2me-inc/" target="_blank" style={{ fontSize: "40px" }} class="container center fa fa-linkedin"></a>
                        </div>
                        <p>Copyright © Pills2Me. All rights reserved.</p>
                    </Col>
                    <Col md={3} >
                        <h4>JOIN TODAY</h4>
                        <div>
                            <p><a class="section-link" href="/patient-form">Request Rx Pickup/Delivery</a></p>
                            <p><a class="section-link" href="/driver-form">Volunteer to Drive</a></p>
                        </div>
                    </Col>
                </Row>
            </div >
        );
    }
}




export default Footer;