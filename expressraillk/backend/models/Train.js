const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
	{
		classType: { type: String, enum: ["1st", "2nd", "3rd"], required: true },
		capacity: { type: Number, required: true, min: 1 },
		pricePerKm: { type: Number, required: true, min: 0 },
	},
	{ _id: false }
);

const routePointSchema = new mongoose.Schema(
	{
		lat: { type: Number, required: true },
		lng: { type: Number, required: true },
	},
	{ _id: false }
);

const trainSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		number: { type: String, required: true, unique: true, trim: true },
		fromStation: { type: mongoose.Schema.Types.ObjectId, ref: "Station", required: true },
		toStation: { type: mongoose.Schema.Types.ObjectId, ref: "Station", required: true },
		departureTime: { type: String, required: true },
		arrivalTime: { type: String, required: true },
		distanceKm: { type: Number, required: true, min: 1 },
		classes: { type: [classSchema], default: [] },
		routePath: { type: [routePointSchema], default: [] },
		isActive: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Train", trainSchema);
