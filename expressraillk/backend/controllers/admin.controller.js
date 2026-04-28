const User = require("../models/User");
const Train = require("../models/Train");
const Booking = require("../models/Booking");
const Payment = require("../models/Payment");

const getDashboardStats = async (req, res, next) => {
	try {
		const [userCount, trainCount, bookingCount] = await Promise.all([
			User.countDocuments(),
			Train.countDocuments(),
			Booking.countDocuments(),
		]);

		const revenueAgg = await Payment.aggregate([
			{ $match: { status: "succeeded" } },
			{ $group: { _id: null, total: { $sum: "$amount" } } },
		]);

		const revenue = revenueAgg.length ? revenueAgg[0].total : 0;

		return res.status(200).json({
			stats: {
				users: userCount,
				trains: trainCount,
				bookings: bookingCount,
				revenue,
			},
		});
	} catch (err) {
		return next(err);
	}
};

module.exports = { getDashboardStats };
