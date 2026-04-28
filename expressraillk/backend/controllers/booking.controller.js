const Booking = require("../models/Booking");
const { bookingSchema, availabilitySchema } = require("../validations/booking.validation");
const { getAvailability, createBooking } = require("../services/booking.service");
const { sendBookingConfirmation } = require("../services/notification.service");

const checkAvailability = async (req, res, next) => {
	try {
		const { error, value } = availabilitySchema.validate(req.body);
		if (error) {
			return res.status(400).json({ message: error.message });
		}

		const availability = await getAvailability(value);
		return res.status(200).json({ availability });
	} catch (err) {
		return next(err);
	}
};

const createTicketBooking = async (req, res, next) => {
	try {
		const { error, value } = bookingSchema.validate(req.body);
		if (error) {
			return res.status(400).json({ message: error.message });
		}

		const booking = await createBooking({ user: req.user, payload: value });
		await sendBookingConfirmation({ user: req.user, booking });

		return res.status(201).json({ booking });
	} catch (err) {
		return next(err);
	}
};

const listMyBookings = async (req, res, next) => {
	try {
		const bookings = await Booking.find({ user: req.user._id })
			.populate("train", "name number")
			.populate("fromStation", "name")
			.populate("toStation", "name")
			.sort({ createdAt: -1 });

		return res.status(200).json({ bookings });
	} catch (err) {
		return next(err);
	}
};

const getBookingById = async (req, res, next) => {
	try {
		const booking = await Booking.findById(req.params.bookingId)
			.populate("train", "name number")
			.populate("fromStation", "name")
			.populate("toStation", "name")
			.populate("user", "name email");

		if (!booking) {
			return res.status(404).json({ message: "Booking not found" });
		}

		if (req.user.role !== "admin" && booking.user._id.toString() !== req.user._id.toString()) {
			return res.status(403).json({ message: "Forbidden" });
		}

		return res.status(200).json({ booking });
	} catch (err) {
		return next(err);
	}
};

const cancelBooking = async (req, res, next) => {
	try {
		const booking = await Booking.findById(req.params.bookingId);
		if (!booking) {
			return res.status(404).json({ message: "Booking not found" });
		}

		if (req.user.role !== "admin" && booking.user.toString() !== req.user._id.toString()) {
			return res.status(403).json({ message: "Forbidden" });
		}

		booking.status = "cancelled";
		await booking.save();

		return res.status(200).json({ booking });
	} catch (err) {
		return next(err);
	}
};

const listAllBookings = async (req, res, next) => {
	try {
		const bookings = await Booking.find()
			.populate("train", "name number")
			.populate("fromStation", "name")
			.populate("toStation", "name")
			.populate("user", "name email")
			.sort({ createdAt: -1 });

		return res.status(200).json({ bookings });
	} catch (err) {
		return next(err);
	}
};

module.exports = {
	checkAvailability,
	createTicketBooking,
	listMyBookings,
	getBookingById,
	cancelBooking,
	listAllBookings,
};
