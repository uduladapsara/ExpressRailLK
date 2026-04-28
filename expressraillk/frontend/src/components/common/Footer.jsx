const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-inner">
				<div className="footer-brand">
					<h3>ExpressRailLK</h3>
					<p>
						Premium rail booking for Sri Lanka. Plan routes, reserve seats, and
						move faster with real-time updates.
					</p>
				</div>
				<div className="footer-grid">
					<div>
						<h4>Explore</h4>
						<a href="/search">Search trains</a>
						<a href="/booking">Manage booking</a>
						<a href="/ticket">Digital tickets</a>
					</div>
					<div>
						<h4>Support</h4>
						<a href="/profile">Profile</a>
						<a href="/payment">Payments</a>
						<a href="/login">Help center</a>
					</div>
					<div>
						<h4>Contact</h4>
						<span>+94 11 223 4455</span>
						<span>support@expressrail.lk</span>
						<span>Colombo, Sri Lanka</span>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<span>2026 ExpressRailLK. All rights reserved.</span>
				<span>Smarter journeys. Better connections.</span>
			</div>
		</footer>
	);
};

export default Footer;
