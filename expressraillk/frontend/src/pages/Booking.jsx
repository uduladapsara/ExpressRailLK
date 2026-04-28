const Booking = () => {
	return (
		<div className="page simple-page">
			<div className="simple-card wide">
				<h2>Manage booking</h2>
				<p>Review passenger details, seats, and payment status.</p>
				<div className="simple-panel">
					<div>
						<strong>Coastal Express</strong>
						<span>Colombo to Galle</span>
					</div>
					<div>
						<strong>14 Sep 2026</strong>
						<span>Departure 08:40</span>
					</div>
					<div>
						<strong>Seats</strong>
						<span>A3, A4</span>
					</div>
				</div>
				<button className="primary-btn">View seat map</button>
			</div>
		</div>
	);
};

export default Booking;
