const Station = require("../models/Station");

const listStations = async (req, res, next) => {
	try {
		const stations = await Station.find().sort({ name: 1 });
		return res.status(200).json({ stations });
	} catch (err) {
		return next(err);
	}
};

const createStation = async (req, res, next) => {
	try {
		const station = await Station.create(req.body);
		return res.status(201).json({ station });
	} catch (err) {
		return next(err);
	}
};

const updateStation = async (req, res, next) => {
	try {
		const station = await Station.findByIdAndUpdate(req.params.stationId, req.body, {
			new: true,
		});

		if (!station) {
			return res.status(404).json({ message: "Station not found" });
		}

		return res.status(200).json({ station });
	} catch (err) {
		return next(err);
	}
};

const deleteStation = async (req, res, next) => {
	try {
		const station = await Station.findByIdAndDelete(req.params.stationId);
		if (!station) {
			return res.status(404).json({ message: "Station not found" });
		}

		return res.status(200).json({ message: "Station deleted" });
	} catch (err) {
		return next(err);
	}
};

module.exports = { listStations, createStation, updateStation, deleteStation };
