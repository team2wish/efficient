import axiosClient from "./axiosClient";

const recipesApi = {
  getAll: () => axiosClient.get("/api/v1/recipes/all"),
  getCooking: () => axiosClient.get("/api/v1/cooking"),
  changeRecipes: () => axiosClient.get("/api/v1/recipes/search/isMain"),
};

export default recipesApi;
