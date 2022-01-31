import axiosInstance from "./apiService";

export const getProducts = () => axiosInstance.get("/products");
