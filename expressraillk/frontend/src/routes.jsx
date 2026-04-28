import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchTrains from "./pages/SearchTrains";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Ticket from "./pages/Ticket";

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
		</Routes>
	);
};
