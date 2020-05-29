import React from "react";
import { Link } from 'react-router-dom';
import { Button, Jumbotron } from 'react-bootstrap'
import '../style.css';

import Header from '../components/Header';

const Submitted = () => (
    <div>
        <Header />
        <div className="pharm-background container center column-dir after-heading">
            <Jumbotron>
                <div className="submitted">
                    <h3 className="submitted">Thank you for your submission!</h3>
                    <h3 className="submitted">If you have any questions please feel free to reach out to us at <a href="mailto:info@pills2me.com">info@pills2me.com</a></h3>
                    <h3 className="submitted">Please check your email for more information about the next steps.</h3>
                    <Button variant="light"><Link to="/">RETURN TO HOME</Link></Button>
                </div>
            </Jumbotron>

        </div>
    </div>
);

export default Submitted;