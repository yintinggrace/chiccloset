import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api";
import type { Product } from "../types";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: (createProduct) => {
      console.log("Mutation success, creating product from cache:", createProduct);

      queryClient.setQueryData<Product[]>(['products'], (oldProducts) => {
        if (!oldProducts) return [createProduct];
        return [...oldProducts, createProduct];
      });
    }
  });
};
