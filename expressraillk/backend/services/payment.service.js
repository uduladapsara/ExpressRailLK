const stripe = require("../config/stripe");
const Payment = require("../models/Payment");
const Booking = require("../models/Booking");

const createStripePaymentIntent = async ({ booking, currency }) => {
	const amount = Math.round(booking.totalPrice * 100);

	const intent = await stripe.paymentIntents.create({
		amount,
		currency: currency || "lkr",
		metadata: { bookingId: booking._id.toString(), bookingCode: booking.bookingCode },
	});

	const payment = await Payment.create({
		booking: booking._id,
		provider: "stripe",
		providerPaymentId: intent.id,
		amount: booking.totalPrice,
		currency: (currency || "LKR").toUpperCase(),
		status: "pending",
	});

	return { intent, payment };
};

const markPaymentSucceeded = async ({ providerPaymentId, receiptUrl }) => {
	const payment = await Payment.findOne({ providerPaymentId });
	if (!payment) {
		throw new Error("Payment not found");
	}

	payment.status = "succeeded";
	payment.receiptUrl = receiptUrl || payment.receiptUrl;
	await payment.save();

	await Booking.findByIdAndUpdate(payment.booking, { paymentStatus: "paid" });
	return payment;
};

module.exports = { createStripePaymentIntent, markPaymentSucceeded };
