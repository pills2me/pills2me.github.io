import React from "react";
import { Button, Col, Row } from 'react-bootstrap'
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

import ceid from '../images/ceid.png';

const News = () => (
    <div>
        <Header />

        <div class="pharm-background fixed-background container center column-dir after-heading">
            <div class="overlay-text-box container center column-dir">
                <h1 class="overlay-text">Pills2Me in the News</h1>
                <h4>Read about our efforts in the media, and how we have been helping the greater community. </h4>
            </div>

            <div class="section section-ceid">
                <div class="container center column-dir">
                    <h1 class="news-heading">“Yalies engage in community assistance during coronavirus outbreak”</h1>
                    <h3>By: ROSE HOROWITCH & KELLY WEI  </h3>
                    <h3>1:01 AM, MAR 31, 2020</h3>
                    <Button className="news-button" ><a class="news-button" href="https://yaledailynews.com/blog/2020/03/31/yalies-engage-in-community-assistance-during-coronavirus-outbreak/">Read the story from the Yale Daily News</a></Button>
                </div>

            </div>

            <DetailedFooter />
        </div>
    </div>
);

export default News;