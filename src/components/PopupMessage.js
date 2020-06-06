import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class PopupMessage extends React.Component {
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
					contentStyle={{ border: 'none', borderRadius: '5px', width: 'none' }}
					onClose={this.closeModal}
				>
					{/* <div className="modal"> */}
					<a className="close" style={{ color: 'black' }} onClick={this.closeModal}>
						&times;
					</a>
					<p className="popup-message">{this.props.message}</p>
				</Popup>
			</div>
		);
	}
}
export default PopupMessage;
