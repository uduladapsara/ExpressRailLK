import { NavLink } from "react-router-dom";
import logoMark from "../../assets/images/logo-mark.svg";

const Navbar = () => {
	return (
		<header className="nav-wrap">
			<div className="nav-inner">
				<div className="brand">
					<div className="brand-mark">
						<img src={logoMark} alt="ExpressRailLK logo" />
					</div>
					<div className="brand-text">
						<span>ExpressRailLK</span>
						<small>Smarter journeys, better connections</small>
					</div>
				</div>
				<nav className="nav-links">
					<NavLink to="/" end>
						Home
					</NavLink>
					<NavLink to="/search">Search</NavLink>
					<NavLink to="/booking">Booking</NavLink>
					<NavLink to="/ticket">Ticket</NavLink>
					<NavLink to="/profile">Profile</NavLink>
				</nav>
				<div className="nav-actions">
					<NavLink className="ghost-btn" to="/login">
						Sign in
					</NavLink>
					<NavLink className="primary-btn" to="/register">
						Create account
					</NavLink>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
