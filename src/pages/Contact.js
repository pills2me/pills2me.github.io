import React from "react";
import { Button, Col, Row } from 'react-bootstrap'
import '../style.css';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DetailedFooter from '../components/DetailedFooter';

const Contact = () => (
    <div>
        <Header />

        <div class="pharm-background fixed-background container center column-dir after-heading">
            <div class="overlay-text-box container center column-dir">
                <h1 class="overlay-text">Contact</h1>
                <h4></h4>
            </div>

            <DetailedFooter />
        </div>
    </div>
);

export default Contact;