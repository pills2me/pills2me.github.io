import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import nbc from '../images/news/nbc-ct.png';
import ceid from '../images/news/ceid.png';
import wtnh from '../images/news/wtnh.png';
import publichealthyale from '../images/news/publichealthyale.png';

const News = () => (
	<div>
		<Header />

		<div className="pharm-background fixed-background container center column-dir after-heading">
			<div className="overlay-text-box container center column-dir">
				<h1 className="overlay-text">Pills2Me in the News</h1>
				<h4>Read about our efforts in the media, and how we have been helping the greater community. </h4>
			</div>

			<div className="section">
				<Row>
					<Col lg={6} className="news-box">
						<img src={nbc} className="news-img" />
						<h1 className="news-heading">
							<a href="https://www.nbcconnecticut.com/news/coronavirus/volunteer-prescription-delivery-taking-off-in-new-haven/2264635/">
								“Volunteer Prescription Delivery Taking Off in New Haven”
							</a>
						</h1>
						<h3 className="news-info">By: Kyle Jones</h3>
						<h3 className="news-info">FROM NBC CONNECTICUT</h3>
					</Col>
					<Col lg={6} className="news-box">
						<img src={ceid} className="news-img" />
						<h1 className="news-heading">
							<a href="https://yaledailynews.com/blog/2020/03/31/yalies-engage-in-community-assistance-during-coronavirus-outbreak/">
								“Yalies engage in community assistance during coronavirus outbreak”
							</a>
						</h1>
						<h3 className="news-info">By: Rose Horowitch & Kelly Wei </h3>
						<h3 className="news-info">FROM YALE DAILY NEWS</h3>
					</Col>
				</Row>
				<Row>
					<Col lg={6} className="news-box">
						<img src={wtnh} className="news-img" />
						<h1 className="news-heading">
							<a href="https://www.wtnh.com/on-air/gmct-at-nine/pills2me-program-helps-elderly-access-medications-during-pandemic/?fbclid=IwAR1oJljibrAp6MRtj9DDTsAbXed64oVBjYQnqnCY1FCoMvxmeVbdbjOq5zY">
								“Pills2Me program helps elderly access medications during pandemic”
							</a>
						</h1>
						<h3 className="news-info">By: Alex Ceneviva</h3>
						<h3 className="news-info">FROM NEWS 8 WTNH</h3>
					</Col>
					<Col lg={6} className="news-box">
						<img src={publichealthyale} className="news-img" />
						<h1 className="news-heading">
							<a href="https://publichealth.yale.edu/news-article/24005/">
								“YSPH Student Innovators Respond to Pandemic Needs”
							</a>
						</h1>
						<h3 className="news-info">By: Colin Poitras</h3>
						<h3 className="news-info">FROM STARTUP YALE</h3>
					</Col>
				</Row>
			</div>

			{/* 
			<div className="section section-gray">
				<div className="container center column-dir">
					<h1 className="news-heading">“YSPH Student Innovators Respond to Pandemic Needs”</h1>
					<h3 className="news-info">By: Colin Poitras</h3>
					<h3 className="news-info">FROM STARTUP YALE</h3>
					<Button className="news-button">
						<a className="news-button" href="https://publichealth.yale.edu/news-article/24005/">
							Read the story from Startup Yale
						</a>
					</Button>
				</div>
			</div> */}
			<DetailedFooter />
		</div>
	</div>
);

export default News;
