import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import medicine from '../images/medicine.jpeg';
import driver from '../images/driver.jpeg';
import patient from '../images/patients.jpeg';
import pharmacies from '../images/pharmacies.jpeg';

const About = () => (
	<div>
		<Header />

		<div className="pharm-background background-about fixed-background container center column-dir after-heading">
			<div className="overlay-text-box container center column-dir">
				<h1 className="overlay-text">Our Mission</h1>
				<h4>
					We strive to help patients receive the care and medications they need without leaving their home.
					Our goal is to promote public health and prevent the spread of the coronavirus (COVID-19) across the
					country.{' '}
				</h4>
			</div>

			<div className="section">
				<h1 id="story">Our Story</h1>
				<hr className="colored-line" />
				<Row>
					<Col md={6} className="container center">
						<iframe
							src="https://www.nbcconnecticut.com/news/local/new-haven-home-pharmacy-delivery-service/2264731/"
							frameBorder="0"
							allow="autoplay; encrypted-media"
							allowFullScreen
							title="video"
							style={{ width: '100%', height: '100%' }}
						/>
						{/* <img className="col-img" src="https://s3-alpha-sig.figma.com/img/a627/3a83/306a58a78d50527f96c4e9bf614ff332?Expires=1590364800&Signature=SUWTDE4ZwoXmJnoQ58uNsfZ5nX0qDBxVIMjyfflVWw0KNwDbwTt2iU8Wpb3x6blTE1YwOE1CEStCO~0WKT6lpECC-4vA0ywgZF-rob-tWW1b4eBy00n4KE00s02eAg-ERV83Tf6t4F42SolNdG0hXY8Ra9uUehJBId-tF~04mv36rjvyvVXvol6-IPFKXEJhotfORoGnC2RBN-Pmf2SFr5rcVeY0xXroEhmArDmVfTFrae72MHy7SVc8~W8zQLZDKvyPyaa2byDdglPsvRFcZ0yE6KVN4BVylsOS~Dzy4r5xfFWmB37aw-z5seMKEFcIARbmo5SLEPqIGkcBlssGfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img> */}
					</Col>
					<Col lg={6}>
						<div className="section-text">
							<p>
								With COVID-19 spreading and endangering millions across the globe, it is of the utmost
								importance that we work to protect the most vulnerable populations. As a pharmacist and
								student at Yale School of Public Health, Leslie Asanga saw this urgent issue and took
								matters into his own hands to create an innovative solution. He founded Pills2Me to
								provide free home medication delivery for the elderly or vulnerable who are more likely
								to develop severe symptoms from COVID-19 per CDC guidelines. We hope that by connecting
								those in need with volunteer drivers, we can promote public health and help ensure the
								vulnerable are not at risk for contracting the virus.
							</p>
						</div>
						<Link to="news">
							<Button onClick={() => window.scrollTo(0, 0)} variant="light" className="shadow">
								PILLS2ME IN THE NEWS
							</Button>
						</Link>
					</Col>
				</Row>
			</div>

			<div className="section">
				<h1>How Pills2Me Works</h1>
				<hr className="colored-line" />
				<Row>
					<Col lg={6}>
						<div className="section-text">
							<p>
								We partner with pharmacies to connect patients with volunteer drivers. Our goal is to
								promote public health and prevent the spread of coronavirus (COVID-19).{' '}
							</p>
							<p>
								Patients who need medication can sign up{' '}
								<a className="section-link" href="/patient-form">
									here
								</a>{' '}
								to request help picking up their prescription from a pharmacy in the New Haven or Las
								Vegas Area.{' '}
							</p>
							<p>
								Then, drivers sign up{' '}
								<a className="section-link" href="/driver-form">
									here
								</a>{' '}
								to volunteer to pick up, deliver, and fulfill these requests.{' '}
							</p>
							<p>
								We have also partenered with local pharmacies who are helping us and our patients by
								offering same-day pickup.
							</p>
						</div>
					</Col>
					<Col lg={6} className="container center">
						<img className="col-img" src={medicine} />
					</Col>
				</Row>
			</div>

			<div className="section">
				<h1>How to Get Involved</h1>
				<hr className="colored-line" />
				<Row className="subsection">
					<Col lg={5} className="container center">
						<img className="col-img" src={patient} />
					</Col>
					<Col className="instructions" lg={7}>
						<h3 className=" italics">Instructions for Patients</h3>
						<div className="section-text">
							<p>1. You or a caregiver needs to be home when the medication is delivered. </p>
							<p>2. Wait for the volunteer to move to a safe distance before you open your door. </p>
							<p>3. Practice social distancing at all times and when interacting with the volunteer. </p>
							<p>4. Please use hand sanitizer and wash your hands as often as possible. </p>
							<p>
								5. Follow all COVID-19{' '}
								<a className="section-link" href="www.cdc.gov/coronavirus/2019-ncov/index.html">
									guidelines
								</a>{' '}
								provided by the CDC
							</p>
						</div>
						<Link to="patient-form">
							<Button onClick={() => window.scrollTo(0, 0)} variant="light" className="shadow">
								REGISTER NOW
							</Button>
						</Link>
					</Col>
				</Row>
				<hr className="colored-line" />
				<Row className="subsection">
					<Col className="instructions" lg={7}>
						<h3 className=" italics">Instructions for Drivers</h3>
						<div className="section-text">
							<p>1. Use the pharmacy drive through if one is available. </p>
							<p>2. Call the patient before you arrive at their residence. </p>
							<p>
								3. Ring the bell or knock on the door, leave the meds in front of the door, stay back at
								least 6 feet and watch the patient take the package before you leave.{' '}
							</p>
							<p>4. Please use hand sanitizer and wash your hands as often as possible. </p>
							<p>
								5. Follow all COVID-19{' '}
								<a className="section-link" href="www.cdc.gov/coronavirus/2019-ncov/index.html">
									guidelines
								</a>{' '}
								provided by the CDC
							</p>
						</div>
						<Link to="driver-form">
							<Button onClick={() => window.scrollTo(0, 0)} variant="light" className="shadow">
								REGISTER NOW
							</Button>
						</Link>
					</Col>
					<Col lg={5} className="container center">
						<img className="col-img" src={driver} />
					</Col>
				</Row>
				<hr className="colored-line" />
				<Row>
					<Col lg={5} className="container center">
						<img className="col-img" src={pharmacies} />
					</Col>
					<Col className="instructions" lg={7}>
						<h3 className=" italics">Instructions for Pharmacies</h3>
						<div className="section-text">
							<p>
								1. Understand that volunteer drivers will be picking up medications for patients who are
								at home practicing social distancing.
							</p>
							<p>
								2. Our drivers and patients will notify us when successful delivery has been performed.
							</p>
							<p>
								3. We hope to limit the number of social interactions at pharmacies by reducing the
								number of people who pick up medications.{' '}
							</p>
							<p>4. Please use hand sanitizer and wash your hands as often as possible. </p>
							<p>
								5. Follow all COVID-19{' '}
								<a className="section-link" href="www.cdc.gov/coronavirus/2019-ncov/index.html">
									guidelines
								</a>{' '}
								provided by the CDC
							</p>
						</div>
						<Link to="pharmacy-form">
							<Button onClick={() => window.scrollTo(0, 0)} variant="light" className="shadow">
								PARTNER WITH US
							</Button>
						</Link>
					</Col>
				</Row>
			</div>

			<DetailedFooter />
		</div>
	</div>
);

export default About;
