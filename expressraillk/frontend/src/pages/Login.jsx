const Login = () => {
	return (
		<div className="page simple-page">
			<div className="simple-card">
				<h2>Welcome back</h2>
				<p>Sign in to manage bookings, tickets, and notifications.</p>
				<form className="simple-form">
					<label>
						Email
						<input placeholder="you@example.com" />
					</label>
					<label>
						Password
						<input type="password" placeholder="Enter your password" />
					</label>
					<button className="primary-btn full" type="button">
						Sign in
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
