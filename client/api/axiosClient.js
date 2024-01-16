import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://efficient-d24b538968f5.herokuapp.com",
});

export default axiosClient;
