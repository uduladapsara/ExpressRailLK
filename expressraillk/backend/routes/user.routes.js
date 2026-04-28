const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const {
	listUsers,
	getUserById,
	updateUserRole,
	updateUserStatus,
} = require("../controllers/user.controller");

const router = express.Router();

router.use(authMiddleware, roleMiddleware("admin"));
router.get("/", listUsers);
router.get("/:userId", getUserById);
router.patch("/:userId/role", updateUserRole);
router.patch("/:userId/status", updateUserStatus);

module.exports = router;
