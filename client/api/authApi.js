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
  signUp: (data) => axiosClient.post("/api/v1/auth/signup", data),
};

export default authApi;
