import React, { Component } from 'react';
import { Button, Card, Form, Jumbotron, Col, Row } from 'react-bootstrap';
import '../style.css';
import { Link } from 'react-router-dom';

class DetailedFooter extends Component {
	render() {
		return (
			<div className="my-container-95 detailed-footer">
				<Row className="my-container between">
					<Col md={3} className="container column-dir center">
						<h4>CONTACT US</h4>
						<div className="">
							<p>
								Email:{' '}
								<a className="footer-link" href="mailto:info@pills2me.com">
									info@pills2me.com
								</a>{' '}
							</p>
							<p>Toll-free Number: 800-475-7488</p>
						</div>
					</Col>
					<Col md={6}>
						<h4>CONNECT AND FOLLOW</h4>
						<div className="container space">
							<a
								href="https://www.facebook.com/pills2me/"
								target="_blank"
								style={{ fontSize: '40px' }}
								className="container center fa fa-facebook"
							/>
							<a
								href="https://twitter.com/"
								target="_blank"
								style={{ fontSize: '40px' }}
								className="container center fa fa-twitter"
							/>
							<a
								href="https://www.instagram.com/pills2me/"
								target="_blank"
								style={{ fontSize: '40px' }}
								className="container center fa fa-instagram"
							/>
							<a
								href="https://www.linkedin.com/company/pills2me-inc/"
								target="_blank"
								style={{ fontSize: '40px' }}
								className="container center fa fa-linkedin"
							/>
						</div>
						<p>Copyright © Pills2Me. All rights reserved.</p>
					</Col>
					<Col md={3}>
						<h4>JOIN TODAY</h4>
						<div>
							<p>
								<Link className="footer-link" onClick={() => window.scrollTo(0, 0)} to="/patient-form">
									Request Rx Pickup/Delivery
								</Link>
							</p>
							<p>
								<Link className="footer-link" onClick={() => window.scrollTo(0, 0)} to="/driver-form">
									Volunteer to Drive
								</Link>
							</p>
							<p>
								<Link className="footer-link" onClick={() => window.scrollTo(0, 0)} to="/pharmacy-form">
									Become a Partner
								</Link>
							</p>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default DetailedFooter;
