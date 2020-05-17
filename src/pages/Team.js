import React from "react";
import { Button, Card, Form, Jumbotron, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

const About = () => (
    <div>
        <Header />

        <div class="pharm-background fixed-background container center column-dir after-heading">
            <div class="overlay-text-box container center column-dir">
                <h1 class="overlay-text">Meet the Team</h1>
                <h4 class="overlay-descript">Descripton about the team and how it was formed.  </h4>
                <Button variant="light" className="shadow"><Link to="about#story">Learn about our story</Link></Button>
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