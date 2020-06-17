import React from 'react';
import { Button, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import Patient from '../images/patient.png';
import Driver from '../images/driver.png';

import nbc from '../images/news/nbc-ct.png';
import publichealth from '../images/news/publichealthyale.png';
import ceid from '../images/news/ceid.png';
import whitescreen from '../images/news/white-screen.png';

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
				<h1 class="section-heading">Bringing Your Pharmacy to You</h1>
				<div className="container stretch extra-margin responsiveCols">
					<div className="left-align blue-border-box top-align">
						<h2 className="center-text ">Our Patients</h2>
						<ul style={{ marginTop: '20px' }}>
							<li class="offerList">Free same-day medication delivery from any pharmacy.</li>
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
							<li class="offerList">
								Free same-day medication delivery for your elderly and immunocompromised patients.
							</li>
							<li className="offerList">Free promotion on our platforms.</li>
							<li className="offerList">Patients can purchase your OTC items using our platform.</li>
							<li className="offerList">And much more.....</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="section">
				<h1 className="section-heading">Pills2Me in the News</h1>
				<hr className="colored-line" />
				<div className="container center">
					<Carousel style={{ width: '80%' }} className="shadow">
						<Carousel.Item>
							<img className="d-block w-100" src={nbc} alt="NBC Article" />

							<Carousel.Caption>
								<a
									className="carousel-link"
									target="_blank"
									href="https://www.nbcconnecticut.com/news/coronavirus/volunteer-prescription-delivery-taking-off-in-new-haven/2264635/"
								>
									<h3>“Volunteer Prescription Delivery Taking Off in New Haven”</h3>
								</a>
								<p>FROM NBC CONNECTICUT</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100" src={publichealth} alt="Public Health Yale Article" />

							<Carousel.Caption>
								<a
									className="carousel-link"
									target="_blank"
									href="https://publichealth.yale.edu/news-article/24005/"
								>
									<h3>“YSPH Student Innovators Respond to Pandemic Needs”</h3>
								</a>
								<p>FROM STARTUP YALE</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100" src={ceid} alt="Third slide" />

							<Carousel.Caption>
								<a
									className="carousel-link"
									target="_blank"
									href="https://yaledailynews.com/blog/2020/03/31/yalies-engage-in-community-assistance-during-coronavirus-outbreak/"
								>
									<h3>“Yalies engage in community assistance during coronavirus outbreak”</h3>
								</a>
								<p>FROM YALE DAILY NEWS</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100" src={whitescreen} />
							<Carousel.Caption
								style={{
									backgroundColor: 'transparent',
									bottom: '30%',
									left: '15%',
									right: '15%',
									width: 'auto'
								}}
							>
								<h3 style={{ color: 'black', fontSize: '35px' }}>See more articles on Pills2Me</h3>
								<Link to="news">
									<Button
										onClick={() => window.scrollTo(0, 0)}
										variant="primary"
										className="blue-btn shadow"
										style={{ marginTop: '30px' }}
									>
										PILLS2ME IN THE NEWS
									</Button>
								</Link>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>

			<DetailedFooter />
		</div>
	</div>
);

export default OpeningPage;
