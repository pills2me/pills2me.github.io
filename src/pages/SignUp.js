import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';

function buttonClickHandler() {
    console.log("clicked");
}

const SignUp = (userType) => (
    <div>
        <div className="pharm-background container center column-dir">



            <div className="container column-dir extra-margin">
                <Button variant="" size="lg" block onClick={buttonClickHandler}>
                    <Link to="/login">
                        <div className="flat-button container center">Login</div>
                    </Link>
                </Button>

                <h3>OR</h3>

                <Button variant="" size="lg" block onClick={buttonClickHandler}>
                    <Link to="/register">
                        <div className="flat-button container center blue-background">Register</div>
                    </Link>
                </Button>
            </div>

        </div>
    </div>
);

export default SignUp;