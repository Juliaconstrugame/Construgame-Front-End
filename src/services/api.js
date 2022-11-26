import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: process.env.SECRET_KEY,
  },
});

export default api;
