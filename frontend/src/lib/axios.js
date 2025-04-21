import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://fullstack-chat-app-77bi.onrender.com/api" : "/api",
  withCredentials: true,
});
