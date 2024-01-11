import axiosClient from "./axiosClient";

const authApi = {
  checkAuth: (token) =>
    axiosClient.get("/api/v1/auth/authentication", {
      headers: {
        authorization: `Berer ${token}`,
      },
    }),
  login: (username, password) =>
    axiosClient.post("/api/v1/auth/login", {
      userName: username,
      password: password,
    }),
};

export default authApi;
