import React from "react";
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style.css";

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import Patient from '../images/patient.png';
import Driver from '../images/driver.png';

function buttonClickHandler() {
    console.log("clicked");
}

const OpeningPage = () => (
    <div>
        <Header />
        <div class="pharm-background container center column-dir after-heading">
            <div class="homescreen center container column-dir">
                <h2 class="logo">Free same-day medication delivery for the elderly and vulnerable during COVID-19</h2>

                <div class="extra-margin">
                    <div class="container space">
                        <Button variant="" onClick={() => window.scrollTo(0, 0)}><Link to="/patient-form">
                            <div class="round-button container center column-dir">
                                <img class="logo" src={Patient}></img>
                                Request Delivery
        </div>
                        </Link></Button>

                        <Button variant="" onClick={buttonClickHandler}><Link to="/driver-form">
                            <div class="round-button container center column-dir">
                                <img class="logo" src={Driver}></img>
                                Volunteer to Drive
        </div>
                        </Link></Button>


                    </div>
                    <div class="container space">
                        <h3 class="button-labels">You can also call our toll-free number (800)-475-7488 to make the prescription pickup request.</h3>

                        <h3 class="button-labels">Have free time to help deliver medication to patients?</h3>

                    </div>
                </div>
            </div>


            <div class="section section-blue">
                <h1>What We Offer</h1>
                <hr class="colored-line" />
                <Row>
                    <Col className="left-align">
                        <h3 class="center-text">Our Patients</h3>



                        <p>- Free same-day medication delivery from any pharmacy.</p>
                        <p>- We deliver within 2 hours of request.</p>
                        <p>- Free pharmacist consultation</p>
                        <p> - Purchase over-the-counter items and have them delivered within a couple of hours.</p>
                        <p>- Enjoy special offers and discounts from our partner pharmacies.</p>
                    </Col>
                    <Col className="left-align">
                        <h3 class="center-text">Our Pharmacy Partners</h3>

                        <p>- Free same-day medication delivery from any pharmacy.</p>
                        <p>- We deliver within 2 hours of request.</p>
                        <p>- Free pharmacist consultation</p>
                        <p> - Purchase over-the-counter items and have them delivered within a couple of hours.</p>
                        <p>- Enjoy special offers and discounts from our partner pharmacies.</p>
                    </Col>
                </Row>

            </div>

            <DetailedFooter />
        </div>


    </div>

);



export default OpeningPage;