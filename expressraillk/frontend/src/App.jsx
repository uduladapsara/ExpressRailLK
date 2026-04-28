import { AppRoutes } from "./routes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const App = () => {
	return (
		<div className="app-shell">
			<Navbar />
			<main className="app-main">
				<AppRoutes />
			</main>
			<Footer />
		</div>
	);
};

export default App;
