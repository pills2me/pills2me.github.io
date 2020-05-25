import React from "react";
import { Button, Col, Row, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import Medicine from '../images/medicine.jpeg';

const Partner = () => (
    <div>
        <Header />

        <div class="pharm-background fixed-background container center column-dir after-heading">
            <div class="overlay-text-box container center column-dir">
                <h1 class="overlay-text">Partner with Us</h1>
                <h4>We have partnered with many pharmacies and organizations in the New Haven and Las Vegas area that help us facilitate the delivery process. </h4>
                <Button variant="light" onClick={() => window.scrollTo(0, 0)}><Link to="/pharmacy-form">BECOME A PARTNER</Link></Button>

            </div>

            <div class="section section-blue">
                <h1>Benefits of Partnering with Us</h1>
                <hr class="colored-line" />
                <Row>
                    <Col lg={8} className="left-align">
                        <p>1. Free same-day delivery for your elderly and immunocompromised patients.</p>
                        <p>2. Free promotion on our platforms.</p>
                        <p>3. Patients can purchase your OTC items using our platform.</p>
                        <p> And much more.....</p>
                    </Col>
                    <Col>
                        <img class="center-text" src={Medicine}></img>
                    </Col>
                </Row>
            </div>

            <div class="section section-gray">
                <h1>Our Partners</h1>
                <hr class="colored-line" />
            </div>

            <DetailedFooter />
        </div>
    </div >
);

export default Partner;