import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { fetchMe, loginUser, registerUser } from "../services/authService";

export const AuthContext = createContext(null);

const getStoredToken = () => localStorage.getItem("token");

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(getStoredToken());
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const clearAuth = useCallback(() => {
		localStorage.removeItem("token");
		setToken(null);
		setUser(null);
	}, []);

	const handleAuthResponse = useCallback((payload) => {
		if (payload?.token) {
			localStorage.setItem("token", payload.token);
			setToken(payload.token);
		}
		setUser(payload?.user || null);
	}, []);

	const register = useCallback(async (payload) => {
		setLoading(true);
		setError("");
		try {
			const data = await registerUser(payload);
			handleAuthResponse(data);
			return { ok: true };
		} catch (err) {
			setError(err.message || "Registration failed");
			return { ok: false };
		} finally {
			setLoading(false);
		}
	}, [handleAuthResponse]);

	const login = useCallback(async (payload) => {
		setLoading(true);
		setError("");
		try {
			const data = await loginUser(payload);
			handleAuthResponse(data);
			return { ok: true };
		} catch (err) {
			setError(err.message || "Login failed");
			return { ok: false };
		} finally {
			setLoading(false);
		}
	}, [handleAuthResponse]);

	const logout = useCallback(() => {
		clearAuth();
	}, [clearAuth]);

	useEffect(() => {
		if (!token) {
			return;
		}

		let mounted = true;
		setLoading(true);
		fetchMe()
			.then((data) => {
				if (mounted) {
					setUser(data?.user || null);
				}
			})
			.catch(() => {
				if (mounted) {
					clearAuth();
				}
			})
			.finally(() => {
				if (mounted) {
					setLoading(false);
				}
			});

		return () => {
			mounted = false;
		};
	}, [token, clearAuth]);

	const value = useMemo(
		() => ({ user, token, loading, error, login, register, logout }),
		[user, token, loading, error, login, register, logout]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
