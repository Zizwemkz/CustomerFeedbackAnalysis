import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // Normalize errors for components
    if (err.response) {
      return Promise.reject({
        status: err.response.status,
        data: err.response.data,
        message: err.response?.data?.error || err.response.statusText,
      });
    }
    return Promise.reject({ message: err.message || "Network Error" });
  }
);

export default api;
