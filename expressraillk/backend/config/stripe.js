const Stripe = require("stripe");

const stripeKey = process.env.STRIPE_SECRET_KEY;
if (!stripeKey) {
	throw new Error("STRIPE_SECRET_KEY is not set");
}

const stripe = new Stripe(stripeKey, {
	apiVersion: "2023-10-16",
});

module.exports = stripe;
