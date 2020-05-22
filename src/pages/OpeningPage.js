import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

import Patient from '../images/patient.png';
import Driver from '../images/driver.png';

function buttonClickHandler() {
    console.log("clicked");
}

const OpeningPage = () => (
    <div>
        <Header />
        <div class="pharm-background container center column-dir after-heading">
            <h2 class="logo">Free same-day medication delivery for the elderly and vulnerable during COVID-19</h2>

            <div class="extra-margin">
                <div class="container space">
                    <Button variant="" onClick={() => window.scrollTo(0, 0)}><Link to="/patient-form">
                        <div class="round-button container center column-dir">
                            <img class="logo" src={Patient}></img>
                            Request Delivery
                    </div>
                    </Link></Button>

                    <Button variant="" onClick={buttonClickHandler}><Link to="/driver-form">
                        <div class="round-button container center column-dir">
                            <img class="logo" src={Driver}></img>
                            Volunteer to Drive
                    </div>
                    </Link></Button>


                </div>
                <div class="container space">
                    <h3 class="button-labels">You can also call our toll-free number (800)-475-7488 to make the prescription pickup request.</h3>

                    <h3 class="button-labels">Have free time to help deliver medication to patients?</h3>

                </div>
            </div>

            <Footer />
        </div>


    </div>

);



export default OpeningPage;