import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Button } from 'react-bootstrap';
import { NONAME } from 'dns';

import ReactPixel from 'react-facebook-pixel';

// const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
// const options = {
// 	autoConfig: true, // set pixel's autoConfig
// 	debug: false // enable logs
// };
// ReactPixel.init('676650016509645', advancedMatching, options);
// ReactPixel.revokeConsent();
// fbq('init', '676650016509645');

class Cookies extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: true };
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ open: true });
	}
	closeModal() {
		this.setState({ open: false });
		this.acceptedCookies();
	}

	acceptedCookies() {
		// ReactPixel.grantConsent();
		// ReactPixel.pageView(); // For tracking page view
	}

	render() {
		return (
			<div>
				<Popup
					open={this.state.open}
					closeOnDocumentClick
					overlayStyle={{ backgroundColor: 'transparent' }}
					contentStyle={{
						marginRight: '10px',
						marginBottom: '10px',
						padding: '5px',
						backgroundColor: '#0084f4',
						width: '40%',
						border: 'none',
						borderRadius: '10px'
					}}
					position="bottom right"
					onClose={this.closeModal}
				>
					{/* <div className="modal"> */}
					<a className="close" style={{ color: 'black' }} onClick={this.closeModal}>
						&times;
					</a>
					<p className="cookies">{this.props.message}</p>
					<Button variant="light" style={styles.acceptBtn} onClick={this.closeModal}>
						ACCEPT
					</Button>
				</Popup>
			</div>
		);
	}
}

const styles = {
	acceptBtn: {
		padding: '5px 10px 5px 10px',
		fontSize: '8px',
		width: '40%'
	}
};
export default Cookies;
