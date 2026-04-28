const QRCode = require("qrcode");

const generateQrDataUrl = async (payload) => {
	return QRCode.toDataURL(payload, { margin: 1, width: 320 });
};

module.exports = { generateQrDataUrl };
