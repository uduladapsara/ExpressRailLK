const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { registerSchema, loginSchema, profileSchema } = require("../validations/auth.validation");

const register = async (req, res, next) => {
	try {
		const { error, value } = registerSchema.validate(req.body);
		if (error) {
			return res.status(400).json({ message: error.message });
		}

		const existing = await User.findOne({ email: value.email });
		if (existing) {
			return res.status(400).json({ message: "Email already registered" });
		}

		const user = await User.create(value);
		const token = generateToken(user);

		return res.status(201).json({
			token,
			user: { id: user._id, name: user.name, email: user.email, role: user.role },
		});
	} catch (err) {
		return next(err);
	}
};

const login = async (req, res, next) => {
	try {
		const { error, value } = loginSchema.validate(req.body);
		if (error) {
			return res.status(400).json({ message: error.message });
		}

		const user = await User.findOne({ email: value.email });
		if (!user || !(await user.comparePassword(value.password))) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = generateToken(user);
		return res.status(200).json({
			token,
			user: { id: user._id, name: user.name, email: user.email, role: user.role },
		});
	} catch (err) {
		return next(err);
	}
};

const me = async (req, res) => {
	return res.status(200).json({ user: req.user });
};

const updateProfile = async (req, res, next) => {
	try {
		const { error, value } = profileSchema.validate(req.body);
		if (error) {
			return res.status(400).json({ message: error.message });
		}

		if (value.password) {
			req.user.password = value.password;
		}
		if (typeof value.name === "string") {
			req.user.name = value.name;
		}
		if (typeof value.phone === "string") {
			req.user.phone = value.phone;
		}

		await req.user.save();
		return res.status(200).json({ user: req.user });
	} catch (err) {
		return next(err);
	}
};

module.exports = { register, login, me, updateProfile };
