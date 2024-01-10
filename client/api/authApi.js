import axiosClient from "./axiosClient";

const authApi = {
  login: (username, password) =>
    axiosClient.post("/api/v1/auth/login", {
      userName: username,
      password: password,
    }),
};

export default authApi;
