import AdminSidebar from "../../components/admin/AdminSidebar";

const rows = [
	{
		id: "BK-9011",
		passenger: "N. Perera",
		route: "Colombo Fort - Matara",
		coach: "A2",
		status: "Confirmed",
	},
	{
		id: "BK-9012",
		passenger: "S. Fernando",
		route: "Kandy - Ella",
		coach: "B1",
		status: "Pending",
	},
	{
		id: "BK-9013",
		passenger: "A. De Silva",
		route: "Colombo Fort - Galle",
		coach: "A1",
		status: "Confirmed",
	},
];

const ManageBookings = () => {
	return (
		<div className="admin-shell">
			<AdminSidebar />
			<section className="admin-main">
				<header className="admin-header">
					<div>
						<span className="eyebrow">Admin workspace</span>
						<h2>Manage bookings</h2>
						<p>Track active reservations and update passenger requests.</p>
					</div>
					<div className="admin-header-actions">
						<button className="ghost-btn" type="button">
							Filter
						</button>
						<button className="primary-btn" type="button">
							New booking
						</button>
					</div>
				</header>
				<div className="data-card">
					<div className="data-card-header">
						<h3>Recent reservations</h3>
						<span className="badge">Today</span>
					</div>
					<div className="table-grid">
						<div className="table-row table-head">
							<span>Booking</span>
							<span>Passenger</span>
							<span>Route</span>
							<span>Coach</span>
							<span>Status</span>
							<span>Action</span>
						</div>
						{rows.map((row) => (
							<div className="table-row" key={row.id}>
								<span>{row.id}</span>
								<span>{row.passenger}</span>
								<span>{row.route}</span>
								<span>{row.coach}</span>
								<span className={`status ${row.status.toLowerCase()}`}>
									{row.status}
								</span>
								<button className="link-btn" type="button">
									View
								</button>
							</div>
						))}
					</div>
				</div>
				<div className="admin-panel">
					<div>
						<h3>Booking health</h3>
						<p>Pending approvals are down 6% compared to last week.</p>
					</div>
					<div className="pill-group">
						<span>Audit seats</span>
						<span>Refund queue</span>
						<span>Peak shift</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ManageBookings;
