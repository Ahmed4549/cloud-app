import axios from "axios";

let axiosInstance = axios.create({
  baseURL: `http://localhost:3002/api/`,
});

export default axiosInstance;
