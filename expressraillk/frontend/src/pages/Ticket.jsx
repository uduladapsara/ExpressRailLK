const Ticket = () => {
	return (
		<div className="page simple-page">
			<div className="simple-card wide">
				<h2>Digital ticket</h2>
				<p>Scan your ticket at the gate or share with your group.</p>
				<div className="ticket">
					<div>
						<strong>Coastal Express</strong>
						<span>Colombo Fort to Galle</span>
					</div>
					<div>
						<strong>Seat A3</strong>
						<span>Departure 08:40</span>
					</div>
					<div>
						<strong>PNR</strong>
						<span>XRK-2048</span>
					</div>
				</div>
				<button className="ghost-btn">Download PDF</button>
			</div>
		</div>
	);
};

export default Ticket;
