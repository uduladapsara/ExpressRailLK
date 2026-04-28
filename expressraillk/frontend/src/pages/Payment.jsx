const Payment = () => {
	return (
		<div className="page simple-page">
			<div className="simple-card">
				<h2>Payment</h2>
				<p>Secure checkout for rail bookings.</p>
				<form className="simple-form">
					<label>
						Cardholder name
						<input placeholder="Name on card" />
					</label>
					<label>
						Card number
						<input placeholder="1234 5678 9012 3456" />
					</label>
					<div className="form-row">
						<label>
							Expiry
							<input placeholder="MM/YY" />
						</label>
						<label>
							CVC
							<input placeholder="123" />
						</label>
					</div>
					<button className="primary-btn full" type="button">
						Pay securely
					</button>
				</form>
			</div>
		</div>
	);
};

export default Payment;
