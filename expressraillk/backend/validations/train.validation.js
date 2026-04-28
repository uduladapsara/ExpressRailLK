const Joi = require("joi");

const classSchema = Joi.object({
	classType: Joi.string().valid("1st", "2nd", "3rd").required(),
	capacity: Joi.number().min(1).required(),
	pricePerKm: Joi.number().min(0).required(),
});

const routePointSchema = Joi.object({
	lat: Joi.number().required(),
	lng: Joi.number().required(),
});

const trainSchema = Joi.object({
	name: Joi.string().required(),
	number: Joi.string().required(),
	fromStation: Joi.string().required(),
	toStation: Joi.string().required(),
	departureTime: Joi.string().required(),
	arrivalTime: Joi.string().required(),
	distanceKm: Joi.number().min(1).required(),
	classes: Joi.array().items(classSchema).min(1).required(),
	routePath: Joi.array().items(routePointSchema).optional(),
	isActive: Joi.boolean().optional(),
});

module.exports = { trainSchema };
