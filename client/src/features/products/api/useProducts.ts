import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./getProducts";
import type { Product } from "../../../types";

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
