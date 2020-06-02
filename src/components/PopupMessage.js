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
				{/* <button className="button" onClick={this.openModal}>
					Controlled Popup
				</button> */}
				<Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>
					{/* <div className="modal"> */}
					<a className="close" style={{ color: 'black' }} onClick={this.closeModal}>
						&times;
					</a>
					<p className="popup-message">
						We are deeply saddened by the recent events. Nobody deserves to die like George Floyd. Our
						hearts go out to his loved ones and everyone else affected by the recent events.
						#JusticeforGeorgeFloyd
					</p>

					{/* </div> */}
				</Popup>
			</div>
		);
	}
}
export default PopupMessage;
