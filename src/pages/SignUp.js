import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';

import OpeningLogo from '../components/OpeningLogo';
import Sidebar from '../components/Sidebar';

function buttonClickHandler() {
    console.log("clicked");
}

const SignUp = (userType) => (
    <div>
        <Sidebar />
        <div class="pharm-background container center column-dir">


            <OpeningLogo />

            <div class="container column-dir extra-margin">
                <Button variant="" size="lg" block onClick={buttonClickHandler}>
                    <Link to="/login">
                        <div class="flat-button container center">Login</div>
                    </Link>
                </Button>

                <h3>OR</h3>

                <Button variant="" size="lg" block onClick={buttonClickHandler}>
                    <Link to="/register">
                        <div class="flat-button container center blue-background">Register</div>
                    </Link>
                </Button>
            </div>

        </div>
    </div>
);

export default SignUp;