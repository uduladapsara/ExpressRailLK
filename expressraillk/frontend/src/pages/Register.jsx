const Register = () => {
	return (
		<div className="page simple-page">
			<div className="simple-card">
				<h2>Create your account</h2>
				<p>Join ExpressRailLK for faster bookings and premium perks.</p>
				<form className="simple-form">
					<label>
						Full name
						<input placeholder="Enter your name" />
					</label>
					<label>
						Email
						<input placeholder="you@example.com" />
					</label>
					<label>
						Password
						<input type="password" placeholder="Create a password" />
					</label>
					<button className="primary-btn full" type="button">
						Create account
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
