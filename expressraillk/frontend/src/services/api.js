import { API_BASE } from "../utils/constants";

const buildHeaders = (custom = {}) => {
	const headers = { "Content-Type": "application/json", ...custom };
	const token = localStorage.getItem("token");
	if (token && !headers.Authorization) {
		headers.Authorization = `Bearer ${token}`;
	}
	return headers;
};

const request = async (path, options = {}) => {
	const response = await fetch(`${API_BASE}${path}`, {
		...options,
		headers: buildHeaders(options.headers),
	});

	const contentType = response.headers.get("content-type") || "";
	const payload = contentType.includes("application/json")
		? await response.json()
		: null;

	if (!response.ok) {
		const message = payload?.message || "Request failed";
		throw new Error(message);
	}

	return payload;
};

export const get = (path) => request(path);
export const post = (path, body) =>
	request(path, { method: "POST", body: JSON.stringify(body) });
export const put = (path, body) =>
	request(path, { method: "PUT", body: JSON.stringify(body) });
export const patch = (path, body) =>
	request(path, { method: "PATCH", body: JSON.stringify(body) });
export const del = (path) => request(path, { method: "DELETE" });
