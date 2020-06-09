import React, { useState, useRef, useEffect } from 'react';
import { Button, Col, Row, Jumbotron } from 'react-bootstrap';

function Paypal(props) {
	const [ paidFor, setPaidFor ] = useState(false);
	const [ loaded, setLoaded ] = useState(false);

	let paypalRef = useRef();

	useEffect(() => {
		const script = document.createElement('script');
		script.src =
			'https://www.paypal.com/sdk/js?client-id=AfRPgzQWR1ymjm8d3hjEiWCkDVZNhuv-Z-D1euhBthOyB8DiPNN5spAs3ieO9D5fTthqSamk9Uglb-2i';
		script.addEventListener('load', () => setLoaded(true));
		document.body.appendChild(script);
		console.log('loaded? sure?');

		if (loaded) {
			console.log(props.donation);

			setTimeout(() => {
				window.paypal
					.Buttons({
						style: {
							shape: 'rect',
							color: 'blue',
							layout: 'vertical',
							label: 'paypal'
						},
						createOrder: (data, actions) => {
							console.log('createOrder');
							return actions.order.create({
								purchase_units: [
									{
										amount: {
											currency_code: 'USD',
											value: props.donation
										}
									}
								]
							});
						},
						onApprove: (data, actions) => {
							const order = actions.order.capture().then(function(details) {
								console.log('Transaction completed by ' + details.payer.name.given_name);
								setPaidFor(true);
							});
							console.log(order);
							return order;
						}
					})
					.render(paypalRef);
			});
		}
	});

	return (
		<div>
			{paidFor ? (
				<div className="container column-dir center">
					<h2 className="comfortaa center-text">Donation Complete!</h2>
					<p>Thank you for contributing to our mission.</p>
				</div>
			) : (
				<div>
					<h3>Select payment method</h3>
					<div className="extra-margin" ref={(v) => (paypalRef = v)} />
				</div>
			)}
		</div>
	);
}
export default Paypal;

// class PaypalButton extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			showButton: false
// 		};

// 		window.React = React;
// 		window.ReactDOM = ReactDOM;
// 	}

// 	componentDidMount() {
// 		const { isScriptLoaded, isScriptLoadSucceed } = this.props;

// 		if (isScriptLoaded && isScriptLoadSucceed) {
// 			this.setState({ showButton: true });
// 		}
// 	}

// 	componentWillReceiveProps(nextProps) {
// 		const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

// 		const isLoadedButWasntLoadedBefore = !this.state.showButton && !this.props.isScriptLoaded && isScriptLoaded;

// 		if (isLoadedButWasntLoadedBefore) {
// 			if (isScriptLoadSucceed) {
// 				this.setState({ showButton: true });
// 			}
// 		}
// 	}

// 	render() {
// 		const { total, currency, env, commit, client, onSuccess, onError, onCancel } = this.props;

// 		const { showButton } = this.state;

// 		const payment = () =>
// 			paypal.rest.payment.create(env, client, {
// 				transactions: [
// 					{
// 						amount: {
// 							total,
// 							currency
// 						}
// 					}
// 				]
// 			});

// 		const onAuthorize = (data, actions) =>
// 			actions.payment.execute().then(() => {
// 				const payment = {
// 					paid: true,
// 					cancelled: false,
// 					payerID: data.payerID,
// 					paymentID: data.paymentID,
// 					paymentToken: data.paymentToken,
// 					returnUrl: data.returnUrl
// 				};

// 				onSuccess(payment);
// 			});

// 		return (
// 			<div>
// 				{showButton && (
// 					<paypal.Button.react
// 						env={env}
// 						client={client}
// 						commit={commit}
// 						payment={payment}
// 						onAuthorize={onAuthorize}
// 						onCancel={onCancel}
// 						onError={onError}
// 					/>
// 				)}
// 			</div>
// 		);
// 	}
// }

// export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);
