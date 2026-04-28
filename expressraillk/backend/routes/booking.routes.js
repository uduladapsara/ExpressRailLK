const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const {
	checkAvailability,
	createTicketBooking,
	listMyBookings,
	getBookingById,
	cancelBooking,
	listAllBookings,
} = require("../controllers/booking.controller");

const router = express.Router();

router.post("/availability", checkAvailability);
router.post("/", authMiddleware, createTicketBooking);
router.get("/me", authMiddleware, listMyBookings);
router.get("/all", authMiddleware, roleMiddleware("admin"), listAllBookings);
router.get("/:bookingId", authMiddleware, getBookingById);
router.patch("/:bookingId/cancel", authMiddleware, cancelBooking);

module.exports = router;
