import { useEffect, useState } from "react";
import { get } from "../services/api";

const SearchTrains = () => {
	const [stations, setStations] = useState([]);
	const [trains, setTrains] = useState([]);
	const [fromStation, setFromStation] = useState("");
	const [toStation, setToStation] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const fetchStations = async () => {
		const data = await get("/stations");
		setStations(data?.stations || []);
	};

	const fetchTrains = async (filters = {}) => {
		setLoading(true);
		setError("");
		try {
			const params = new URLSearchParams();
			if (filters.fromStation) {
				params.set("fromStation", filters.fromStation);
			}
			if (filters.toStation) {
				params.set("toStation", filters.toStation);
			}
			const endpoint = params.toString()
				? `/trains/search?${params.toString()}`
				: "/trains";
			const data = await get(endpoint);
			setTrains(data?.trains || []);
		} catch (err) {
			setError(err.message || "Unable to load trains");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchStations();
		fetchTrains();
	}, []);

	const handleSearch = () => {
		fetchTrains({ fromStation, toStation });
	};

	return (
		<div className="page simple-page">
			<div className="simple-card wide">
				<h2>Search trains</h2>
				<p>Find the best route and seat availability in seconds.</p>
				<form className="simple-form grid" onSubmit={(event) => event.preventDefault()}>
					<label>
						From
						<select value={fromStation} onChange={(event) => setFromStation(event.target.value)}>
							<option value="">Select station</option>
							{stations.map((station) => (
								<option key={station._id} value={station._id}>
									{station.name}
								</option>
							))}
						</select>
					</label>
					<label>
						To
						<select value={toStation} onChange={(event) => setToStation(event.target.value)}>
							<option value="">Select station</option>
							{stations.map((station) => (
								<option key={station._id} value={station._id}>
									{station.name}
								</option>
							))}
						</select>
					</label>
					<label>
						Date
						<input type="date" />
					</label>
					<label>
						Class
						<select>
							<option>First Class</option>
							<option>Second Class</option>
							<option>Third Class</option>
						</select>
					</label>
					<button className="primary-btn full" type="button" onClick={handleSearch}>
						Search trains
					</button>
				</form>

				<div className="search-results">
					<div className="search-header">
						<h3>Available trains</h3>
						<span>{loading ? "Loading" : `${trains.length} results`}</span>
					</div>
					{error && <div className="error-banner">{error}</div>}
					{!loading && trains.length === 0 && !error && (
						<div className="empty-state">No trains found for this route.</div>
					)}
					<div className="train-grid">
						{trains.map((train) => (
							<article key={train._id} className="train-card">
								<div className="train-head">
									<div>
										<strong>{train.name}</strong>
										<span>#{train.number}</span>
									</div>
									<div className="status-badge">{train.isActive ? "Active" : "Paused"}</div>
								</div>
								<div className="train-meta">
									<div>
										<span>From</span>
										<strong>{train.fromStation?.name}</strong>
									</div>
									<div>
										<span>To</span>
										<strong>{train.toStation?.name}</strong>
									</div>
									<div>
										<span>Departs</span>
										<strong>{train.departureTime}</strong>
									</div>
									<div>
										<span>Arrives</span>
										<strong>{train.arrivalTime}</strong>
									</div>
								</div>
								<div className="train-footer">
									<span>{train.distanceKm} km</span>
									<div className="class-pills">
										{train.classes?.map((item) => (
											<span key={item.classType}>
												{item.classType.toUpperCase()} • {item.capacity}
											</span>
										))}
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchTrains;
