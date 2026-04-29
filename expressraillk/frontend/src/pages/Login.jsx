import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
	const { login, loading, error } = useAuth();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: "",
		password: "",
		role: "customer",
		remember: false,
	});
	const [localError, setLocalError] = useState("");

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setForm((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLocalError("");

		if (!form.email.trim()) {
			setLocalError("Please enter your email.");
			return;
		}
		if (!form.password) {
			setLocalError("Please enter your password.");
			return;
		}

		const result = await login({
			email: form.email.trim(),
			password: form.password,
		});

		if (result.ok) {
			navigate(form.role === "admin" ? "/admin" : "/profile");
		}
	};

	return (
		<div className="page auth-page">
			<div className="auth-card">
				<div className="auth-hero">
					<span className="eyebrow">Secure access</span>
					<h2>Welcome back to ExpressRailLK</h2>
					<p>Sign in with the right role to manage bookings, tickets, and station operations.</p>
					<div className="auth-highlight">
						<div>
							<strong>Admin credentials</strong>
							<span>admin@gmail.com</span>
						</div>
						<div>
							<strong>Password</strong>
							<span>admin123</span>
						</div>
					</div>
					<div className="auth-hero-actions">
						<NavLink className="ghost-btn" to="/register">
							Create account
						</NavLink>
					</div>
				</div>
				<div className="auth-form">
					<h3>Sign in</h3>
					<p>Select your role and continue.</p>
					<form className="simple-form" onSubmit={handleSubmit}>
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
							Password
							<input
								name="password"
								type="password"
								placeholder="Enter your password"
								value={form.password}
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
						<div className="auth-meta">
							<label className="checkbox">
								<input
									name="remember"
									type="checkbox"
									checked={form.remember}
									onChange={handleChange}
								/>
								Remember me
							</label>
							<button className="link-btn" type="button">
								Forgot password?
							</button>
						</div>
						{(localError || error) && (
							<div className="error-banner">{localError || error}</div>
						)}
						<button className="primary-btn full" type="submit" disabled={loading}>
							{loading ? "Signing in..." : "Sign in"}
						</button>
					</form>
					<p className="auth-footer">
						New here? <NavLink to="/register">Create an account</NavLink>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
