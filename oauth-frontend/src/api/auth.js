import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL = "https://oauth-backend.onrender.com/api",
  withCredentials: true
});
