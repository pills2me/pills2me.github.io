import React from "react";
import { Link } from 'react-router-dom';
import { Button, Card, Form, Jumbotron, Col } from 'react-bootstrap'
import '../style.css';

import Header from '../components/Header';

const Submitted = () => (
    <div>
        <Header />
        <div class="pharm-background container center column-dir after-heading">
            <Jumbotron>
                <div class="submitted">
                    <h3 class="submitted">Thank you for your submission!</h3>
                    <h3 class="submitted">If you have any questions please feel free to reach out to us at <a href="mailto:info@pills2me.com">info@pills2me.com</a></h3>
                    <h3 class="submitted">Please check your email for more information about the next steps.</h3>
                    <Button variant="light"><Link to="/">RETURN TO HOME</Link></Button>
                </div>
            </Jumbotron>

        </div>
    </div>
);

export default Submitted;