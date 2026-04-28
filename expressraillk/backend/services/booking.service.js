const Booking = require("../models/Booking");
const Train = require("../models/Train");
const Station = require("../models/Station");
const { generateQrDataUrl } = require("../utils/qrGenerator");
const { generateTicketPdf } = require("../utils/pdfGenerator");

const buildBookingCode = () => {
	const random = Math.random().toString(36).slice(2, 8).toUpperCase();
	const timestamp = Date.now().toString(36).toUpperCase();
	return `ER-${timestamp}-${random}`;
};

const getClassConfig = (train, classType) => {
	return train.classes.find((item) => item.classType === classType);
};

const getAvailability = async ({ trainId, travelDate, classType }) => {
	const train = await Train.findById(trainId);
	if (!train || !train.isActive) {
		throw new Error("Train not available");
	}

	const classConfig = getClassConfig(train, classType);
	if (!classConfig) {
		throw new Error("Class not available");
	}

	const start = new Date(travelDate);
	start.setHours(0, 0, 0, 0);
	const end = new Date(travelDate);
	end.setHours(23, 59, 59, 999);

	const booked = await Booking.aggregate([
		{
			$match: {
				train: train._id,
				classType,
				status: "booked",
				travelDate: { $gte: start, $lte: end },
			},
		},
		{ $group: { _id: null, total: { $sum: "$seatCount" } } },
	]);

	const bookedCount = booked.length ? booked[0].total : 0;
	const available = Math.max(classConfig.capacity - bookedCount, 0);

	return { capacity: classConfig.capacity, available };
};

const calculatePrice = (train, classType, seatCount) => {
	const classConfig = getClassConfig(train, classType);
	if (!classConfig) {
		throw new Error("Pricing not configured for this class");
	}

	const total = train.distanceKm * classConfig.pricePerKm * seatCount;
	return Math.round(total * 100) / 100;
};

const createBooking = async ({ user, payload }) => {
	const train = await Train.findById(payload.trainId);
	if (!train || !train.isActive) {
		throw new Error("Train not available");
	}

	const availability = await getAvailability({
		trainId: train._id,
		travelDate: payload.travelDate,
		classType: payload.classType,
	});

	if (availability.available < payload.seatCount) {
		throw new Error("Not enough seats available");
	}

	const totalPrice = calculatePrice(train, payload.classType, payload.seatCount);
	const bookingCode = buildBookingCode();

	const booking = await Booking.create({
		user: user._id,
		train: train._id,
		fromStation: payload.fromStationId,
		toStation: payload.toStationId,
		travelDate: payload.travelDate,
		classType: payload.classType,
		seatCount: payload.seatCount,
		seats: payload.seats || [],
		totalPrice,
		bookingCode,
	});

	const fromStation = await Station.findById(payload.fromStationId);
	const toStation = await Station.findById(payload.toStationId);

	const qrPayload = JSON.stringify({ bookingCode, train: train.number });
	const qrDataUrl = await generateQrDataUrl(qrPayload);
	const ticketPdfPath = await generateTicketPdf({
		booking: { ...booking.toObject(), user },
		train,
		stations: { fromStation, toStation },
		qrDataUrl,
	});

	booking.qrCodeData = qrDataUrl;
	booking.ticketPdfPath = ticketPdfPath;
	await booking.save();

	return booking;
};

module.exports = { getAvailability, calculatePrice, createBooking };
