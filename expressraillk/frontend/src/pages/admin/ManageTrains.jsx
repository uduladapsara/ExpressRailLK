import AdminSidebar from "../../components/admin/AdminSidebar";

const trains = [
	{
		code: "IC-104",
		name: "Intercity Express",
		route: "Colombo Fort - Kandy",
		status: "On time",
		coach: "8",
	},
	{
		code: "EX-221",
		name: "Southern Express",
		route: "Colombo Fort - Galle",
		status: "Delayed",
		coach: "10",
	},
	{
		code: "NT-314",
		name: "Northern Line",
		route: "Vavuniya - Jaffna",
		status: "Boarding",
		coach: "6",
	},
];

const ManageTrains = () => {
	return (
		<div className="admin-shell">
			<AdminSidebar />
			<section className="admin-main">
				<header className="admin-header">
					<div>
						<span className="eyebrow">Fleet operations</span>
						<h2>Manage trains</h2>
						<p>Monitor fleet health, schedules, and coach readiness.</p>
					</div>
					<div className="admin-header-actions">
						<button className="ghost-btn" type="button">
							Schedule update
						</button>
						<button className="primary-btn" type="button">
							Add train
						</button>
					</div>
				</header>
				<div className="data-card">
					<div className="data-card-header">
						<h3>Active fleet</h3>
						<span className="badge">Live</span>
					</div>
					<div className="table-grid">
						<div className="table-row table-head">
							<span>Train</span>
							<span>Service</span>
							<span>Route</span>
							<span>Coaches</span>
							<span>Status</span>
							<span>Action</span>
						</div>
						{trains.map((train) => (
							<div className="table-row" key={train.code}>
								<span>{train.code}</span>
								<span>{train.name}</span>
								<span>{train.route}</span>
								<span>{train.coach}</span>
								<span className={`status ${train.status.toLowerCase().replace(" ", "-")}`}>
									{train.status}
								</span>
								<button className="link-btn" type="button">
									Details
								</button>
							</div>
						))}
					</div>
				</div>
				<div className="admin-panel">
					<div>
						<h3>Maintenance queue</h3>
						<p>3 trains are scheduled for inspection within the next 24 hours.</p>
					</div>
					<div className="pill-group">
						<span>Brake check</span>
						<span>Coach cleaning</span>
						<span>Signal test</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ManageTrains;
