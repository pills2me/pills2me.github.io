import React from 'react';
import { Button, Col, Row, Jumbotron } from 'react-bootstrap';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

const Donate = () => (
	<div>
		<Header />

		<div className="pharm-background background-donate fixed-background container center column-dir after-heading">
			<div className="overlay-text-box container center column-dir">
				<h1 className="overlay-text">Make a Donation</h1>
				<h4 className="extra-margin">
					Pills2Me is currently run entirely by volunteers. Please feel free to make a donation to help us
					provide our volunteer drivers with gas and supplies.{' '}
				</h4>
				<h4 className="extra-margin">
					Any amount will go a long way. We greatly appreciate your support. Thank you.
				</h4>
				<a className="logo" href="#donate">
					<Button variant="light" className="shadow extra-margin">
						MAKE A DONATION
					</Button>
				</a>
			</div>

			<div id="donate" className="section section-blue">
				<h1>Contribute to our cause</h1>
				<Row>
					<Col>
						<img />
					</Col>
					<Col>
						<Jumbotron />
					</Col>
				</Row>
			</div>
			<DetailedFooter />
		</div>
	</div>
);

export default Donate;
