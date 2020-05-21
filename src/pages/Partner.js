import React from "react";
import { Button, Col, Row, Jumbotron } from 'react-bootstrap'
import '../style.css';

import Header from '../components/Header';
import DetailedFooter from '../components/DetailedFooter';

const Partner = () => (
    <div>
        <Header />

        <div class="pharm-background fixed-background container center column-dir after-heading">
            <div class="overlay-text-box container center column-dir">
                <h1 class="overlay-text">Partner with Us</h1>

            </div>

            <DetailedFooter />
        </div>
    </div >
);

export default Partner;