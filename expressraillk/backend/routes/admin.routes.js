const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const { getDashboardStats } = require("../controllers/admin.controller");

const router = express.Router();

router.get("/dashboard", authMiddleware, roleMiddleware("admin"), getDashboardStats);

module.exports = router;
