import axiosClient from "./axiosClient";

const recipesApi = {
  getAll: () => axiosClient.get("/api/v1/recipes/all"),
  getCooking: () => axiosClient.get("/api/v1/cooking"),
  changeMainRecipes: () => axiosClient.get("/api/v1/recipes/search/isMain"),
  changeSideRecipes: () => axiosClient.get("/api/v1/recipes/search/isSide"),
};

export default recipesApi;
