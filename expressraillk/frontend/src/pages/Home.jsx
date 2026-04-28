import heroTrain from "../assets/images/hero-train.svg";
import scenicBridge from "../assets/images/scenic-bridge.svg";
import coastalTrain from "../assets/images/coastal-train.svg";
import hillsideRide from "../assets/images/hillside-ride.svg";

const highlights = [
	{
		title: "Fast seat reservations",
		desc: "Lock your seat in seconds with live availability and car layouts.",
	},
	{
		title: "Scenic route insights",
		desc: "Discover coastal, hill country, and heritage routes with insights.",
	},
	{
		title: "Wallet-ready tickets",
		desc: "Store tickets securely and share instantly with travel companions.",
	},
];

const journeys = [
	{
		label: "Coastal Express",
		time: "3h 40m",
		summary: "Colombo to Galle with sunrise views and sea breeze.",
		image: coastalTrain,
	},
	{
		label: "Hill Country Line",
		time: "6h 20m",
		summary: "Kandy to Ella with tea estates and viaducts.",
		image: hillsideRide,
	},
	{
		label: "Northern Connector",
		time: "7h 10m",
		summary: "Colombo to Jaffna for heritage and food tours.",
		image: scenicBridge,
	},
];

const Home = () => {
	return (
		<div className="page home">
			<section className="hero">
				<div className="hero-content">
					<div className="eyebrow">Sri Lanka Rail Network</div>
					<h1>
						Premium rail journeys designed for speed, comfort, and confidence.
					</h1>
					<p>
						ExpressRailLK unifies live schedules, seat maps, and secure payments
						in one beautiful experience. Book smarter and travel with clarity.
					</p>
					<div className="hero-actions">
						<a className="primary-btn" href="/search">
							Plan a journey
						</a>
						<a className="ghost-btn" href="/ticket">
							View sample ticket
						</a>
					</div>
					<div className="hero-metrics">
						<div>
							<strong>120+</strong>
							<span>Daily departures</span>
						</div>
						<div>
							<strong>98%</strong>
							<span>On-time arrival</span>
						</div>
						<div>
							<strong>45k</strong>
							<span>Monthly travelers</span>
						</div>
					</div>
				</div>
				<div className="hero-media">
					<div className="hero-image">
						<img src={heroTrain} alt="Express train" />
						<div className="hero-image-caption">Colombo Fort to Ella</div>
					</div>
					<div className="hero-panel">
						<div className="panel-card">
							<div className="panel-header">
								<div>
									<h3>Plan your route</h3>
									<span>Live trains across Sri Lanka</span>
								</div>
								<div className="pulse" aria-hidden="true" />
							</div>
							<form className="planner">
								<label>
									From
									<input placeholder="Colombo Fort" />
								</label>
								<label>
									To
									<input placeholder="Ella" />
								</label>
								<div className="planner-row">
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
								</div>
								<button type="button" className="primary-btn full">
									Search trains
								</button>
							</form>
						</div>
						<div className="panel-strip">
							<span>Realtime seat maps</span>
							<span>Instant refunds</span>
							<span>Mobile boarding</span>
						</div>
					</div>
				</div>
			</section>

			<section className="highlight-grid">
				{highlights.map((item) => (
					<article key={item.title} className="highlight-card">
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
						<div className="link-arrow">
							Learn more <span aria-hidden="true">→</span>
						</div>
					</article>
				))}
			</section>

			<section className="journey">
				<div className="journey-header">
					<div>
						<div className="eyebrow">Featured routes</div>
						<h2>Curated rail experiences for every mood.</h2>
					</div>
					<p>
						Each journey is enriched with station insights, seat comfort tips,
						and real-time guidance to keep you ahead.
					</p>
				</div>
				<div className="journey-grid">
					{journeys.map((route) => (
						<article key={route.label} className="journey-card">
							<div className="journey-visual">
								<img src={route.image} alt={route.label} />
								<div className="journey-badge">{route.time}</div>
							</div>
							<h3>{route.label}</h3>
							<p>{route.summary}</p>
							<button className="ghost-btn">Preview seats</button>
						</article>
					))}
				</div>
			</section>

			<section className="experience">
				<div className="experience-panel">
					<div className="eyebrow">Smart travel toolkit</div>
					<h2>Everything you need from booking to arrival.</h2>
					<p>
						Manage bookings, coordinate group travel, and get alerts on platform
						changes with one elegant dashboard.
					</p>
					<div className="experience-list">
						<div>
							<strong>Seat intelligence</strong>
							<span>Pick the perfect view with interactive car maps.</span>
						</div>
						<div>
							<strong>Secure payments</strong>
							<span>Stripe-ready checkout with instant receipts.</span>
						</div>
						<div>
							<strong>Trusted alerts</strong>
							<span>SMS and email updates for boarding and arrivals.</span>
						</div>
					</div>
				</div>
				<div className="experience-card">
					<div className="card-top">
						<h4>Today in Colombo</h4>
						<span>Clear skies, 30C</span>
					</div>
					<div className="timeline">
						<div>
							<span>08:40</span>
							<div>
								<strong>Coastal Express</strong>
								<small>On time, platform 2</small>
							</div>
						</div>
						<div>
							<span>10:15</span>
							<div>
								<strong>Hill Country Line</strong>
								<small>Boarding soon, platform 4</small>
							</div>
						</div>
						<div>
							<span>12:05</span>
							<div>
								<strong>Northern Connector</strong>
								<small>Departing in 45 min</small>
							</div>
						</div>
					</div>
					<button className="primary-btn full">Open live board</button>
				</div>
			</section>

			<section className="testimonials">
				<div>
					<div className="eyebrow">Traveler stories</div>
					<h2>Trusted by teams, families, and explorers.</h2>
				</div>
				<div className="testimonial-grid">
					<blockquote>
						"The seat map and live alerts saved our group. The interface is
						beautiful and fast."
						<span>Janaki, Colombo</span>
					</blockquote>
					<blockquote>
						"Booking the hill country route took minutes and the ticket wallet
						was flawless."
						<span>Aditya, Kandy</span>
					</blockquote>
					<blockquote>
						"We planned a two-day coastal trip with zero stress. Everything was
						clear and polished."
						<span>Sasha, Galle</span>
					</blockquote>
				</div>
			</section>

			<section className="cta">
				<div>
					<h2>Ready for a smoother journey?</h2>
					<p>
						Create your account to access premium seating, route updates, and
						tailored recommendations.
					</p>
				</div>
				<a className="primary-btn" href="/register">
					Start now
				</a>
			</section>
		</div>
	);
};

export default Home;
