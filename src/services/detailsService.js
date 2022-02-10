import axiosInstance from "./apiService";

export const getProductsDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    const {data} = await response;

    return data;
  } catch {
    trow(error);
  }
};
