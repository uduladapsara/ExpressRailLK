import AdminSidebar from "../../components/admin/AdminSidebar";
import DashboardStats from "../../components/admin/DashboardStats";

const activity = [
	{
		id: "BK-9201",
		route: "Colombo Fort to Kandy",
		status: "Confirmed",
		value: "LKR 12,500",
		created: "12 mins ago",
	},
	{
		id: "BK-9202",
		route: "Galle to Colombo",
		status: "Pending",
		value: "LKR 8,200",
		created: "28 mins ago",
	},
	{
		id: "BK-9203",
		route: "Jaffna to Vavuniya",
		status: "Confirmed",
		value: "LKR 6,950",
		created: "1 hour ago",
	},
];

const alerts = [
	"Train 407 running 15 min late (weather)",
	"Station Kandy crowd control alert",
	"Payment gateway latency elevated",
];

const Dashboard = () => {
	return (
		<div className="admin-shell">
			<AdminSidebar />
			<section className="admin-main">
				<header className="admin-header">
					<div>
						<span className="eyebrow">Operations overview</span>
						<h2>Admin dashboard</h2>
						<p>Monitor bookings, trains, and station updates in real time.</p>
					</div>
					<div className="admin-header-actions">
						<button className="ghost-btn" type="button">
							Export report
						</button>
						<button className="primary-btn" type="button">
							Create alert
						</button>
					</div>
				</header>
				<DashboardStats />
				<div className="admin-grid">
					<div className="data-card">
						<div className="data-card-header">
							<h3>Latest bookings</h3>
							<button className="link-btn" type="button">
								View all
							</button>
						</div>
						<div className="data-table">
							{activity.map((item) => (
								<div className="data-row" key={item.id}>
									<div>
										<strong>{item.id}</strong>
										<span>{item.route}</span>
									</div>
									<div>
										<span className={`status ${item.status.toLowerCase()}`}>
											{item.status}
										</span>
										<small>{item.created}</small>
									</div>
									<div>
										<strong>{item.value}</strong>
										<small>Fare total</small>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="data-card">
						<div className="data-card-header">
							<h3>Operational alerts</h3>
							<span className="badge">Live</span>
						</div>
						<ul className="alert-list">
							{alerts.map((alert) => (
								<li key={alert}>{alert}</li>
							))}
						</ul>
						<div className="alert-footer">
							<button className="ghost-btn" type="button">
								Notify stations
							</button>
							<button className="primary-btn" type="button">
								Escalate
							</button>
						</div>
					</div>
				</div>
				<div className="admin-panel">
					<div>
						<h3>Team today</h3>
						<p>14 admins on duty across 6 stations. Peak hours start 4:30 PM.</p>
					</div>
					<div className="pill-group">
						<span>Station ops</span>
						<span>Live comms</span>
						<span>Revenue audit</span>
						<span>Safety checks</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
