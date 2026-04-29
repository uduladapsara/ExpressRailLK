import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchTrains from "./pages/SearchTrains";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Ticket from "./pages/Ticket";
import AdminDashboard from "./pages/admin/Dashboard";
import ManageBookings from "./pages/admin/ManageBookings";
import ManageTrains from "./pages/admin/ManageTrains";
import ManageStations from "./pages/admin/ManageStations";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/search" element={<SearchTrains />} />
			<Route path="/booking" element={<Booking />} />
			<Route path="/payment" element={<Payment />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/ticket" element={<Ticket />} />
			<Route path="/admin" element={<AdminDashboard />} />
			<Route path="/admin/bookings" element={<ManageBookings />} />
			<Route path="/admin/trains" element={<ManageTrains />} />
			<Route path="/admin/stations" element={<ManageStations />} />
		</Routes>
	);
};
