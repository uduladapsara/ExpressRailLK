const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const {
	listStations,
	createStation,
	updateStation,
	deleteStation,
} = require("../controllers/station.controller");

const router = express.Router();

router.get("/", listStations);
router.post("/", authMiddleware, roleMiddleware("admin"), createStation);
router.put("/:stationId", authMiddleware, roleMiddleware("admin"), updateStation);
router.delete("/:stationId", authMiddleware, roleMiddleware("admin"), deleteStation);

module.exports = router;
