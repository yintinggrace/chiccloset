import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../api";
import type { Product } from "../types";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<{ id: number }, Error, Product>({
    mutationFn: deleteProduct,
    onSuccess: (deletedProduct) => {
      console.log("Mutation success, removing product from cache:", deletedProduct);

      queryClient.setQueryData<Product[]>(["products"], (oldProducts) => {
        if (!oldProducts) {
          console.log("No old products in cache");
          return [];
        }

        const updated = oldProducts.filter((p) => p.id !== deletedProduct.id);
        console.log("Updated product list cache after deletion:", updated);
        return updated;
      });
    },
  });
};
