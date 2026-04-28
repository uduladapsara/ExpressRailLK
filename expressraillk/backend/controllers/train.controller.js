const Train = require("../models/Train");
const { trainSchema } = require("../validations/train.validation");

const listTrains = async (req, res, next) => {
	try {
		const trains = await Train.find()
			.populate("fromStation", "name")
			.populate("toStation", "name");
		return res.status(200).json({ trains });
	} catch (err) {
		return next(err);
	}
};

const getTrain = async (req, res, next) => {
	try {
		const train = await Train.findById(req.params.trainId)
			.populate("fromStation", "name")
			.populate("toStation", "name");
		if (!train) {
			return res.status(404).json({ message: "Train not found" });
		}

		return res.status(200).json({ train });
	} catch (err) {
		return next(err);
	}
};

const createTrain = async (req, res, next) => {
	try {
		const { error, value } = trainSchema.validate(req.body);
		if (error) {
			return res.status(400).json({ message: error.message });
		}

		const train = await Train.create(value);
		return res.status(201).json({ train });
	} catch (err) {
		return next(err);
	}
};

const updateTrain = async (req, res, next) => {
	try {
		const train = await Train.findByIdAndUpdate(req.params.trainId, req.body, {
			new: true,
		});

		if (!train) {
			return res.status(404).json({ message: "Train not found" });
		}

		return res.status(200).json({ train });
	} catch (err) {
		return next(err);
	}
};

const deleteTrain = async (req, res, next) => {
	try {
		const train = await Train.findByIdAndDelete(req.params.trainId);
		if (!train) {
			return res.status(404).json({ message: "Train not found" });
		}

		return res.status(200).json({ message: "Train deleted" });
	} catch (err) {
		return next(err);
	}
};

const searchTrains = async (req, res, next) => {
	try {
		const { fromStation, toStation } = req.query;
		const filter = {};
		if (fromStation) {
			filter.fromStation = fromStation;
		}
		if (toStation) {
			filter.toStation = toStation;
		}

		const trains = await Train.find(filter)
			.populate("fromStation", "name")
			.populate("toStation", "name");
		return res.status(200).json({ trains });
	} catch (err) {
		return next(err);
	}
};

module.exports = {
	listTrains,
	getTrain,
	createTrain,
	updateTrain,
	deleteTrain,
	searchTrains,
};
