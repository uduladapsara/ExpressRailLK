const User = require("../models/User");

const listUsers = async (req, res, next) => {
	try {
		const users = await User.find().select("-password");
		return res.status(200).json({ users });
	} catch (err) {
		return next(err);
	}
};

const getUserById = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.userId).select("-password");
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json({ user });
	} catch (err) {
		return next(err);
	}
};

const updateUserRole = async (req, res, next) => {
	try {
		const { role } = req.body;
		if (!role || !["admin", "customer"].includes(role)) {
			return res.status(400).json({ message: "Invalid role" });
		}

		const user = await User.findByIdAndUpdate(
			req.params.userId,
			{ role },
			{ new: true }
		).select("-password");

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json({ user });
	} catch (err) {
		return next(err);
	}
};

const updateUserStatus = async (req, res, next) => {
	try {
		const { isActive } = req.body;
		const user = await User.findByIdAndUpdate(
			req.params.userId,
			{ isActive: Boolean(isActive) },
			{ new: true }
		).select("-password");

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json({ user });
	} catch (err) {
		return next(err);
	}
};

module.exports = { listUsers, getUserById, updateUserRole, updateUserStatus };
