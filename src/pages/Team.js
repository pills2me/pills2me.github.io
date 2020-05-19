import React from "react";
import { Button, Card, Form, Jumbotron, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import Leslie from '../images/team/leslie.jpg';
import Anna from '../images/team/anna.png';

const About = () => (
    <div>
        <Header />

        <div class="pharm-background fixed-background container center column-dir after-heading">
            <div class="overlay-text-box container center column-dir">
                <h1 class="overlay-text">Meet the Team</h1>
                <h4 class="overlay-descript">We are people who care about giving back to the communities we are in.
                 Seeing the issue of elderly and vulnerable needing to pick up their prescriptions, we wanted to use our platforms and skills to create this company to help those in need.</h4>
                <Link to="about"><Button variant="light" className="shadow">LEARN ABOUT OUR STORY</Button></Link>
            </div>

            <div class="section section-blue">
                <h1>Our Team</h1>
                <hr class="colored-line" />
                <Row className="team-row">
                    <div class="container center">
                        <div class="person-card">
                            <img class="person-img" src={Leslie}></img>
                            <div class="person-info container column-dir center">
                                <h3>Dr. Leslie Asanga, PharmD, MBA, MPH</h3>
                                <h4>Founder</h4>
                                <p> Dr. Asanga is an experienced pharmacist and recently graduated from Yale University with a Master of Public Health degree.
                                    While at Yale, he took courses in Public Health Entrepreneurship, Startup Founder Studies, and Sustainable Innovations in Healthcare at the Yale School of Management.
                                    He is the CEO and co-founder of ePharmHub which won the Thorne Prize at Startup Yale 2020.
                                    He also holds a Doctor of Pharmacy degree and an MBA with more than five years of healthcare experience.
                                    He is an innovator and passionate about creating healthcare ventures that create impact in vulnerable communities.</p>
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
                            <img class="person-img" src={Anna}></img>
                            <div class="person-info container column-dir center">
                                <h3>Anna Zhang</h3>
                                <h4>Web Developer and Software Engineer</h4>
                                <p>Anna Zhang is a second year undergraduate student at Yale University studying computer science.
                                    She aspires technology to give back to her communities and society as a whole, believing that computer science has the power to make significant social impact.
                                    In her studies at Yale College, she has also discovered an interest in natural language processing, artificial intelligence, and cognitive science as well.
                                    Aside from her passion for programming and AI, she is also an environmental activist and hopes to find a career in the overlap between technology and sustainability.
                                </p>
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