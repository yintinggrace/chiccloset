import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct } from '../api';
import type { Product } from '../types';

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (updatedProduct: Product) => {
      console.log('Mutation success, updating cache with:', updatedProduct);

      queryClient.setQueryData<Product[]>(['products'], (oldProducts) => {
        if (!oldProducts) {
          console.log('No old products in cache');
          return [];
        }

        const updated = oldProducts.map((p) =>
          p.id === updatedProduct.id ? updatedProduct : p
        );

        console.log('Updated product list cache:', updated);
        return updated;
      });
    },
  });
};
