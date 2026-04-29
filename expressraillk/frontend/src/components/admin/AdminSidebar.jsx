import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
	return (
		<aside className="admin-sidebar">
			<div className="admin-brand">
				<span className="admin-dot" />
				<div>
					<strong>Admin Console</strong>
					<small>ExpressRailLK Ops</small>
				</div>
			</div>
			<nav className="admin-nav">
				<NavLink to="/admin" end>
					Dashboard
				</NavLink>
				<NavLink to="/admin/bookings">Bookings</NavLink>
				<NavLink to="/admin/trains">Trains</NavLink>
				<NavLink to="/admin/stations">Stations</NavLink>
				<NavLink to="/">Back to site</NavLink>
			</nav>
			<div className="admin-profile">
				<div>
					<strong>Admin</strong>
					<span>admin@gmail.com</span>
				</div>
				<button className="ghost-btn" type="button">
					Sign out
				</button>
			</div>
		</aside>
	);
};

export default AdminSidebar;
