import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { NONAME } from 'dns';

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
				</Popup>
			</div>
		);
	}
}
export default Cookies;
