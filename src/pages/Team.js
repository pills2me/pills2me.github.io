import React from "react";
import { Button, Card, Form, Jumbotron, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

const About = () => (
    <div>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}>
            <Header />

            <div class="pharm-background fixed-background container center column-dir after-heading">
                <div class="overlay-text-box container center column-dir">
                    <h1 class="overlay-text">Meet the Team</h1>
                    <h4 class="overlay-descript">We are people who care about giving back to the communities we are in.
         Seeing the issue of elderly and vulnerable needing to pick up their prescriptions, we wanted to use our platforms and skills to create this company to help those in need.</h4>
                    <Button variant="light" className="shadow"><Link to="about">LEARN ABOUT OUR STORY</Link></Button>
                </div>

                <div class="section section-blue">
                    <h1>Our Team</h1>
                    <hr class="colored-line" />
                    <Row className="team-row">
                        <div class="container center">
                            <div class="person-card">
                                <img class="person-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                                <div class="person-info container column-dir center">
                                    <h3>Person Name</h3>
                                    <p>Brief description and title</p>
                                </div>
                            </div>

                            <div class="person-card">
                                <img class="person-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                                <div class="person-info container column-dir center">
                                    <h3>Person Name</h3>
                                    <p>Brief description and title</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className="team-row">
                        <div class="container center">
                            <Col>
                                <img class="person-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                                <div class="person-info container column-dir center">
                                    <h3>Person Name</h3>
                                    <p>Brief description and title</p>
                                </div>
                            </Col>

                            <Col>
                                <img class="person-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                                <div class="person-info container column-dir center">
                                    <h3>Person Name</h3>
                                    <p>Brief description and title</p>
                                </div>
                            </Col>
                            <Col>
                                <img class="person-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                                <div class="person-info container column-dir center">
                                    <h3>Person Name</h3>
                                    <p>Brief description and title</p>
                                </div>
                            </Col>
                        </div>
                    </Row>

                </div>

                <DetailedFooter />
            </div>

        </Router>

    </div>
);

export default About;

{/* <Col className="hoverable">
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
                        </Col> */}