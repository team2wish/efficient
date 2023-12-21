import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  //   baseURL: '/',
});

export default axiosClient;
