const Booking = require("../models/Booking");
const { createStripePaymentIntent, markPaymentSucceeded } = require("../services/payment.service");

const createStripeIntent = async (req, res, next) => {
	try {
		const booking = await Booking.findById(req.body.bookingId);
		if (!booking) {
			return res.status(404).json({ message: "Booking not found" });
		}

		if (booking.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
			return res.status(403).json({ message: "Forbidden" });
		}

		const { intent, payment } = await createStripePaymentIntent({
			booking,
			currency: req.body.currency,
		});

		return res.status(200).json({
			clientSecret: intent.client_secret,
			paymentId: payment._id,
		});
	} catch (err) {
		return next(err);
	}
};

const confirmStripePayment = async (req, res, next) => {
	try {
		const { providerPaymentId, receiptUrl } = req.body;
		const payment = await markPaymentSucceeded({ providerPaymentId, receiptUrl });
		return res.status(200).json({ payment });
	} catch (err) {
		return next(err);
	}
};

module.exports = { createStripeIntent, confirmStripePayment };
