import React, { useState } from 'react';
import { Button, Col, Row, Jumbotron, InputGroup, FormControl } from 'react-bootstrap';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';
import Paypal from '../components/Paypal';

import donateimg from '../images/donate.jpg';

function Donate() {
	const [ donationAmount, setDonationAmount ] = useState(0.01);
	const [ other, setOther ] = useState(0.01);

	const otherHandler = (event) => {
		setOther(event.target.value);
	};

	return (
		<div>
			<Header />

			<div className="pharm-background background-donate fixed-background container center column-dir after-heading">
				<div className="overlay-text-box container center column-dir">
					<h1 className="overlay-text">Make a Donation</h1>
					<h4 className="extra-margin">
						Pills2Me is currently run entirely by volunteers. Please feel free to make a donation to help us
						provide our volunteer drivers with gas and supplies.{' '}
					</h4>
					<h4>Any amount will go a long way. We greatly appreciate your support. Thank you.</h4>
					<a className="logo" href="#donate">
						<Button variant="light" className="shadow extra-margin">
							MAKE A DONATION
						</Button>
					</a>
					<br id="donate" />
				</div>

				<div className="section ">
					<h1 className="comfortaa">Contribute to our cause</h1>
					<Row style={{ marginTop: '20px' }}>
						<Col lg={6} className="my-container center column-dir">
							<p style={{ marginTop: '0px', width: '70%' }}>
								Thank you so much for contributing! We use the donations we receive to better serve our
								communities and help improve the overal user experience. We greatly appreciate your help
								in supporting our mission.
							</p>
							<img src={donateimg} className="donate-img" />
						</Col>
						<Col className="container center">
							<Jumbotron
								className="container column-dir space"
								style={{ width: '80%', minHeight: '100%' }}
							>
								{donationAmount == 0.01 ? (
									<div className="center-text container column-dir space">
										<h3>Select a donation amount</h3>
										<div>
											<Button
												className="donation-btn"
												variant="light"
												onClick={() => setDonationAmount(5.0)}
											>
												$5
											</Button>
											<Button
												className="donation-btn"
												variant="light"
												onClick={() => setDonationAmount(10.0)}
											>
												$10
											</Button>
										</div>
										<div>
											<Button
												className="donation-btn"
												variant="light"
												onClick={() => setDonationAmount(15.0)}
											>
												$15
											</Button>
											<Button
												className="donation-btn"
												variant="light"
												onClick={() => setDonationAmount(20.0)}
											>
												$20
											</Button>
										</div>

										<Button
											className="donation-btn my-container row-dir"
											variant="light"
											onClick={() => setDonationAmount(other)}
										>
											Other
											{/* <input
												className="text-input"
												placeholder="(e.g $50, $100)"
												onChange={otherHandler}
											/> */}
											<InputGroup className="mb-2 text-input">
												<InputGroup.Prepend>
													<InputGroup.Text>$</InputGroup.Text>
												</InputGroup.Prepend>
												<FormControl
													id="inlineFormInputGroup"
													onChange={otherHandler}
													placeholder="(e.g. 100, 500)"
												/>
											</InputGroup>
										</Button>
									</div>
								) : (
									<Paypal donation={donationAmount} />
								)}
							</Jumbotron>
						</Col>
					</Row>
				</div>
				<DetailedFooter />
			</div>
		</div>
	);
}

export default Donate;
