import axios from "axios";

let axiosInstance = axios.create({
  // baseURL: `http://localhost:3002/api/`,
  baseURL: `https://cloud-sec-app.herokuapp.com/api/`,
});

export default axiosInstance;
