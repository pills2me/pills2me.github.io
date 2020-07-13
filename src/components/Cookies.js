import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Button } from 'react-bootstrap';
import { NONAME } from 'dns';

!(function(f, b, e, v, n, t, s) {
	if (f.fbq) return;
	n = f.fbq = function() {
		n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
	};
	if (!f._fbq) f._fbq = n;
	n.push = n;
	n.loaded = !0;
	n.version = '2.0';
	n.queue = [];
	t = b.createElement(e);
	t.async = !0;
	t.src = v;
	s = b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '676650016509645');

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
		fbq('track', 'PageView');
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
