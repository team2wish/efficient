import axiosClient from './axiosClient';

const recipesApi = {
  getAll: () => axiosClient.get('/api/v1/recipes/all'),
  getCooking: () => axiosClient.get('/api/v1/cooking'),
};

export default recipesApi;
