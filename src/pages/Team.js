import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import Leslie from '../images/team/leslie.jpg';
import Leo from '../images/team/leo.JPG';
import Anna from '../images/team/anna.png';
import Angela from '../images/team/angela.jpeg';
import Hassaan from '../images/team/hassaan.jpg';
import Konstantine from '../images/team/konstantine.jpeg';
import Fatema from '../images/team/fatema.jpeg';
import Christina from '../images/team/christina.jpg';
import Kaveh from '../images/team/Kaveh.jpeg';

const About = () => (
	<div>
		<Header />

		<div className="pharm-background background-team fixed-background container center column-dir after-heading">
			<div className="overlay-text-box container center column-dir">
				<h1 className="overlay-text">Meet the Team</h1>
				<h4 className="overlay-description ">
					We are Yale students and graduates who care about giving back to the communities we are in. Seeing
					the issue of elderly and vulnerable needing to pick up their prescriptions, we wanted to use our
					platforms and skills to create this company to help those in need.
				</h4>
				<Link to="about">
					<Button onClick={() => window.scrollTo(0, 0)} variant="light" className="shadow bitmore-margin">
						LEARN ABOUT OUR STORY
					</Button>
				</Link>
			</div>

			<div className="section">
				<h1 className="section-heading">Our Team</h1>
				<hr className="colored-line" />
				<Row className="team-row top-align">
					<Col lg={6}>
						<img className="person-img" src={Leslie} />
						<div className="person-info container column-dir center">
							<h3 className="bold">Leslie Asanga, PharmD, MBA, MPH</h3>
							<h4>Co-Founder, CEO</h4>
							<hr className="colored-line" />
							<p>
								{' '}
								Dr. Asanga is an experienced pharmacist and recently graduated from Yale University with
								a Master of Public Health degree. While at Yale, he took courses in Public Health
								Entrepreneurship, Startup Founder Studies, and Sustainable Innovations in Healthcare at
								the Yale School of Management. He is the CEO and co-founder of ePharmHub which won the
								Thorne Prize at Startup Yale 2020. He also holds a Doctor of Pharmacy degree and an MBA
								with more than five years of healthcare experience. He is an innovator and passionate
								about creating healthcare ventures that create impact in vulnerable communities.
							</p>
							<a
								className="shadow"
								target="_blank"
								href="https://www.linkedin.com/in/leslie-asanga-134b48143/"
							>
								<Button variant="light"> LinkedIn Profile</Button>
							</a>
						</div>
					</Col>

					<Col lg={6}>
						<img className="person-img" src={Leo} />
						<div className="person-info container column-dir center">
							<h3 className="bold">Leonardo Lizbinski MPH, MSC</h3>
							<h4>Co-Founder, CTO</h4>
							<hr className="colored-line" />
							<p>
								Leo has experience in software developement and is a medical student at the Warren
								Alpert Medical School of Brown University. Leo was inspired to help all our beloved
								patients during COVID-19, the elderly and vulnerable who cannot leave their homes to
								receive their medicine. Leo is a cofounder of ePharmHub, which won the Thorne Prize at
								Startup Yale 2020. Leo is founder and former President of the Yale Innovation and
								Entreprenurship in Modern Health Care (IEMH), a graduate student group. Leo graduated
								from Yale University with a Master of Public Health in Health Care Management. Leo
								previously attended Brown University, where he graduated magna cum laude and Sigma Xi
								Honors with a BA in computer science and a MSC in pathobiology.
							</p>
							<a className="shadow" target="_blank" href="https://www.linkedin.com/in/leonardolizbinski/">
								<Button variant="light"> LinkedIn Profile</Button>
							</a>
						</div>
					</Col>
				</Row>
				<Row className="team-row top-align">
					<Col lg={4}>
						<img className="person-img" src={Angela} />
						<div className="person-info container column-dir center">
							<h3 className="bold">Angela Yoo</h3>
							<h4>UX/UI Design Intern</h4>
							<hr className="colored-line" />
							<p>
								Angela is a rising senior at Yale University studying Cognitive Science and practicing
								human-centered design. As a designer and design researcher, she has led projects and
								teams to design print, mobile, and web products intended for use by a variety of
								stakeholders. A leader and champion of user needs, she has spearheaded human-centered
								design practices and facilitated many design thinking workshops in many spaces
								unfamiliar with human-centered design. She is passionate about the intersection between
								design thinking and social impact, and ultimately hopes to use design and innovation to
								empower communities across the globe.
							</p>
							<a className="shadow" target="_blank" href="https://www.linkedin.com/in/angelamyoo/">
								<Button variant="light"> LinkedIn Profile</Button>
							</a>
						</div>
					</Col>

					<Col lg={4}>
						<img className="person-img" src={Anna} />
						<div className="person-info container column-dir center" style={{ alignContent: 'top' }}>
							<h3 className="bold">Anna Zhang</h3>
							<h4>Software Engineer Intern</h4>
							<hr className="colored-line" />
							<p>
								Anna Zhang is a second year undergraduate student at Yale University studying computer
								science. She aspires technology to give back to her communities and society as a whole,
								which is why she used her web development skills to program this entire Pills2Me website
								using ReactJS to help the elderly and vulnerable during the COVID-19 pandemic. In her
								studies at Yale College, she has also discovered an interest in natural language
								processing, artificial intelligence, and cognitive science as well. Aside from her
								passion for programming and AI, she is also an environmental activist and hopes to find
								a career in the overlap between technology and sustainability.
							</p>
							<a className="shadow" target="_blank" href="https://www.linkedin.com/in/annazhang2002/">
								<Button variant="light"> LinkedIn Profile</Button>
							</a>
						</div>
					</Col>
					<Col lg={4}>
						<img className="person-img" src={Hassaan} />
						<div className="person-info container column-dir center">
							<h3 className="bold">Hassaan Qadir</h3>
							<h4>Social Media Marketing Intern</h4>
							<hr className="colored-line" />
							<p>
								Hassaan Qadir is pursuing a Bachelor's of Science in Biomedical Engineering at Yale
								University. There, he combines studies from disparate fields to find new solutions to
								age-old problems. He is also the founder of the Bulldog Pageant, a charity built to
								focus on local issues. In leading a small, dynamic group tackling large problems, he has
								come to appreciate the unique challenge of building something from the ground up, and he
								plans to continue with such ventures after he graduates.
							</p>
							<a
								className="shadow"
								target="_blank"
								href="https://www.linkedin.com/in/hassaan-qadir-2731891a5/"
							>
								<Button variant="light"> LinkedIn Profile</Button>
							</a>
						</div>
					</Col>
				</Row>

				<Row className="team-row top-align">
					<h1 className="center-text section-heading">Advisors</h1>
					<hr className="colored-line" />
					<Col lg={6}>
						<img className="person-img" src={Konstantine} />
						<div className="person-info container column-dir center">
							<h3 className="bold">Konstantine Drakonakis</h3>
							<h4>Venture/IMPACT Investor | Yale Tsai CITY Mentor</h4>
							<hr className="colored-line" />
							<p>
								Konstantine is an experienced early stage venture investor focused on proprietary IMPACT
								technologies within the software, med-tech and green-tech markets. He brings over 15
								years of experience in Venture Capital and Project Finance to mentorship at CITY from
								his roles at LaunchCapital and the Connecticut Clean Energy Fund, as well as
								environmental management and consulting as a Professional Engineer. Konstantine opened
								the New Haven Office for LaunchCapital in 2008 and has led over 40 investments. He
								specializes in general entrepreneurship, early-stage investing, green-tech,
								biotech/medical devices, life science, physical science, venture capital, and project
								finance.
							</p>
							<a className="shadow" target="_blank" href="https://www.linkedin.com/in/kdrakonakis/">
								<Button variant="light"> LinkedIn Profile</Button>
							</a>
						</div>
					</Col>

					<Col lg={6}>
						<img className="person-img" src={Fatema} />
						<div className="person-info container column-dir center" style={{ alignContent: 'top' }}>
							<h3 className="bold">Fatema Basrai, MBA</h3>
							<h4>Assistant Director from InnovateHealth Yale</h4>
							<hr className="colored-line" />
							<p>
								Fatema serves as the Assistant Director of InnovateHealth Yale and as the Innovation
								Manager for the Sustainable Health Initiative at Yale University. In her role, she works
								with students, faculty, staff and community members to support social ventures in health
								and education across the globe. She is active in the educational equity community as has
								presented nationally and locally on panels including those for DreamWeek, The American
								Association for University Women, and Leadership for Educational Equity. Fatema was
								named to Forbes 30 Under 30 in Education list for 2018 and is dedicated to ensuring
								educational and health equity for students globally.
							</p>
							<a
								className="shadow"
								target="_blank"
								href="https://www.linkedin.com/in/fatema-basrai-bb18561/"
							>
								<Button variant="light"> LinkedIn Profile</Button>
							</a>
						</div>
					</Col>
				</Row>
				<Row className="team-row top-align">
					<Col lg={6}>
						<img className="person-img" src={Christina} />
						<div className="person-info container column-dir center">
							<h3 className="bold">Christina M. Madison, PharmD, FCCP, AAHIVP</h3>
							<h4>CEO at The Public Health Pharmacist</h4>
							<hr className="colored-line" />
							<p>
								Dr. Madison is a trusted and valued health care professional with 13 years of experience
								in Public Health and 16 years of experience as a pharmacy professional. She is the
								Founder and CEO of The Public Health Pharmacist, PLLC - a boutique consulting firm
								specializing in public health. She has an intimate knowledge of the impact public health
								messaging, policy, and legislation can have on communities. She has received multiple
								awards and recognitions and was recently recognized in May 2020 by Pharmacy Times® one
								of the oldest pharmacy publications in the country.
							</p>
							<a
								className="shadow"
								target="_blank"
								href="https://www.linkedin.com/in/drchristinamadisonthepublichealthpharmacist/"
							>
								<Button variant="light"> LinkedIn Profile</Button>
							</a>
						</div>
					</Col>
					<Col lg={6}>
						<img className="person-img" src={Kaveh} />
						<div className="person-info container column-dir center">
							<h3 className="bold">Kaveh Khoshnood, PhD, MPH</h3>
							<h4>Faculty Director of InnovateHealth Yale</h4>
							<hr className="colored-line" />
							<p>
								Dr. Khoshnood is an Associate Professor in the Department of Epidemiology of Microbial
								Diseases and the Director of the BA-BS/MPH Program at the Yale School of Public Health.
								His research interests are the epidemiology and prevention of HIV/AIDS; ethical issues
								in research with vulnerable populations and the health of conflict-affected and forcibly
								displaced populations, particularly in the Middle East and North Africa region. He
								teaches courses on public health ethics and global health. His favorite part of his job
								is mentoring students who are committed to tackle public health issues, especially those
								affecting marginalized communities domestically and internationally.{' '}
							</p>
							<a className="shadow" href="https://www.linkedin.com/in/kaveh-khoshnood-34a11835/">
								<Button onClick={() => window.scrollTo(0, 0)} variant="light">
									{' '}
									LinkedIn Profile
								</Button>
							</a>
						</div>
					</Col>
				</Row>
			</div>

			<DetailedFooter />
		</div>
	</div>
);

export default About;

{
	/* <Col className="hoverable">
                            <img className="col-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                            <div className="person-info container column-dir center">
                                <h3>Leslie Asanga</h3>
                                <p>Brief description and title</p>
                            </div>
                        </Col>

                        <Col className="hoverable">
                            <img className="col-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                            <div className="person-info container column-dir center">
                                <h3>Leonardo Lizbinski</h3>
                                <p>Brief description and title</p>
                            </div>
                        </Col>
                        <Col className="hoverable">
                            <img className="col-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                            <div className="person-info container column-dir center">
                                <h3>Anna Zhang</h3>
                                <p>Brief description and title</p>
                            </div>
                        </Col>
                        <Col className="hoverable">
                            <img className="col-img" src="https://static.wixstatic.com/media/200fe1_06ce139451b6433d95342587d4542c01.png"></img>
                            <div className="person-info container column-dir center">
                                <h3>John Doe</h3>
                                <p>Brief description and title</p>
                            </div>
                        </Col> */
}
