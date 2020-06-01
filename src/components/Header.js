import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../style.css';
import { Link } from 'react-router-dom';

import blue from '../images/bluelogo_slogan.svg';
import white from '../images/whitelogo_slogan.svg';

const color = '#0084F4';

class Header extends Component {
	state = {
		toggleOpen: false,
		atTop: true,
		logo: blue
	};
	Toggle = () => {
		this.setState({ toggleOpen: !this.state.toggleOpen });
		console.log(this.state.toggleOpen);
		// const backgroundcolor = this.state.toggleOpen ? this.state.backgroundColor : 'gray';
		// this.setState({ backgroundColor: backgroundcolor });
		// console.log(this.state.backgroundColor);
	};

	headerColor = () => {
		if (!this.state.atTop || this.state.toggleOpen) {
			return { backgroundColor: color };
		} else {
			return { backgroundColor: 'transparent' };
		}
	};

	logoColor = () => {
		if (!this.state.atTop || this.state.toggleOpen) {
			return white;
		} else {
			return blue;
		}
	};

	componentDidMount() {
		document.addEventListener('scroll', () => {
			const attop = window.scrollY < 100 ? true : false;
			this.setState({ atTop: attop });
		});
	}
	//

	render() {
		return (
			<div className="header" style={this.headerColor()}>
				<Navbar collapseOnSelect expand="lg" bg="" variant="dark">
					<Link to="/" className="my-container logo" onClick={() => window.scrollTo(0, 0)}>
						<img alt="" src={this.logoColor()} className="d-inline-block align-top logo" />
						{/* <img alt="" src={logo} className="d-inline-block align-top logo" />{' '}
						<h1 className="logo">pills2me</h1> */}
					</Link>
					<Navbar.Toggle onClick={this.Toggle} aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto" />
						<Nav>
							<Link to="/" className="nav-link" onClick={() => window.scrollTo(0, 0)}>
								Home
							</Link>
							<Link to="/about" className="nav-link" onClick={() => window.scrollTo(0, 0)}>
								Our Mission
							</Link>
							<Link to="/team" className="nav-link" onClick={() => window.scrollTo(0, 0)}>
								Meet the Team
							</Link>
							<Link to="/partner" className="nav-link" onClick={() => window.scrollTo(0, 0)}>
								Partner with Us
							</Link>
							{/* <Nav.Link onClick={() => window.scrollTo(0, 0)}><Link to="/donate" >Donate</Link></Nav.Link> */}
							<Link to="/contact" className="nav-link" onClick={() => window.scrollTo(0, 0)}>
								Contact
							</Link>
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
                        <h1 className="logo">pills2me</h1>
                    </Link>
                    <Nav className="links">
                        <Nav className="links">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about">Link</Link></Nav.Link>
                        </Nav>
                    </Nav>

                </Navbar> */}
			</div>
		);
	}
}

export default Header;
