import React from "react";
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import Leslie from '../images/team/leslie.jpg';
import Anna from '../images/team/anna.png';
import Angela from '../images/team/angela.jpeg';
import Hassaan from '../images/team/hassaan.jpg';
import Konstantine from '../images/team/konstantine.jpeg';
import Fatema from '../images/team/fatema.jpeg';

const About = () => (
    <div>
        <Header />

        <div class="pharm-background fixed-background container center column-dir after-heading">
            <div class="overlay-text-box container center column-dir">
                <h1 class="overlay-text">Meet the Team</h1>
                <h4 class="overlay-descript">We are people who care about giving back to the communities we are in.
                 Seeing the issue of elderly and vulnerable needing to pick up their prescriptions, we wanted to use our platforms and skills to create this company to help those in need.</h4>
                <Link to="about"><Button onClick={() => window.scrollTo(0, 0)} variant="light" className="shadow">LEARN ABOUT OUR STORY</Button></Link>
            </div>

            <div class="section section-blue">
                <h1>Our Team</h1>
                <hr class="colored-line" />
                <Row className="team-row top-align">
                    <Col lg={6}>
                        <img class="person-img" src={Leslie}></img>
                        <div class="person-info container column-dir center">
                            <h3 class="bold">Dr. Leslie Asanga, PharmD, MBA, MPH</h3>
                            <h4>Founder</h4>
                            <hr class="colored-line" />
                            <p> Dr. Asanga is an experienced pharmacist and recently graduated from Yale University with a Master of Public Health degree.
                                While at Yale, he took courses in Public Health Entrepreneurship, Startup Founder Studies, and Sustainable Innovations in Healthcare at the Yale School of Management.
                                He is the CEO and co-founder of ePharmHub which won the Thorne Prize at Startup Yale 2020.
                                He also holds a Doctor of Pharmacy degree and an MBA with more than five years of healthcare experience.
                                    He is an innovator and passionate about creating healthcare ventures that create impact in vulnerable communities.</p>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <img class="person-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                        <div class="person-info container column-dir center">
                            <h3 class="bold">Person Name</h3>
                            <h4>Title</h4>
                            <hr class="colored-line" />
                            <p>Brief description and title</p>
                        </div>
                    </Col>
                </Row>
                <Row className="team-row top-align">
                    <Col lg={4}>
                        <img class="person-img" src={Angela}></img>
                        <div class="person-info container column-dir center">
                            <h3 class="bold">Angela Yoo</h3>
                            <h4>UX/UI Design Intern</h4>
                            <hr class="colored-line" />
                            <p>Angela is a rising senior at Yale University studying Cognitive Science and practicing human-centered design.
                                As a designer and design researcher, she has led projects and teams to design print, mobile, and web products intended for use by a variety of stakeholders;
                                she has also worked to create better service experiences for nonprofits as well as campus organizations.
                                A leader and champion of user needs, she has spearheaded human-centered design practices and facilitated many design thinking workshops in many spaces unfamiliar with human-centered design.
                                She is passionate about the intersection between design thinking and social impact, and ultimately hopes to use design and innovation to empower communities across the globe.
                                    You can reach her at angela.yoo@yale.edu.</p>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <img class="person-img" src={Anna}></img>
                        <div class="person-info container column-dir center" style={{ alignContent: 'top' }}>
                            <h3 class="bold">Anna Zhang</h3>
                            <h4>Software Engineer Intern</h4>
                            <hr class="colored-line" />
                            <p>Anna Zhang is a second year undergraduate student at Yale University studying computer science.
                                She aspires technology to give back to her communities and society as a whole, believing that computer science has the power to make significant social impact.
                                In her studies at Yale College, she has also discovered an interest in natural language processing, artificial intelligence, and cognitive science as well.
                                Aside from her passion for programming and AI, she is also an environmental activist and hopes to find a career in the overlap between technology and sustainability.
                                Feel free to email her with any queries at anna.zhang@yale.edu
                                </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <img class="person-img" src={Hassaan}></img>
                        <div class="person-info container column-dir center">
                            <h3 class="bold">Hassaan Qadir</h3>
                            <h4>Social Media Marketing Intern</h4>
                            <hr class="colored-line" />
                            <p>Hassaan Qadir is pursuing a Bachelor's of Science in Biomedical Engineering at Yale University.
                                There, he combines studies from disparate fields to find new solutions to age-old problems.
                                He is also the founder of the Bulldog Pageant, a charity built to focus on local issues.
                                    In leading a small, dynamic group tackling large problems, he has come to appreciate the unique challenge of building something from the ground up, and he plans to continue with such ventures after he graduates.</p>
                        </div>
                    </Col>
                </Row>
                <h1>Advisors</h1>
                <hr class="colored-line" />
                <Row className="team-row top-align">
                    <Col lg={4}>
                        <img class="person-img" src={Konstantine}></img>
                        <div class="person-info container column-dir center">
                            <h3 class="bold">Konstantine Drakonakis</h3>
                            <h4>Mentor from Yale Tsai CITY</h4>
                            <hr class="colored-line" />
                            <p>Konstantine is an experienced early stage venture investor focused on proprietary IMPACT technologies within the software, med-tech and green-tech markets.
                            He brings over 15 years of experience in Venture Capital and Project Finance to mentorship at CITY from his roles at LaunchCapital and the Connecticut Clean Energy Fund, as well as environmental management and consulting as a Professional Engineer.
                            Konstantine opened the New Haven Office for LaunchCapital in 2008 and has led over 40 investments.
                            He specializes in general entrepreneurship, early-stage investing, green-tech, biotech/medical devices, life science, physical science, venture capital, and project finance.
                                </p>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <img class="person-img" src={Fatema}></img>
                        <div class="person-info container column-dir center" style={{ alignContent: 'top' }}>
                            <h3 class="bold">Fatema Basrai, MBA</h3>
                            <h4>Assistant Director from InnovateHealth Yale</h4>
                            <hr class="colored-line" />
                            <p>Fatema serves as the Assistant Director of InnovateHealth Yale and as the Innovation Manager for the Sustainable Health Initiative at Yale University.
                                In her role, she works with students, faculty, staff and community members to support social ventures in health and education across the globe.
                                She is active in the educational equity community as has presented nationally and locally on panels including those for DreamWeek, The American Association for University Women, and Leadership for Educational Equity.
                                Fatema was named to Forbes 30 Under 30 in Education list for 2018 and is dedicated to ensuring educational and health equity for students globally.
                                </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <img class="person-img" src={Hassaan}></img>
                        <div class="person-info container column-dir center">
                            <h3 class="bold">Hassaan Qadir</h3>
                            <h4>Social Media Marketing Intern</h4>
                            <hr class="colored-line" />
                            <p>Hassaan Qadir is pursuing a Bachelor's of Science in Biomedical Engineering at Yale University.
                                There, he combines studies from disparate fields to find new solutions to age-old problems.
                                He is also the founder of the Bulldog Pageant, a charity built to focus on local issues.
                                    In leading a small, dynamic group tackling large problems, he has come to appreciate the unique challenge of building something from the ground up, and he plans to continue with such ventures after he graduates.</p>
                        </div>
                    </Col>
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