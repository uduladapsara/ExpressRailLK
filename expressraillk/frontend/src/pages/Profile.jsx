const Profile = () => {
	return (
		<div className="page simple-page">
			<div className="simple-card wide">
				<h2>Your profile</h2>
				<p>Manage preferences, alerts, and saved travelers.</p>
				<div className="profile-grid">
					<div>
						<strong>Preferred stations</strong>
						<span>Colombo, Kandy, Galle</span>
					</div>
					<div>
						<strong>Notifications</strong>
						<span>Email and SMS enabled</span>
					</div>
					<div>
						<strong>Membership</strong>
						<span>Premium traveler</span>
					</div>
				</div>
				<button className="primary-btn">Update profile</button>
			</div>
		</div>
	);
};

export default Profile;
