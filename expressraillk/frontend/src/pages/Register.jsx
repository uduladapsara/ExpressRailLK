import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
	const { register, loading, error } = useAuth();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
		role: "customer",
		station: "",
	});
	const [localError, setLocalError] = useState("");

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLocalError("");

		if (!form.firstName.trim() || !form.lastName.trim()) {
			setLocalError("Please enter your first and last name.");
			return;
		}
		if (!form.email.trim()) {
			setLocalError("Please enter your email.");
			return;
		}
		if (!form.password || form.password.length < 6) {
			setLocalError("Password must be at least 6 characters.");
			return;
		}
		if (form.password !== form.confirmPassword) {
			setLocalError("Passwords do not match.");
			return;
		}

		const payload = {
			name: `${form.firstName.trim()} ${form.lastName.trim()}`,
			email: form.email.trim(),
			password: form.password,
			phone: form.phone.trim(),
		};

		const result = await register(payload);
		if (result.ok) {
			navigate(form.role === "admin" ? "/admin" : "/profile");
		}
	};

	return (
		<div className="page auth-page">
			<div className="auth-card">
				<div className="auth-hero">
					<span className="eyebrow">Start the journey</span>
					<h2>Create your ExpressRailLK profile</h2>
					<p>Manage tickets, track journeys, and access admin tools with one account.</p>
					<div className="auth-stats">
						<div>
							<strong>97%</strong>
							<span>On-time journeys</span>
						</div>
						<div>
							<strong>24/7</strong>
							<span>Support coverage</span>
						</div>
						<div>
							<strong>12k+</strong>
							<span>Active passengers</span>
						</div>
					</div>
				</div>
				<div className="auth-form">
					<h3>Create account</h3>
					<p>Select your role and set up your profile details.</p>
					<form className="simple-form grid" onSubmit={handleSubmit}>
						<label>
							First name
							<input
								name="firstName"
								placeholder="Amaya"
								value={form.firstName}
								onChange={handleChange}
							/>
						</label>
						<label>
							Last name
							<input
								name="lastName"
								placeholder="Silva"
								value={form.lastName}
								onChange={handleChange}
							/>
						</label>
						<label>
							Email
							<input
								name="email"
								placeholder="you@example.com"
								type="email"
								value={form.email}
								onChange={handleChange}
							/>
						</label>
						<label>
							Phone number
							<input
								name="phone"
								placeholder="+94 7X XXX XXXX"
								value={form.phone}
								onChange={handleChange}
							/>
						</label>
						<label>
							Create password
							<input
								name="password"
								type="password"
								placeholder="Create a password"
								value={form.password}
								onChange={handleChange}
							/>
						</label>
						<label>
							Confirm password
							<input
								name="confirmPassword"
								type="password"
								placeholder="Repeat your password"
								value={form.confirmPassword}
								onChange={handleChange}
							/>
						</label>
						<label>
							Select role
							<select name="role" value={form.role} onChange={handleChange}>
								<option value="customer">Passenger</option>
								<option value="admin">Admin</option>
							</select>
						</label>
						<label>
							Preferred station
							<input
								name="station"
								placeholder="Colombo Fort"
								value={form.station}
								onChange={handleChange}
							/>
						</label>
						{(localError || error) && (
							<div className="error-banner">{localError || error}</div>
						)}
						<button className="primary-btn full" type="submit" disabled={loading}>
							{loading ? "Creating account..." : "Create account"}
						</button>
					</form>
					<p className="auth-footer">
						Already registered? <NavLink to="/login">Sign in</NavLink>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
