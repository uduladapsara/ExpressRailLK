import AdminSidebar from "../../components/admin/AdminSidebar";

const stations = [
	{
		name: "Colombo Fort",
		zone: "Western",
		status: "Operational",
		footfall: "18.2k/day",
	},
	{
		name: "Kandy",
		zone: "Central",
		status: "Operational",
		footfall: "9.4k/day",
	},
	{
		name: "Galle",
		zone: "Southern",
		status: "Alert",
		footfall: "7.1k/day",
	},
];

const ManageStations = () => {
	return (
		<div className="admin-shell">
			<AdminSidebar />
			<section className="admin-main">
				<header className="admin-header">
					<div>
						<span className="eyebrow">Station controls</span>
						<h2>Manage stations</h2>
						<p>Review station readiness, staffing, and passenger flow.</p>
					</div>
					<div className="admin-header-actions">
						<button className="ghost-btn" type="button">
							Broadcast
						</button>
						<button className="primary-btn" type="button">
							Add station
						</button>
					</div>
				</header>
				<div className="data-card">
					<div className="data-card-header">
						<h3>Station overview</h3>
						<span className="badge">Live</span>
					</div>
					<div className="table-grid">
						<div className="table-row table-head">
							<span>Station</span>
							<span>Zone</span>
							<span>Footfall</span>
							<span>Status</span>
							<span>Action</span>
						</div>
						{stations.map((station) => (
							<div className="table-row" key={station.name}>
								<span>{station.name}</span>
								<span>{station.zone}</span>
								<span>{station.footfall}</span>
								<span className={`status ${station.status.toLowerCase()}`}>
									{station.status}
								</span>
								<button className="link-btn" type="button">
									Review
								</button>
							</div>
						))}
					</div>
				</div>
				<div className="admin-panel">
					<div>
						<h3>Station focus</h3>
						<p>2 stations require crowd flow adjustments before evening peak.</p>
					</div>
					<div className="pill-group">
						<span>Queue routing</span>
						<span>Platform checks</span>
						<span>Safety crew</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ManageStations;
