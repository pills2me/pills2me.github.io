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
				<h2 className="opening-text">
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

			<div className="section" style={{ color: '#0084F4' }}>
				<h1 className="section-heading">What We Offer</h1>
				<div className="container stretch extra-margin responsiveCols">
					<div className="left-align blue-border-box top-align">
						<h2 className="center-text ">Our Patients</h2>
						<ul style={{ marginTop: '20px' }}>
							<li className="offerList">Free same-day medication delivery from any pharmacy.</li>
							<li className="offerList">We deliver within 2 hours of request.</li>
							<li className="offerList">Free pharmacist consultation</li>
							<li className="offerList">
								Purchase over-the-counter items and have them delivered within a couple of hours.
							</li>
							<li className="offerList">
								Enjoy special offers and discounts from our partner pharmacies.
							</li>
						</ul>
					</div>
					<div className="left-align blue-border-box top-align">
						<h2 className="center-text">Our Pharmacy Partners</h2>
						<ul style={{ marginTop: '20px' }}>
							<li className="offerList">
								Free same-day delivery for your elderly and immunocompromised patients.
							</li>
							<li className="offerList">Free promotion on our platforms.</li>
							<li className="offerList">Patients can purchase your OTC items using our platform.</li>
							<li className="offerList">And much more.....</li>
						</ul>
					</div>
				</div>
			</div>

			<DetailedFooter />
		</div>
	</div>
);

export default OpeningPage;
