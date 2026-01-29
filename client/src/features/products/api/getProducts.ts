import { axiosInstance } from "../../../lib/axios";
import type { Product } from "../../../types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get("/products");
  return response.data;
};
