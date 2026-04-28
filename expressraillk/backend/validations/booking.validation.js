const Joi = require("joi");

const bookingSchema = Joi.object({
	trainId: Joi.string().required(),
	fromStationId: Joi.string().required(),
	toStationId: Joi.string().required(),
	travelDate: Joi.date().required(),
	classType: Joi.string().valid("1st", "2nd", "3rd").required(),
	seatCount: Joi.number().min(1).required(),
	seats: Joi.array().items(Joi.string()).optional(),
});

const availabilitySchema = Joi.object({
	trainId: Joi.string().required(),
	travelDate: Joi.date().required(),
	classType: Joi.string().valid("1st", "2nd", "3rd").required(),
});

module.exports = { bookingSchema, availabilitySchema };
