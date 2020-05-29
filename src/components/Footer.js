import React, { Component } from 'react';
import '../style.css';

class Footer extends Component {
	render() {
		return (
			<div className="container footer">
				<h7 className="center-text">
					If you have any questions, feel free to email us at{' '}
					<a style={{ color: 'white' }} href="mailto:info@pills2me.com">
						info@pills2me.com
					</a>{' '}
					or call us at our toll-free number 800-475-7488.
				</h7>
			</div>
		);
	}
}

export default Footer;
