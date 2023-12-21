import axiosClient from "./axiosClient";

const recipesApi = {
  getAll: () => axiosClient.get("/api/v1/recipes"),
};

export default recipesApi;
