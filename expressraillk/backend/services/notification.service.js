const { sendEmail } = require("../utils/emailService");

const sendBookingConfirmation = async ({ user, booking }) => {
	const subject = `ExpressRailLK Booking ${booking.bookingCode}`;
	const html = `
		<p>Hi ${user.name},</p>
		<p>Your booking is confirmed.</p>
		<p><strong>Booking ID:</strong> ${booking.bookingCode}</p>
		<p><strong>Total:</strong> LKR ${booking.totalPrice.toFixed(2)}</p>
		<p>Thank you for choosing ExpressRailLK.</p>
	`;

	await sendEmail({ to: user.email, subject, html });
};

module.exports = { sendBookingConfirmation };
