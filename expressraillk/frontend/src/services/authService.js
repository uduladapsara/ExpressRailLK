import { get, post, put } from "./api";

export const registerUser = (payload) => post("/auth/register", payload);
export const loginUser = (payload) => post("/auth/login", payload);
export const fetchMe = () => get("/auth/me");
export const updateProfile = (payload) => put("/auth/profile", payload);
