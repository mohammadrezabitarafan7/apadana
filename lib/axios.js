import axios from "axios";
const api = axios.create({
  baseURL: "https://api.apadanacalendar.com/api",
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
