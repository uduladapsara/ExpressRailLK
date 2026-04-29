const Stripe = require("stripe");

const stripeKey = process.env.STRIPE_SECRET_KEY;
if (!stripeKey) {
	console.warn("STRIPE_SECRET_KEY is not set. Stripe payments are disabled.");
	module.exports = null;
	return;
}

const stripe = new Stripe(stripeKey, {
	apiVersion: "2023-10-16",
});

module.exports = stripe;
