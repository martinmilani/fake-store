import axiosInstance from "./apiService";

export const getProductsList = async () => {
  try {
    const response = await axiosInstance.get("/products");
    const {data} = await response;

    return data;
  } catch (error) {
    trow(error);
  }
};

export const getProductDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    const {data} = await response;

    return data;
  } catch (error) {
    trow(error);
  }
};
