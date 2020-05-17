import React, { Component } from "react";
import "../style.css";
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import logo from '../images/logo-blue.png';

class Header extends Component {
    render() {
        return (
            <div class="header">
                <Navbar />
                {/* <div class="container center column-dir logo">
                    <Link to="/" className="logo">
                        <div class="container center">

                            <img class="logo" src={logo}></img>
                            <h1 class="logo"> pills2me</h1>
                        </div>
                    </Link>

                </div> */}
            </div >
        );
    }
}




export default Header;