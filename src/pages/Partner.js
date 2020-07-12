import React from 'react';
import { Button, Col, Row, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';
import Company from '../components/Company';

import Medicine from '../images/partner.jpg';

import ChapelSt from '../images/partners/chapelst.png';
import WestHaven from '../images/partners/westhaven.png';
import Berneys from '../images/partners/berneys.png';
import Essential from '../images/partners/essential.png';
import Vespar from '../images/partners/vesper.jpg';

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
					<Button
						onClick={() => window.scrollTo(0, 0)}
						variant="light"
						className="shadow"
						style={{ marginTop: '20px' }}
					>
						BECOME A PARTNER
					</Button>
				</Link>
			</div>

			<div className="section">
				<h1 className="section-heading">Benefits of Partnering with Us</h1>
				<hr className="colored-line" />
				<Row>
					<Col md={7}>
						<div className="left-align my-container space  column-dir section-text benefits">
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
						<Company src="http://www.chapelstreetpharmacy.com/" img={ChapelSt} />
					</Col>
					<Col className="my-container column-dir between">
						<Company src="http://www.westhavenpharmacy.com/" img={WestHaven} />
					</Col>
					{/* </Row>
                <br></br>
                <Row> */}
					<Col className="my-container column-dir between">
						<Company src="http://www.berneysrx.com/" img={Berneys} />
					</Col>
					<Col className="my-container column-dir between">
						<Company src="https://www.vesperrx.com/" img={Vespar} />
					</Col>
				</Row>
				<Row>
					{/* <Col className="my-container column-dir between">
						<Company src="https://www.essentialsupply.org/" img={Essential} />
					</Col> */}
				</Row>
			</div>

			<DetailedFooter />
		</div>
	</div>
);

export default Partner;
