import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style.css";

import OpeningLogo from '../components/OpeningLogo';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

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
                    <Button variant="" onClick={buttonClickHandler}><Link to="/patient-form">
                        <div class="round-button container center column-dir">
                            <img class="logo" src="https://s3-alpha-sig.figma.com/img/083a/78db/a5c2db3975436f6391c10b8a467b33ad?Expires=1589760000&Signature=Svi4xg5fPmgOYQL5lCNBwSJIWpmV72K5RtxMm2VKEmnBH5V8s4z4k3tfkBrBScVOBX8J9gh2v2JQ5WSh8vBrbyWbIGuWr8272zkWeIbjQkDXqJOZcyr6QGOCE~J-hRyVPisw7F87xCzCzXOfQiE1HejddClmyywb2IK4OXIaZ0HKVcv2ja6wWtlna-ud7nLhwep72X1almKFQAzlfV0wDvrRzQbFQDLLEOjJ-LjqrIReZR2O1W6WfZKZQjHiWrDazoPNMPIoIhO~mBSXmWAXK6lkfOUV6WQSGEtbcx2Xp3ldNzZB-j4SFRwZt~dSPN3BuEHxQb09l2Fucus3ZYb05g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                            Request Delivery
                    </div>
                    </Link></Button>

                    <Button variant="" onClick={buttonClickHandler}><Link to="/driver-form">
                        <div class="round-button container center column-dir">
                            <img class="logo" src="https://s3-alpha-sig.figma.com/img/3d31/5362/ef904b0e6e0ec06c972e3e94a0e8a4b1?Expires=1589760000&Signature=JrSh0ksvg6ma1KA6TmI~k2StPXQSzirvNUFLA1PR84bq83DdWHNNeoCLDBuUZiM7MkPyIGkAOZAf8FoYA1KsqiMZ5vEH8HfgF58~RgLtq1JtjSOMECj56odQaRpCuq6qq~j--y13S4MbdE~T0fLL15OTXzcO2sTeN96ngPu4SvH3rk5GrfmvNmtX4MhfbA5mpxQ9TNNQ7GLBeBWLCmoPGbkugzqfa28ZvEulzYwm3wrECC-LZF3GxSxC9apWniGzFwNIIegpLisqy9zt4-vFnrGEmMXMHcSL2qPKodhUqjjM4OgkIb7Kw6s3GCzo967ItaY~ZGWPEiga~RoOROYRJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
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