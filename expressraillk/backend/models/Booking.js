const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		train: { type: mongoose.Schema.Types.ObjectId, ref: "Train", required: true },
		fromStation: { type: mongoose.Schema.Types.ObjectId, ref: "Station", required: true },
		toStation: { type: mongoose.Schema.Types.ObjectId, ref: "Station", required: true },
		travelDate: { type: Date, required: true },
		classType: { type: String, enum: ["1st", "2nd", "3rd"], required: true },
		seatCount: { type: Number, required: true, min: 1 },
		seats: { type: [String], default: [] },
		totalPrice: { type: Number, required: true, min: 0 },
		status: { type: String, enum: ["booked", "cancelled"], default: "booked" },
		paymentStatus: { type: String, enum: ["pending", "paid", "refunded"], default: "pending" },
		bookingCode: { type: String, required: true, unique: true },
		qrCodeData: { type: String, default: "" },
		ticketPdfPath: { type: String, default: "" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
