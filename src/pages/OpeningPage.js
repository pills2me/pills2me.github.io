import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import Patient from '../images/patient.png';
import Driver from '../images/driver.png';

function buttonClickHandler() {
	console.log('clicked');
}

const OpeningPage = () => (
	<div>
		<Header />
		<div className="pharm-background background-home container center column-dir after-heading">
			<div className="homescreen center container column-dir">
				<h2 className="logo">
					Free same-day medication pick-up and delivery from any pharmacy for the elderly and vulnerable
					during COVID-19.
				</h2>

				<div className="">
					<div className="container space">
						<Button variant="" onClick={() => window.scrollTo(0, 0)}>
							<Link to="/patient-form">
								<div className="round-button container center column-dir">
									<img className="icon" src={Patient} />
									Request Delivery
								</div>
							</Link>
						</Button>

						<Button variant="" onClick={buttonClickHandler}>
							<Link to="/driver-form">
								<div className="round-button container center column-dir">
									<img className="icon" src={Driver} />
									Volunteer to Drive
								</div>
							</Link>
						</Button>
					</div>
					<div className="container space">
						<h3 className="button-labels">
							You can also call our toll-free number (800)-475-7488 to make the prescription pickup
							request.
						</h3>

						<h3 className="button-labels">Have free time to help deliver medication to patients?</h3>
					</div>
				</div>
			</div>

			<div className="section section-blue">
				<h1>What We Offer</h1>
				<hr className="colored-line" />
				<Row>
					<Col lg={6} className="left-align">
						<h3 className="center-text">Our Patients</h3>

						<p>- Free same-day medication delivery from any pharmacy.</p>
						<p>- We deliver within 2 hours of request.</p>
						<p>- Free pharmacist consultation</p>
						<p>- Purchase over-the-counter items and have them delivered within a couple of hours.</p>
						<p>- Enjoy special offers and discounts from our partner pharmacies.</p>
					</Col>
					<Col className="left-align">
						<h3 className="center-text">Our Pharmacy Partners</h3>

						<p>- Free same-day delivery for your elderly and immunocompromised patients.</p>
						<p>- Free promotion on our platforms.</p>
						<p>- Patients can purchase your OTC items using our platform.</p>
						<p>- And much more.....</p>
					</Col>
				</Row>
			</div>

			<DetailedFooter />
		</div>
	</div>
);

export default OpeningPage;
