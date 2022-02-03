import axiosInstance from "./apiService";

export const getProductsDetails = (id) => axiosInstance.get(`/products/${id}`);
