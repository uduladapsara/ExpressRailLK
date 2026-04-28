require("dotenv").config();

const app = require("./app");
const connectDb = require("./config/db");

const port = process.env.PORT || 5000;

connectDb()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server listening on port ${port}`);
		});
	})
	.catch((err) => {
		console.error("Database connection failed", err);
		process.exit(1);
	});
