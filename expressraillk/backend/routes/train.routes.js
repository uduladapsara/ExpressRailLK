const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const {
	listTrains,
	getTrain,
	createTrain,
	updateTrain,
	deleteTrain,
	searchTrains,
} = require("../controllers/train.controller");

const router = express.Router();

router.get("/", listTrains);
router.get("/search", searchTrains);
router.get("/:trainId", getTrain);
router.post("/", authMiddleware, roleMiddleware("admin"), createTrain);
router.put("/:trainId", authMiddleware, roleMiddleware("admin"), updateTrain);
router.delete("/:trainId", authMiddleware, roleMiddleware("admin"), deleteTrain);

module.exports = router;
