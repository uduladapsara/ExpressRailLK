const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const { createStripeIntent, confirmStripePayment } = require("../controllers/payment.controller");

const router = express.Router();

router.post("/stripe/intent", authMiddleware, createStripeIntent);
router.post("/stripe/confirm", confirmStripePayment);

module.exports = router;
