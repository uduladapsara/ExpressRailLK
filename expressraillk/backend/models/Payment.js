const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
	{
		booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
		provider: { type: String, enum: ["stripe", "paypal"], required: true },
		providerPaymentId: { type: String, required: true },
		amount: { type: Number, required: true, min: 0 },
		currency: { type: String, default: "LKR" },
		status: { type: String, enum: ["pending", "succeeded", "failed"], default: "pending" },
		receiptUrl: { type: String, default: "" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
