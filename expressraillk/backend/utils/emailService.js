const nodemailer = require("nodemailer");

const createTransporter = () => {
	const user = process.env.EMAIL_USER;
	const pass = process.env.EMAIL_PASS;

	if (!user || !pass) {
		throw new Error("EMAIL_USER or EMAIL_PASS is not set");
	}

	return nodemailer.createTransport({
		service: "gmail",
		auth: { user, pass },
	});
};

const sendEmail = async ({ to, subject, html }) => {
	const transporter = createTransporter();
	const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;
	return transporter.sendMail({ from, to, subject, html });
};

module.exports = { sendEmail };
