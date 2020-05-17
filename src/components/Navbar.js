import React, { Component } from "react";
import "../style.css";
import { Button, Col, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../images/logo-blue.png';

export default class Sidebar extends Component {
    state = {
        toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {

        // return (
        //     <>
        //         <div className="navBar">
        //             <button onClick={this.Toggle}>
        //                 <FaAlignRight />
        //             </button>
        //             <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
        //                 <li href="#">Home</li>
        //                 <li href="#">About us</li>
        //                 <li href="#">Contact</li>
        //             </ul>
        //         </div>
        //     </>
        // );

        return (
            <>

                <Navbar collapseOnSelect expand="lg" className="logo">
                    <Link to="/" className="my-container">
                        <img
                            alt=""
                            src={logo}
                            className="d-inline-block align-top logo"
                        />{' '}
                        <h1 class="logo">pills2me</h1>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about">Our Mission</Link></Nav.Link>
                            <Nav.Link><Link to="/team">Meet the Team</Link></Nav.Link>
                            <Nav.Link><Link to="/donate">Donate</Link></Nav.Link>
                            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <Navbar className="logo">
                    <Link to="/" className="my-container center left">
                        <img
                            alt=""
                            src={logo}
                            className="d-inline-block align-top logo"
                        />{' '}
                        <h1 class="logo">pills2me</h1>
                    </Link>
                    <Nav className="links">
                        <Nav className="links">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about">Link</Link></Nav.Link>
                        </Nav>
                    </Nav>

                </Navbar> */}
            </>
        );
    }
}

// const Sidebar = () => {
//     return (
//         <Menu>
//             <Link className="menu-item" to="/">Home</Link>

//             <Link className="menu-item" to="/about">About</Link>

//             <Link className="menu-item" to="/news">News</Link>

//             <Link className="menu-item" to="/donate">Donate</Link>

//             <Link className="menu-item" to="/contact">Contact Us</Link>

//         </Menu>
//     );
// }

// export default Sidebar;