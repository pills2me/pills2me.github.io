import React from "react";
import { Button } from 'react-bootstrap'
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

const News = () => (
    <div>
        <Header />

        <div className="pharm-background fixed-background container center column-dir after-heading">
            <div className="overlay-text-box container center column-dir">
                <h1 className="overlay-text">Pills2Me in the News</h1>
                <h4>Read about our efforts in the media, and how we have been helping the greater community. </h4>
            </div>
            <hr className="colored-line" />

            <div className="section section-nbc">
                <div className="container center column-dir">
                    <h1 className="news-heading">“Volunteer Prescription Delivery Taking Off in New Haven”</h1>
                    <h3 className="news-info">By: Kyle Jones</h3>
                    <h3 className="news-info">FROM NBC CONNECTICUT</h3>
                    <Button className="news-button" ><a className="news-button" href="https://www.nbcconnecticut.com/news/coronavirus/volunteer-prescription-delivery-taking-off-in-new-haven/2264635/">Read the story from NBC CT</a></Button>
                </div>

            </div>
            <hr className="colored-line" />
            <div className="section section-ceid">
                <div className="container center column-dir">
                    <h1 className="news-heading">“Yalies engage in community assistance during coronavirus outbreak”</h1>
                    <h3 className="news-info">By: Rose Horowitch & Kelly Wei  </h3>
                    <h3 className="news-info">FROM YALE DAILY NEWS</h3>
                    <Button className="news-button" ><a className="news-button" href="https://yaledailynews.com/blog/2020/03/31/yalies-engage-in-community-assistance-during-coronavirus-outbreak/">Read the story from the Yale Daily News</a></Button>
                </div>

            </div>
            <hr className="colored-line" />
            <div className="section section-wtnh">
                <div className="container center column-dir">
                    <h1 className="news-heading">“Pills2Me program helps elderly access medications during pandemic”</h1>
                    <h3 className="news-info">By: Alex Ceneviva</h3>
                    <h3 className="news-info">FROM NEWS 8 WTNH</h3>
                    <Button className="news-button" ><a className="news-button" href="https://www.wtnh.com/on-air/gmct-at-nine/pills2me-program-helps-elderly-access-medications-during-pandemic/?fbclid=IwAR1oJljibrAp6MRtj9DDTsAbXed64oVBjYQnqnCY1FCoMvxmeVbdbjOq5zY">Read the story from WTNH</a></Button>
                </div>

            </div>
            <hr className="colored-line" />
            <div className="section section-gray">
                <div className="container center column-dir">
                    <h1 className="news-heading">“YSPH Student Innovators Respond to Pandemic Needs”</h1>
                    <h3 className="news-info">By: Colin Poitras</h3>
                    <h3 className="news-info">FROM STARTUP YALE</h3>
                    <Button className="news-button" ><a className="news-button" href="https://publichealth.yale.edu/news-article/24005/">Read the story from Startup Yale</a></Button>
                </div>

            </div>
            <DetailedFooter />
        </div>
    </div>
);

export default News;