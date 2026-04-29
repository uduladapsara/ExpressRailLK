const stats = [
	{
		label: "Active bookings",
		value: "1,284",
		delta: "+12%",
		note: "this week",
	},
	{
		label: "Daily passengers",
		value: "4,905",
		delta: "+4.8%",
		note: "trend up",
	},
	{
		label: "On-time trains",
		value: "96.2%",
		delta: "+1.1%",
		note: "last 30 days",
	},
	{
		label: "Revenue",
		value: "LKR 12.4M",
		delta: "+9.3%",
		note: "monthly",
	},
];

const DashboardStats = () => {
	return (
		<div className="stat-grid">
			{stats.map((stat) => (
				<div className="stat-card" key={stat.label}>
					<div>
						<span>{stat.label}</span>
						<h3>{stat.value}</h3>
					</div>
					<div className="stat-meta">
						<strong>{stat.delta}</strong>
						<small>{stat.note}</small>
					</div>
				</div>
			))}
		</div>
	);
};

export default DashboardStats;
