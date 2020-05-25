import React from "react";
import { Button, Col, Row, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import Medicine from '../images/medicine.jpeg';

import ChapelSt from '../images/partners/chapelst.png';
import WestHaven from '../images/partners/westhaven.png';
import Berneys from '../images/partners/berneys.png';
import Essential from '../images/partners/essential.png';

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
                    <Col lg={8} >
                        <div style={{ alignItems: "baseline", height: "100%" }} className="left-align my-container space  column-dir " >
                            <h3>1. Free same-day delivery for your elderly and immunocompromised patients.</h3>
                            <h3>2. Free promotion on our platforms.</h3>
                            <h3>3. Patients can purchase your OTC items using our platform.</h3>
                            <h3> And much more.....</h3>
                        </div>

                    </Col>
                    <Col>
                        <img class="center-text" src={Medicine}></img>
                    </Col>
                </Row>
            </div>

            <div class="section section-gray">
                <h1>Our Partners</h1>
                <hr class="colored-line" />
                <Row>
                    <Col className="my-container column-dir between">
                        <img class="center-text" src={ChapelSt}></img>
                        <div>
                            <h3><a style={{ color: "white" }} href="http://www.chapelstreetpharmacy.com/">Chapel Street Pharmacy</a></h3>
                            <h5>1245 Chapel St </h5>
                            <h5>New Haven, CT 06511</h5>
                        </div>


                    </Col>
                    <Col className="my-container column-dir between">
                        <img class="center-text" src={WestHaven}></img>
                        <div>
                            <h3><a style={{ color: "white" }} href="http://www.westhavenpharmacy.com/">West Haven Pharmacy</a></h3>
                            <h5>764, Campbell Ave, Unit A </h5>
                            <h5>West Haven, CT 06516</h5>
                        </div>


                    </Col>
                    {/* </Row>
                <br></br>
                <Row> */}
                    <Col className="my-container column-dir between">
                        <img class="center-text" src={Berneys}></img>
                        <div>
                            <h3><a style={{ color: "white" }} href="http://www.berneysrx.com/">Berneys Pharmacy</a></h3>
                            <h5>615 Howard Avenue</h5>
                            <h5>New Haven, CT 06519</h5>
                        </div>


                    </Col>
                    <Col className="my-container column-dir between">
                        <img class="center-text" src={Essential}></img>
                        <div>
                            <h3><a style={{ color: "white" }} href="https://www.essentialsupply.org/">Essential Supply</a></h3>
                            <h5>Essential Supply is a student-led nonprofit founded in response to the COVID-19 crisis to facilitate deliveries. </h5>
                        </div>


                    </Col>
                </Row>
            </div>

            <DetailedFooter />
        </div>
    </div >
);

export default Partner;