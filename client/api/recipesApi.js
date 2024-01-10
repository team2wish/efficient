import axiosClient from "./axiosClient";

const recipesApi = {
  getAll: (token) =>
    axiosClient.get("/api/v1/recipes/all", {
      headers: {
        authorization: `Berer ${token}`,
      },
    }),
  getCooking: (token) =>
    axiosClient.get("/api/v1/cooking", {
      headers: {
        authorization: `Berer ${token}`,
      },
    }),
  changeMainRecipes: (token) =>
    axiosClient.get("/api/v1/recipes/search/isMain", {
      headers: {
        authorization: `Berer ${token}`,
      },
    }),
  changeSideRecipes: (token) =>
    axiosClient.get("/api/v1/recipes/search/isSide", {
      headers: {
        authorization: `Berer ${token}`,
      },
    }),
  changeSoupRecipes: (token) =>
    axiosClient.get("/api/v1/recipes/search/isSoup", {
      headers: {
        authorization: `Berer ${token}`,
      },
    }),
  changeRiceRecipes: (token) =>
    axiosClient.get("/api/v1/recipes/search/isRice", {
      headers: {
        authorization: `Berer ${token}`,
      },
    }),
  getShopping: (token) =>
    axiosClient.get("/api/v1/shopping", {
      headers: {
        authorization: `Berer ${token}`,
      },
    }),
};

export default recipesApi;
