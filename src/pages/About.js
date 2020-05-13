import React from "react";
import { Button, Card, Form, Jumbotron, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DetailedFooter from '../components/DetailedFooter';

const About = () => (
    <div>
        <Header />
        <Sidebar />

        <div class="pharm-background fixed-background container center column-dir after-heading">
            <div class="overlay-text-box container center column-dir">
                <h1 class="overlay-text">Our Mission</h1>
                <h4>We strive to help patients receive the care and medications they need without leaving their home. Our goal is to promote public health and prevent the spread of the coronavirus (COVID-19) across the country. </h4>
            </div>

            <div class="section section-blue">
                <Row>
                    <Col md={8}>
                        <h1 >How Pills2Me Works</h1>
                        <div class="section-text">
                            <p>We partner with pharmacies to connect patients with volunteer drivers. Our goal is to promote public health and prevent the spread of coronavirus (COVID-19). </p>
                            <p>Patients who need medication can sign up <a class="section-link" href="/patient-form">here</a> to request help picking up their prescription from a pharmacy in the New Haven or Las Vegas Area. </p>
                            <p>Then, drivers sign up <a class="section-link" href="/driver-form">here</a> to volunteer to pick up, deliver, and fulfill these requests. </p>
                            <p>We have also partenered with local pharmacies who are helping us and our patients by offering same-day pickup.</p>
                        </div>
                        <Button variant="light"><a href="/news">Read about Pills2Me in the News</a></Button>
                    </Col>
                    <Col className="container center">
                        <img class="col-img" src="https://s3-alpha-sig.figma.com/img/a627/3a83/306a58a78d50527f96c4e9bf614ff332?Expires=1590364800&Signature=SUWTDE4ZwoXmJnoQ58uNsfZ5nX0qDBxVIMjyfflVWw0KNwDbwTt2iU8Wpb3x6blTE1YwOE1CEStCO~0WKT6lpECC-4vA0ywgZF-rob-tWW1b4eBy00n4KE00s02eAg-ERV83Tf6t4F42SolNdG0hXY8Ra9uUehJBId-tF~04mv36rjvyvVXvol6-IPFKXEJhotfORoGnC2RBN-Pmf2SFr5rcVeY0xXroEhmArDmVfTFrae72MHy7SVc8~W8zQLZDKvyPyaa2byDdglPsvRFcZ0yE6KVN4BVylsOS~Dzy4r5xfFWmB37aw-z5seMKEFcIARbmo5SLEPqIGkcBlssGfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                    </Col>
                </Row>
            </div>

            <div class="section section-gray">
                <h1>How to Get Involved</h1>
                <Row className="subsection">
                    <Col className="container center">
                        <img class="col-img" src="https://s3-alpha-sig.figma.com/img/a627/3a83/306a58a78d50527f96c4e9bf614ff332?Expires=1590364800&Signature=SUWTDE4ZwoXmJnoQ58uNsfZ5nX0qDBxVIMjyfflVWw0KNwDbwTt2iU8Wpb3x6blTE1YwOE1CEStCO~0WKT6lpECC-4vA0ywgZF-rob-tWW1b4eBy00n4KE00s02eAg-ERV83Tf6t4F42SolNdG0hXY8Ra9uUehJBId-tF~04mv36rjvyvVXvol6-IPFKXEJhotfORoGnC2RBN-Pmf2SFr5rcVeY0xXroEhmArDmVfTFrae72MHy7SVc8~W8zQLZDKvyPyaa2byDdglPsvRFcZ0yE6KVN4BVylsOS~Dzy4r5xfFWmB37aw-z5seMKEFcIARbmo5SLEPqIGkcBlssGfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                    </Col>
                    <Col md={7}>
                        <h3 class="underline italics">Instructions for Patients</h3>
                        <div class="section-text">
                            <p>1. You or a caregiver needs to be home when the medication is delivered. </p>
                            <p>2. Wait for the volunteer to move to a safe distance before you open your door. </p>
                            <p>3. Practice social distancing at all times and when interacting with the volunteer. </p>
                            <p>4. Please use hand sanitizer and wash your hands as often as possible. </p>
                            <p>5. Follow all COVID-19 <a class="section-link" href="www.cdc.gov/coronavirus/2019-ncov/index.html">guidelines</a> provided by the CDC</p>

                        </div>
                        <Button variant="light"><a href="/patient-form">Register Now</a></Button>
                    </Col>
                </Row>
                <Row className="subsection">
                    <Col md={7}>
                        <h3 class="underline italics">Instructions for Drivers</h3>
                        <div class="section-text">
                            <p>1. Use the pharmacy drive through if one is available.  </p>
                            <p>2. Call the patient before you arrive at their residence.  </p>
                            <p>3. Ring the bell or knock on the door, leave the meds in front of the door, stay back at least 6 feet and watch the patient take the package before you leave.  </p>
                            <p>4. Please use hand sanitizer and wash your hands as often as possible. </p>
                            <p>5. Follow all COVID-19 <a class="section-link" href="www.cdc.gov/coronavirus/2019-ncov/index.html">guidelines</a> provided by the CDC</p>

                        </div>
                        <Button variant="light"><a href="/driver-form">Register Now</a></Button>
                    </Col>
                    <Col className="container center">
                        <img class="col-img" src="https://s3-alpha-sig.figma.com/img/a627/3a83/306a58a78d50527f96c4e9bf614ff332?Expires=1590364800&Signature=SUWTDE4ZwoXmJnoQ58uNsfZ5nX0qDBxVIMjyfflVWw0KNwDbwTt2iU8Wpb3x6blTE1YwOE1CEStCO~0WKT6lpECC-4vA0ywgZF-rob-tWW1b4eBy00n4KE00s02eAg-ERV83Tf6t4F42SolNdG0hXY8Ra9uUehJBId-tF~04mv36rjvyvVXvol6-IPFKXEJhotfORoGnC2RBN-Pmf2SFr5rcVeY0xXroEhmArDmVfTFrae72MHy7SVc8~W8zQLZDKvyPyaa2byDdglPsvRFcZ0yE6KVN4BVylsOS~Dzy4r5xfFWmB37aw-z5seMKEFcIARbmo5SLEPqIGkcBlssGfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                    </Col>
                </Row>
                <Row>
                    <Col className="container center">
                        <img class="col-img" src="https://s3-alpha-sig.figma.com/img/a627/3a83/306a58a78d50527f96c4e9bf614ff332?Expires=1590364800&Signature=SUWTDE4ZwoXmJnoQ58uNsfZ5nX0qDBxVIMjyfflVWw0KNwDbwTt2iU8Wpb3x6blTE1YwOE1CEStCO~0WKT6lpECC-4vA0ywgZF-rob-tWW1b4eBy00n4KE00s02eAg-ERV83Tf6t4F42SolNdG0hXY8Ra9uUehJBId-tF~04mv36rjvyvVXvol6-IPFKXEJhotfORoGnC2RBN-Pmf2SFr5rcVeY0xXroEhmArDmVfTFrae72MHy7SVc8~W8zQLZDKvyPyaa2byDdglPsvRFcZ0yE6KVN4BVylsOS~Dzy4r5xfFWmB37aw-z5seMKEFcIARbmo5SLEPqIGkcBlssGfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                    </Col>
                    <Col md={7}>
                        <h3 class="underline italics">Instructions for Pharmacies</h3>
                        <div class="section-text">
                            <p>1. Understand that volunteer drivers will be picking up medications for patients who are at home practicing social distancing.</p>
                            <p>2. Our drivers and patients will notify us when successful delivery has been performed.</p>
                            <p>3.  We hope to limit the number of social interactions at pharmacies by reducing the number of people who pick up medications. </p>
                            <p>4. Please use hand sanitizer and wash your hands as often as possible. </p>
                            <p>5. Follow all COVID-19 <a class="section-link" href="www.cdc.gov/coronavirus/2019-ncov/index.html">guidelines</a> provided by the CDC</p>

                        </div>
                    </Col>
                </Row>
            </div>

            <div class="section section-blue">
                <h1>Our Team</h1>
                <p>Another small description of this team?</p>
                <Row>
                    <div class="container space">

                        <Col className="hoverable">
                            <img class="col-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                            <div class="person-info container column-dir center">
                                <h3>Leslie Asanga</h3>
                                <p>Brief description and title</p>
                            </div>
                        </Col>
                        <Col className="hoverable">
                            <img class="col-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                            <div class="person-info container column-dir center">
                                <h3>Leonardo Lizbinski</h3>
                                <p>Brief description and title</p>
                            </div>
                        </Col>
                        <Col className="hoverable">
                            <img class="col-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                            <div class="person-info container column-dir center">
                                <h3>Anna Zhang</h3>
                                <p>Brief description and title</p>
                            </div>
                        </Col>
                        <Col className="hoverable">
                            <img class="col-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                            <div class="person-info container column-dir center">
                                <h3>John Doe</h3>
                                <p>Brief description and title</p>
                            </div>
                        </Col>

                    </div>
                </Row>
            </div>

            <DetailedFooter />
        </div>
    </div>
);

export default About;