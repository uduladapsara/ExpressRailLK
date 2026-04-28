const Joi = require("joi");

const registerSchema = Joi.object({
	name: Joi.string().min(2).max(100).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
	phone: Joi.string().allow(""),
});

const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});

const profileSchema = Joi.object({
	name: Joi.string().min(2).max(100),
	phone: Joi.string().allow(""),
	password: Joi.string().min(6),
});

module.exports = { registerSchema, loginSchema, profileSchema };
