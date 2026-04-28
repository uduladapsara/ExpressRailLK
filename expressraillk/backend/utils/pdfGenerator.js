const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const ensureDir = (dirPath) => {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
};

const generateTicketPdf = async ({ booking, train, stations, qrDataUrl }) => {
	const ticketsDir = path.join(__dirname, "..", "tmp", "tickets");
	ensureDir(ticketsDir);

	const fileName = `${booking.bookingCode}.pdf`;
	const filePath = path.join(ticketsDir, fileName);

	const doc = new PDFDocument({ size: "A4", margin: 40 });
	const writeStream = fs.createWriteStream(filePath);
	doc.pipe(writeStream);

	doc.fontSize(18).text("ExpressRailLK - E-Ticket", { align: "center" });
	doc.moveDown();
	doc.fontSize(12).text(`Booking ID: ${booking.bookingCode}`);
	doc.text(`Passenger: ${booking.user.name}`);
	doc.text(`Train: ${train.name} (${train.number})`);
	doc.text(`From: ${stations.fromStation.name}`);
	doc.text(`To: ${stations.toStation.name}`);
	doc.text(`Date: ${booking.travelDate.toISOString().slice(0, 10)}`);
	doc.text(`Class: ${booking.classType}`);
	doc.text(`Seats: ${booking.seatCount}`);
	doc.text(`Total: LKR ${booking.totalPrice.toFixed(2)}`);
	doc.moveDown();

	if (qrDataUrl) {
		const base64Data = qrDataUrl.replace(/^data:image\/png;base64,/, "");
		const qrBuffer = Buffer.from(base64Data, "base64");
		doc.image(qrBuffer, { fit: [180, 180], align: "center" });
	}

	doc.end();

	await new Promise((resolve, reject) => {
		writeStream.on("finish", resolve);
		writeStream.on("error", reject);
	});

	return filePath;
};

module.exports = { generateTicketPdf };
