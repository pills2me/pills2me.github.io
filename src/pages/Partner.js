import React from 'react';
import { Button, Col, Row, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import Medicine from '../images/partner.jpg';

import ChapelSt from '../images/partners/chapelst.png';
import WestHaven from '../images/partners/westhaven.png';
import Berneys from '../images/partners/berneys.png';
import Essential from '../images/partners/essential.png';

const Partner = () => (
	<div>
		<Header />

		<div className="pharm-background background-partner fixed-background container center column-dir after-heading">
			<div className="overlay-text-box container center column-dir">
				<h1 className="overlay-text">Partner with Us</h1>
				<h4 className="overlay-description">
					We have partnered with many pharmacies and organizations in the New Haven and Las Vegas area that
					help us facilitate the delivery process.{' '}
				</h4>
				<Link to="pharmacy-form">
					<Button onClick={() => window.scrollTo(0, 0)} variant="light" className="shadow bitmore-margin">
						BECOME A PARTNER
					</Button>
				</Link>
			</div>

			<div className="section">
				<h1 className="section-heading">Benefits of Partnering with Us</h1>
				<hr className="colored-line" />
				<Row>
					<Col lg={7}>
						<div
							style={{ alignItems: 'baseline', height: '100%' }}
							className="left-align my-container space  column-dir section-text"
						>
							<h4>1. Free same-day delivery for your elderly and immunocompromised patients.</h4>
							<h4>2. Free promotion on our platforms.</h4>
							<h4>3. Patients can purchase your OTC items using our platform.</h4>
							<h4> And much more.....</h4>
						</div>
					</Col>
					<Col>
						<img className="center-text" src={Medicine} />
					</Col>
				</Row>
			</div>

			<div className="section">
				<h1 className="section-heading">Our Partners</h1>
				<hr className="colored-line" />
				<Row>
					<Col className="my-container column-dir between">
						<img className="center-text" src={ChapelSt} />
						<div>
							<h3>
								<a style={{ color: 'white' }} href="http://www.chapelstreetpharmacy.com/">
									Chapel Street Pharmacy
								</a>
							</h3>
							<h5>1245 Chapel St </h5>
							<h5>New Haven, CT 06511</h5>
						</div>
					</Col>
					<Col className="my-container column-dir between">
						<img className="center-text" src={WestHaven} />
						<div>
							<h3>
								<a style={{ color: 'white' }} href="http://www.westhavenpharmacy.com/">
									West Haven Pharmacy
								</a>
							</h3>
							<h5>764, Campbell Ave, Unit A </h5>
							<h5>West Haven, CT 06516</h5>
						</div>
					</Col>
					{/* </Row>
                <br></br>
                <Row> */}
					<Col className="my-container column-dir between">
						<img className="center-text" src={Berneys} />
						<div>
							<h3>
								<a style={{ color: 'white' }} href="http://www.berneysrx.com/">
									Berneys Pharmacy
								</a>
							</h3>
							<h5>615 Howard Avenue</h5>
							<h5>New Haven, CT 06519</h5>
						</div>
					</Col>
					<Col className="my-container column-dir between">
						<img className="center-text" src={Essential} />
						<div>
							<h3>
								<a style={{ color: 'white' }} href="https://www.essentialsupply.org/">
									Essential Supply
								</a>
							</h3>
							<h5>
								Essential Supply is a student-led nonprofit founded in response to the COVID-19 crisis
								to facilitate deliveries.{' '}
							</h5>
						</div>
					</Col>
				</Row>
			</div>

			<DetailedFooter />
		</div>
	</div>
);

export default Partner;
